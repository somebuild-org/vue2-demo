import Vue from "vue";
import { VaguerComponents } from "./src";
import "./dist/style.css"

Vue.use(VaguerComponents);

const app = new Vue({
    methods: {
        handleClick() {
            alert("222");
        },
    },
});
app.$mount("#app");
