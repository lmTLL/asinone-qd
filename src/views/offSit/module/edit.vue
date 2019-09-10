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
        id: this.data.id,
        zwSaleNumber: this.data.zwSaleNumber,
        projectName: this.data.projectName,
        zwChannelId: this.data.zwChannelId,
        zwChannelName: this.data.zwChannelName,
        zwChannelUserId: this.data.zwChannelUserId,
        invitation: this.data.invitation,
        customerNickname: this.data.customerNickname,
        site: this.data.site,
        link: this.data.link,
        dealSite: this.data.dealSite,
        dealPrice: this.data.dealPrice,
        originalPrice: this.data.originalPrice,
        code: this.data.code,
        discount: this.data.discount,
        startDate: this.data.startDate,
        endDate: this.data.endDate,
        postingEffect: this.data.postingEffect,
        postingImg: this.data.postingImg,
        submitTime: this.data.submitTime,
        accountTime: this.data.accountTime,
        accountOrder: this.data.accountOrder,
        status: this.data.status,
        customerId: this.data.customerId,
        remark: this.data.remark
      }
      _this.dialog = true
    }
  }
}
</script>

<style scoped>
  div{
    display: inline-block;
    margin-right: 3px;
  }
</style>
