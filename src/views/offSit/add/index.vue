<template >
  <div style="padding:30px;" >

    <el-dialog
      :append-to-body="true"
      :visible.sync="dialogVisible"
      width="940px">
      <div style="width: 530px;height: 600px;position:relative;">
        <el-input
          v-model="AccountPrice"
          :disabled="true"
          placeholder="请输入内容">
        </el-input>
        <p style="font-size: 20px">付款时请备注：<span style="color:red;">{{ form.paymentRemark }}</span></p>
        <div style="margin:0 auto;width: 900px;height: 480px;margin-top: -60px; border: 0px salmon solid; background:url('http://39.98.168.25:8082/statics/2019/07/19/f68ac56bcc618751ad03b5954a4805a9.png') no-repeat 0px -0px">

        </div>
        <div style="width: 0px;margin: 0 auto;margin-top: 40px"><el-button type="primary" style="width: 400px" @click="dialogVisible1=true">OK，Get it</el-button></div>
        <!--<span slot="footer" class="dialog-footer" style="margin: 0 auto;" >
        </span>-->
      </div>
    </el-dialog>

    <el-dialog
      :append-to-body="true"
      :visible.sync="dialogVisible1"
      :before-close="handleClose"
      title="支付款项"
      width="576px">
      <div style="width: 530px;height: 500px">
        <el-input
          v-model="AccountPrice"
          :disabled="true"
          placeholder="请输入内容">
        </el-input>
        <!--<p style="font-size: 20px">付款时请备注：<span style="color:red;">{{ form.paymentRemark }}</span></p>-->
        <img src="https://eladmin.asinone.vip/statics/2019/09/11/7ee51b7e97831c9abd2ddbc15370cf0b7ee51b7e97831c9abd2ddbc15370cf0b.png" style="width: 200px;height: 300px;margin-left: 160px;margin-top: 10px"><br>
        <span style="margin-left: 207px">打开<span style="color: red">支付宝</span>扫一扫</span><br><br><br>
        <span style="margin-left: 100px">如果此刻需要向财务请款，可先保存订单。待贵司财务付款后，<br>&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;再到列表中选中该订单上传付款截图。</span><br><br>
        <span slot="footer" class="dialog-footer" style="margin-left: 80px;">
          <el-button type="primary" @click="doAdd">保存订单，稍后上传截图</el-button>
          <el-button type="primary" @click="next">上传付款截图</el-button>
        </span>
      </div>
    </el-dialog>

    <el-dialog
      :append-to-body="true"
      :visible.sync="dialogVisible2"
      :before-close="handleClose"
      width="576px">
      <div style="width: 500px;height: 500px;text-align: center">
        <img src="http://39.98.168.25:8082/statics/2019/07/19/380eb864af9b49b781859634f5718289.png" style="width: 200px;height: 200px;margin-top: 10px"><br>
        <p style="font-size: 30px">验证通过，付款成功</p>
        <el-button type="primary" style="width: 200px;margin-top: 50px" @click="doClose">关闭</el-button>
        <!--<span slot="footer" class="dialog-footer" style="margin-left: 80px;">
        </span>-->
      </div>
    </el-dialog>

    <el-dialog
      :append-to-body="true"
      :visible.sync="dialogVisible3"
      :before-close="handleClose"
      width="576px">
      <div style="width: 546px;height: 500px;text-align: center">
        <img src="http://39.98.168.25:8082/statics/2019/07/19/0ad4ff3829e10782c7a76a848cf9a8bf.png" style="width: 200px;height: 200px;margin-top: 10px"><br>
        <p style="font-size: 20px">支付宝后台查询失败</p>
        <p style="font-size: 20px">请确认备注里填写的数字是：{{ form.paymentRemark }}及付款金额是{{ waitForm.paymentPrice }}元</p>
        <p style="font-size: 20px;margin-top: 50px;color: red">请使用以下方法继续完成流程</p>
        <el-button type="primary" style="width: 240px;" @click="next">上传带有付款订单号界面的截图</el-button>
        <!--<span slot="footer" class="dialog-footer" style="margin-left: 80px;">
        </span>-->
      </div>
    </el-dialog>

    <el-dialog
      :append-to-body="true"
      :visible.sync="dialogVisible4"
      :before-close="handleClose"
      width="576px">
      <div v-loading="loading" style="width: 546px;height: 500px;text-align: center">
        <span style="font-size: 30px;color: red">正在验证付款信息，请稍等</span>
      </div>
    </el-dialog>
    <el-alert :closable="false" title="打跟卖自助下单"/>
    <div v-show="show" style="position:relative;">
      <div style="text-align: center;border: black 0px solid;width: 100%;margin: 0 auto"><p style="font-size: 25px;font-weight: bold" >填写站外信息</p>
      </div>
      <div style="border: black 0px solid;margin: 0 auto;width: 100%;">
        <div style="border: black 0px solid;margin: 0 auto;width: 530px">
          <el-form :model="form" :rules="rules" style="height: 680px;margin: 0 auto" label-width="130px">
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
        </div>
      </div>
    </div>
    <div v-show="show1" style="position:relative;">
      <div style="border: black 0px solid;">
        <div style="text-align: center;border: black 0px solid;width: 65%;margin: 0 auto;"><p style="font-size: 25px;font-weight: bold" >上传付款截图</p>
          <img v-if="form.accountImg" :src="form.accountImg" style="width: 280px;height: 500px">
          <el-upload
            :headers="headers"
            :action="imagesUploadApi"
            :on-success="handleSuccess"
            class="upload-demo"
            drag
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
          <el-input v-model="form.accountOrder" style="width: 360px;" placeholder="上传付款截图识别单号或手动输入"/>
        </div>
      </div>
    </div>
    <div style="position:relative;">
      <div style="border: black 0px solid;text-align: center;margin-top: 20px">
        <el-button v-show="buttonShow" @click="backs">上一步</el-button>
        <el-button v-show="buttonShow1" style="margin-left: 130px;width: 400px" type="success" @click="Account">完成</el-button>
        <el-button v-show="submitButton" style="" @click="doAdd">提交</el-button>
        <!--<el-button v-show="buttonShow" style="" @click="doAdd">提交</el-button>-->
      </div>
    </div>
  </div>
