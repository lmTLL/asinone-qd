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
        asin: this.data.asin,
        title: this.data.title,
        site: this.data.site,
        excludeShop: this.data.excludeShop,
        startCount: this.data.startCount,
        startDate: this.data.startDate,
        count: this.data.count,
        openId: this.data.openId,
        followListen: this.data.followListen,
        titleListen: this.data.titleListen,
        priceListen: this.data.priceListen,
        fivepointListen: this.data.fivepointListen
      }
      _this.dialog = true
      _this.type = []
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
