Vue.component('task-simple', {
    template: '<li>Foo</li>'
});

Vue.component('task-slot', {
    template: '<li><slot></slot></li>'
});

let app = new Vue({
    el: '#root',
});

Vue.config.devtools = true;
