<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <el-dialog
      :append-to-body="true"
      :visible.sync="centerDialogVisible"
      title="效果图"
      width="500"
      center>
      <div class="demo-image__lazy" style="width: 100%">
        <el-col style="width: 100%">
          <el-card v-for="url in urls" shadow="hover" style="width: 100%;height: 100%">
            <el-image :key="url" :src="url" lazy @click="closes(url)"/>
          </el-card>
        </el-col>
      </div>
      <span slot="footer" class="dialog-footer">
        <span>&#8195;</span>
        <!--<el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->
      </span>
    </el-dialog>
    <el-dialog
      :append-to-body="true"
      :visible.sync="centerDialogVisible1"
      title="消息列表"
      width="700px">
      <div style="width: 100%">
        <el-table
          :data="tableData"
          max-height="500"
          style="width: 100%;border: 0px salmon solid">
          <el-table-column :show-overflow-tooltip="true" prop="msgTime" label="发送时间" width="160">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.msgTime) }}</span>
            </template>
          </el-table-column>
          <!--<el-table-column
            prop="msgTime"
            label="日期"
            width="150"/>-->
          <el-table-column
            :show-overflow-tooltip="true"
            prop="msgName"
            label="姓名"
            width="100"/>
          <el-table-column
            prop="msgValue"
            label="消息"/>
        </el-table>
        <el-input
          :autosize="{ minRows: 4, maxRows: 4}"
          v-model="queryForm.msgValue"
          type="textarea"
          placeholder="请输入内容"/>
      </div>
      <span slot="footer" class="dialog-footer">
        <!--<el-button type="info" @click="centerDialogVisible1=false">关闭</el-button>-->
        <el-button
          class="filter-item"
          size="mini"
          type="info"
          icon="el-icon-circle-close"
          @click="centerDialogVisible1=false">关闭
        </el-button>
        <el-button
          class="filter-item"
          size="mini"
          type="primary"
          icon="el-icon-s-promotion"
          @click="sendMsg">发送
        </el-button>
        <!--<el-button type="primary" @click="sendMsg">发送</el-button>-->
        <!--<el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->
      </span>
    </el-dialog>
    <!--表格渲染-->
    <el-table v-loading="loading" ref="table" :data="data" :height="tableHeight" size="medium" style="width: 100%;" fit="false">
      <el-table-column type="selection" width="45"/>
      <el-table-column ref="table" prop="zwSaleNumber" label="订单编号" width="150px" fixed>
        <template slot-scope="scope">
          <i v-if="scope.row.financePayment==='0'&&checkPermission(['ADMIN','ZWSALEORDER_SIGNPAYMENT'])" style="color: red">未付&#8194;</i><i v-if="scope.row.newOrder==='0'&&!checkPermission(['NO_NEW_ORDER'])" style="color: red">new&#8194;</i>{{ scope.row.zwSaleNumber }}
        </template>
      </el-table-column>
      <el-table-column prop="projectName" label="服务项目"/>
      <el-table-column prop="link" label="沟通" width="110px">
        <template slot-scope="scope">
          <el-link type="success" target="_blank" title="点击沟通" @click="messageInit(scope.row.zwSaleNumber)">点击沟通</el-link>
        </template>
      </el-table-column>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" prop="zwChannelName" label="渠道"/>
      <el-table-column prop="invitation" label="所属销售"/>
      <el-table-column prop="customerNickname" label="客户昵称"/>
      <el-table-column prop="site" label="站点"/>
      <!--<el-table-column prop="link" label="asin"/>-->
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" prop="link" label="asin" width="130px">
        <template slot-scope="scope">
          <el-link :href="scope.row.link" target="_blank" title="点击跳转" type="success">{{ scope.row.link.substring(scope.row.link.indexOf('dp/')+3,scope.row.link.indexOf('/ref')) }}</el-link>
        </template>
      </el-table-column>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" :show-overflow-tooltip="true" prop="productName" label="productName" width="115px"/>
      <el-table-column prop="dealSite" label="Deal站" width="200px"/>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" :show-overflow-tooltip="true" prop="dealPrice" label="Deal price" width="100px"/>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" :show-overflow-tooltip="true" prop="originalPrice" label="Original price" width="115px"/>
      <el-table-column prop="code" label="code" width="100px"/>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" prop="codeWork" label="codeWork" width="260px"/>
      <el-table-column :show-overflow-tooltip="true" prop="discount" label="Discount"/>
      <el-table-column prop="startDate" label="开始时间" width="100px"/>
      <el-table-column prop="estimatedTime" label="预计发帖时间" width="110px"/>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" prop="endDate" label="结束时间" width="100px"/>
      <el-table-column prop="postingEffect" label="发帖效果" width="200px">
        <template slot-scope="scope">
          <el-popover
            placement="right"
            width="600"
            trigger="hover">
            <el-timeline>
              <el-timeline-item v-for="effect in ZwPostingEffect" :timestamp="parseTime(effect.submitTime)" placement="top">
                <el-card>
                  <h4>{{ effect.postingEffect }}</h4>
                </el-card>
              </el-timeline-item>
            </el-timeline>
            <a v-if="scope.row.status==='2'&&scope.row.postingEffect.length>20" slot="reference" @mouseover="showAllEffect(scope.row.id)">{{ scope.row.postingEffect.substring(0,20)+'...' }}</a>
            <a v-if="scope.row.status==='2'&&scope.row.postingEffect.length<=20" slot="reference" @mouseover="showAllEffect(scope.row.id)">{{ scope.row.postingEffect }}</a>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="postingImg" label="发帖截图" width="110px">
        <template slot-scope="scope">
          <el-link target="_blank" title="点击展示" type="success" @click="open(scope.row.postingImg)">点击展示</el-link>
        </template>
      </el-table-column>
      <!--<el-table-column prop="postingImg" label="发帖截图"/>-->
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" prop="submitTime" label="提交时间" width="100px">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.submitTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="accountTime" label="支付时间" width="100px">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.accountTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" :show-overflow-tooltip="true" prop="accountOrder" label="支付单号"/>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" ref="table" prop="accountImg" label="付款截图">
        <template slot-scope="scope">
          <a v-if="scope.row.accountImg!==''" :href="scope.row.accountImg" style="color: #42b983" target="_blank"><img :src="scope.row.accountImg" alt="" class="el-avatar"></a>
        </template>
      </el-table-column>
      <el-table-column ref="table" :show-overflow-tooltip="true" prop="status" label="状态">
        <template slot-scope="scope">
          <!--<div v-for="item in dicts" :key="item.id">
            <el-tag v-if="scope.row.enabled.toString() === item.value" :type="scope.row.enabled ? '' : 'info'">{{ item.label }}</el-tag>
          </div>-->
          <span v-for="item in dicts" v-if="scope.row.status ===item.value">{{ item.label }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="checkPermission(['ZW_INVISIBLES'])" prop="remark" label="备注"/>
      <el-table-column v-if="checkPermission(['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_CHANNEL_REMARK'])" ref="table" width="200px" prop="channelRemark" label="渠道-备注">
        <template slot-scope="scope">
          <!--<div v-for="item in dicts" :key="item.id">
            <el-tag v-if="scope.row.enabled.toString() === item.value" :type="scope.row.enabled ? '' : 'info'">{{ item.label }}</el-tag>
          </div>-->
          <el-input v-model="scope.row.channelRemark" placeholder="请输入内容" @blur="updateChannelRemarkInit(scope.row.id,scope.row.channelRemark)"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160px" align="center">
        <template slot-scope="scope">
          <el-tooltip content="点击复制详细信息" class="item" effect="dark" placement="top">
            <el-button type="text" @click="copyText(scope.row)">复制</el-button>
          </el-tooltip>
          <edit v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_EDIT']" :data="scope.row" :sup_this="sup_this"/>
          <el-popover
            v-permission="['ADMIN','ZWSALEORDER_ALL','ZWSALEORDER_DELETE']"
            :ref="scope.row.id"
            placement="top"
            width="180">
            <p>确定删除本条数据吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消</el-button>
              <el-button :loading="delLoading" type="primary" size="mini" @click="subDelete(scope.row.id)">确定</el-button>
            </div>
            <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini"/>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <el-pagination
      :total="total"
      style="margin-top: 8px;"
      layout="total, prev, pager, next, sizes"
      @size-change="sizeChange"
      @current-change="pageChange"/>
  </div>
</template>
<style>
  .el-table::before {
    left: 0;
    bottom: 1px;
    top: 0;
    width: 100%;
    height: 0px;
  }
</style>
<script>
import checkPermission from '@/utils/permission'
import initData from '@/mixins/initData'
import { del } from '@/api/zwSaleOrder'
import { parseTime } from '@/utils/index'
import eHeader from './module/header'
import edit from './module/edit'
import initDict from '@/mixins/initDict'
import { getMessage } from '@/api/zwSaleOrder'
import { addMessage } from '@/api/zwSaleOrder'
import { updateChannelRemark } from '@/api/zwSaleOrder'
import { showAllZwEffect } from '@/api/zwSaleOrder'
export default {
  components: { eHeader, edit },
  mixins: [initData, initDict],
  data() {
    return {
      show3: true,
      centerDialogVisible1: false,
      centerDialogVisible: false,
      tableHeight: 0,
      delLoading: false,
      sup_this: this,
      queryForm: { msgKey: '', msgValue: '' },
      updateForm: { id: '', channelRemark: '' },
      urls: [],
      tableData: [],
      ZwPostingEffect: []
    }
  },
  mounted: function() {
    this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 50
    // window.innerHeight:浏览器的可用高度
    // this.$refs.table.$el.offsetTop：表格距离浏览器的高度
    // 后面的50：根据需求空出的高度，自行调整
  },
  created() {
    this.$nextTick(() => {
      this.init()
      this.getDict('zw_saleorder_status')
    })
  },
  methods: {
    parseTime,
    checkPermission,
    updateChannelRemarkInit(id, channelRemark) {
      this.updateForm.id = id
      this.updateForm.channelRemark = channelRemark
      updateChannelRemark(this.updateForm).then(res => {
        this.init()
        this.$message({
          message: '修改成功！',
          center: true,
          type: 'success'
        })
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    sendMsg() {
      addMessage(this.queryForm).then(row => {
        this.queryForm.msgValue = ''
        this.messageInit(this.queryForm.msgKey)
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    showAllEffect(id) {
      this.ZwPostingEffect = []
      console.log(id)
      showAllZwEffect(id).then(row => {
        for (let i = row.length - 1; i >= 0; i--) {
          this.ZwPostingEffect.push(row[i])
        }
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    open(postingImg) {
      this.urls = []
      const imgs = postingImg.split(',')
      for (let i = 1; i < imgs.length; i++) {
        this.urls.push(imgs[i])
        console.log(imgs[i])
      }
      this.centerDialogVisible = true
    },
    beforeInit() {
      this.url = 'api/zwSaleOrder'
      const sort = 'id,desc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const type = query.type
      const value = query.value
      if (type && value) { this.params[type] = value }
      return true
    },
    messageInit(zwSaleNumber) {
      this.queryForm.msgKey = zwSaleNumber
      this.queryForm.msgValue = ''
      this.tableData = []
      getMessage(zwSaleNumber).then(row => {
        for (let i = 0; i < row.length; i++) {
          this.tableData.push(row[i])
        }
        this.centerDialogVisible1 = true
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    subDelete(id) {
      this.delLoading = true
      del(id).then(res => {
        this.delLoading = false
        this.$refs[id].doClose()
        this.init()
        this.$notify({
          title: '删除成功',
          type: 'success',
          duration: 2500
        })
      }).catch(err => {
        this.delLoading = false
        this.$refs[id].doClose()
        console.log(err.response.data.message)
      })
    },
    copyText(row) {
      const Url2 = 'WeChat nickname : ' + row.invitation + '-' + row.customerNickname + ' \n' +
        'Deal站 : ' + row.dealSite + ' \n' +
        'Product name : ' + row.productName + ' \n' +
        'Link : ' + row.link + ' \n' +
        'Deal Price : ' + row.dealPrice + ' \n' +
        'Original Price : ' + row.originalPrice + ' \n' +
        'Code : ' + row.code + '(' + row.codeWork + ')' + '  \n' +
        'Discount : ' + row.discount + '%OFF  \n' +
        'Start Date : ' + row.startDate + ' \n' +
        'End Date : ' + row.endDate
      console.log(Url2)
      var oInput = document.createElement('span') // 创建一个隐藏input（重要！）
      oInput.innerText = Url2
      oInput.value = Url2 // 赋值
      console.log(oInput.value)
      // console.log(oInput.val())
      document.body.appendChild(oInput)
      // oInput.select() // 选择对象
      window.getSelection().selectAllChildren(oInput)
      document.execCommand('Copy') // 执行浏览器复制命令
      oInput.className = 'oInput'
      oInput.style.display = 'none'
      this.$message({
        message: '复制成功！',
        type: 'success',
        center: true
      })
    }
  }
}
</script>

<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
