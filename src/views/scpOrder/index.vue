<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <!--表格渲染-->
    <el-table v-loading="loading" ref="table" :data="data" size="small" style="width: 100%;">
      <el-table-column type="selection" width="45"/>
      <!--<el-table-column
        prop="scpSaleNumber"
        width="120"
        label="订单编号"/>-->
      <el-table-column
        width="300"
        prop="fileName"
        label="文件名"/>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="nickName"
        label="昵称"/>
      <el-table-column
        prop="invitation"
        label="所属销售"/>
      <!--<el-table-column
        prop="channel"
        label="所属渠道"/>-->
      <el-table-column
        prop="site"
        label="站点"/>
      <el-table-column
        prop="asin"
        width="130"
        label="asin"/>
      <!--<el-table-column
        :show-overflow-tooltip="true"
        prop="cpUrl"
        label="差评链接"/>-->
      <el-table-column ref="table" :show-overflow-tooltip="true" prop="cpUrl" label="差评链接" width="110px">
        <template slot-scope="scope">
          <a :href="scope.row.cpUrl" style="color: #42b983" target="_blank"><span>点击打开</span></a>
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
        prop="canKillOrderDate"
        width="140"
        label="可撤单时间">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.canKillOrderDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="checkPermission(['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_EDIT','SCPSALEORDER_DELETE_TIME'])"
        prop="deleteDate"
        width="140"
        label="删除时间">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.deleteDate) }}</span>
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

      <el-table-column width="120" prop="erpSaleNumber" label="ERP单号">
        <template slot-scope="scope">
          <a :href="scope.row.erpSaleNumber" target="_blank">
            <el-image
              v-if="scope.row.erpSaleNumber.startsWith('http://eladmin.asinone.vip')"
              slot="reference"
              :src="scope.row.erpSaleNumber"
              :preview-src-list="srcList"
              style="width: 50px; height: 50px">
            </el-image>
          </a>
          <span v-if="!scope.row.erpSaleNumber.startsWith('http://eladmin.asinone.vip')">{{ scope.row.erpSaleNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="checkPermission(['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_EDIT','SCPSALEORDER_DELETE'])"
        label="操作"
        width="150px"
        align="center">
        <template slot-scope="scope">
          <edit
            v-permission="['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_EDIT']"
            v-if="scope.row.status!='1'||checkPermission(['ADMIN'])"
            :data="scope.row"
            :sup_this="sup_this"/>
          <el-popover
            v-permission="['ADMIN','SCPSALEORDER_ALL','SCPSALEORDER_DELETE']"
            v-if="scope.row.status!='1'||checkPermission(['ADMIN'])"
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
import { del } from '@/api/scpSaleOrder'

import { parseTime } from '@/utils/index'
import initDict from '@/mixins/initDict'

import eHeader from './module/header'
import edit from './module/edit'
import ElLink from "element-ui/packages/link/src/main";

export default {
  components: {ElLink, eHeader, edit },
  mixins: [initData, initDict],
  data() {
    return {
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      delLoading: false, sup_this: this
    }
  },
  created() {
    this.$nextTick(() => {
      this.getDict('scp_saleorder_status')
      this.init()
    })
  },
  methods: {
    parseTime,
    checkPermission,
    beforeInit() {
      this.url = 'api/scpSaleOrder'
      const sort = 'id,desc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const type = query.type
      const value = query.value
      const status = query.status
      if (type && value) {
        this.params[type] = value
      }status
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
