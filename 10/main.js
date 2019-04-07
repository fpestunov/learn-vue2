Vue.component('modal', {

    template: `
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
          </div>
          <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
        </div>            
    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }

});

let app = new Vue({
    el: '#root',

    data: {
        showHelloModal: false
    }
});

Vue.config.devtools = true;
