<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="800px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item
        label="站点"
      >
        <el-select v-model="form.site" placeholder="请选择" style="width: 670px">
          <el-option
            v-for="item in options"
            :key="item.site"
            :label="item.label"
            :value="item.site"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="老SKU"
      >
        <el-input v-model="form.oldSku" style="width: 670px;"/>
      </el-form-item>
      <el-form-item
        label="老FNSKU"
      >
        <el-input v-model="form.oldFnsku" style="width: 670px;" placeholder="只接X0开头的。B0开头的不接，库存出问题，不负责"/>
      </el-form-item>
      <el-form-item
        label="老Asin"
      >
        <el-input v-model="form.oldAsin" style="width: 670px;" placeholder="有问题需要翻新的Asin"/>
      </el-form-item>
      <el-form-item
        label="新Asin"
      >
        <el-input v-model="form.newAsin" style="width: 670px;" placeholder="删除老链接，用老SKU+新UPC创建新链接"/>
      </el-form-item>
      <el-form-item
        label=""
      >
        <el-radio v-model="form.isReviews" label="1" style="width: 400px">保留评论</el-radio>
        <el-radio v-model="form.isReviews" style="width: 135px" label="0">不保留评论</el-radio>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
      <div style="text-align: left;font-size: 14px">
        <br>
        <span>注意事项：</span><br>
        <span>1、删除老链接，用老SKU+新UPC创建新链接</span><br>
        <span>2、只能翻新：美国、加拿大、墨西哥、欧洲五国、日本（其他国家暂时不支持）</span><br>
        <span>3、产品由于侵权下架的，请新建Listing的时候将侵权词汇删除，否则新建的Listing24小时候可能会再次下架，我们将不负责售后问题；</span><br>
        <span>4、新链接请确保信息完整，上传图片，标题，描述要填</span><br>
        <span>5、如果产品本身是带电池的，那么有可能换好aisn之后会面临危险品审核，正常2-5天。由于本部分是卖家自行处理的，我们不负责处理危险品审核，所以请联系亚马逊客服解决该问题。</span><br>
        <span>6、关于库存问题，由于换asin业务不会影响卖家库存，也不会改变原来的库存状态，所以对于之前处于不可售的库存在更换asin之后也会继续保持不可售状态，请知悉；</span><br>
        <span>7、针对卖家不小心将修复好的Listing删掉的问题，我们将不负责处理售后问题；</span><br>
        <span>8、在新建Listing的时候详情页面要补充完整，如果不填写完整的话产品会显示“Suppress”也就是禁止显示的状态，前台不可售，请您补充完整再提交。</span><br>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/fxSaleOrder'

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
      }, /* {
        site: 'AU',
        label: '澳大利亚'
      },*/ {
        site: 'CA',
        label: '加拿大'
      }, {
        site: 'MX',
        label: '墨西哥'
      } /* {
        site: 'IN',
        label: '印度'
      }*/],
      form: {
        id:
            '',
        fxSaleNumber:
            '',
        nickName:
            '',
        site:
            '',
        oldSku:
            '',
        oldFnsku:
            '',
        oldAsin:
            '',
        newAsin:
            '',
        startDate:
            '',
        updateDate:
            '',
        status:
            '',
        customerId:
            '',
        invitation:
            '',
        channelUserId:
            '',
        erpSaleNumber:
            '',
        isReviews:
            '1' },
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
        fxSaleNumber:
                '',
        nickName:
                '',
        site:
                '',
        oldSku:
                '',
        oldFnsku:
                '',
        oldAsin:
                '',
        newAsin:
                '',
        startDate:
                '',
        updateDate:
                '',
        status:
                '',
        customerId:
                '',
        invitation:
                '',
        channelUserId:
                '',
        erpSaleNumber:
                '',
        isReviews:
                '' }
    }
  }
}
</script>

<style scoped>

</style>
