<template>
  <img class="img-header" src="./assets/20221114170954.png" />
  <HelloWorld msg="欢迎使用 Vue.js + TypeScript + XQTypeScriptFramework" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },

  created() {
    console.log(["qqq"].xq_isNotNull());
  },
});
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

.img-header {
  border-radius: 50%;
}
</style>
