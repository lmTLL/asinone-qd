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
        dzSaleNumber:
                this.data.dzSaleNumber,
        nickname:
                this.data.nickname,
        site:
                this.data.site,
        asin:
                this.data.asin,
        reviewUrl:
                this.data.reviewUrl,
        dzNum:
                this.data.dzNum,
        nowNum:
                this.data.nowNum,
        startDate:
                this.data.startDate,
        updateDate:
                this.data.updateDate,
        customerId:
                this.data.customerId,
        accountImg:
                this.data.accountImg,
        accountOrder:
                this.data.accountOrder,
        status:
                this.data.status,
        invitation:
                this.data.invitation }
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
