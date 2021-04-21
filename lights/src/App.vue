<template>
    <div class="main">
        <Header title="LIGHTS" />
        <Rooms />
        <Presets :presets="presets" />
        <button @click="listLights()">Log all lights</button>
        <button @click="groupOn(3)">On</button>
        <button @click="groupOff(3)">Off</button>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import { getAllLights, groupOn, groupOff } from "../api/index";

export default {
    name: "App",
    components: {
        Header,
    },
    data() {
        return {};
    },
    methods: {
        groupOn() {
            groupOn();
        },
        groupOff() {
            groupOff();
        },
        listLights() {
            getAllLights();
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
