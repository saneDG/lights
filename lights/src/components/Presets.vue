<template>
    <div class="presets">
        <Preset v-for="preset in presets" :key="preset.id"></Preset>
    </div>
</template>

<script>
export default {
    name: "Presets",
    props: {
        presets: Array,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
