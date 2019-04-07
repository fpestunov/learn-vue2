Vue.component('tabs', {

    template: `
        <div>
            <div class="tabs">
              <ul>

                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
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
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
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
        <div v-show="isActive"><slot></slot></div>
    `,

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            // 'About me' => 'about-me'
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
            // return 'foobar';
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

let app = new Vue({
    el: '#root',

});

Vue.config.devtools = true;
