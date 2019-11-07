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
          :action="dzExcelUploadApi"
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
      :visible.sync="dialogVisible2"
      :append-to-body="true"
      :before-close="handleClose"
      title="订单反馈"
      width="500px">
      <div style="text-align: center;font-size: 18px">
        <el-radio v-model="forms.status" label="2" style="width: 100px">点赞成功</el-radio>
        <el-radio v-model="forms.status" style="width: 135px" label="3">点赞失败</el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <div style="width: 100%;text-align: center">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="sign">确 定</el-button>
        </div>
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible1"
      :append-to-body="true"
      :before-close="handleClose"
      title="上传付款截图"
      width="500px">
      <div style="text-align: center;font-size: 18px">
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="120px">
          <el-form-item
            label="支付单号"
          >
            <el-input v-model="form.paymentId" style="width: 290px;margin-left: -50px" placeholder="上传付款截图识别单号或手动输入"/>
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
        <img src="https://eladmin.asinone.vip/statics/2019/09/11/7ee51b7e97831c9abd2ddbc15370cf0b7ee51b7e97831c9abd2ddbc15370cf0b.png" style="width: 200px;height: 300px;"><br>
      </div>
      <span slot="footer" class="dialog-footer">
        <div style="width: 100%;text-align: center">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="payment">确 定</el-button>
        </div>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <div style="display: inline-block;margin: 0px 2px;">
      <el-button
        v-permission="['ADMIN','DZSALEORDER_ALL','DZSALEORDER_CREATE']"
        class="filter-item"
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="$refs.form.dialog = true">新增
      </el-button>
      <eForm ref="form" :is-add="true"/>
    </div>

    <div v-permission="['ADMIN','DZSALEORDER_ALL','DZSALEORDER_IMPORT']" style="display: inline-block;">
      <el-button
        class="filter-item"
        size="mini"
        type="#000000"
        icon="el-icon-tickets"
        @click="dialogVisible = true">Excel导入订单</el-button>
    </div>

    <div v-permission="['ADMIN','DZSALEORDER_ALL','DZSALEORDER_DOWNLOAD']" style="display: inline-block;">
      <a href="https://eladmin.asinone.vip/api/dzSaleOrder/ExcelsDownload" style="color: #42b983">
        <el-button
          class="filter-item"
          size="mini"
          icon="el-icon-download"
          @click="downloadTxtInit">下载模板</el-button>
      </a>
    </div>
    <div v-permission="['ADMIN','DZSALEORDER_ALL','DZSALEORDER_PAYMENT']" style="display: inline-block;">
      <el-button
        :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
        class="filter-item"
        size="mini"
        type="warning"
        icon="el-icon-location"
        @click="dialogVisible1=true">上传付款截图</el-button>
    </div>
    <div v-permission="['ADMIN','DZSALEORDER_ALL','DZSALEORDER_SIGN']" style="display: inline-block;">
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
import { sign } from '@/api/dzSaleOrder'
import { payment } from '@/api/dzSaleOrder'
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
      form: {
        ids:
          [],
        paymentId:
          '',
        refundImageUrl: ''
      },
      headers: {
        'Authorization': 'Bearer ' + getToken()
      },
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible1: false,
      forms: {
        ids:
          [],
        status: '2'
      },
      enabledTypeOptions: [
        { key: '0', display_name: '未付款' },
        { key: '1', display_name: '处理中' },
        { key: '2', display_name: '点赞成功' },
        { key: '3', display_name: '点赞失败' }
      ],
      queryTypeOptions: [
        {
          key: 'id',
          display_name: 'id'
        },
        {
          key: 'dzSaleNumber',
          display_name: '订单编号'
        },
        {
          key: 'nickname',
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
          key: 'reviewUrl',
          display_name: 'review链接'
        },
        {
          key: 'customerId',
          display_name: '客户id'
        },
        {
          key: 'status',
          display_name: '状态'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'dzExcelUploadApi',
      'imagesUploadApi'
    ])
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.form.refundImageUrl = response.url
      this.form.paymentId = response.msg
    },
    payment() {
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
        if (data[i].status === '2' || data[i].status === '3') {
          this.$message({
            message: '含有已完成订单！',
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
    sign() {
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
        if (data[i].status !== '1') {
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
        refundImageUrl: ''
      }
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
