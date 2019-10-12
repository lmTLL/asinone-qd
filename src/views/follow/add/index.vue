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
          placeholder="请输入内容"/>
        <p style="font-size: 20px">付款时请备注：<span style="color:red;">{{ form.paymentRemark }}</span></p>
        <div style="margin:0 auto;width: 900px;height: 480px;margin-top: -60px; border: 0px salmon solid; background:url('http://39.98.168.25:8082/statics/2019/07/19/f68ac56bcc618751ad03b5954a4805a9.png') no-repeat 0px -0px"/>
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
          placeholder="请输入内容"/>
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
        <img src="https://eladmin.asinone.vip/statics/2019/09/11/380eb864af9b49b781859634f5718289380eb864af9b49b781859634f5718289.png" style="width: 200px;height: 200px;margin-top: 10px"><br>
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
    <!--<div v-show="show" style="position:relative;left:18%;top:50%;padding-top: 30px;border: 0px black solid;width: 1000px;">-->
    <div v-show="show" style="position:relative;">
      <div style="text-align: center;border: black 0px solid;width: 65%;margin: 0 auto"><p style="font-size: 25px;font-weight: bold" >重要提醒</p>
        <p style="font-size: 50px;color: red">下单后请勿再找别人或<br>自己操作，以免有争议</p>
      </div>
    </div>
    <!--<div v-show="show1" style="position:relative;left:18%;top:50%;padding-top: 30px;border: 0px black solid;width: 1000px;height: 620px">-->
    <div v-show="show1" style="position:relative;">
      <div style="text-align: center;border: black 0px solid;width: 100%;margin: 0 auto"><p style="font-size: 25px;font-weight: bold" >填写跟卖信息</p>
      </div>
      <div style="border: black 0px solid;margin: 0 auto;width: 100%;">
        <div style="border: black 0px solid;margin: 0 auto;width: 530px">
          <el-form :model="form" :rules="rules" style="height: 500px;margin: 0 auto;margin-left: -40px" label-width="160px">
            <el-form-item label="跟卖asin:" prop="asin">
              <el-input v-model="form.asin" style="width: 400px;" placeholder="请输入asin"/>
            </el-form-item>
            <el-form-item label="站点:" prop="site">
              <el-select v-model="form.site" placeholder="请选择" style="width: 400px">
                <el-option
                  v-for="item in options"
                  :key="item.site"
                  :label="item.label"
                  :value="item.site"/>
              </el-select>
            </el-form-item>
            <el-form-item label="跟卖类型:" prop="followType">
              <el-select v-model="form.followType" placeholder="请选择跟卖类型" style="width: 400px">
                <el-option
                  v-for="item in options1"
                  :key="item.followType"
                  :label="item.label"
                  :value="item.followType"/>
              </el-select>
            </el-form-item>
            <el-form-item label="跟卖售价:" prop="followPrice">
              <el-input v-model="form.followPrice" style="width: 400px;" placeholder="请输入跟卖售价"><template v-if="form.site === 'US'" slot="append">美元</template><template v-if="form.site === 'DE' || form.site === 'FR' || form.site === 'IT' || form.site === 'ES'" slot="append">欧元</template><template v-if="form.site === 'JP'" slot="append">日元</template><template v-if="form.site === 'CA'" slot="append">加元</template><template v-if="form.site === 'UK'" slot="append">英镑</template></el-input>
            </el-form-item>
            <el-form-item label="跟卖时间:" prop="followTime">
              <el-input v-model="form.followTime" style="width: 400px;" placeholder="请输入具体时间，如：晚上11点"/>
            </el-form-item>
            <el-form-item label="跟卖方店铺链接或ID:" prop="followShopUrl">
              <el-input v-model="form.followShopUrl" style="width: 400px;" placeholder="请输入跟卖方店铺链接或ID"/>
            </el-form-item>
            <el-form-item label="跟卖方店铺名称:" prop="followShopName">
              <el-input v-model="form.followShopName" style="width: 400px;" placeholder="请输入跟卖方店铺名称"/>
            </el-form-item>
            <el-form-item label="质保时间:" prop="scope">
              <el-radio v-model="form.assuranceTime" label="15天" style="width: 100px">质保15天</el-radio>
              <el-radio v-model="form.assuranceTime" style="width: 100px" label="一个月">质保1个月</el-radio>
              <el-radio v-model="form.assuranceTime" style="width: 100px" label="三个月">质保3个月</el-radio>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div v-show="show2" style="position:relative;">
      <div style="">
        <div style="text-align: center;border: black 0px solid;width: 600px;margin: 0 auto;"><p style="font-size: 25px;font-weight: bold" >选择操作渠道</p>
          <el-button v-for="item in channelOptions" v-if="form.followType===item.followType&&form.assuranceTime===item.assuranceTime" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 120px;font-size: 20px" @click="Account(item.id)">{{ item.channelName }}：质保{{ item.assuranceTime }}，收费￥{{ item.price }}<span v-if="item.productCost==='1'">+1个跟卖方产品费</span>。<div style="width: 100%;word-break:break-all;"><br><span style="font-size: 12px;white-space: normal">备注：{{ item.remark }}</span></div></el-button>
          <!--<el-button v-if="form.followType==='FBA'&&form.assuranceTime==='15天'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('1')">小兔：质保15天，收费￥590。</el-button>
          <el-button v-if="form.followType==='FBM'&&form.assuranceTime==='15天'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('2')">小兔：质保15天，收费￥590。</el-button>
          <el-button v-if="form.followType==='FBA'&&form.assuranceTime==='一个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('3')">小兔：质保1个月，收费￥890。</el-button>
          <el-button v-if="form.followType==='FBM'&&form.assuranceTime==='一个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('4')">小兔：质保1个月，收费￥890。</el-button>
          <el-button v-if="form.followType==='FBM'&&form.assuranceTime==='一个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('5')">小冒：质保1个月，收费￥540+1个跟卖方产品费。</el-button>
          <el-button v-if="form.followType==='FBM'&&form.assuranceTime==='三个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('6')">小冒：质保3个月，收费￥740+1个跟卖方产品费。</el-button>
          <el-button v-if="form.followType==='FBA'&&form.assuranceTime==='一个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('7')">小内：质保1个月，收费￥2250。</el-button>
          <el-button v-if="form.followType==='FBM'&&form.assuranceTime==='一个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('8')">小内：质保1个月，收费￥900。</el-button>
          <el-button v-if="form.followType==='FBM'&&form.assuranceTime==='三个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('9')">小侠：质保3个月，收费￥1190。</el-button>
          <el-button v-if="form.followType==='FBA'&&form.assuranceTime==='三个月'" style="margin-top: 12px;position:relative;top:50%;margin-top: 20px;width: 600px;height: 80px;font-size: 20px" @click="Account('10')">小侠：质保3个月，收费￥1190。</el-button>-->
        </div>
      </div>
    </div>
    <div v-show="show3" style="position:relative;">
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
            <i class="el-icon-upload"/>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
          <el-input v-model="form.accountOrder" style="width: 360px;" placeholder="上传付款截图识别单号或手动输入"/>
        </div>
      </div>
    </div>
    <div style="position:relative;">
      <div style="border: black 0px solid;text-align: center;margin-top: 30px">
        <el-button v-show="buttonShow" style="" @click="back">上一步</el-button>
        <el-button v-show="buttonShow1" style="margin-left: 40px" @click="next">下一步</el-button>
        <el-button v-show="submitButton" :disabled="!firstClick" style="" @click="doAdd">提交，立刻开始打跟卖</el-button>
      </div>
    </div>
    <!--<el-steps :active="active" finish-status="success" style="padding-top: 200px">
      <el-step title="步骤 1"/>
      <el-step title="步骤 2"/>
      <el-step title="步骤 3"/>
    </el-steps>-->
  </div>
