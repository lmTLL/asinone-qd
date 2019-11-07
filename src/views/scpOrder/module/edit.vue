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
        scpSaleNumber:
                this.data.scpSaleNumber,
        fileName:
                this.data.fileName,
        nickName:
                this.data.nickName,
        site:
                this.data.site,
        asin:
                this.data.asin,
        cpUrl:
                this.data.cpUrl,
        startDate:
                this.data.startDate,
        canKillOrderDate:
                this.data.canKillOrderDate,
        deleteDate:
        this.data.deleteDate,
        status:
                this.data.status,
        invitation:
                this.data.invitation,
        customerId:
        this.data.customerId,
        erpSaleNumber:
        this.data.erpSaleNumber,
        channel:
        this.data.channel }
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
