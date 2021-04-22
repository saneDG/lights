<template>
    <div class="main">
        <Header title="LIGHTS" />
        <div class="lights">
            <LightToggle
                v-for="(light, index) in lights"
                :key="light.id"
                :state="lights[index]"
            />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import LightToggle from "./components/LightToggle.vue";
import client from "../api/init";

export default {
    name: "App",
    components: {
        Header,
        LightToggle,
    },
    data() {
        return {
            lights: [
                {
                    id: 1,
                    on: false,
                    name: "",
                },
                {
                    id: 2,
                    on: false,
                    name: "",
                },
                {
                    id: 3,
                    on: false,
                    name: "",
                },
                {
                    id: 4,
                    on: false,
                    name: "",
                },
            ],
        };
    },
    methods: {
        initLights() {
            this.lights.forEach((lightData, index) => {
                console.log(lightData);
                client.lights
                    .getById(lightData.id)
                    .then((light) => {
                        console.log(light);
                        this.lights[index].on = light.on;
                        this.lights[index].name = light.name;
                    })
                    .catch((error) => {
                        console.log(error.stack);
                    });
            });
        },
    },
    mounted() {
        this.initLights();
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
html {
    background-color: #2c3e50;
    height: 100vh;
}
#app {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.lights {
    display: flex;
    justify-content: space-around;
    margin: 20vh 0 0 0;
}

@media only screen and (max-width: 1100px) {
    .lights {
        flex-wrap: wrap;
        margin: 10vh 0;
    }
}
</style>
