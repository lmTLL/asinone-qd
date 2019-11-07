<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item
        label="文件名"
      >
        <el-input v-model="form.fileName" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="昵称"
      >
        <el-input v-model="form.nickName" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="站点"
      >
        <el-input v-model="form.site" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="asin"
      >
        <el-input v-model="form.asin" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="差评链接"
      >
        <el-input v-model="form.cpUrl" style="width: 370px;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/scpSaleOrder'

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
      loading: false, dialog: false,
      form: {
        id:
            '',
        scpSaleNumber:
            '',
        fileName:
            '',
        nickName:
            '',
        site:
            '',
        asin:
            '',
        cpUrl:
            '',
        startDate:
            '',
        canKillOrderDate:
            '',
        status:
            '',
        invitation:
            '' },
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
        id:
                '',
        scpSaleNumber:
                '',
        fileName:
                '',
        nickName:
                '',
        site:
                '',
        asin:
                '',
        cpUrl:
                '',
        startDate:
                '',
        canKillOrderDate:
                '',
        status:
                '',
        invitation:
                '' }
    }
  }
}
</script>

<style scoped>

</style>