</template>

<script>
import { add } from '@/api/zwSaleOrder'
import { getToken } from '@/utils/auth'
import { mapGetters } from 'vuex'
import { zwDealSiteAll } from '@/api/zwDealSite'
import { addWaitPayment } from '@/api/saleOrder'
import { getSalePaymentCode } from '@/api/saleOrder'
import { getWaitPayment } from '@/api/saleOrder'
import { updateWaitPayment } from '@/api/saleOrder'
import { getOpen } from '@/api/saleOrder'
export default {
  data() {
    return {
      headers: {
        'Authorization': 'Bearer ' + getToken()
      },
      checked: true,
      submitButton: false,
      buttonShow1: true,
      show3: false,
      rate: 0,
      dealOptions: [],
      AccountPrice: '',
      loading: true,
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      queryTime: 0,
      show2: false,
      show1: false,
      show: true,
      buttonShow: false,
      active: 0,
      timer: '',
      entity: { remark: '', price: 0 },
      form: { projectName: '', site: '', dealSite: '', productName: '', link: '', dealPrice: '', originalPrice: '', code: '', discount: '', startDate: '', endDate: '', accountOrder: '', accountImg: '', codeWork: 'code works on all colors and all sizes' },
      waitForm: { paymentRemarks: '', paymentPrice: 0, paymentType: '' },
      rules: {
        // asin: [{ required: true, trigger: 'blur', message: 'asin不能为空' }/*, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }*/],
        // followPrice: [{ required: true, trigger: 'blur', message: '请选择站点！' }, { pattern: /^([1-9]\d*(\.\d*[1-9])?)|(0\.\d*[1-9])*/, message: '只能输入5-25个字母、数字、下划线' }]
      },
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
      followType: ''
    }
  },
  computed: {
    ...mapGetters([
      'imagesUploadApi'
    ])
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.form.accountImg = response.url
      this.form.accountOrder = response.msg
    },
    codeWorkInit() {
      console.log('11')
      if (this.checked) {
        this.form.codeWork = 'code works on all colors and all sizes'
      } else {
        this.form.codeWork = ''
      }
    },
    doAdd() {
      /* if (this.form.accountImg !== '' && this.form.accountOrder !== '') {*/
      this.form.projectName = '站外'
      add(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '添加成功',
          type: 'success',
          duration: 2500
        })
        // this.loading = false
        // this.$parent.$parent.init()
        this.$router.push({ path: this.redirect || '/nested/offSit' })
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
      /* } else {
        this.$notify({
          title: '请上传付款截图,并仔细验证支付单号',
          type: 'error',
          duration: 2500
        })
      }*/
    },
    doPayment() {
      // const entity = this.entity
      this.dialogVisible = false
      this.dialogVisible1 = false
      this.dialogVisible2 = false
      this.dialogVisible4 = true
      addWaitPayment(this.waitForm).then(res => {
        getOpen().then(res => {

        }).catch(err => {
          this.loading = false
          console.log(err.response.data.message)
        })
        this.timer = setInterval(this.paymentQuery, 1000)
        this.queryTime = 0
        // alert(res.msg)
        // this.resetForm()
        /* if (res.msg === '') {
          this.form.accountOrder = res.msg
          this.form.projectName = '打跟卖'
          add(this.form).then(res => {
            this.resetForm()
            // this.loading = false
            // this.$parent.$parent.init()
            this.dialogVisible = false
            this.dialogVisible1 = false
            this.dialogVisible2 = true
          }).catch(err => {
            this.loading = false
            console.log(err.response.data.message)
          })
        } else {
          this.dialogVisible = false
          this.dialogVisible1 = false
          this.dialogVisible2 = false
          this.dialogVisible3 = true
        }*/
        // this.loading = false
        // this.$parent.$parent.init()
        // this.$router.push({ path: this.redirect || '/nested/follow' })
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    paymentQuery() {
      getWaitPayment(this.waitForm.paymentRemarks).then(res => {
        this.queryTime++
        console.log(res)
        if (this.queryTime === 2) {
          updateWaitPayment(this.waitForm.paymentRemarks).then(res => {
          }).catch(err => {
            this.loading = false
            console.log(err.response.data.message)
          })
        }
        if (res.paymentType === '1') {
          clearInterval(this.timer)
          this.dialogVisible4 = false
          this.form.accountOrder = res.paymentId
          this.form.projectName = '站外'
          add(this.form).then(res => {
            this.resetForm()
            this.$notify({
              title: '添加成功',
              type: 'success',
              duration: 2500
            })
            this.dialogVisible2 = true
            // this.loading = false
            // this.$parent.$parent.init()
          }).catch(err => {
            this.loading = false
            console.log(err.response.data.message)
          })
        } else if (res.paymentType === '2') {
          clearInterval(this.timer)
          this.dialogVisible4 = false
          this.dialogVisible3 = true
        }
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    doClose() {
      this.$router.push({ path: this.redirect || '/nested/offSit' })
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
    resetForm() {
      this.AccountPrice = ''
      this.form = { asin: '', assuranceTime: '1', site: '', followType: '', followPrice: '', followTime: '', followShopUrl: '', followShopName: '', accountImg: '', accountOrder: '' }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    backs() {
      this.show1 = false
      this.show = true
      this.buttonShow = false
      this.buttonShow1 = true
      this.submitButton = false
    },
    next() {
      this.show1 = true
      this.dialogVisible1 = false
      this.dialogVisible3 = false
      this.buttonShow1 = false
      this.show = false
      this.submitButton = true
      this.buttonShow = true
    },
    init() {

    },
    Account() {
      getSalePaymentCode().then(res => {
        this.form.paymentRemark = res
        this.waitForm.paymentRemarks = res
        for (let i = 0; i < this.dealOptions.length; i++) {
          if (this.dealOptions[i].dealSite === this.form.dealSite) {
            this.AccountPrice = '应付: ' + this.dealOptions[i].price + '  RMB'
            this.dialogVisible1 = true
            this.form.remark = '￥' + this.dealOptions[i].price
            this.waitForm.paymentPrice = this.dealOptions[i].price
            this.waitForm.paymentType = '0'
          }
        }
      }).catch(err => {
        console.log(err.response.data.message)
      })
    }
  }
}
</script>

<style>
  input[disabled],input:disabled,input.disabled{
    color: #f7745e;
    font-size: 20px;
    -webkit-text-fill-color:red;
    -webkit-opacity:1;
    opacity: 1;
  }
   body {
    margin: 0;
  }
</style>
