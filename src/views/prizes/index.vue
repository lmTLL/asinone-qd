<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <!--表格渲染-->
    <el-table v-loading="loading" :data="data" size="small" style="width: 100%;">
      <el-table-column
        prop="openId"
        label="openID"/>
      <el-table-column
        prop="num"
        label="剩余次数"/>
      <el-table-column
        prop="nickname"
        label="微信昵称"/>
      <el-table-column ref="table" prop="headimgurl" label="头像">
        <template slot-scope="scope">
          <a v-if="scope.row.headimgurl!==''" :href="scope.row.headimgurl" style="color: #42b983" target="_blank"><img :src="scope.row.headimgurl" alt="" class="el-avatar"></a>
        </template>
      </el-table-column>
      <el-table-column
        prop="prizesName"
        label="礼物名称"/>
      <el-table-column
        prop="getprizesDate"
        label="获得时间">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.getprizesDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="vxId"
        label="微信ID"/>
      <el-table-column
        v-if="checkPermission(['ADMIN','PRIZES_ALL','PRIZES_EDIT','PRIZES_DELETE'])"
        label="操作"
        width="150px"
        align="center">
        <template slot-scope="scope">
          <edit
            v-permission="['ADMIN','PRIZES_ALL','PRIZES_EDIT']"
            :data="scope.row"
            :sup_this="sup_this"/>
          <el-popover
            v-permission="['ADMIN','PRIZES_ALL','PRIZES_DELETE']"
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
import { del } from '@/api/prizes'

import { parseTime } from '@/utils/index'

import eHeader from './module/header'
import edit from './module/edit'

export default {
  components: { eHeader, edit },
  mixins: [initData],
  data() {
    return {
      delLoading: false, sup_this: this
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    parseTime,
    checkPermission,
    beforeInit() {
      this.url = 'api/prizes'
      const sort = 'id,desc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const type = query.type
      const value = query.value
      if (type && value) {
        this.params[type] = value
      }
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
