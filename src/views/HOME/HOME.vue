<template>
  <div class="asdsa">
    <Header></Header>
    <leftnav></leftnav>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import leftnav from "../../components/leftnavigation";
export default {
  name: "index",
  components: {
    Header,
    leftnav
  }
};
</script>

<style scoped>
.asdsa{
  height: 100%;
  width: 100%;
}
</style>
