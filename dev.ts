import Vue from "vue";
import { VaguerComponents } from "./dist/comp-demo-vue2";

Vue.use(VaguerComponents);

const app = new Vue({
    methods: {
        handleClick() {
            alert("222");
        },
    },
});
app.$mount("#app");
