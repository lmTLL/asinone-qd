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
        site: this.data.site,
        link: this.data.link,
        productName: this.data.productName,
        dealSite: this.data.dealSite,
        dealPrice: this.data.dealPrice,
        originalPrice: this.data.originalPrice,
        code: this.data.code,
        codeWork: this.data.codeWork,
        discount: this.data.discount,
        startDate: this.data.startDate,
        endDate: this.data.endDate
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
