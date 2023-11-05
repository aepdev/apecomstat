var Choice = Vue.component('Datatsts', function (resolve, reject) {
    ajax.get("/components/Datasts.tpl.html", function (template_string) {
        ajax.getJSON("/dataset_data.json", function (choice_data) {        
            resolve({                
                template: template_string,
                data: function () { return choice_data; },
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