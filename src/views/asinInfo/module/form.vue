<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="550px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item label="asin" >
        <el-input v-model="form.asin" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="标题" >
        <el-input v-model="form.title" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="站点" prop="site">
        <el-select v-model="form.site" placeholder="请选择" style="width: 370px">
          <el-option
            v-for="item in options"
            :key="item.site"
            :label="item.label"
            :value="item.site"/>
        </el-select>
      </el-form-item>
      <!--<el-form-item label="站点" >
        <el-input v-model="form.site" style="width: 370px;"/>
      </el-form-item>-->
      <el-form-item label="排除店铺" >
        <el-input v-model="form.excludeShop" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="通知频率" prop="site">
        <el-select v-model="form.startCount" placeholder="请选择" style="width: 370px">
          <el-option
            v-for="item in options1"
            :key="item.startCount"
            :label="item.label"
            :value="item.startCount"/>
        </el-select>
      </el-form-item>
      <el-form ref="form" :model="form" label-width="80px">
        <label class="el-form-item__label" style="width: 80px;">监控内容</label>
        <el-checkbox-group v-model="type" style="padding:12px 0px 5px">
          <el-checkbox label="跟卖监控" name="type"/>
          <el-checkbox label="标题监控" name="type"/>
          <el-checkbox label="价格监控" name="type"/>
          <el-checkbox label="五点监控" name="type"/>
        </el-checkbox-group>
      </el-form>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/asinInfo'
export default {
  props: {
    isAdd: {
      type: Boolean,
      required: true
    },
    sup_this: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      options: [{
        site: 'US',
        label: '美国'
      }, {
        site: 'UK',
        label: '英国'
      }, {
        site: 'DE',
        label: '德国'
      }, {
        site: 'JP',
        label: '日本'
      }, {
        site: 'FR',
        label: '法国'
      }, {
        site: 'ES',
        label: '西班牙'
      }, {
        site: 'IT',
        label: '意大利'
      }, {
        site: 'AU',
        label: '澳大利亚'
      }, {
        site: 'CA',
        label: '加拿大'
      }, {
        site: 'MX',
        label: '墨西哥'
      }, {
        site: 'IN',
        label: '印度'
      }],
      site: '',
      options1: [{
        startCount: 0,
        label: '半小时'
      }, {
        startCount: 1,
        label: '一小时'
      }, {
        startCount: 2,
        label: '两小时'
      }, {
        startCount: 5,
        label: '十小时'
      }],
      loading: false, dialog: false,
      type: [],
      form: {
        id: '',
        asin: '',
        title: '',
        site: '',
        excludeShop: '',
        startCount: 0,
        startDate: '',
        followListen: '',
        titleListen: '',
        priceListen: '',
        fivepointListen: ''
      },
      rules: {
      }
    }
  },
  watch: {
    form: function(newvar) {
      if (newvar.followListen === 'Yes') {
        this.type.push('跟卖监控')
      }
      if (newvar.titleListen === 'Yes') {
        this.type.push('标题监控')
      }
      if (newvar.priceListen === 'Yes') {
        this.type.push('价格监控')
      }
      if (newvar.fivepointListen === 'Yes') {
        this.type.push('五点监控')
      }
      console.log(this.type)
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    changelisten1() {
      if (this.type.indexOf('跟卖监控') !== -1) {
        this.form.followListen = 'Yes'
      } else this.form.followListen = 'No'
      if (this.type.indexOf('标题监控') !== -1) {
        this.form.titleListen = 'Yes'
      } else this.form.titleListen = 'No'
      if (this.type.indexOf('价格监控') !== -1) {
        this.form.priceListen = 'Yes'
      } else this.form.priceListen = 'No'
      if (this.type.indexOf('五点监控') !== -1) {
        this.form.fivepointListen = 'Yes'
      } else this.form.fivepointListen = 'No'
    },
    doSubmit() {
      this.loading = true
      this.changelisten1()
      if (this.isAdd) {
        this.doAdd()
      } else this.doEdit()
    },
    doAdd() {
      add(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '添加成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.$parent.$parent.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
      this.type = []
    },
    doEdit() {
      edit(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '修改成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.sup_this.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
      this.type = []
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        id: '',
        asin: '',
        title: '',
        site: '',
        excludeShop: '',
        startCount: '',
        startDate: '',
        count: 0,
        openId: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