</template>

<script>
import { add } from '@/api/saleOrder'
import { getToken } from '@/utils/auth'
import { mapGetters } from 'vuex'
import { channelAll } from '@/api/channel'
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
      submitButton: false,
      firstClick: true,
      buttonShow1: true,
      show3: false,
      rate: 0,
      channelOptions: [],
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
      form: { projectName: '', asin: '', assuranceTime: '15天', site: '', followType: '', followPrice: '', followTime: '', followShopUrl: '', followShopName: '', accountImg: '', accountOrder: '', channelId: '', remark: '', paymentRemark: '' },
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
      }, {
        site: 'IT',
        label: '意大利'
      }, /* {
        site: 'AU',
        label: '澳大利亚'
      },*/ {
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
    doAdd() {
      this.firstClick = false
      /* if (this.form.accountImg !== '' && this.form.accountOrder !== '') {*/
      this.form.projectName = '打跟卖'
      add(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '添加成功',
          type: 'success',
          duration: 2500
        })
        this.firstClick = true
        // this.loading = false
        // this.$parent.$parent.init()
        this.$router.push({ path: this.redirect || '/nested/follow' })
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
          this.form.projectName = '打跟卖'
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
      this.$router.push({ path: this.redirect || '/nested/follow' })
    },
    initChannel() {
      this.channelOptions = []
      channelAll().then(row => {
        for (let i = 0; i < row.length; i++) {
          this.channelOptions.push(row[i])
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
    next() {
      if (this.active++ > 2) {
        this.active = 0
      }
      if (this.active === 1) {
        this.show = false
        this.buttonShow = true
        this.show1 = true
      }
      if (this.active === 2) {
        if (this.form.asin !== '' && this.form.site !== '' && this.form.followType !== '' && this.form.followPrice &&
         this.form.followTime !== '' && this.form.followShopUrl !== '' && this.form.followShopName && this.form.assuranceTime !== '') {
          this.buttonShow = true
          this.show1 = false
          this.show2 = true
          this.buttonShow1 = true
          this.submitButton = false
          this.show3 = false
          this.initChannel()
        } else {
          this.active--
          this.$notify({
            title: '请填写完整信息',
            type: 'error',
            duration: 2500
          })
        }
      }
      if (this.active === 3) {
        if (this.AccountPrice !== '') {
          this.dialogVisible = false
          this.dialogVisible1 = false
          this.dialogVisible3 = false
          this.buttonShow = true
          this.show1 = false
          this.show2 = false
          this.show3 = true
          this.buttonShow1 = false
          this.submitButton = true
        } else {
          this.active--
          this.$notify({
            title: '请选择操作渠道！',
            type: 'error',
            duration: 2500
          })
        }
      }
    },
    init() {

    },
    Account(id) {
      /* getSalePaymentCode().then(res => {
        this.form.paymentRemark = res
        this.waitForm.paymentRemarks = res
      }).catch(err => {
        console.log(err.response.data.message)
      })*/
      for (let i = 0; i < this.channelOptions.length; i++) {
        if (this.channelOptions[i].id === id) {
          if (this.channelOptions[i].productCost === '0') {
            this.form.channelId = id
            this.AccountPrice = '应付：￥' + this.channelOptions[i].price
            this.dialogVisible1 = true
            this.form.remark = '￥' + this.channelOptions[i].price
            this.waitForm.paymentPrice = this.channelOptions[i].price
            this.waitForm.paymentType = '0'
          } else {
            if (this.form.site === 'US') {
              this.rate = 7
            }
            if (this.form.site === 'JP') {
              this.rate = 0.06
            }
            if (this.form.site === 'CA') {
              this.rate = 5.5
            }
            if (this.form.site === 'UK') {
              this.rate = 9
            }
            if (this.form.site === 'DE' || this.form.site === 'FR' || this.form.site === 'ES' || this.form.site === 'AU' || this.form.site === 'IT') {
              this.rate = 8
            }
            this.form.channelId = id
            const price = this.channelOptions[i].price
            const productCost = this.form.followPrice
            const all = price + (productCost * this.rate)
            this.AccountPrice = '应付：' + price + '+' + productCost + '*' + this.rate + '=' + all
            this.dialogVisible1 = true
            this.form.remark = '￥' + all
            this.waitForm.paymentPrice = all
            this.waitForm.paymentType = '0'
          }
        }
      }
      /* if (num === '1') {
        this.form.channelId = 13
        this.AccountPrice = '应付：￥590'
        this.dialogVisible = true
        this.form.remark = '￥590'
      }
      if (num === '2') {
        this.form.channelId = 14
        this.AccountPrice = '应付：￥590'
        this.dialogVisible = true
        this.form.remark = '￥590'
      }
      if (num === '3') {
        this.form.channelId = 15
        this.AccountPrice = '应付：￥890'
        this.dialogVisible = true
        this.form.remark = '￥890'
      }
      if (num === '4') {
        this.form.channelId = 26
        this.AccountPrice = '应付：￥890'
        this.dialogVisible = true
        this.form.remark = '￥890'
      }
      if (num === '5') {
        this.form.channelId = 17
        if (this.form.site === 'US') {
          this.rate = 7
        }
        if (this.form.site === 'JP') {
          this.rate = 0.06
        }
        if (this.form.site === 'CA') {
          this.rate = 5.5
        }
        if (this.form.site === 'UK') {
          this.rate = 9
        }
        if (this.form.site === 'DE' || this.form.site === 'FR' || this.form.site === 'ES' || this.form.site === 'AU' || this.form.site === 'IT') {
          this.rate = 8
        }
        const price = 540
        const productCost = this.form.followPrice
        const all = price + (productCost * this.rate)
        this.AccountPrice = '应付：540+' + productCost + '*' + this.rate + '=' + all
        this.dialogVisible = true
        this.form.remark = '540+' + productCost + '*' + this.rate + '=' + all
      }
      if (num === '6') {
        this.form.channelId = 18
        if (this.form.site === 'US') {
          this.rate = 7
        }
        if (this.form.site === 'JP') {
          this.rate = 0.06
        }
        if (this.form.site === 'CA') {
          this.rate = 5.5
        }
        if (this.form.site === 'UK') {
          this.rate = 9
        }
        if (this.form.site === 'DE' || this.form.site === 'FR' || this.form.site === 'ES' || this.form.site === 'AU' || this.form.site === 'IT') {
          this.rate = 8
        }
        const price = 740
        const productCost = this.form.followPrice
        const all = price + (productCost * this.rate)
        this.AccountPrice = '应付：740+' + productCost + '*' + this.rate + '=' + all
        this.dialogVisible = true
        this.form.remark = '740+' + productCost + '*' + this.rate + '=' + all
      }
      if (num === '7') {
        this.form.channelId = 19
        this.AccountPrice = '应付：￥2250'
        this.dialogVisible = true
        this.form.remark = '￥2250'
      }
      if (num === '8') {
        this.form.channelId = 20
        this.AccountPrice = '应付：￥900'
        this.dialogVisible = true
        this.form.remark = '￥900'
      }
      if (num === '9') {
        this.form.channelId = 27
        this.AccountPrice = '应付：￥1190'
        this.dialogVisible = true
        this.form.remark = '￥1190'
      }
      if (num === '10') {
        this.form.channelId = 28
        this.AccountPrice = '应付：￥1190'
        this.dialogVisible = true
        this.form.remark = '￥1190'
      }*/
    },
    back() {
      this.active--
      if (this.active === 0) {
        this.buttonShow = false
        this.show = true
        this.show1 = false
      }
      if (this.active === 1) {
        this.show1 = true
        this.show2 = false
      }
      if (this.active === 2) {
        this.buttonShow = true
        this.show1 = false
        this.show2 = true
        this.show3 = false
        this.buttonShow1 = true
        this.submitButton = false
      }
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
