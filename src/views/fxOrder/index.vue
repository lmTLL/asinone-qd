<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <!--表格渲染-->
    <el-table v-loading="loading" ref="table" :data="data" size="small" style="width: 100%;">
      <el-table-column type="selection" width="45"/>
      <el-table-column
        prop="fxSaleNumber"
        width="120"
        label="订单编号"/>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="nickName"
        label="昵称"/>
      <el-table-column
        prop="site"
        label="站点"/>
      <el-table-column
        prop="oldSku"
        label="老SKU"/>
      <el-table-column
        prop="oldFnsku"
        label="老FNSKU"/>
      <el-table-column
        prop="oldAsin"
        label="老Asin"/>
      <el-table-column
        prop="newAsin"
        label="新Asin"/>
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
        label="成功时间">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.updateDate) }}</span>
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
      <el-table-column
        prop="invitation"
        label="所属销售"/>
      <el-table-column
        prop="erpSaleNumber"
        width="120"
        label="ERP单号"/>
      <el-table-column
        prop="isReviews"
        label="是否保留评论">
        <template slot-scope="scope">
          <span v-if="scope.row.isReviews==='1'">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="checkPermission(['ADMIN','FXSALEORDER_ALL','FXSALEORDER_EDIT','FXSALEORDER_DELETE'])"
        label="操作"
        width="150px"
        align="center">
        <template slot-scope="scope">
          <edit
            v-permission="['ADMIN','FXSALEORDER_ALL','FXSALEORDER_EDIT']"
            v-if="scope.row.status==='0'||checkPermission(['ADMIN'])"
            :data="scope.row"
            :sup_this="sup_this"/>
          <el-popover
            v-permission="['ADMIN','FXSALEORDER_ALL','FXSALEORDER_DELETE']"
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
import { del } from '@/api/fxSaleOrder'
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
      this.getDict('fx_saleorder_status')
    })
  },
  methods: {
    parseTime,
    checkPermission,
    beforeInit() {
      this.url = 'api/fxSaleOrder'
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
