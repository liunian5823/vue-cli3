<template>
  <div class="login">
    <div class="tihuan">
      <el-select v-model="value" placeholder="请选择" @change="xuanzes">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="denglu">
      <span class="dengluspan">登录</span>
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名">
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              show-password
              placeholder="请输入密码"
            >
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="logins"
              type="primary"
              @click="submitForm('ruleForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <canvas id="canvas" v-show="xuanze == 1"> </canvas>
    <vue-particles
      v-show="xuanze == 2"
      class="login-bg"
      color="#39AFFD"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="star"
      :particleSize="4"
      linesColor="#8DD1FE"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      xuanze: 1,
      options: [
        {
          value: 1,
          label: "背景一"
        },
        {
          value: 2,
          label: "背景二"
        }
      ],
      value: 1,
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 11, message: "长度在 6 到 11 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 11, message: "长度在 6 到 11 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      window.document.documentElement.setAttribute("data-theme", "green");
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("id", "1");
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    xuanzes(e) {
      this.$router.go(0);
      localStorage.setItem("beijing", e);
    }
  },

  mounted() {
    var a = localStorage.getItem("beijing");

    for (let i = 0; i < this.options.length; i++) {
      if (a == this.options[i].value) {
        this.value = this.options[i].label;
      }
    }
    if (a == null) {
      this.xuanze = 1;
    } else {
      this.xuanze = a;
    }
    window.onload = function() {
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      var W = window.innerWidth;
      var H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      var fontSize = 15;
      var colunms = Math.floor(W / fontSize);
      var drops = [];
      for (var i = 0; i < colunms; i++) {
        drops.push(0);
      }
      var str = "01abcdefghijklmnopqurstuvwxyz";

      function draw() {
        //让背景逐渐由透明到不透明
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        //给字体设置样式
        //context.font = "700 "+fontSize+"px  微软雅黑";
        context.font = fontSize + "px arial";
        //给字体添加颜色
        context.fillStyle = "rgb(50, 113, 167)"; //随意更改字体颜色
        //写入图形中
        for (var i = 0; i < colunms; i++) {
          var index = Math.floor(Math.random() * str.length);
          var x = i * fontSize;
          var y = drops[i] * fontSize;
          context.fillText(str[index], x, y);
          //如果要改变时间，肯定就是改变每次他的起点
          if (y >= canvas.height && Math.random() > 0.92) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      draw();
      setInterval(draw, 33);
    };
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
}
.login-bg {
  width: 100%;
  height: 100%;
  background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.shumiao.net%2Fuploads%2F20190107%2F12%2F1546834735-dzysNSbvgr.jpg&refer=http%3A%2F%2Fimage.shumiao.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646983279&t=9cf9aaf496ddb4859a4ad1c93e3858c7') no-repeat;
  background-size: 100% 100%;
}
.denglu {
  width: 30%;
  height: 250px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 13px 0px rgba(255, 255, 255, 0.7);
  -webkit-box-shadow: 0px 0px 13px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 0px 13px 0px rgba(255, 255, 255, 0.5);
}

.dengluspan {
  display: block;
  margin: 10px auto;
  color: #fff;
  font-size: 25px;
  width: 100%;
  text-align: center;
  font-family: "苹方";
}

.demo-ruleForm {
  width: 70%;
  margin: 0 auto;
}
.logins {
  width: 100%;
}
.el-input-group__prepend {
  border: 0px solid #fff !important;
  padding: 0px;
}

.bg {
  width: 100%;
  height: 100%;
  background-color: black;
}
.tihuan {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 90px;
}
</style>
