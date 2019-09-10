<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <router-link to="/nested/menu2"><div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <div class="card-panel-text" style="font-size: 25px;color: #40c9c6">A+自助下单</div>
          <!---->
        </div>
        <div class="card-panel-description" style="color: #40c9c6">
          <!--<svg-icon icon-class="visits" class-name="card-panel-icon" />-->
          <!--<count-to :start-val="0" :end-val="count.newVisits" :duration="2600" class="card-panel-num"/>-->
        </div>
      </div></router-link>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <router-link to="/nested/menu1">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <div class="card-panel-text" style="font-size: 25px;color: #36a3f7">打跟卖自助下单</div>

          </div>
          <div class="card-panel-description">
            <!--<svg-icon icon-class="ipvisits" class-name="card-panel-icon" />-->
          <!--<count-to :start-val="0" :end-val="count.newIp" :duration="3" class="card-panel-num"/>-->
          </div>
        </div>
      </router-link>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <router-link to="/nested/offSitAdd">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <div class="card-panel-text" style="font-size: 25px">站外自助下单</div>

          </div>
          <div class="card-panel-description">
            <!--<svg-icon icon-class="visits" class-name="card-panel-icon" />-->
            <!--<count-to :start-val="0" :end-val="count.recentVisits" :duration="3200" class="card-panel-num"/>-->
          </div>
        </div>
      </router-link>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <div class="card-panel-text" style="font-size: 25px">敬请期待</div>

        </div>
        <div class="card-panel-description">
          <!--<svg-icon icon-class="ipvisits" class-name="card-panel-icon" />-->
          <!--<count-to :start-val="0" :end-val="count.recentIp" :duration="3600" class="card-panel-num"/>-->
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import { get } from '@/api/visits'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      count: { newIp: 0, newVisits: 0, recentIp: 0, recentVisits: 0 }
    }
  },
  mounted() {
    get().then(res => {
      this.count.newIp = res.newIp
      this.count.newVisits = res.newVisits
      this.count.recentIp = res.recentIp
      this.count.recentVisits = res.recentVisits
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .icon-people {
      color: red;
    }
    .icon-message {
      color: red;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
