<template>
  <div>
    <el-button size="mini" type="primary" icon="el-icon-edit" @click="to"/>
    <eForm ref="form" :sup_this="sup_this" :is-add="false"/>
  </div>
</template>
<script>
import eForm from './form'

export default {
  components: { eForm },
  props: {
    data: {
      type: Object,
      required: true
    },
    sup_this: {
      type: Object,
      required: true
    }
  },
  methods: {
    to() {
      const _this = this.$refs.form
      _this.form = {
        id:
                this.data.id,
        openId:
                this.data.openId,
        nickname:
                this.data.nickname,
        headimgurl:
                this.data.headimgurl,
        vxId:
                this.data.vxId,
        num:
        this.data.num }
      _this.dialog = true
    }
  }
}
</script>

<style scoped>
    div {
        display: inline-block;
        margin-right: 3px;
    }
</style>
