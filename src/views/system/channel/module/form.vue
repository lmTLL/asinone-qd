<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="600px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="100px">
      <el-form-item label="渠道名称">
        <el-input v-model="form.channelName" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="跟卖类型" prop="followType">
        <el-select v-model="form.followType" placeholder="请选择跟卖类型" style="width: 370px">
          <el-option
            v-for="item in options1"
            :key="item.followType"
            :label="item.label"
            :value="item.followType"/>
        </el-select>
      </el-form-item>
      <el-form-item label="质保时间" prop="followType">
        <el-select v-model="form.assuranceTime" placeholder="请选择质保时间" style="width: 370px">
          <el-option
            v-for="item in options2"
            :key="item.assuranceTime"
            :label="item.label"
            :value="item.assuranceTime"/>
        </el-select>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="form.price" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="渠道openid">
        <el-input v-model="form.openId" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="渠道备注">
        <el-input
          :autosize="{ minRows: 2, maxRows: 4}"
          v-model="form.remark"
          type="textarea"
          placeholder="请输入备注">
        </el-input>
      </el-form-item>
      <el-form-item label="产品费:">
        <el-radio v-model="form.productCost" label="1" style="width: 100px">需要</el-radio>
        <el-radio v-model="form.productCost" style="width: 100px" label="0">不需要</el-radio>
      </el-form-item>
      <el-form-item label="状态：">
        <el-radio v-model="form.enabled" label="1" style="width: 100px">启用</el-radio>
        <el-radio v-model="form.enabled" style="width: 100px" label="0">不启用</el-radio>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/channel'

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
      options1: [{
        followType: 'FBA',
        label: 'FBA'
      }, {
        followType: 'FBM',
        label: 'FBM'
      }],
      options2: [{
        assuranceTime: '15天',
        label: '15天'
      }, {
        assuranceTime: '一个月',
        label: '一个月'
      }, {
        assuranceTime: '三个月',
        label: '三个月'
      }],
      followType: '',
      loading: false, dialog: false,
      form: {
        id: '',
        channelName: '',
        followType: '',
        assuranceTime: '',
        price: '',
        productCost: '',
        enabled: '',
        openId: '',
        remark: ''
      },
      rules: {}
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
        channelName: '',
        followType: '',
        assuranceTime: '',
        price: '',
        productCost: '',
        enabled: '',
        openId: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
