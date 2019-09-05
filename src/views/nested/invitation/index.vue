<template>
  <div style="padding:30px;width: 100%;height: 500px;background: #e7faf0">
    <el-input v-model="vxId" style="float: left; color: #e7faf0;width: 60%" placeholder="请输入微信ID"></el-input>
    <el-input v-model="input" style="float: left; color: #e7faf0;width: 60%" placeholder="请输入内容"></el-input><el-button style="float: left;margin-left: 10px" @click="getInvitationCode">点击获取</el-button>
  </div>
</template>

<script>
import { addInvitationCode } from '@/api/role'
export default {
  data() {
    return {
      vxId: '',
      input: ''
    }
  },
  methods: {
    getInvitationCode() {
      if (this.vxId !== '') {
        addInvitationCode(this.vxId).then(res => {
          this.input = res.toString()
        })
      } else {
        this.$notify({
          title: '请填写微信ID',
          type: 'error',
          duration: 2500
        })
      }
    }
  }
}
</script>
