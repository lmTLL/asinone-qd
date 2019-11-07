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
        fxSaleNumber:
                this.data.fxSaleNumber,
        nickName:
                this.data.nickName,
        site:
                this.data.site,
        oldSku:
                this.data.oldSku,
        oldFnsku:
                this.data.oldFnsku,
        oldAsin:
                this.data.oldAsin,
        newAsin:
                this.data.newAsin,
        startDate:
                this.data.startDate,
        updateDate:
                this.data.updateDate,
        status:
                this.data.status,
        customerId:
                this.data.customerId,
        invitation:
                this.data.invitation,
        channelUserId:
                this.data.channelUserId,
        erpSaleNumber:
                this.data.erpSaleNumber,
        isReviews:
                this.data.isReviews }
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
