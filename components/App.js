var App = Vue.component('App', function (resolve, reject) {
    ajax.get("/components/App.tpl.html", function (template_string) {
        ajax.getJSON("/app_data.json", function (app_data) {        
            resolve({                
                template: template_string,
                data: function () { return app_data; },
                computed: {
                    filtered_el_pins: function () {
                        var term = this.filter_value;
                        if (!term) return this.el_pins;
                        return this.el_pins.filter(function (pin) {
                            return pin.tags.indexOf(term) > -1;
                        })
                    }
                },
                methods: {
                    update_filter: function (filter_value) {
                        if (this.filter_value == filter_value) {
                            this.filter_value = '';
                        } else {
                            this.filter_value = filter_value;
                        }
                    }
                }
            })
        });    
    });
});