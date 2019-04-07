Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'Make a homework'},
                { task: 'Make a meal'},
                { task: 'Call to a friends'},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

let app = new Vue({
    el: '#root',
});

Vue.config.devtools = true;
