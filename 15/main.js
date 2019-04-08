Vue.component('progress-view', {
    data() {
      return { completionRate: 45 };
    }
});

let app = new Vue({
    el: '#root',

});

Vue.config.devtools = true;
