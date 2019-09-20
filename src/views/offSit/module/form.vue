<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="630px" center>
    <!--<el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item label="站点" >
        <el-input v-model="form.site" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Deal站" >
        <el-input v-model="form.dealSite" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="asin" >
        <el-input v-model="form.link" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Deal price" >
        <el-input v-model="form.dealPrice" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Original price" >
        <el-input v-model="form.originalPrice" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="code" >
        <el-input v-model="form.code" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="Discount" >
        <el-input v-model="form.discount" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="开始时间" >
        <el-input v-model="form.startDate" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="结束时间" >
        <el-input v-model="form.endDate" style="width: 370px;"/>
      </el-form-item>
    </el-form>-->
    <el-form ref="form" :model="form" :rules="rules" size="small" style="height: 600px;margin: 0 auto" label-width="130px">
      <el-form-item label="站点:" prop="site">
        <el-select v-model="form.site" placeholder="请选择" style="width: 400px" @change="initDeals(form.site)" >
          <el-option
            v-for="item in options"
            :key="item.site"
            :label="item.label"
            :value="item.site"/>
        </el-select>
      </el-form-item>
      <el-form-item label="Deal 站:" prop="dealSite">
        <el-select v-model="form.dealSite" placeholder="请选择" style="width: 400px">
          <el-option
            v-for="item in dealOptions"
            :key="item.id"
            :label="item.dealSite"
            :value="item.dealSite"/>
        </el-select>
      </el-form-item>
      <el-form-item label="Product name:" prop="productName">
        <el-input v-model="form.productName" style="width: 400px;" placeholder="请输入Product name"/>
      </el-form-item>

      <el-form-item label="Link:" prop="link">
        <el-input v-model="form.link" style="width: 400px;" placeholder="请输入Link"></el-input>
      </el-form-item>
      <el-form-item label="Deal Price:" prop="dealPrice">
        <el-input v-model="form.dealPrice" style="width: 400px;" placeholder="请输入Deal Price"><template v-if="form.site === 'US'|| form.site === 'AU'" slot="append">美元</template><template v-if="form.site === 'DE' || form.site === 'FR' || form.site === 'IT' || form.site === 'ES'" slot="append">欧元</template><template v-if="form.site === 'JP'" slot="append">日元</template><template v-if="form.site === 'CA'" slot="append">加元</template><template v-if="form.site === 'UK'" slot="append">英镑</template></el-input>
      </el-form-item>
      <el-form-item label="Original Price:" prop="originalPrice">
        <el-input v-model="form.originalPrice" style="width: 400px;" placeholder="请输入Original Price"><template v-if="form.site === 'US'|| form.site === 'AU'" slot="append">美元</template><template v-if="form.site === 'DE' || form.site === 'FR' || form.site === 'IT' || form.site === 'ES'" slot="append">欧元</template><template v-if="form.site === 'JP'" slot="append">日元</template><template v-if="form.site === 'CA'" slot="append">加元</template><template v-if="form.site === 'UK'" slot="append">英镑</template></el-input>
      </el-form-item>
      <el-form-item label="Code:" prop="code">
        <el-input v-model="form.code" style="width: 400px;" placeholder="请输入code"/>
        <el-checkbox v-model="checked" @change="codeWorkInit">code works on all colors and all sizes</el-checkbox>
        <el-input v-if="!checked" v-model="form.codeWork" style="width: 400px;" placeholder="code works on black&red"/>
      </el-form-item>
      <el-form-item label="Discount:" prop="discount">
        <el-input v-model="form.discount" style="width: 400px;" placeholder="请输入Discount"><template slot="append">OFF</template></el-input>
      </el-form-item>
      <el-form-item label="Start Date:" prop="startDate">
        <div class="block" style="width: 400px;">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="form.startDate"
            style="width: 400px"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间">
          </el-date-picker>
          <p style="height: 30px;margin-top: -10px">code在美国时间凌晨4点或4点前生效的， 今晚发帖。 </p>
          <p style="height: 10px;margin-top: -15px">4点以后生效的明天安排发帖</p>
        </div>
      </el-form-item>
      <el-form-item label="End Date:" prop="endDate">
        <div class="block" style="width: 400px;">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="form.endDate"
            style="width: 400px"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/zwSaleOrder'
import { zwDealSiteAll } from '@/api/zwDealSite'
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
      }, /* {
        site: 'IT',
        label: '意大利'
      },*/ {
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
      site: '',
      options1: [{
        followType: 'FBA',
        label: 'FBA'
      }, {
        followType: 'FBM',
        label: 'FBM'
      }],
      dealOptions: [],
      form: {
        id: '',
        zwSaleNumber: '',
        projectName: '',
        zwChannelId: '',
        zwChannelName: '',
        zwChannelUserId: '',
        invitation: '',
        customerNickname: '',
        site: '',
        link: '',
        dealSite: '',
        dealPrice: '',
        originalPrice: '',
        code: '',
        discount: '',
        startDate: '',
        endDate: '',
        postingEffect: '',
        postingImg: '',
        submitTime: '',
        accountTime: '',
        accountOrder: '',
        status: '',
        customerId: '',
        remark: ''
      },
      checked: false,
      rules: {
      }
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    initDeals(site) {
      this.form.dealSite = ''
      console.log(this.form.dealSite)
      this.dealOptions = []
      zwDealSiteAll(site).then(row => {
        this.form.dealSite = row[0].dealSite
        for (let i = 0; i < row.length; i++) {
          this.dealOptions.push(row[i])
        }
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    doSubmit() {
      this.loading = true
      if (this.isAdd) {
        this.doAdd()
      } else this.doEdit()
    },
    codeWorkInit() {
      if (this.checked) {
        this.form.codeWork = 'code works on all colors and all sizes'
      } else {
        this.form.codeWork = ''
      }
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
        zwSaleNumber: '',
        projectName: '',
        zwChannelId: '',
        zwChannelName: '',
        zwChannelUserId: '',
        invitation: '',
        customerNickname: '',
        site: '',
        link: '',
        dealSite: '',
        dealPrice: '',
        originalPrice: '',
        code: '',
        discount: '',
        startDate: '',
        endDate: '',
        postingEffect: '',
        postingImg: '',
        submitTime: '',
        accountTime: '',
        accountOrder: '',
        status: '',
        customerId: '',
        remark: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
