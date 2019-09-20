<template>
  <div class="head-container">
    <!-- 搜索 -->
    <el-date-picker
      v-if="query.type==='estimatedTime'"
      v-model="sssss"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期"
      @change="queryInit"/>
    <el-input v-if="query.type!=='newOrder'&&query.type!=='estimatedTime'&&query.type!=='financePayment'" v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;margin-top: 6px" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px;margin-top: 6px" @change="queryInit">
      <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
    </el-select>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" style="margin-top: 5px" @click="toQuery">搜索</el-button>
    <div style="padding:30px;" >
      <el-dialog
        :visible.sync="dialogVisible5"
        :append-to-body="true"
        :before-close="handleClose"
        title="上传付款截图"
        width="500px">
        <div style="position:relative;">
          <div style="margin: 0 auto;border: 0px black solid;width: 76%">
            <el-input
              v-model="remark"
              :disabled="true"
              placeholder="请输入内容"/>
            <img src="https://eladmin.asinone.vip/statics/2019/09/11/7ee51b7e97831c9abd2ddbc15370cf0b7ee51b7e97831c9abd2ddbc15370cf0b.png" style="width: 200px;height: 300px;margin-top: 10px;margin-left: 70px"><br>
            <span style="margin-left: 120px">打开<span style="color: red">支付宝</span>扫一扫</span><br><br><br>
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
            <el-input v-model="upLoadForm.accountOrder" style="width: 360px;" placeholder="上传付款截图识别单号或手动输入"/>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible5 = false,remark='',upLoadForm.accountImg='',upLoadForm.accountOrder=''">取 消</el-button>
          <el-button type="primary" @click="doUpload">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog
        :visible.sync="dialogVisible3"
        :append-to-body="true"
        :before-close="handleClose"
        title="撤单"
        width="500px">
        <div style="text-align: center;font-size: 18px">
          <p>确定要撤销该订单？</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <div style="width: 100%;text-align: center">
            <el-button @click="dialogVisible3 = false">取 消</el-button>
            <el-button type="primary" @click="revokeinit">确 定</el-button>
          </div>
        </span>
      </el-dialog>

      <el-dialog
        :visible.sync="dialogVisible1"
        :append-to-body="true"
        :before-close="handleClose"
        title="发帖反馈"
        width="500px">
        <div style="position:relative;">
          <div style="margin: 0 auto;border: 0px black solid;width: 76%">
            <el-upload
              :headers="headers"
              :action="imagesUploadApi"
              :on-success="handleSuccessFeedBack"
              :on-remove="quxiao"
              class="upload-demo"
              drag
              multiple>
              <i class="el-icon-upload"/>
              <div class="el-upload__text">将效果图拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <span>发帖效果：</span>
            <el-input
              :autosize="{ minRows: 5, maxRows: 8}"
              v-model="feedbackForm.postingEffect"
              style="width: 361px"
              type="textarea"
              placeholder="例：从1.1万名到5000名"/>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1=false">取 消</el-button>
          <el-button type="primary" @click="feedback">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 新增 -->
      <!--<div style="display: inline-block;margin: 0px 2px;">
        <el-button
          v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_CREATE']"
          class="filter-item"
          size="mini"
          type="primary"
          icon="el-icon-plus"
          @click="$refs.form.dialog = true">新增</el-button>
        <eForm ref="form" :is-add="true"/>
      </div>-->
      <router-link to="/nested/offSitAdd">
        <!--<router-link to="@/views/offSit/add/index">-->
        <div style="display: inline-block;margin: 0px 2px;">
          <el-button
            v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_CREATE']"
            class="filter-item"
            size="mini"
            type="primary"
            icon="el-icon-plus"
          >新增</el-button>
          <eForm ref="form" :is-add="true"/>
        </div>
      </router-link>
      <div v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_UPLOAD']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="warning"
          icon="el-icon-picture-outline"
          @click="payment">上传付款截图</el-button>
      </div>
      <div v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_FEEDBACK']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="success"
          icon="el-icon-connection"
          @click="openFeed">发帖反馈</el-button>
      </div>

      <div v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_ARRANGE']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="info"
          icon="el-icon-check"
          @click="arrangeinit">已安排</el-button>
      </div>

      <div v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_REVOKE']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="danger"
          icon="el-icon-circle-close"
          @click="dialogVisible3=true">撤单</el-button>
      </div>

      <div v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_SIGNPAYMENT']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="warning"
          icon="el-icon-location"
          @click="signPayment">标记已付款</el-button>
      </div>

      <div v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_DOWNLOAD']" style="display: inline-block;">
        <a href="https://eladmin.asinone.vip/api/zwSaleOrder/downloadTxt" style="color: #42b983">
          <el-button
            class="filter-item"
            size="mini"
            icon="el-icon-download"
            @click="downloadTxtInit">下载今日待发帖订单</el-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import eForm from './form'
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
import { upload } from '@/api/zwSaleOrder'
import { feedback } from '@/api/zwSaleOrder'
import { arrange } from '@/api/zwSaleOrder'
import { revoke } from '@/api/zwSaleOrder'
import { signPayment } from '@/api/zwSaleOrder'
export default {
  inject: ['reload'],
  components: { eForm },
  props: {
    query: {
      type: Object,
      required: true,
      dialogVisible5: false
    }
  },
  data() {
    return {
      sssss: '',
      dialogVisible3: false,
      dialogVisible1: false,
      dialogVisible5: false,
      upLoadForm: { id: '', accountImg: '', accountOrder: '' },
      feedbackForm: { id: '', postingEffect: '', effectImgs: [] },
      headers: {
        'Authorization': 'Bearer ' + getToken()
      },
      queryTypeOptions: [
        { key: 'zwSaleNumber', display_name: '订单编号' },
        { key: 'zwChannelName', display_name: '渠道' },
        { key: 'invitation', display_name: '所属销售' },
        { key: 'customerNickname', display_name: '客户昵称' },
        { key: 'site', display_name: '站点' },
        { key: 'link', display_name: 'asin' },
        { key: 'dealSite', display_name: 'Deal站' },
        { key: 'newOrder', display_name: '未安排订单' },
        { key: 'estimatedTime', display_name: '预计发帖时间' },
        { key: 'financePayment', display_name: '未付款' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'imagesUploadApi'
    ])
  },
  methods: {
    downloadTxtInit() {
      this.$message({
        message: '开始下载！',
        center: true,
        type: 'success'
      })
    },
    signPayment() {
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
      }
      signPayment(ids).then(res => {
        this.$parent.init()
        this.$message({
          message: '标记成功！',
          center: true,
          type: 'success'
        })
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    queryInit() {
      this.query.value = ''
      if (this.query.type === 'newOrder') {
        this.query.value = '0'
      }
      if (this.query.type === 'financePayment') {
        this.query.value = '0'
      }
      if (this.query.type === 'estimatedTime') {
        this.query.value = this.sssss
      }
    },
    quxiao(file, fileList) {
      this.feedbackForm.effectImgs = []
      for (let i = 0; i < fileList.length; i++) {
        console.log(fileList[i].response.url)
        this.feedbackForm.effectImgs.push(fileList[i].response.url)
      }
    },
    feedback() {
      const data = this.$parent.$refs.table.selection
      for (let i = 0; i < data.length; i++) {
        this.feedbackForm.id = data[i].id
      }
      const dataform = this.feedbackForm
      feedback(dataform).then(res => {
        this.$parent.init()
        this.$notify({
          title: '已成功反馈效果图！',
          type: 'success',
          duration: 2500
        })
        this.reload()
        this.dialogVisible1 = false
        this.feedbackForm.postingEffect = ''
        this.feedbackForm.effectImgs = []
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
    },
    handleSuccess(response, file, fileList) {
      this.upLoadForm.accountImg = response.url
      this.upLoadForm.accountOrder = response.msg
    },
    handleSuccessFeedBack(response, file, fileList) {
      this.feedbackForm.effectImgs.push(response.url)
      // this.upLoadForm.accountOrder = response.msg
    },
    handleClose() {
      this.dialogVisible = false
      this.remark = ''
    },
    doUpload: function() {
      const data = this.$parent.$refs.table.selection
      for (let i = 0; i < data.length; i++) {
        this.upLoadForm.id = data[i].id
      }
      const dataform = this.upLoadForm
      if (this.upLoadForm.accountOrder !== '') {
        upload(dataform).then(res => {
          this.$parent.init()
          this.$notify({
            title: '已成功上传付款截图！',
            type: 'success',
            duration: 2500
          })
          this.dialogVisible5 = false
          this.remark = ''
          this.upLoadForm.id = ''
          this.upLoadForm.accountImg = ''
          this.upLoadForm.accountOrder = ''
        }).catch(err => {
          console.log(err.response.data.message)
        })
      } else {
        this.$notify({
          title: '请认真填写支付单号并上传图片！',
          type: 'error',
          duration: 2500
        })
      }
    },
    arrangeinit() {
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
      }
      arrange(ids).then(res => {
        this.$parent.init()
        this.$notify({
          title: '已标记安排！',
          type: 'success',
          duration: 2500
        })
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    revokeinit() {
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
      }
      revoke(ids).then(res => {
        this.$parent.init()
        this.$notify({
          title: '已撤单！',
          type: 'success',
          duration: 2500
        })
        this.dialogVisible3 = false
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    payment() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      if (data.length > 1) {
        this.$notify({
          title: '只能选择一条数据',
          type: 'error',
          duration: 2500
        })
      } else {
        this.upLoadForm.accountOrder = ''
        this.upLoadForm.accountImg = ''
        this.remark = data[0].remark + ' RMB'
        this.dialogVisible5 = true
      }
    },
    openFeed() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      if (data.length > 1) {
        this.$notify({
          title: '只能选择一条数据',
          type: 'error',
          duration: 2500
        })
      } else {
        // this.effectImgs = []
        this.dialogVisible1 = true
      }
    }
  }
}
</script>
