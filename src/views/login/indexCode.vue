<template>
  <div class="login">
    <div class="wrp_code" style="width: 500px;margin:0 auto;margin-top:0px;text-align: center">
      <el-form ref="loginForm" :model="loginForm" :rules="codeRules" label-position="left" label-width="0px" class="login-form" style="margin-left: 60px">
        <h3 class="title">asinone在线商城 后台管理系统</h3>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
            <svg-icon slot="prefix" icon-class="user" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 2px;" />
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码" @keyup.enter.native="handleLogin">
            <svg-icon slot="prefix" icon-class="password" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 2px;" />
          </el-input>
        </el-form-item>
        <!-- <el-form-item prop="code">
          <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码" style="width: 60%" @keyup.enter.native="handleLogin"/>
          <div class="login-code">
            <img :src="codeUrl" @click="getCode">
          </div>
        </el-form-item>-->
        <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Config from '@/config'
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  data() {
    return {
      nickname: '',
      headimgurl: '',
      openid: '',
      inputInvitationCode: '',
      centerDialogVisible: false,
      timer: '',
      checklogin: true,
      weChatCode: '',
      weChatCode1: '',
      value: true,
      codeUrl: '',
      loginForm: {
        username: '',
        password: '',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      invitationForm: {
        username: '',
        password: '',
        avatar: '',
        invitation: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
        code: [{ required: true, trigger: 'change', message: '验证码不能为空' }]
      },
      codeRules: {
        inputInvitationCode: [{ required: true, trigger: 'blur', message: '邀请码不能为空' }]
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // this.getCode()
    this.getCookie()
    // this.getweChatCode()
    // this.checkLogin()
  },
  methods: {
    getCookie() {
      const username = Cookies.get('username')
      let password = Cookies.get('password')
      const rememberMe = Cookies.get('rememberMe')
      password = password === undefined ? this.loginForm.password : password
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
        code: ''
      }
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    /* checkLoginOpen() {
        if (!this.value) {
          this.timer = setInterval(this.checkLogin, 3000)
        }
      }*/
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        const user = this.loginForm
        if (valid) {
          this.loading = true
          if (user.rememberMe) {
            Cookies.set('username', user.username, { expires: Config.passCookieExpires })
            Cookies.set('password', user.password, { expires: Config.passCookieExpires })
            Cookies.set('rememberMe', user.rememberMe, { expires: Config.passCookieExpires })
          } else {
            Cookies.remove('username')
            Cookies.remove('password')
            Cookies.remove('rememberMe')
          }
          this.$store.dispatch('Login', user).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/dashboard' })
          }).catch(() => {
            this.loading = false
            this.getCode()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image:url(	https://eladmin.asinone.vip/statics/2019/09/11/eca12de3c9f1103f8ee9d04b182ccd48eca12de3c9f1103f8ee9d04b182ccd48.jpg);
    background-size: cover;
  }
  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 380px;
    padding: 25px 25px 5px 25px;
    .el-input {
      height: 38px;
      input {
        height: 38px;
      }
    }
  }
  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }
  .login-code {
    width: 33%;
    display: inline-block;
    height: 38px;
    float: right;
    img{
      cursor: pointer;
      vertical-align:middle
    }
  }
</style>
