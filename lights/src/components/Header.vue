<template>
    <div class="header">
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
    font-size: 3rem;
    font-weight: 100;
    color: whitesmoke;
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
