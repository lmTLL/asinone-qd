<template>
  <div class="login">
    <el-dialog
      :visible.sync="centerDialogVisible"
      title="提示"
      width="30%"
      center>
      <el-input v-model="inputInvitationCode" :rules="loginRules" placeholder="请向客户经理询问邀请码"></el-input>
      <div style="position:relative;">
        <div style="border: black 0px solid;text-align: center;margin-top: 30px">
          <p style="font-size: 20px">若没有对应客户经理，请加以下微信号索要邀请码</p>
          <img src="https://eladmin.asinone.vip/statics/2019/09/11/19d273334ba82748514c26be2543a60719d273334ba82748514c26be2543a607.png" class="qrcode lightBorder" width="200px" height="200px" style="margin-top: 0px">
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>

        <el-button type="primary" @click="goCreat">确 定</el-button>
      </span>
    </el-dialog>
    <div class="wrp_code" style="width: 500px;margin:0 auto;margin-top: -400px;text-align: center">
      <p style="font-size: 30px">微信登录</p>
      <p style="font-size: 20px;color: red;font-weight:bold">关注公众号后,再看该页面</p>
      <img id="demo1" :src="weChatCode" class="qrcode lightBorder" width="320px" height="320px" style="margin-top: 0px">

    </div>
  </div>
</template>

<script>
import Config from '@/config'
import { checkLogin } from '@/api/login'
import { testCode } from '@/api/login'
import { getWeChatCodeImg } from '@/api/login'
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
      checkLoginNum: 0,
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
    this.getweChatCode()
    this.checkLogin()
  },
  mounted() {
    this.timer = setInterval(this.checkLogin, 3000)
  },
  methods: {
    checkLogin() {
      this.checkLoginNum++
      /* if (!this.value) {
        clearInterval(this.timer)
      }*/
      console.log(this.checkLoginNum)
      const scene_str = this.weChatCode1
      if (scene_str !== '' && this.checkLoginNum < 100) {
        if (this.checklogin) {
          checkLogin(scene_str).then(res => {
            if (res != null && res !== '') {
              const user = this.loginForm
              user.username = res.username
              user.password = res.openId
              if (user.username != null && user.username !== '') {
                this.$store.dispatch('Login', user).then(() => {
                  this.checklogin = false
                  this.loading = false
                  this.$router.push({ path: this.redirect || '/dashboard' })
                  this.beforeDestroy()
                }).catch(() => {
                  this.loading = false
                  // this.getCode()
                })
              } else {
                this.nickname = res.nickname
                this.headimgurl = res.headimgurl
                this.openid = res.openid
                this.centerDialogVisible = true
              }
            }
          })
        }
      } else {
        if (this.checkLoginNum > 50) {
          this.beforeDestroy()
          this.$message({
            duration: 0,
            showClose: true,
            message: '请刷新页面！',
            type: 'error'
          })
        }
      }
    },
    /* getCode() {
      getCodeImg().then(res => {
        this.codeUrl = 'data:image/gif;base64,' + res.img
        this.loginForm.uuid = res.uuid
      })
    },*/
    goCreat() {
      this.invitationForm.username = this.nickname
      this.invitationForm.password = this.openid
      this.invitationForm.avatar = this.headimgurl
      this.invitationForm.invitation = this.inputInvitationCode
      clearInterval(this.timer)
      testCode(this.invitationForm).then(res => {
        if (res.msg === 'true') {
          this.$notify({
            title: '恭喜,邀请成功！',
            type: 'success',
            duration: 2500
          })
          const user = this.loginForm
          user.username = res.username
          user.password = this.openid
          this.$store.dispatch('Login', user).then(() => {
            this.checklogin = false
            this.loading = false
            this.beforeDestroy()
            this.$router.push({ path: this.redirect || '/dashboard' })
          }).catch(() => {
            this.loading = false
            // this.getCode()
          })
        } else {
          this.$notify({
            title: '邀请码无效！',
            type: 'error',
            duration: 2500
          })
        }
      })
    },
    getweChatCode() {
      getWeChatCodeImg().then(res => {
        this.weChatCode = res.qrcodeUrl
        this.weChatCode1 = res.scene_str
      })
    },
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
            clearInterval(this.timer)
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
