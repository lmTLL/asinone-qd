<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <el-dialog
      :append-to-body="true"
      :visible.sync="centerDialogVisible"
      title="效果图"
      width="40%"
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
    <!--表格渲染-->
    <el-table v-loading="loading" ref="table" :data="data" :height="tableHeight" size="medium" style="width: 100%;" fit="false">
      <el-table-column type="selection" width="45"/>
      <el-table-column ref="table" prop="zwSaleNumber" label="订单编号" width="150px" fixed>
        <template slot-scope="scope">
          <i v-if="scope.row.newOrder==='0'" style="color: red">new&#8194;</i>{{ scope.row.zwSaleNumber }}
        </template>
      </el-table-column>
      <el-table-column prop="projectName" label="服务项目"/>
      <el-table-column v-if="!checkPermission(['ZW_INVISIBLE'])" prop="zwChannelName" label="渠道"/>
      <el-table-column prop="invitation" label="所属销售"/>
      <el-table-column prop="customerNickname" label="客户昵称"/>
      <el-table-column prop="site" label="站点"/>
      <!--<el-table-column prop="link" label="asin"/>-->
      <el-table-column prop="link" label="asin" width="110px">
        <template slot-scope="scope">
          <el-link :href="scope.row.link" target="_blank" title="点击跳转" type="success">{{ scope.row.link.substring(scope.row.link.indexOf('dp/')+3,scope.row.link.indexOf('/ref')) }}</el-link>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" prop="productName" label="productName" width="115px"/>
      <el-table-column :show-overflow-tooltip="true" prop="dealSite" label="Deal站"/>
      <el-table-column :show-overflow-tooltip="true" prop="dealPrice" label="Deal price" width="100px"/>
      <el-table-column :show-overflow-tooltip="true" prop="originalPrice" label="Original price" width="115px"/>
      <el-table-column :show-overflow-tooltip="true" prop="code" label="code"/>
      <el-table-column :show-overflow-tooltip="true" prop="codeWork" label="codeWork" width="90px"/>
      <el-table-column :show-overflow-tooltip="true" prop="discount" label="Discount"/>
      <el-table-column prop="startDate" label="开始时间" width="100px"/>
      <el-table-column prop="endDate" label="结束时间" width="100px"/>
      <el-table-column :show-overflow-tooltip="true" prop="postingEffect" label="发帖效果"/>
      <el-table-column prop="postingImg" label="发帖截图" width="110px">
        <template slot-scope="scope">
          <el-link target="_blank" title="点击展示" type="success" @click="open(scope.row.postingImg)">点击展示</el-link>
        </template>
      </el-table-column>
      <!--<el-table-column prop="postingImg" label="发帖截图"/>-->
      <el-table-column prop="submitTime" label="提交时间" width="100px">
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
      <el-table-column prop="remark" label="备注"/>
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

<script>
import checkPermission from '@/utils/permission'
import initData from '@/mixins/initData'
import { del } from '@/api/zwSaleOrder'
import { parseTime } from '@/utils/index'
import eHeader from './module/header'
import edit from './module/edit'
import initDict from '@/mixins/initDict'
export default {
  components: { eHeader, edit },
  mixins: [initData, initDict],
  data() {
    return {
      centerDialogVisible: false,
      tableHeight: 0,
      delLoading: false,
      sup_this: this,
      urls: []
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
        'Discount : ' + row.discount + '  \n' +
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

</style>
