<template>
  <div class="head-container">
    <!-- 搜索 -->
    <!--<el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
      <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
    </el-select>
    <el-input v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>-->

    <el-input v-if="query.type!=='financePayment'" v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;margin-top: 6px" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px;margin-top: 6px" @change="queryInit">
      <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
    </el-select>

    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" style="margin-top: 5px" @click="toQuery">搜索</el-button>
    <div style="padding:30px;width: 1800px;" >
      <!--<el-dialog
        :append-to-body="true"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        title="指派"
        width="576px">
        <div style="width: 530px;height: 400px">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="site"
              label="站点"
              width="265">
            </el-table-column>
            <el-table-column
              prop="asin"
              label="asin"
              width="265">
            </el-table-column>
          </el-table>
          <span>指派给：</span> <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.channelName+item.followType"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
      </el-dialog>-->
      <el-dialog
        :visible.sync="dialogVisible"
        :append-to-body="true"
        :before-close="handleClose"
        title="提示"
        width="500px">
        <div style="text-align: center;font-size: 18px"><span>点击该按钮后，当前订单的回跟信息，<br><br>会发送给渠道操作人，确定要操作吗？</span></div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" style="width: 300px" @click="dialogVisible = false">取 消</el-button>
          <el-button @click="doBack">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible1"
        :append-to-body="true"
        :before-close="handleClose"
        title="撤单"
        width="500px">
        <div style="text-align: center;font-size: 18px"><span>撤单原因：</span><el-input v-model="remark" placeholder="请输入撤单原因" style="width: 240px"/></div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" style="width: 300px" @click="dialogVisible1 = false,remark = ''">取 消</el-button>
          <el-button @click="doCancel">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible2"
        :append-to-body="true"
        :before-close="handleClose"
        title="审核"
        width="500px">
        <el-radio v-model="radio" label="1" style="margin-left: 95px">同意撤单</el-radio>
        <el-radio v-model="radio" label="2" style="margin-left: 10%">拒绝撤单</el-radio>
        <div v-if="radio==='2'" style="text-align: center;font-size: 18px"><span>拒绝意见：</span><el-input v-model="remark" placeholder="请输入拒绝原因" style="width: 240px;margin-top: 20px"/></div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" style="width: 300px" @click="dialogVisible2 = false,remark = ''">取 消</el-button>
          <el-button @click="adminExamine">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible3"
        :append-to-body="true"
        :before-close="handleClose"
        title="审核"
        width="500px">
        <el-radio v-model="radio" label="1" style="margin-left: 95px">同意撤单</el-radio>
        <el-radio v-model="radio" label="2" style="margin-left: 10%">拒绝撤单</el-radio>
        <div v-if="radio==='2'" style="text-align: center;font-size: 18px"><span>拒绝意见：</span><el-input v-model="remark" placeholder="请输入拒绝原因" style="width: 240px;margin-top: 20px"/></div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" style="width: 300px" @click="dialogVisible3 = false,remark = ''">取 消</el-button>
          <el-button @click="channelExamine">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog
        :visible.sync="dialogVisible4"
        :append-to-body="true"
        :before-close="handleClose"
        title="标记赶走"
        width="600px">
        <el-radio v-model="radio" label="1" style="margin-left: 95px">已赶走</el-radio>
        <el-radio v-model="radio" label="2" style="margin-left: 0%">赶不走，撤单吧</el-radio>
        <el-radio v-model="radio" label="3" style="margin-left: 3%">跟卖未出现</el-radio>
        <div v-if="radio==='1'" class="block" style="text-align: center">
          <span class="demonstration" style="font-size: 18px">赶走时间</span>
          <el-date-picker
            v-model="value2"
            :picker-options="pickerOptions"
            style="margin-top: 20px"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间"
            align="right"/>
        </div>
        <div v-if="radio==='2'" style="text-align: center;font-size: 18px"><span>撤单原因：</span><el-input v-model="remark" placeholder="请输入撤单原因" style="width: 240px;margin-top: 20px"/></div>
        <span slot="footer" class="dialog-footer">
          <el-button style="width: 300px" type="primary" @click="doSign">确 定</el-button>
          <el-button @click="dialogVisible4 = false,remark = ''">取 消</el-button>
        </span>
      </el-dialog>

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
        :visible.sync="dialogVisible6"
        :append-to-body="true"
        :before-close="handleClose"
        title="标记处理"
        width="500px">
        <div style="text-align: center;font-size: 18px">
          <p>确定标记该订单已处理？</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <div style="width: 100%;text-align: center">
            <el-button @click="dialogVisible6 = false,remark = ''">取 消</el-button>
            <el-button type="primary" @click="doSignHandle">确 定</el-button>
          </div>
        </span>
      </el-dialog>

      <el-dialog
        :visible.sync="dialogVisible7"
        :append-to-body="true"
        :before-close="handleClose"
        title="更换渠道"
        width="500px">
        <div style="text-align: center;font-size: 18px">
          <span>新渠道：</span><el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.channelName+'-'+item.followType+'-￥'+item.price"
              :value="item.id"/>
          </el-select>
        </div>
        <span slot="footer" class="dialog-footer">
          <div style="width: 100%;text-align: center">
            <el-button @click="dialogVisible7 = false,remark = ''">取 消</el-button>
            <el-button type="primary" @click="doChangeChannel">确 定</el-button>
          </div>
        </span>
      </el-dialog>
      <!-- 新增 -->
      <router-link to="/nested/menu1">
        <div style="display: inline-block;margin: 0px 2px;">
          <el-button
            v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_CREATE']"
            class="filter-item"
            size="mini"
            type="primary"
            icon="el-icon-plus"
          >新增</el-button>
          <eForm ref="form" :is-add="true"/>
        </div>
      </router-link>
      <div v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_UPLOAD']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="warning"
          icon="el-icon-picture-outline"
          @click="payment">上传付款截图</el-button>
      </div>
      <div v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_BACK']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="danger"
          icon="el-icon-chat-dot-round"
          @click="dialogVisible = true">有回跟</el-button>
      </div>
      <div v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_SIGN']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="warning"
          icon="el-icon-s-promotion"
          @click="dialogVisible4 = true">已赶走</el-button>
      </div>
      <div v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_SIGN']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="success"
          icon="el-icon-s-promotion"
          @click="dialogVisible6 = true">已处理</el-button>
      </div>
      <div v-permission="['ADMIN','SALEORDER_ALL','CANCEL_SALEORDER']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="info"
          icon="el-icon-folder-delete"
          @click="dialogVisible1 = true">申请撤单</el-button>
      </div>

      <div v-permission="['ADMIN','SALEORDER_ALL','EXAMINE_SALE']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="primary"
          icon="el-icon-receiving"
          @click="dialogVisible2 = true">审核<span v-if="checkPermission(['ADMIN'])">-销售</span></el-button>
      </div>
      <div v-permission="['ADMIN','SALEORDER_ALL','EXAMINE_CHANNEL']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="primary"
          icon="el-icon-receiving"
          @click="dialogVisible3 = true">审核<span v-if="checkPermission(['ADMIN'])">-渠道</span></el-button>
      </div>

      <div v-permission="['ADMIN','SALEORDER_ALL','CHANGE_CHANNEL']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="success"
          icon="el-icon-connection"
          @click="doInitChannel">换渠道</el-button>
      </div>

      <div v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_SIGNPAYMENT']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="warning"
          icon="el-icon-location"
          @click="signPayment">标记已付款</el-button>
      </div>

      <div v-permission="['ADMIN']" style="display: inline-block;">
        <el-button
          :disabled="$parent.data.length === 0 || $parent.$refs.table.selection.length === 0"
          class="filter-item"
          size="mini"
          type="#000000"
          icon="el-icon-warning-outline"
          @click="playFollow">赶跟卖</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import checkPermission from '@/utils/permission'
