class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    clear(field) {
        delete this.errors[field];
    }

    record(errors) {
        this.errors = errors;
    }
}

new Vue({
    el: '#root',

    data: {
        name: '',
        description: '',
        errors: new Errors()
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                // .then(response => alert('Success'))
                .then(this.onSuccess)
                .catch(error => this.errors.record(error.response.data.errors));

                // тестируем, что вернет...
                // .catch(error => {
                    // this.errors.record(error.response.data);
                    // console.log(error.response.data.errors);
                // });
        },

        onSuccess(response) {
            alert(response.data.message);

            this.name = '';
            this.description = '';
        }
    }
});

Vue.config.devtools = true;
