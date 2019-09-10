<template>
  <div class="head-container">
    <!-- 搜索 -->
    <el-input v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
      <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
    </el-select>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
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
            <img src="http://39.98.168.25:8082/statics/2019/07/11/7ee51b7e97831c9abd2ddbc15370cf0b.png" style="width: 200px;height: 300px;margin-top: 10px;margin-left: 70px"><br>
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
            <span>发帖效果：</span><el-input v-model="feedbackForm.postingEffect" style="width: 279px;" placeholder="例：从1.1万名到5000名"/>
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
    </div>
  </div>
</template>

<script>
import eForm from './form'
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
import { upload } from '@/api/zwSaleOrder'
import { feedback } from '@/api/zwSaleOrder'
export default {
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
        { key: 'dealSite', display_name: 'Deal站' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'imagesUploadApi'
    ])
  },
  methods: {
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
