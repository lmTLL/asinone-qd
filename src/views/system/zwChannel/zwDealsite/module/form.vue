<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item label="站点:" prop="site">
        <el-select v-model="form.site" placeholder="请选择" style="width: 370px;" @change="initChannel" >
          <el-option
            v-for="item in options"
            :key="item.site"
            :label="item.label"
            :value="item.site"/>
        </el-select>
      </el-form-item>
      <el-form-item label="Deal 站" >
        <el-input v-model="form.dealSite" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="价格" >
        <el-input v-model="form.price" style="width: 370px;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/zwDealSite'
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
      } /* {
        site: 'MX',
        label: '墨西哥'
      },*/ /* {
        site: 'IN',
        label: '印度'
      }*/],
      loading: false, dialog: false,
      form: {
        id: '',
        site: '',
        dealSite: '',
        price: ''
      },
      rules: {
      }
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    doSubmit() {
      this.loading = true
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
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        id: '',
        site: '',
        dealSite: '',
        price: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
