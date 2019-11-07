<template>
  <div class="head-container">
    <!-- 搜索 -->
    <el-input
      v-model="query.value"
      clearable
      placeholder="输入搜索内容"
      style="width: 200px;"
      class="filter-item"
      @keyup.enter.native="toQuery"/>
    <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
      <el-option
        v-for="item in queryTypeOptions"
        :key="item.key"
        :label="item.display_name"
        :value="item.key"/>
    </el-select>
    <el-select v-model="query.status" clearable placeholder="状态" class="filter-item" style="width: 90px;" @change="toQuery">
      <el-option v-for="item in enabledTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
    </el-select>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索
    </el-button>
    <el-dialog
      :visible.sync="dialogVisible1"
      :append-to-body="true"
      :before-close="handleClose"
      title="生成ERP订单"
      width="500px">
      <div style="text-align: center;font-size: 18px">
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
          <el-form-item
            label="支付单号"
          >
            <el-input v-model="form.paymentId" style="width: 370px;" placeholder="上传付款截图识别单号或手动输入"/>
          </el-form-item>
          <el-form-item
            label="销售数量"
          >
            <el-input v-model="form.quantity" style="width: 370px;"/>
          </el-form-item>
          <el-form-item
            label="销售单价"
          >
            <el-input v-model="form.unitPrice" style="width: 370px;"/>
          </el-form-item>
          <el-form-item
            label="成本单价"
          >
            <el-input v-model="form.costUnitPrice" style="width: 370px;"/>
          </el-form-item>
          <el-form-item
            label="客户实付"
          >
            <el-input v-model="form.actualAmount" style="width: 370px;"/>
          </el-form-item>
        </el-form>
        <el-upload
          :headers="headers"
          :action="imagesUploadApi"
          :on-success="handleSuccess"
          class="upload-demo"
          drag
          multiple>
          <i class="el-icon-upload"/>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <div style="width: 100%;text-align: center">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="payment">确 定</el-button>
        </div>
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible2"
      :append-to-body="true"
      :before-close="handleClose"
      title="订单反馈"
      width="500px">
      <div style="text-align: center;font-size: 18px">
        <el-radio v-model="forms.status" label="1" style="width: 100px">翻新成功</el-radio>
        <el-radio v-model="forms.status" style="width: 135px" label="2">翻新失败</el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <div style="width: 100%;text-align: center">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="sign">确 定</el-button>
        </div>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <div style="display: inline-block;margin: 0px 2px;">
      <el-button
        v-permission="['ADMIN','FXSALEORDER_ALL','FXSALEORDER_CREATE']"
        class="filter-item"
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="$refs.form.dialog = true">新增
      </el-button>
      <eForm ref="form" :is-add="true"/>
    </div>
    <div v-permission="['ADMIN','FXSALEORDER_ALL','FXSALEORDER_PAYMENT']" style="display: inline-block;">
      <el-button
        :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
        class="filter-item"
        size="mini"
        type="warning"
        icon="el-icon-location"
        @click="dialogVisible1=true">填写付款信息</el-button>
    </div>

    <div v-permission="['ADMIN','FXSALEORDER_ALL','FXSALEORDER_SIGN']" style="display: inline-block;">
      <el-button
        :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
        class="filter-item"
        size="mini"
        type="danger"
        icon="el-icon-s-claim"
        @click="dialogVisible2=true">反馈</el-button>
    </div>
  </div>
</template>

<script>
import eForm from './form'
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
import { payment } from '@/api/fxSaleOrder'
import { sign } from '@/api/fxSaleOrder'
export default {
  components: { eForm },
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      dialogVisible1: false,
      form: {
        ids:
          [],
        paymentId:
          '',
        quantity:
          '',
        unitPrice:
          '',
        actualAmount:
          '',
        costUnitPrice: ''
      },
      forms: {
        ids:
          [],
        status: '1'
      },
      dialogVisible2: false,
      enabledTypeOptions: [
        { key: '0', display_name: '处理中' },
        { key: '2', display_name: '翻新失败' },
        { key: '1', display_name: '翻新成功' }
      ],
      headers: {
        'Authorization': 'Bearer ' + getToken()
      },
      queryTypeOptions: [
        {
          key: 'fxSaleNumber',
          display_name: '订单编号'
        },
        {
          key: 'nickName',
          display_name: '昵称'
        },
        {
          key: 'site',
          display_name: '站点'
        },
        {
          key: 'oldSku',
          display_name: '老SKU'
        },
        {
          key: 'oldFnsku',
          display_name: '老FNSKU'
        },
        {
          key: 'oldAsin',
          display_name: '老Asin'
        },
        {
          key: 'newAsin',
          display_name: '新Asin'
        },
        {
          key: 'startDate',
          display_name: '下单时间'
        },
        {
          key: 'updateDate',
          display_name: '成功时间'
        },
        {
          key: 'status',
          display_name: '状态'
        },
        {
          key: 'invitation',
          display_name: '所属销售'
        },
        {
          key: 'erpSaleNumber',
          display_name: 'ERP单号'
        },
        {
          key: 'isReviews',
          display_name: '是否保留评论'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'scpExcelUploadApi',
      'imagesUploadApi'
    ])
  },
  methods: {
    payment() {
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
        if (data[i].erpSaleNumber !== '' && data[i].erpSaleNumber !== null) {
          this.$message({
            message: '含有已付款的订单！',
            type: 'error',
            center: true
          })
          return
        }
        /* if (data[i].status !== '0') {
          this.$message({
            message: '该订单已处理！',
            type: 'error',
            center: true
          })
          return
        }*/
      }
      this.form.ids = ids
      payment(this.form).then(res => {
        this.resetForm()
        this.$parent.init()
        this.$message({
          message: '录单成功！',
          type: 'success',
          center: true
        })
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    sign() {
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
        if (data[i].status !== '0') {
          this.$message({
            message: '含有已处理订单！',
            type: 'error',
            center: true
          })
          return
        }
      }
      this.forms.ids = ids
      sign(this.forms).then(res => {
        this.resetForm()
        this.$parent.init()
        this.$message({
          message: '反馈成功！',
          type: 'success',
          center: true
        })
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    resetForm() {
      this.dialogVisible1 = false
      this.dialogVisible2 = false
      // t his.$refs['form'].resetFields()
      this.form = {
        ids:
          [],
        paymentId:
          '',
        quantity:
          '',
        unitPrice:
          '',
        actualAmount:
          '',
        costUnitPrice: '' }
      this.forms = {
        ids:
          [],
        status: '1'
      }
    },
    handleSuccess(response, file, fileList) {
      // t his.upLoadForm.accountImg = response.url
      this.form.paymentId = response.msg
    },
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
    }
  }
}
</script>
