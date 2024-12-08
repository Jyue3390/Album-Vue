<template>
  <div>
    <div class="welcome-container">
      <span class="text1">欢迎进入</span>
      <span class="text2">电子相册</span>
    </div>
    <div class="show-login-btn" @click="toggleLoginBox">
      <i class="fas fa-sign-in-alt"></i> 进入电子相册
    </div>
    <div class="login-box" :class="{ showed: isLoginBoxVisible }">
      <div class="hide-login-btn" @click="toggleLoginBox">
        <i class="fas fa-times"></i>
      </div>

      <!-- 登录页面 -->
      <form v-if="!isRegisterPage" class="login-form" @submit.prevent="onLogin">
        <h1>欢迎</h1>
        <input class="txtb" type="text" placeholder="Username" v-model="username" />
        <input class="txtb" type="password" placeholder="Password" v-model="password" />
        <input class="login-btn" type="submit" value="登录" />
        <input class="register" type="button" value="没有用户？点击注册" @click="showRegisterPage" />
      </form>

      <!-- 注册页面 -->
      <form v-else class="register-form" @submit.prevent="onRegister">
        <h1>注册</h1>
        <input class="txtb" type="text" placeholder="Username" v-model="newUsername" />
        <input class="txtb" type="password" placeholder="Password" v-model="newPassword" />
        <input class="txtb" type="email" placeholder="Email" v-model="email" />
        <input class="login-btn" type="submit" value="完成注册" />
        <input class="register" type="button" value="返回登录" @click="showLoginPage" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoginBoxVisible: false, // 控制登录框显示
      isRegisterPage: false, // 切换注册和登录页面
      username: "", // 登录用户名
      password: "", // 登录密码
      newUsername: "", // 注册用户名
      newPassword: "", // 注册密码
      email: "", // 注册邮箱
    };
  },
  methods: {
    toggleLoginBox() {
      this.isLoginBoxVisible = !this.isLoginBoxVisible;
    },
    showRegisterPage() {
      this.isRegisterPage = true; // 切换到注册页面
    },
    showLoginPage() {
      this.isRegisterPage = false; // 切换回登录页面
    },
    onLogin() {
      // 默认 gxy 作为管理员，yuz为用户
      if (this.username === 'gxy' && this.password === 'gxy') {
        // 管理员登录
        this.$router.push("/admin"); // 跳转到管理员页面
      } else if (this.username === 'gxy' && this.password !== 'gxy') {
        alert("密码错误！");
      } else if(this.username==='yuz' && this.password==='yuz'){
        this.$router.push("/album");
      }else if (this.username === 'gxy' && this.password !== 'gxy') {
        alert("密码错误！");
      }else {
        alert("用户名或密码错误！");
      }
    },
    onRegister() {
      if (this.newUsername && this.newPassword && this.email) {
        alert(`注册成功！用户名：${this.newUsername}`);
        this.showLoginPage(); // 注册成功，返回登录页面
      } else {
        alert("请填写完整的注册信息！");
      }
    },
  },
};
</script>

<style scoped>
/* 基础样式 */
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

body {
  background: black;
}

/* 动态文字效果 */
.welcome-container {
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.welcome-container span {
  text-transform: uppercase;
  display: block;
}

.text1 {
  color: white;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 20px;
  background: black;
  position: relative;
  animation: textWelcome 3s 1;
}

.text2 {
  font-size: 30px;
  color: black;
  animation: textAlbum 3s 1 forwards;
}

@keyframes textWelcome {
  0% {
    color: black;
    margin-bottom: -40px;
  }
  30% {
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  80% {
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
  100% {
    color: white;
    margin-bottom: 20px;
  }
}

@keyframes textAlbum {
  0% {
    color: black;
  }
  100% {
    color: #7cedfc;
  }
}

/* 登录框样式 */
.login-box {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(45deg, #b2eef6, #6278f6);
  transition: 0.4s;
}

.login-box.showed {
  left: 0;
}

.login-form,
.register-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.login-form h1,
.register-form h1 {
  font-weight: 400;
  margin-top: 0;
}

.txtb {
  display: block;
  box-sizing: border-box;
  width: 240px;
  background: #ffffff28;
  border: 1px solid white;
  padding: 10px 20px;
  color: white;
  outline: none;
  margin: 10px 0;
  border-radius: 6px;
  text-align: center;
}

.login-btn {
  width: 240px;
  background: #6278f6;
  border: 0;
  color: white;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}

.register {
  display: block;
  width: 240px;
  background: transparent;
  border: 0;
  color: white;
  margin: 10px 0;
  text-align: center;
  cursor: pointer;
}

.hide-login-btn {
  color: #3a489d;
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  font-size: 24px;
  opacity: 0.7;
}

.show-login-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  border: 2px solid;
  padding: 10px;
  cursor: pointer;
}
</style>
