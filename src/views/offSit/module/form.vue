<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item label="订单编号" >
        <el-input v-model="form.zwSaleNumber" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="服务项目" >
        <el-input v-model="form.projectName" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="zwChannelId" >
        <el-input v-model="form.zwChannelId" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="渠道" >
        <el-input v-model="form.zwChannelName" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="站外渠道用户id" >
        <el-input v-model="form.zwChannelUserId" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="所属销售" >
        <el-input v-model="form.invitation" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="客户昵称" >
        <el-input v-model="form.customerNickname" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="站点" >
        <el-input v-model="form.site" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="asin" >
        <el-input v-model="form.link" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Deal站" >
        <el-input v-model="form.dealSite" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Deal price" >
        <el-input v-model="form.dealPrice" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Original price" >
        <el-input v-model="form.originalPrice" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="code" >
        <el-input v-model="form.code" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Discount" >
        <el-input v-model="form.discount" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="开始时间" >
        <el-input v-model="form.startDate" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="结束时间" >
        <el-input v-model="form.endDate" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="发帖效果" >
        <el-input v-model="form.postingEffect" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="发帖截图" >
        <el-input v-model="form.postingImg" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="提交时间" >
        <el-input v-model="form.submitTime" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="支付时间" >
        <el-input v-model="form.accountTime" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="支付单号" >
        <el-input v-model="form.accountOrder" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="订单状态" >
        <el-input v-model="form.status" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="用户id" >
        <el-input v-model="form.customerId" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="备注" >
        <el-input v-model="form.remark" style="width: 370px;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/zwSaleOrder'
export default {
  props: {
    isAdd: {
      type: Boolean,
      required: true
    },
    sup_this: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false, dialog: false,
      form: {
        id: '',
        zwSaleNumber: '',
        projectName: '',
        zwChannelId: '',
        zwChannelName: '',
        zwChannelUserId: '',
        invitation: '',
        customerNickname: '',
        site: '',
        link: '',
        dealSite: '',
        dealPrice: '',
        originalPrice: '',
        code: '',
        discount: '',
        startDate: '',
        endDate: '',
        postingEffect: '',
        postingImg: '',
        submitTime: '',
        accountTime: '',
        accountOrder: '',
        status: '',
        customerId: '',
        remark: ''
      },
      rules: {
      }
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    doSubmit() {
      this.loading = true
      if (this.isAdd) {
        this.doAdd()
      } else this.doEdit()
    },
    doAdd() {
      add(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '添加成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.$parent.$parent.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    doEdit() {
      edit(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '修改成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.sup_this.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        id: '',
        zwSaleNumber: '',
        projectName: '',
        zwChannelId: '',
        zwChannelName: '',
        zwChannelUserId: '',
        invitation: '',
        customerNickname: '',
        site: '',
        link: '',
        dealSite: '',
        dealPrice: '',
        originalPrice: '',
        code: '',
        discount: '',
        startDate: '',
        endDate: '',
        postingEffect: '',
        postingImg: '',
        submitTime: '',
        accountTime: '',
        accountOrder: '',
        status: '',
        customerId: '',
        remark: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
