<template>
  <div class="view-wrap">
    <h1>{{ msg }}</h1>

    <img class="介绍" src="../assets/LY3Z3.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 ;
}

.view-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.code-wrap {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
}

.code-title {
  font-weight: bold;
  font-size: 20px;
  padding: 20px 0;
  text-align: left;
}

.code-content {
  
}


.code {
  padding: 20px;
  background: #000;
  color: #FFF;
  text-align: left;
}
</style>