import eForm from './form'
import { channelAll } from '@/api/channel'
import { sign } from '@/api/saleOrder'
import { dissign } from '@/api/saleOrder'
import { back } from '@/api/saleOrder'
import { cancel } from '@/api/saleOrder'
import { agree } from '@/api/saleOrder'
import { disagree } from '@/api/saleOrder'
import { upload } from '@/api/saleOrder'
import { signHandle } from '@/api/saleOrder'
import { changeChannel } from '@/api/saleOrder'
import { playFollow } from '@/api/saleOrder'
import { getToken } from '@/utils/auth'
import { signPayment } from '@/api/saleOrder'
import { mapGetters } from 'vuex'
export default {
  components: { eForm },
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value2: '',
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      yanzheng: true,
      radio: '1',
      headers: {
        'Authorization': 'Bearer ' + getToken()
      },
      dialogVisible7: false,
      dialogVisible6: false,
      dialogVisible5: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      remark: '',
      tableData: [],
      options: [],
      value: '',
      dialogVisible: false,
      dialogVisible1: false,
      upLoadForm: { id: '', accountImg: '', accountOrder: '' },
      queryTypeOptions: [
        { key: 'site', display_name: '站点' },
        { key: 'asin', display_name: 'asin' },
        { key: 'followShopUrl', display_name: '跟卖店铺链接' },
        { key: 'followShopName', display_name: '跟卖店铺名称' },
        { key: 'assuranceTime', display_name: '质保时间' },
        { key: 'customerNickname', display_name: '客户昵称' },
        { key: 'channelName', display_name: '所选渠道' },
        { key: 'saleNumber', display_name: '订单号' },
        { key: 'invitation', display_name: '销售名' },
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
      if (this.query.type === 'financePayment') {
        this.query.value = '0'
      }
    },
    handleSuccess(response, file, fileList) {
      this.upLoadForm.accountImg = response.url
      this.upLoadForm.accountOrder = response.msg
    },
    checkPermission,
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
    },
    handleClose() {
      this.dialogVisible = false
      this.remark = ''
    },
    doGive() {
      this.tableData = []
      this.dialogVisible = true
      this.delLoading = true
      const data = this.$parent.$refs.table.selection
      const ids = []
      this.options = []
      channelAll().then(row => {
        for (let i = 0; i < row.length; i++) {
          this.options.push(row[i])
        }
      }).catch(err => {
        console.log(err.response.data.message)
      })
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
        this.tableData.push(data[i])
      }
    },
    doInitChannel() {
      // this.tableData = []
      this.dialogVisible7 = true
      // this.delLoading = true
      const data = this.$parent.$refs.table.selection
      // const ids = []
      this.options = []
      channelAll().then(row => {
        for (let i = 0; i < row.length; i++) {
          for (let i1 = 0; i1 < data.length; i1++) {
            if (data[i1].followType === row[i].followType && data[i1].assuranceTime === row[i].assuranceTime && data[i1].channelId !== row[i].id) {
              this.options.push(row[i])
            }
          }
        }
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    doChangeChannel() {
      if (this.value !== '') {
        const data = this.$parent.$refs.table.selection
        const ids = []
        this.options = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].status !== '9' && data[i].status !== '10') {
            this.yanzheng = false
          }
          ids.push(data[i].id)
        }
        if (ids.length < 2) {
          if (this.yanzheng) {
            changeChannel(ids, this.value).then(res => {
              this.$parent.init()
              this.$notify({
                title: '已更换渠道,系统自动生成订单，请上传付款截图！',
                type: 'success',
                duration: 2500
              })
              this.remark = ''
              this.dialogVisible7 = false
            }).catch(err => {
              console.log(err.response.data.message)
            })
          } else {
            this.$notify({
              title: '该订单不能换渠道!',
              type: 'error',
              duration: 2500
            })
            this.yanzheng = true
          }
        } else {
          this.$notify({
            title: '只能选择一条数据!',
            type: 'error',
            duration: 2500
          })
        }
      } else {
        this.$notify({
          title: '请选择渠道!',
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
        this.remark = data[0].remark
        this.dialogVisible5 = true
      }
    },
    doSign() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
      }
      console.log(this.value2.toString())
      if (this.radio === '1') {
        if (this.value2 !== '') {
          sign(ids, this.value2).then(res => {
            this.$parent.init()
            this.$notify({
              title: '已标记赶走',
              type: 'success',
              duration: 2500
            })
            this.remark = ''
            this.dialogVisible4 = false
          }).catch(err => {
            console.log(err.response.data.message)
          })
          this.value2 = ''
        } else {
          this.$notify({
            title: '请选择赶走时间！',
            type: 'error',
            duration: 2500
          })
        }
      } else if (this.radio === '2') {
        if (this.remark !== '') {
          dissign(ids, this.remark).then(res => {
            this.$parent.init()
            this.$notify({
              title: '已通知客户！',
              type: 'success',
              duration: 2500
            })
            this.remark = ''
            this.dialogVisible4 = false
          }).catch(err => {
            console.log(err.response.data.message)
          })
        } else {
          this.$notify({
            title: '请输入原因！',
            type: 'error',
            duration: 2500
          })
        }
      }
    },
    doSignHandle() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
      }
      signHandle(ids).then(res => {
        this.$parent.init()
        this.$notify({
          title: '已标记处理！',
          type: 'success',
          duration: 2500
        })
        this.remark = ''
        this.dialogVisible6 = false
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    playFollow() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
      }
      playFollow(ids).then(res => {

      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    doBack() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].status !== '3') {
          this.yanzheng = false
        }
        ids.push(data[i].id)
      }
      if (this.yanzheng) {
        back(ids).then(res => {
          this.$parent.init()
          if (res.msg !== 'false') {
            this.$notify({
              title: '已通知渠道！',
              type: 'success',
              duration: 2500
            })
            this.dialogVisible = false
          } else {
            this.$notify({
              title: '很抱歉，一天只能通知一次噢！',
              type: 'error',
              duration: 2500
            })
            this.dialogVisible = false
          }
        }).catch(err => {
          console.log(err.response.data.message)
        })
      } else {
        this.$notify({
          title: '该订单不可通知回跟！',
          type: 'error',
          duration: 2500
        })
        this.yanzheng = true
      }
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
    doCancel: function() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      const ids = []
      // const sss = 1
      for (let i = 0; i < data.length; i++) {
        if (data[i].status !== '2' && data[i].status !== '3' && data[i].status !== '10') {
          this.yanzheng = false
        }
        ids.push(data[i].id)
      }
      if (this.yanzheng) {
        if (this.remark !== '') {
          cancel(ids, this.remark).then(res => {
            this.$parent.init()
            this.$notify({
              title: '已发起撤销申请！',
              type: 'success',
              duration: 2500
            })
            this.dialogVisible1 = false
            this.remark = ''
          }).catch(err => {
            console.log(err.response.data.message)
          })
        } else {
          this.$notify({
            title: '请输入撤单原因！',
            type: 'error',
            duration: 2500
          })
        }
      } else {
        this.$notify({
          title: '该订单不可发起撤销申请！',
          type: 'error',
          duration: 2500
        })
        this.yanzheng = true
      }
    },
    adminExamine() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].status !== '5') {
          this.yanzheng = false
        }
        ids.push(data[i].id)
      }
      if (this.yanzheng) {
        if (this.radio === '1') {
          agree(ids).then(res => {
            this.$parent.init()
            this.$notify({
              title: '已同意撤单，并通知渠道方！',
              type: 'success',
              duration: 2500
            })
            this.dialogVisible2 = false
            this.remark = ''
          }).catch(err => {
            console.log(err.response.data.message)
          })
        } else {
          if (this.remark !== '') {
            disagree(ids, this.remark).then(res => {
              this.$parent.init()
              this.$notify({
                title: '已拒绝撤单！',
                type: 'success',
                duration: 2500
              })
              this.dialogVisible2 = false
              this.remark = ''
            }).catch(err => {
              console.log(err.response.data.message)
            })
          } else {
            this.$notify({
              title: '请输入拒绝意见！',
              type: 'error',
              duration: 2500
            })
          }
        }
      } else {
        this.$notify({
          title: '该订单无撤销申请！',
          type: 'error',
          duration: 2500
        })
        this.yanzheng = false
      }
    },
    channelExamine() {
      // this.$parent.init()
      const data = this.$parent.$refs.table.selection
      const ids = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].status !== '7') {
          this.yanzheng = false
        }
        ids.push(data[i].id)
      }
      if (this.yanzheng) {
        if (this.radio === '1') {
          agree(ids).then(res => {
            this.$parent.init()
            this.$notify({
              title: '已同意撤单，并通知客户！',
              type: 'success',
              duration: 2500
            })
            this.dialogVisible3 = false
            this.remark = ''
          }).catch(err => {
            console.log(err.response.data.message)
          })
        } else {
          if (this.remark !== '') {
            disagree(ids, this.remark).then(res => {
              this.$parent.init()
              this.$notify({
                title: '已拒绝撤单！',
                type: 'success',
                duration: 2500
              })
              this.dialogVisible3 = false
              this.remark = ''
            }).catch(err => {
              console.log(err.response.data.message)
            })
          } else {
            this.$notify({
              title: '请输入拒绝意见！',
              type: 'error',
              duration: 2500
            })
          }
        }
      } else {
        this.$notify({
          title: '该订单无撤销申请！',
          type: 'error',
          duration: 2500
        })
        this.yanzheng = true
      }
    }
  }
}
</script>
