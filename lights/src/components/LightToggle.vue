<template>
    <div class="light-container">
        <button
            @click="toggleLights(state.id)"
            class="toggle-light"
            :class="[on ? 'light-on' : 'light-off']"
        >
            <img v-if="on" src="../assets/on.png" />
            <img v-else src="../assets/off.png" />
        </button>

        <p class="light-name">{{ name }}</p>
    </div>
</template>

<script>
import client from "../../api/init";

export default {
    name: "LightToggle",
    data() {
        return {
            on: this.state.on,
        };
    },
    props: {
        state: Object,
    },
    methods: {
        toggleLights() {
            client.lights
                .getById(this.lightId)
                .then((light) => {
                    console.log(light);
                    if (light.on === true) {
                        light.on = false;
                        this.on = false;
                        return client.lights.save(light);
                    } else {
                        light.on = true;
                        this.on = true;
                        return client.lights.save(light);
                    }
                })
                .catch((error) => {
                    console.log(error.stack);
                });
        },
        isOn() {},
    },
    computed: {
        lightId: function () {
            return this.state.id;
        },
        name: function () {
            var name = this.state.name.replace("Hue ", "");
            return name;
        },
    },
    mounted() {
        client.lights
            .getById(this.lightId)
            .then((light) => {
                console.log(light);
                this.on = light.on;
            })
            .catch((error) => {
                console.log(error.stack);
                this.on = false;
            });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    background-color: transparent;
    border: none;
}
button:hover {
    border: none;
}
button:focus {
    outline: none;
}
img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
}

.light-on {
    background: radial-gradient(
        circle,
        rgba(233, 220, 64, 0.7511379551820728) 7%,
        rgba(242, 231, 95, 0.5466561624649859) 32%,
        rgba(255, 255, 255, 0) 70%
    );
}
.light-on:hover {
    background: transparent;
}

.light-off {
    background: transparent;
}
.light-off:hover {
    background: radial-gradient(
        circle,
        rgba(233, 220, 64, 0.7511379551820728) 7%,
        rgba(242, 231, 95, 0.5466561624649859) 32%,
        rgba(255, 255, 255, 0) 70%
    );
}

.light-name {
    margin: 3rem;
    color: white;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.4rem;
}
</style>
