Vue.component('tabs', {

    template: `
        <div>
            <div class="tabs">
              <ul>

                <li v-for="tab in tabs" :class="{ 'is-active': tab.selected }">
                    <a href=# @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
                <!--
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
                -->
              </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: []};
    },

    created() {
        this.tabs = this.$children;
    },

    mounted() {
        console.log(this.$children);
    },

    methods: {
        selectTab(selectedTab) {
            // alert('selecting');
            this.tabs.forEach(tab => {
                tab.selected = (tab.name == selectedTab.name);
            });

        }
    }

});

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false },
    },

    template: `
        <div><slot></slot></div>
    `
});

let app = new Vue({
    el: '#root',

});

Vue.config.devtools = true;
