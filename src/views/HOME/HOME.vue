<template>
  <div class="asdsa">
    <Header></Header>
    <leftnav></leftnav>
    <div class="zhuti">
      <router-view></router-view>
    </div>
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
.asdsa {
  height: 93%;
  width: 100%;
}
.zhuti {
  position: absolute;
  left: 210px !important;
  right: 0;
  top: 70px;
  bottom: 0;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}
</style>
