<template>
    <div class="light-container">
        <button
            @click="toggleLights(state.id)"
            class="toggle-light"
            :class="[on ? 'light-on' : 'light-off']"
        >
            <img
                v-if="on"
                src="data:image/png;base64,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"
            />
            <img
                v-else
                src="data:image/png;base64,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"
            />
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

@media only screen and (max-width: 1100px) {
    .light-name {
        margin: 3rem 0;
    }
    .light-container {
        width: 160px;
        margin: 10% 0;
    }
    img {
        width: 50%;
    }
    .light-off:hover {
        background: transparent;
    }
    .light-on {
        background: radial-gradient(
            circle,
            rgba(233, 220, 64, 0.7511379551820728) 7%,
            rgba(242, 231, 95, 0.5466561624649859) 15%,
            rgba(255, 255, 255, 0) 45%
        );
    }
}
</style>
