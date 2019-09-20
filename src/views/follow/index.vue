<template>
  <div class="app-container">
    <eHeader :query="query" :dicts="dicts"/>
    <!--表格渲染-->
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
    <el-table v-loading="loading" ref="table" :data="data" :height="tableHeight" size="medium" style="width: 100%;" fit="false">
      <el-table-column type="selection" width="45"/>
      <el-table-column ref="table" prop="saleNumber" label="订单编号" width="158px" fixed>
        <template slot-scope="scope">
          <i v-if="scope.row.financePayment==='0'&&checkPermission(['ADMIN','SALEORDER_SIGNPAYMENT'])" style="color: red">未付&#8194;</i><i v-if="scope.row.newOrder==='0'&&!checkPermission(['NO_NEW_ORDER'])" style="color: red">new&#8194;</i>{{ scope.row.saleNumber }}
        </template>
      </el-table-column>
      <!--<el-table-column prop="saleNumber" label="订单编号"/>-->
      <el-table-column prop="projectName" label="服务项目"/>
      <el-table-column prop="channelName" label="所选渠道"/>
      <el-table-column prop="link" label="沟通" width="110px">
        <template slot-scope="scope">
          <el-link type="success" target="_blank" title="点击沟通" @click="messageInit(scope.row.saleNumber)">点击沟通</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="invitation" label="所属销售"/>
      <el-table-column prop="customerNickname" label="客户昵称"/>
      <el-table-column prop="site" label="站点"/>
      <el-table-column :show-overflow-tooltip="true" prop="asin" label="asin"/>
      <el-table-column prop="followType" label="跟卖类型"/>
      <el-table-column prop="followPrice" label="跟卖售价"/>
      <el-table-column :show-overflow-tooltip="true" prop="followTime" label="跟卖时间"/>
      <el-table-column ref="table" :show-overflow-tooltip="true" prop="followShopUrl" label="跟卖店铺链接" width="110px">
        <template slot-scope="scope">
          <a :href="scope.row.followShopUrl" style="color: #42b983" target="_blank"><span>点击打开</span></a>
        </template>
      </el-table-column>
      <!--<el-table-column prop="followShopUrl" label="跟卖店铺链接"/>-->
      <el-table-column :show-overflow-tooltip="true" prop="followShopName" label="跟卖店铺名称" width="110px"/>
      <el-table-column prop="assuranceTime" label="质保时间"/>
      <el-table-column prop="startTime" label="提交时间" width="100px" >
        <template slot-scope="scope" >
          <span>{{ parseTime(scope.row.startTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="accountTime" label="支付时间" width="100px">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.accountTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="!checkPermission(['INVISIBLE'])" :show-overflow-tooltip="true" prop="accountOrder" label="支付单号"/>
      <!--<el-table-column ref="table" :show-overflow-tooltip="true" prop="outType" label="赶走状态">
        <template slot-scope="scope">
          <span v-if="scope.row.outType ==='1'">已赶走</span>
          <span v-if="scope.row.outType ==='0'">未赶走</span>
        </template>
      </el-table-column>-->
      <el-table-column prop="outTime" label="赶走时间" width="100px"/>
      <el-table-column prop="overdueTime" label="过保时间" width="100px">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.overdueTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="!checkPermission(['INVISIBLE'])" ref="table" prop="accountImg" label="付款截图">
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
      <el-table-column prop="remark" label="备注"/>
      <el-table-column label="操作" width="205px" align="center">
        <template slot-scope="scope">
          <a :href="scope.row.excel+scope.row.id" style="color: #42b983"><el-button class="filter-item" size="mini" icon="el-icon-document">Excel</el-button></a>
          <edit v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_EDIT']" :data="scope.row" :sup_this="sup_this"/>
          <el-popover
            v-permission="['ADMIN','SALEORDER_ALL','SALEORDER_DELETE']"
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

<script>
import checkPermission from '@/utils/permission'
import initData from '@/mixins/initData'
import { del } from '@/api/saleOrder'
import { parseTime } from '@/utils/index'
import eHeader from './module/header'
import edit from './module/edit'
import initDict from '@/mixins/initDict'
import { getMessage } from '@/api/saleOrder'
import { addMessage } from '@/api/saleOrder'
export default {
  components: { eHeader, edit },
  mixins: [initData, initDict],
  data() {
    return {
      tableData: [],
      tableHeight: 0,
      centerDialogVisible1: false,
      queryForm: { msgKey: '', msgValue: '' },
      delLoading: false, sup_this: this
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
      this.getDict('saleorder_status')
    })
  },
  methods: {
    parseTime,
    checkPermission,
    beforeInit() {
      this.url = 'api/saleOrder'
      const sort = 'id,desc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const type = query.type
      const value = query.value
      if (type && value) { this.params[type] = value }
      return true
    },
    sendMsg() {
      addMessage(this.queryForm).then(row => {
        this.queryForm.msgValue = ''
        this.messageInit(this.queryForm.msgKey)
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    messageInit(saleNumber) {
      this.queryForm.msgKey = saleNumber
      this.queryForm.msgValue = ''
      this.tableData = []
      getMessage(saleNumber).then(row => {
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
    }
  }
}
</script>

<style scoped>

</style>
