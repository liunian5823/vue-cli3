<template>
  <div class="hello">
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
    <el-button type="button" @click="dianji">点击</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    open() {
      this.$message({
        type: "error",
        message: "删除成功!"
      });
    },
    dianji() {
      var url = this.Home + "/gerengonzuo/login/denglu1.php";
      var obj = {
        asd: "18731981303",
        pwd: "123456"
      };
      this.$baseAPI
        .POST(url, obj)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
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
