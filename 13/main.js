// window.Event = {

//     vue: new Vue(),

//     on: function(event, callback){
//         this.vue.$on(event, callback);
//     },

//     fire: function(event, data){
//         this.vue.$emit(event, data);
//     },
// };

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            Event.fire('applied');
        }
    }
});

let app = new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    created() {
        Event.listen('applied', () => {
            alert('It was applied!');
            this.couponApplied = true;
        });
    }

});

/*
//ES6:

created() {
    Event.$on("edittlEvent", (params) => this.tlevent = params.event);
}

//ES5:

created: function () {
    Event.$on("edittlEvent", function (params) {
        this.tlevent = params.event;
    }.bind(this));
}
*/

Vue.config.devtools = true;
