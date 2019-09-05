<template>
  <div class="app-container">
    <el-dialog :visible.sync="dialogTableVisible" :append-to-body="true" width="30%" title="跟卖详情" >

      <!--<el-table :data="followDetailsOptions" height="500px">-->
      <!--<el-table-column property="asin" label="asin"/>-->
      <!--<el-table-column property="shopName" label="跟卖店铺名" width="150"/>-->
      <!--<el-table-column property="seller" label="跟卖店铺ID" width="200"/>-->
      <!--<el-table-column property="followType" label="跟卖类型" width="100"/>-->
      <!--<el-table-column property="followPrice" label="跟卖价格" width="100"/>-->
      <!--<el-table-column prop="startDate" label="更新时间" width="200">-->
      <!--<template slot-scope="scope">-->
      <!--<span>{{ parseTime(scope.row.startDate) }}</span>-->
      <!--</template>-->
      <!--</el-table-column>-->
      <!--</el-table>-->
      <div class="block">
        <div class="delate-step">
          <div style="width: 100%; height: 300px; padding-bottom: 40px; display: table;margin-top: 10px;">
            <el-timeline >
              <el-timeline-item
                v-for="(activity, index) in followDetailsOptions"
                v-show="listenState.followListen === 'Yes'"
                :key="index"
                :size="large"
                :timestamp="parseTime(activity.startDate)"
                color="#409EFF"
                placement="top"
              >
                <div >
                  <div style="position: absolute" class="kong"> 跟买店铺名：</div>
                  <div style="margin-left: 104px">{{ activity.shopName }}</div>
                </div>
                <div >
                  <div class="kong">  跟买店铺ID：{{ activity.seller }}</div>
                  <div class="kong">  跟卖类型：{{ activity.followType }}</div>
                  <div class="kong">  跟卖价格：{{ activity.followPrice }}</div>
                </div>
              </el-timeline-item>
            </el-timeline>
            <div v-show="listenState.followListen !== 'Yes'" style="text-align:center;margin-top: 120px">跟卖监控未开启</div>
            <div v-show="followDetailsOptions.length === 0 && listenState.followListen === 'Yes'" style="text-align:center;margin-top: 120px">暂无数据</div>
          </div>
        </div>
      </div>
    </el-dialog>
    <eHeader :query="query"/>

    <!--新增的价格，标题，五点监控-->
    <el-dialog :visible.sync="OthersdialogTableVisible" :append-to-body="true" title="竞品详情" >
      <div class="block">
        <div class="delate-step">
          <div style="width: 93%; height: 300px; padding-bottom: 40px; display: table;margin-top: 10px;">

            <el-timeline >
              <el-timeline-item
                v-for="(activity, index) in followOthersOptions"
                v-show="listenState.titleListen === 'Yes' || listenState.priceListen === 'Yes' || listenState.fivepointListen === 'Yes' "
                :key="index"
                :size="large"
                :timestamp="parseTime(activity.startDate)"
                color="#409EFF"
                placement="top"
              >
                <div v-show="listenState.titleListen === 'Yes'" >
                  <div style="position: absolute" class="kong"> 标题：</div>
                  <div style="margin-left: 55px">{{ activity.title }}</div>
                </div>
                <div v-show="listenState.priceListen === 'Yes'" >
                  <div style="position: absolute" class="kong"> 价格：</div>
                  <div style="margin-left: 55px">{{ activity.price }}</div>
                </div>
                <div v-show="listenState.fivepointListen === 'Yes'">
                  <div style="position: absolute" class="kong"> 五点：</div>
                  <div v-for="five in splits(activity.fivePoints)" style="margin-left: 55px">{{ five }}</div>
                </div>
              </el-timeline-item>
            </el-timeline>
            <div v-show="listenState.titleListen !== 'Yes' && listenState.priceListen !== 'Yes' && listenState.fivepointListen !== 'Yes'" style="text-align:center;margin-top: 120px">请添加相关监控</div>
            <div
              v-show="followOthersOptions.length === 0 && ( listenState.titleListen === 'Yes' || listenState.priceListen === 'Yes' || listenState.fivepointListen === 'Yes' )"
              style="text-align:center;margin-top: 120px"
            >暂无数据</div>
          </div>
        </div>
      </div>
    </el-dialog>

    <!--表格渲染-->
    <el-table v-loading="loading" ref="table" :height="tableHeight1" :data="data" size="small" style="width: 100%;" fit="false">
      <el-table-column v-if="checkPermission(['ADMIN1'])" prop="id" label="id"/>
      <el-table-column prop="asin" label="asin" width="100px"/>
      <el-table-column :show-overflow-tooltip="true" prop="title" label="标题" />
      <el-table-column prop="site" label="站点" width="100px"/>
      <el-table-column prop="excludeShop" label="排除店铺" width="200px" />
      <el-table-column prop="startDate" label="开始监控时间" width="150px">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.startDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="updateDate" label="更新时间" >
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.updateDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="checkPermission(['ADMIN'])" label="头像" width="100">
        <template scope="scope">
          <img :src="scope.row.headImgurl" width="40" height="40" class="head_pic"/>
        </template>
      </el-table-column>
      <el-table-column v-if="checkPermission(['ADMIN'])" prop="nickName" label="用户" width="100px"/>
      <el-table-column v-if="checkPermission(['ADMIN1'])" prop="openId" label="openId"/>
      <el-table-column v-if="checkPermission(['ADMIN','ASININFO_ALL','ASININFO_EDIT','ASININFO_DELETE'])" label="操作" width="400px" align="center">
        <template slot-scope="scope">
          <el-button v-show="scope.row.followListen === 'Yes'" type="primary" size="mini" icon="el-icon-document" plain @click="initFollowDetails(scope.row.asin);isListen(scope.row)">跟卖详情</el-button>
          <el-button v-show="scope.row.followListen === 'No'" class="filter-item" size="mini" icon="el-icon-document" @click="initFollowDetails(scope.row.asin);isListen(scope.row)">跟卖详情</el-button>

          <el-button v-show="scope.row.titleListen === 'Yes'|| scope.row.priceListen === 'Yes'|| scope.row.fivepointListen === 'Yes'" type="primary" size="mini" icon="el-icon-document" plain @click="initFollowOthers(scope.row);isListen(scope.row)">竞品详情</el-button>
          <el-button v-show="scope.row.titleListen === 'No'&& scope.row.priceListen === 'No'&& scope.row.fivepointListen === 'No'" class="filter-item" size="mini" icon="el-icon-document" @click="initFollowOthers(scope.row);isListen(scope.row)">竞品详情</el-button>
          <edit v-permission="['ADMIN','ASININFO_ALL','ASININFO_EDIT']" :data="scope.row" :sup_this="sup_this"/>
          <el-popover
            v-permission="['ADMIN','ASININFO_ALL','ASININFO_DELETE']"
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
import { del } from '@/api/asinInfo'
import { followDetailsAll } from '@/api/followDetails'
import { followOthersAll } from '@/api/followDetails'
import { parseTime } from '@/utils/index'
import eHeader from './module/header'
import edit from './module/edit'
export default {
  components: { eHeader, edit },
  mixins: [initData],
  data() {
    return {
      tableHeight1: 0,
      dialogTableVisible: false,
      OthersdialogTableVisible: false,
      followDetailsOptions: [],
      followOthersOptions: [],
      delLoading: false, sup_this: this,
      listenState: {}
    }
  },
  mounted: function() {
    this.tableHeight1 = window.innerHeight - this.$refs.table.$el.offsetTop - 50
    this.initAsin()
    // window.innerHeight:浏览器的可用高度
    // this.$refs.table.$el.offsetTop：表格距离浏览器的高度
    // 后面的50：根据需求空出的高度，自行调整
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
      this.url = 'api/asinInfo'
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
    initAsin(){

    },
    isListen(data) {
      this.listenState = data
      console.log(data)
    },
    splits(data) {
      return data.split('@!@')
    },
    initFollowDetails(asin) {
      this.followDetailsOptions = []
      followDetailsAll(asin).then(row => {
        for (let i = 0; i < row.length; i++) {
          this.followDetailsOptions.push(row[i])
        }
        console.log(this.followDetailsOptions)
        this.dialogTableVisible = true
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    initFollowOthers(data) {
      this.followOthersOptions = []
      var befordist = []
      var afterdist = []
      followOthersAll(data.asin).then(row => {
        for (let i = 0; i < row.length; i++) {
          befordist.push(row[i])
          afterdist.push(row[i])
        }
        for (var i = 0; i < befordist.length; i++) {
          console.log(befordist.length)
          for (var j = i + 1; j < befordist.length; j++) {
            var x = []
            var coun = 0
            if (data.titleListen === 'Yes') {
              x.push(befordist[j].title === befordist[i].title)
            }
            if (data.priceListen === 'Yes') {
              x.push(befordist[j].price === befordist[i].price)
            }
            if (data.fivepointListen === 'Yes') {
              x.push(befordist[j].fivePoints === befordist[i].fivePoints)
            }
            for (var zz = 0; zz < x.length; zz++) {
              if (x[zz]) {
                coun++
              }
            }
            if (coun === x.length) {
              befordist.splice(j, 1)
              j--
            }
          }
        }
        this.followOthersOptions = befordist
        this.followOthersOptions = this.followOthersOptions.reverse()
        console.log(this.followOthersOptions)
        this.OthersdialogTableVisible = true
      }).catch(err => {
        console.log(err.response.data.message)
      })
    }
  }
}
</script>

<style scoped>
.kong{
  padding-left: 20px
}
  .kongkong{
    padding-left: 76px
  }

</style>
