import Vue from "vue";
import { VaguerComponents } from "./dist/vaguer-button.js";
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
