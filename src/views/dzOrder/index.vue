<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <!--表格渲染-->
    <el-table v-loading="loading" ref="table" :data="data" size="small" style="width: 100%;">
      <el-table-column type="selection" width="45"/>
      <el-table-column
        prop="dzSaleNumber"
        width="100"
        label="订单编号"/>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="nickname"
        label="昵称"/>
      <el-table-column
        prop="invitation"
        label="所属销售"/>
      <el-table-column
        prop="site"
        label="站点"/>
      <el-table-column
        prop="asin"
        label="asin"/>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="reviewUrl"
        width="140"
        label="review链接"/>
      <el-table-column
        prop="dzNum"
        label="点赞数量"/>
      <el-table-column
        prop="nowNum"
        label="现有数量"/>
      <el-table-column
        prop=""
        label="验收数量">
        <template slot-scope="scope">
          <span>{{ parseInt(scope.row.dzNum+scope.row.nowNum) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="startDate"
        width="140"
        label="下单时间">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.startDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="updateDate"
        width="140"
        label="付款时间">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.updateDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column width="120" prop="accountImg" label="支付截图">
        <template slot-scope="scope">
          <a v-if="scope.row.accountImg!==''&&scope.row.accountImg!==null" :href="scope.row.accountImg" target="_blank">
            <img
              :src="scope.row.accountImg"
              class="el-avatar">
          </a>
        </template>
      </el-table-column>
      <el-table-column
        prop="accountOrder"
        label="支付单号"/>
      <el-table-column ref="table" :show-overflow-tooltip="true" prop="status" label="状态">
        <template slot-scope="scope">
          <!--<div v-for="item in dicts" :key="item.id">
            <el-tag v-if="scope.row.enabled.toString() === item.value" :type="scope.row.enabled ? '' : 'info'">{{ item.label }}</el-tag>
          </div>-->
          <span v-for="item in dicts" v-if="scope.row.status ===item.value">{{ item.label }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="checkPermission(['ADMIN','DZSALEORDER_ALL','DZSALEORDER_EDIT','DZSALEORDER_DELETE'])"
        label="操作"
        width="150px"
        align="center">
        <template slot-scope="scope">
          <edit
            v-permission="['ADMIN','DZSALEORDER_ALL','DZSALEORDER_EDIT']"
            v-if="scope.row.status==='0'||scope.row.status==='1'||checkPermission(['ADMIN'])"
            :data="scope.row"
            :sup_this="sup_this"/>
          <el-popover
            v-permission="['ADMIN','DZSALEORDER_ALL','DZSALEORDER_DELETE']"
            :ref="scope.row.id"
            placement="top"
            width="180">
            <p>确定删除本条数据吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">
                取消
              </el-button>
              <el-button
                :loading="delLoading"
                type="primary"
                size="mini"
                @click="subDelete(scope.row.id)">确定
              </el-button>
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
import { del } from '@/api/dzSaleOrder'
import initDict from '@/mixins/initDict'

import { parseTime } from '@/utils/index'

import eHeader from './module/header'
import edit from './module/edit'

export default {
  components: { eHeader, edit },
  mixins: [initData, initDict],
  data() {
    return {
      delLoading: false, sup_this: this
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
      this.getDict('dz_saleorder_status')
    })
  },
  methods: {
    parseTime,
    checkPermission,
    beforeInit() {
      this.url = 'api/dzSaleOrder'
      const sort = 'id,desc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const type = query.type
      const value = query.value
      const status = query.status
      if (type && value) {
        this.params[type] = value
      }
      if (status !== '' && status !== null) { this.params['status'] = status }
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
    }
  }
}
</script>

<style scoped>

</style>
