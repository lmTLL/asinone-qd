<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item
        label="openID"
      >
        <el-input v-model="form.openId" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="剩余次数"
      >
        <el-input v-model="form.num" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="微信昵称"
      >
        <el-input v-model="form.nickname" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="头像"
      >
        <el-input v-model="form.headimgurl" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="礼物名称"
      >
        <el-input v-model="form.prizesName" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="获得时间"
      >
        <el-input v-model="form.getprizesDate" style="width: 370px;"/>
      </el-form-item>
      <el-form-item
        label="微信ID"
      >
        <el-input v-model="form.vxId" style="width: 370px;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/prizes'

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
        openId:
            '',
        num:
            '',
        nickname:
            '',
        headimgurl:
            '',
        prizesName:
            '',
        getprizesDate:
            '',
        vxId:
            ''
      },
      rules: {}
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
        openId:
            '',
        num:
            '',
        nickname:
            '',
        headimgurl:
            '',
        prizesName:
            '',
        getprizesDate:
            '',
        vxId:
            ''
      }
    }
  }
}
</script>

<style scoped>

</style>
