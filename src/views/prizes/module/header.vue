<template>
  <div class="head-container">
    <!-- 搜索 -->
    <el-input
      v-model="query.value"
      clearable
      placeholder="输入搜索内容"
      style="width: 200px;"
      class="filter-item"
      @keyup.enter.native="toQuery"/>
    <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
      <el-option
        v-for="item in queryTypeOptions"
        :key="item.key"
        :label="item.display_name"
        :value="item.key"/>
    </el-select>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索
    </el-button>
    <!-- 新增 -->
    <div style="display: inline-block;margin: 0px 2px;">
      <el-button
        v-permission="['ADMIN','PRIZES_ALL','PRIZES_CREATE']"
        class="filter-item"
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="$refs.form.dialog = true">新增
      </el-button>
      <eForm ref="form" :is-add="true"/>
    </div>

    <div v-permission="['ADMIN','PRIZES_ALL','PRIZESNUM_CREATE']" style="display: inline-block;">
      <el-button
        class="filter-item"
        size="mini"
        type="success"
        icon="el-icon-connection"
        @click="prizesNum($event)">生成抽奖码</el-button>
    </div>
  </div>
</template>

<script>
import eForm from './form'
import { add } from '@/api/prizesNum'
import clipboard from '@/utils/clipboard'

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
      queryTypeOptions: [
        {
          key: 'openId',
          display_name: 'openID'
        },
        {
          key: 'nickname',
          display_name: '微信昵称'
        },
        {
          key: 'prizesName',
          display_name: '礼物名称'
        },
        {
          key: 'getprizesDate',
          display_name: '获得时间'
        },
        {
          key: 'vxId',
          display_name: '微信ID'
        }
      ]
    }
  },
  methods: {
    async prizesNum(event) {
      add().then(res => {
        const prizesNum = res.prizesNum
        clipboard(prizesNum, event)
      }).catch(err => {
        console.log(err)
      })
    },
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
    }
  }
}
</script>
