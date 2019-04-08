Vue.prototype.$http = axios;

new Vue ({
    el: '#root',

    data: {
        skills: []
    },

    mounted() {
        // Make an ajax request to our server - /skills.
        
        // fetch() - vanila JS
        
        // $.getJson() - Jquery

        // Axios library
        // axios.get('/skills').then(response => console.log(response));
        // axios.get('/skills').then(response => this.skills = response.data);
        this.$http.get('/skills').then(response => this.skills = response.data);

        // Vue Resources - как пример:
        // this.$http.get...

    }

});

Vue.config.devtools = true;
