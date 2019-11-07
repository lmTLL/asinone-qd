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
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :before-close="handleClose"
      title="订单导入"
      width="500px">
      <div style="text-align: center;font-size: 18px">
        <el-upload
          :headers="headers"
          :action="scpExcelUploadApi"
          :on-success="excelSuccess"
          class="upload-demo"
          drag
          multiple>
          <i class="el-icon-upload"/>
          <div class="el-upload__text">将Excel文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <div style="width: 100%;text-align: center">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </span>
    </el-dialog>


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
      title="上传截图"
      width="500px">
      <div style="text-align: center;font-size: 18px">
        <el-upload
          :headers="headers"
          :action="imagesUploadApi"
          :on-success="handleSuccessUrl"
          class="upload-demo"
          drag
          multiple>
          <i class="el-icon-upload"/>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <div style="width: 100%;text-align: center">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="uploadChatImg">确 定</el-button>
        </div>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <div style="display: inline-block;margin: 0px 2px;">
      <el-button
        v-permission="['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_CREATE']"
        class="filter-item"
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="$refs.form.dialog = true">新增
      </el-button>
      <eForm ref="form" :is-add="true"/>
    </div>

    <div v-permission="['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_IMPORT']" style="display: inline-block;">
      <el-button
        class="filter-item"
        size="mini"
        type="#000000"
        icon="el-icon-tickets"
        @click="dialogVisible = true">Excel导入订单</el-button>
    </div>

    <div v-permission="['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_DOWNLOAD']" style="display: inline-block;">
      <a href="https://eladmin.asinone.vip/api/scpSaleOrder/ExcelsDownload" style="color: #42b983">
        <el-button
          class="filter-item"
          size="mini"
          icon="el-icon-download"
          @click="downloadTxtInit">下载模板</el-button>
      </a>
    </div>

    <div v-permission="['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_PAYMENT']" style="display: inline-block;">
      <el-button
        :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
        class="filter-item"
        size="mini"
        type="warning"
        icon="el-icon-location"
        @click="dialogVisible1=true">填写付款信息</el-button>
    </div>

    <div v-permission="['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_PAYMENT']" style="display: inline-block;">
      <el-button
        :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
        class="filter-item"
        size="mini"
        type="danger"
        icon="el-icon-s-claim"
        @click="dialogVisible2=true">客户不付款</el-button>
    </div>

    <br>
    <span style="color: red;font-size: 15px">全站点100%安全删除，快则3天内完成，慢则7-20天，先操作后收费。下单20天后没成功，可以撤单，请不要多渠道下单或者自己操作，避免删除后，有争议。</span>
  </div>
</template>

<script>
import eForm from './form'
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
import { payment } from '@/api/scpSaleOrder'
import { uploadChatImg } from '@/api/scpSaleOrder'

export default {
  inject: ['reload'],
  components: { eForm },
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
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
        costUnitPrice: '' },
      headers: {
        'Authorization': 'Bearer ' + getToken()
      },
      enabledTypeOptions: [
        { key: '0', display_name: '处理中' },
        { key: '1', display_name: '已删除' }
      ],
      chatFrom: {
        ids:
          [],
        paymentId:
          '' },
      queryTypeOptions: [
        {
          key: 'id',
          display_name: 'id'
        },
        {
          key: 'scpSaleNumber',
          display_name: '订单编号'
        },
        {
          key: 'vxId',
          display_name: '微信ID'
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
          key: 'asin',
          display_name: 'asin'
        },
        {
          key: 'cpUrl',
          display_name: '差评链接'
        },
        {
          key: 'startDate',
          display_name: '下单时间'
        },
        {
          key: 'canKillOrderDate',
          display_name: '可撤单时间'
        },
        {
          key: 'status',
          display_name: '状态'
        },
        {
          key: 'invitation',
          display_name: '所属销售'
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
    uploadChatImg() {
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
        if (data[i].status !== '1') {
          this.$message({
            message: '该链接未删除！',
            type: 'error',
            center: true
          })
          return
        }
      }
      this.form.ids = ids
      uploadChatImg(this.form).then(res => {
        this.resetForm()
        this.$parent.init()
        this.$message({
          message: '上传成功！',
          type: 'success',
          center: true
        })
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    handleSuccess(response, file, fileList) {
      // t his.upLoadForm.accountImg = response.url
      this.form.paymentId = response.msg
    },
    handleSuccessUrl(response, file, fileList) {
      this.form.paymentId = response.url
      // this.form.paymentId = response.msg
    },
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
        if (data[i].status !== '1') {
          this.$message({
            message: '该链接未删除！',
            type: 'error',
            center: true
          })
          return
        }
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
    },
    handleClose() {
      this.dialogVisible = false
      this.remark = ''
    },
    excelSuccess(response) {
      this.$message({
        message: '导入成功！',
        type: 'success',
        center: true
      })
      this.$parent.init()
      this.reload()
      this.dialogVisible = false
    },
    downloadTxtInit() {
      this.$message({
        message: '开始下载！',
        center: true,
        type: 'success'
      })
    },
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
    }
  }
}
</script>
