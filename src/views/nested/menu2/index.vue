<template id="sss" aria-disabled="false">
  <div style="padding:30px;">
    <el-dialog
      :append-to-body="true"
      :visible.sync="centerDialogVisible"
      title="提示"
      width="40%"
      center>
      <div class="demo-image__lazy" style="width: 100%">
        <el-col style="width: 100%">
          <el-card v-for="url in urls" shadow="hover" style="width: 100%;height: 100%">
            <el-image :key="url" :src="url" lazy @click="closes(url)"/>
          </el-card>
        </el-col>
      </div>
      <span slot="footer" class="dialog-footer">
        <span>&#8195;</span>
        <!--<el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->
      </span>
    </el-dialog>
    <el-alert :closable="false" title="A+自助下单"/>
    <div v-show="show" style="position:relative;left:32%;top:50%;padding-top: 30px;border: 0px black solid;width: 500px;">
      <div style="position:relative;left:22%;top:50%;border: black 0px solid">
        <div style="text-align: center;border: black 0px solid;width: 65%"><p style="font-size: 25px;font-weight: bold" >基本信息</p></div>
        <el-form :model="form" style="width: 500px;height: 180px" label-width="77px">
          <el-form-item label="asin:" prop="asin">
            <el-input v-model="form.asin" style="width: 200px;" placeholder="请输入asin"/>
          </el-form-item>
          <el-form-item label="站点:" prop="site">
            <el-select v-model="form.value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="资料范围:" prop="scope">
            <el-radio v-model="form.radio" label="1" style="width: 100px">所有变体同<br>&#8195;&#8195;步该资料</el-radio>
            <el-radio v-model="form.radio" style="width: 100px" label="2">该资料只上<br>&#8195;&#8195;当前ASIN</el-radio>
          </el-form-item>
        </el-form>
        <div style="text-align: center;border: black 0px solid;width: 65%">
          <!--<el-button type="primary" style="background:rgba(0,0,0,0.31);border: 0px" @click="cancel">重置</el-button>
          <el-button :loading="loading" type="primary" style="background:#79cedb;border: 0px" @click="doSubmit">确认</el-button>-->
        </div>
      </div>
    </div>
    <div v-show="show1">
      <div style="width: 100%;height: 50px;margin:0 auto;text-align: center;">
      <p style="font-size: 25px;font-weight: bold" >选择模板(≤5个)</p></div>
      <el-col :span="8" style="width: 102%;border: black 0px solid;">
        <el-card id="ssssss" shadow="hover" style="width: 900px;height: 400px;margin:0 auto;">
          <div v-show="model1_1" :model="modelData1_1" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_1_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_1.imageUrl1" id="modelData1_1_img1" :src="modelData1_1.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">300:400</i>
              </el-upload>
              <el-input
                v-model="modelData1_1.text1"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_1.text2"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_1.text3"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData1_1.textarea1"
                :autosize="{ minRows: 5, maxRows: 5}"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData1_1.point1" @click="modelData1_1.point1=!modelData1_1.point1">新增</el-button>
              <div v-show="modelData1_1.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_1.point1=!modelData1_1.point1"/><el-input
                v-model="modelData1_1.point1text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point2" style="margin-left: 40%" @click="modelData1_1.point2=!modelData1_1.point2">新增</el-button></div>
              <div v-show="modelData1_1.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_1.point2=!modelData1_1.point2"/><el-input
                v-model="modelData1_1.point2text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point3" style="margin-left: 40%" @click="modelData1_1.point3=!modelData1_1.point3">新增</el-button></div>
              <div v-show="modelData1_1.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_1.point3=!modelData1_1.point3"/><el-input
                v-model="modelData1_1.point3text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point4" style="margin-left: 40%" @click="addModellength1_1('4')">新增</el-button></div>
              <div v-show="modelData1_1.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('4')"/><el-input
                v-model="modelData1_1.point4text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point5" style="margin-left: 40%" @click="addModellength1_1('5')">新增</el-button></div>
              <div v-show="modelData1_1.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('5')"/><el-input
                v-model="modelData1_1.point5text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point6" style="margin-left: 40%" @click="addModellength1_1('6')">新增</el-button></div>
              <div v-show="modelData1_1.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('6')"/><el-input
                v-model="modelData1_1.point6text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point7" style="margin-left: 40%" @click="addModellength1_1('7')">新增</el-button></div>
              <div v-show="modelData1_1.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('7')"/><el-input
                v-model="modelData1_1.point7text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point8" style="margin-left: 40%" @click="addModellength1_1('8')">新增</el-button></div>
              <div v-show="modelData1_1.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('8')"/><el-input
                v-model="modelData1_1.point8text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_1_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_1.imageUrl2" id="modelData1_1_img2" :src="modelData1_1.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">350:175</i>
              </el-upload>
              <el-input
                v-model="modelData1_1.text4"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData1_1.textarea2"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData1_1.point9" @click="modelData1_1.point9=!modelData1_1.point9">新增</el-button>
              <div v-show="modelData1_1.point9" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_1.point9=!modelData1_1.point9"/><el-input
                v-model="modelData1_1.point9text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point10" style="margin-left: 40%" @click="addModellength1_1('10')">新增</el-button></div>
              <div v-show="modelData1_1.point10" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('10')"/><el-input
                v-model="modelData1_1.point10text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point11" style="margin-left: 40%" @click="addModellength1_1('11')">新增</el-button></div>
              <div v-show="modelData1_1.point11" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('11')"/><el-input
                v-model="modelData1_1.point11text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point12" style="margin-left: 40%" @click="addModellength1_1('12')">新增</el-button></div>
              <div v-show="modelData1_1.point12" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('12')"/><el-input
                v-model="modelData1_1.point12text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point13" style="margin-left: 40%" @click="addModellength1_1('13')">新增</el-button></div>
              <div v-show="modelData1_1.point13" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('13')"/><el-input
                v-model="modelData1_1.point13text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point14" style="margin-left: 40%" @click="addModellength1_1('14')">新增</el-button></div>
              <div v-show="modelData1_1.point14" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('14')"/><el-input
                v-model="modelData1_1.point14text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point15" style="margin-left: 40%" @click="addModellength1_1('15')">新增</el-button></div>
              <div v-show="modelData1_1.point15" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('15')"/><el-input
                v-model="modelData1_1.point15text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData1_1.point16" style="margin-left: 40%" @click="addModellength1_1('16')">新增</el-button></div>
              <div v-show="modelData1_1.point16" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_1('16')"/><el-input
                v-model="modelData1_1.point16text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model1_2" :model="modelData1_2" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_2_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_2.imageUrl1" id="modelData1_2_img1" :src="modelData1_2.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_2_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_2.imageUrl2" id="modelData1_2_img2" :src="modelData1_2.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_2.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_2.textarea1"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData1_2.text2"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_2.textarea2"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_2_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_2.imageUrl3" id="modelData1_2_img3" :src="modelData1_2.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_2_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_2.imageUrl4" id="modelData1_2_img4" :src="modelData1_2.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_2.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_2.textarea3"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData1_2.text4"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_2.textarea4"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_3" :model="modelData1_3" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_3_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_3.imageUrl1" id="modelData1_3_img1" :src="modelData1_3.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_3.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_3.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_4" :model="modelData1_4" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_4_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_4.imageUrl1" id="modelData1_4_img1" :src="modelData1_4.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_4.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_4.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_5" :model="modelData1_5" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_5_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_5.imageUrl1" id="modelData1_5_img1" :src="modelData1_5.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_5.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_5.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_6" :model="modelData1_6" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_6.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_6.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_6_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_6.imageUrl1" id="modelData1_6_img1" :src="modelData1_6.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model1_7" :model="modelData1_7" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 10%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_7.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_7_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_7.imageUrl1" id="modelData1_7_img1" :src="modelData1_7.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData1_7.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_7.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_7_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_7.imageUrl2" id="modelData1_7_img2" :src="modelData1_7.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData1_7.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_7.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_7_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_7.imageUrl3" id="modelData1_7_img3" :src="modelData1_7.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData1_7.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_7.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_7_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_7.imageUrl4" id="modelData1_7_img4" :src="modelData1_7.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData1_7.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_7.textarea4"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_8" :model="modelData1_8" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
              <el-button v-show="!modelData1_8.point1" style="float: bottom;margin-top: 268px" @click="modelData1_8.point1=!modelData1_8.point1">新增</el-button>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_8_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_8.imageUrl1" id="modelData1_8_img1" :src="modelData1_8.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_8.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData1_8.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_8_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_8.imageUrl2" id="modelData1_8_img2" :src="modelData1_8.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_8.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData1_8.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_8_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_8.imageUrl3" id="modelData1_8_img3" :src="modelData1_8.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_8.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData1_8.text6"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_8_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_8.imageUrl4" id="modelData1_8_img4" :src="modelData1_8.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_8.text7"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData1_8.text8"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_8_5"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_8.imageUrl5" id="modelData1_8_img5" :src="modelData1_8.imageUrl5" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_8.text9"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData1_8.text10"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div v-show="modelData1_8.point1" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_8.point1=!modelData1_8.point1"/><el-input
                  v-model="modelData1_8.point1text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point2" @click="addModellength1_8('2')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point2" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('2')"/><el-input
                  v-model="modelData1_8.point2text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point3" @click="addModellength1_8('3')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point2text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point2text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point2text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point2text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point2text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point3" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('3')"/><el-input
                  v-model="modelData1_8.point3text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point4" @click="addModellength1_8('4')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point3text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point3text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point3text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point3text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point3text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point4" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('4')"/><el-input
                  v-model="modelData1_8.point4text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point5" @click="addModellength1_8('5')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point4text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point4text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point4text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point4text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point4text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point5" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('5')"/><el-input
                  v-model="modelData1_8.point5text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point6" @click="addModellength1_8('6')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point6" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('6')"/><el-input
                  v-model="modelData1_8.point6text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point7" @click="addModellength1_8('7')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point6text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point6text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point6text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point6text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point6text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point7" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('7')"/><el-input
                  v-model="modelData1_8.point7text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point8" @click="addModellength1_8('8')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point7text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point7text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point7text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point7text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point8" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('8')"/><el-input
                  v-model="modelData1_8.point8text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point9" @click="addModellength1_8('9')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point8text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point8text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point8text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point8text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point8text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point9" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('9')"/><el-input
                  v-model="modelData1_8.point9text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point10" @click="addModellength1_8('10')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point9text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point9text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point9text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point9text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point9text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData1_8.point10" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_8('10')"/><el-input
                  v-model="modelData1_8.point10text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button @click="errorMessages">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point10text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point10text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point10text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point10text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData1_8.point10text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
          </div>
          <div v-show="model1_9" :model="modelData1_9" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div v-show="modelData1_9.imgDiv1" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_9_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_9.imageUrl1" id="modelData1_9_img1" :src="modelData1_9.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData1_9.imgDiv2" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_9_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_9.imageUrl2" id="modelData1_9_img2" :src="modelData1_9.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData1_9.imgDiv3" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_9_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_9.imageUrl3" id="modelData1_9_img3" :src="modelData1_9.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData1_9.imgDiv4" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_9_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_9.imageUrl4" id="modelData1_9_img4" :src="modelData1_9.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData1_9.textDiv1" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_9.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_9.textarea1"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData1_9.textDiv2" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_9.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_9.textarea2"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData1_9.textDiv3" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_9.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_9.textarea3"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData1_9.textDiv4" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_9.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_9.textarea4"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv1_1" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change1_9('1')"><i id="imgDiv1_1_i1" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData1_9.text5"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv1_2" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change1_9('2')"><i id="imgDiv1_2_i2" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData1_9.text6"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv1_3" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change1_9('3')"><i id="imgDiv1_3_i3" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData1_9.text7"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv1_4" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change1_9('4')"><i id="imgDiv1_4_i4" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData1_9.text8"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_10" :model="modelData1_10" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_10.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_10_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_10.imageUrl1" id="modelData1_10_img1" :src="modelData1_10.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 320px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_10.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_10.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_10.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData1_10.text4"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_10.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_10.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_10.text6"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData1_10.point1" @click="modelData1_10.point1=!modelData1_10.point1">新增</el-button>
              <div v-show="modelData1_10.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_10.point1=!modelData1_10.point1"/><el-input
                v-model="modelData1_10.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_10.point2" style="margin-left: 40%" @click="addModellength1_10('2')">新增</el-button></div>
              <div v-show="modelData1_10.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_10('2')"/><el-input
                v-model="modelData1_10.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_10.point3" style="margin-left: 40%" @click="addModellength1_10('3')">新增</el-button></div>
              <div v-show="modelData1_10.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_10('3')"/><el-input
                v-model="modelData1_10.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_10.point4" style="margin-left: 40%" @click="addModellength1_10('4')">新增</el-button></div>
              <div v-show="modelData1_10.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_10('4')"/><el-input
                v-model="modelData1_10.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_10.point5" style="margin-left: 40%" @click="addModellength1_10('5')">新增</el-button></div>
              <div v-show="modelData1_10.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_10('5')"/><el-input
                v-model="modelData1_10.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_10.point6" style="margin-left: 40%" @click="addModellength1_10('6')">新增</el-button></div>
              <div v-show="modelData1_10.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_10('6')"/><el-input
                v-model="modelData1_10.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_10.point7" style="margin-left: 40%" @click="addModellength1_10('7')">新增</el-button></div>
              <div v-show="modelData1_10.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_10('7')"/><el-input
                v-model="modelData1_10.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_10.point8" style="margin-left: 40%" @click="addModellength1_10('8')">新增</el-button></div>
              <div v-show="modelData1_10.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_10('8')"/><el-input
                v-model="modelData1_10.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
              <el-input
                v-model="modelData1_10.text7"
                style="padding-top: 19.5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_10.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_11" :model="modelData1_11" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_11_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_11.imageUrl1" id="modelData1_11_img1" :src="modelData1_11.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 362px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_11.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_11.text2"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_11.textarea1"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData1_11.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_11.textarea2"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_11.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData1_11.point1" @click="modelData1_11.point1=!modelData1_11.point1">新增</el-button>
              <div v-show="modelData1_11.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_11.point1=!modelData1_11.point1"/><el-input
                v-model="modelData1_11.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_11.point2" style="margin-left: 40%" @click="modelData1_11.point2=!modelData1_11.point2">新增</el-button></div>
              <div v-show="modelData1_11.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_11.point2=!modelData1_11.point2"/><el-input
                v-model="modelData1_11.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_11.point3" style="margin-left: 40%" @click="modelData1_11.point3=!modelData1_11.point3">新增</el-button></div>
              <div v-show="modelData1_11.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_11.point3=!modelData1_11.point3"/><el-input
                v-model="modelData1_11.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_11.point4" style="margin-left: 40%" @click="modelData1_11.point4=!modelData1_11.point4">新增</el-button></div>
              <div v-show="modelData1_11.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_11.point4=!modelData1_11.point4"/><el-input
                v-model="modelData1_11.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_11.point5" style="margin-left: 40%" @click="modelData1_11.point5=!modelData1_11.point5">新增</el-button></div>
              <div v-show="modelData1_11.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_11.point5=!modelData1_11.point5"/><el-input
                v-model="modelData1_11.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_11.point6" style="margin-left: 40%" @click="modelData1_11.point6=!modelData1_11.point6">新增</el-button></div>
              <div v-show="modelData1_11.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_11.point6=!modelData1_11.point6"/><el-input
                v-model="modelData1_11.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_11.point7" style="margin-left: 40%" @click="modelData1_11.point7=!modelData1_11.point7">新增</el-button></div>
              <div v-show="modelData1_11.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData1_11.point7=!modelData1_11.point7"/><el-input
                v-model="modelData1_11.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData1_11.point8" style="margin-left: 40%" @click="addModellength1_11('8')">新增</el-button></div>
              <div v-show="modelData1_11.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength1_11('8')"/><el-input
                v-model="modelData1_11.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model1_12" :model="modelData1_12" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_12.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="200"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_12_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_12.imageUrl1" id="modelData1_12_img1" :src="modelData1_12.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_12.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_12.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_12_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_12.imageUrl2" id="modelData1_12_img2" :src="modelData1_12.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_12.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_12.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_12_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_12.imageUrl3" id="modelData1_12_img3" :src="modelData1_12.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData1_12.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData1_12.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_13" :model="modelData1_13" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_13.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_13_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_13.imageUrl1" id="modelData1_13_img1" :src="modelData1_13.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 180px">970:600</i>
              </el-upload>
              <el-input
                v-model="modelData1_13.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-input
                v-model="modelData1_13.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_14" :model="modelData1_14" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_14_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData1_14.imageUrl1" id="modelData1_14_img1" :src="modelData1_14.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 360px">600:180</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model1_15" :model="modelData1_15" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_15.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData1_15.textarea1"
                :autosize="{minRows:15,maxRows:15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="5000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model1_16" :model="modelData1_16" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData1_16.textarea1"
                :autosize="{minRows:16,maxRows:16}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <a><div v-show="model1" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid" @click="choose('model1')"><p style="font-size: 25px;font-weight: bold;color:black;margin-top: 20%" onmouseout="this.style.color='black'" onmouseover="this.style.color='#ffb57f'">单击选择模板</p></div></a>
          <div style="width: 150px;height: 155px;border-left: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -50%;margin-right: -20px;text-align: center;"><p style="padding-top: 40px;font-size: 35px">模板一</p></div>
          <div style="width: 150px;height: 900px;border: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -32%;margin-right: -20px">
          <img :src="imgUrl" height="50" width="45" style="margin-top: 50%;margin-left: 36%" onmouseover="this.height=55;this.width=50" onmouseout="this.height=50;this.width=45" @click="deletes('model1')"></div>
        </el-card>
      </el-col>
      <el-col v-if="card2" :span="8" style="width: 102%;border: black 0px solid;padding-top: 50px">
        <el-card id="ssssss2" shadow="hover" style="width: 900px;height: 400px;margin:0 auto;">
          <div v-show="model2_1" :model="modelData2_1" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_1_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_1.imageUrl1" id="modelData2_1_img1" :src="modelData2_1.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">300:400</i>
              </el-upload>
              <el-input
                v-model="modelData2_1.text1"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_1.text2"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_1.text3"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData2_1.textarea1"
                :autosize="{ minRows: 5, maxRows: 5}"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData2_1.point1" @click="modelData2_1.point1=!modelData2_1.point1">新增</el-button>
              <div v-show="modelData2_1.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_1.point1=!modelData2_1.point1"/><el-input
                v-model="modelData2_1.point1text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point2" style="margin-left: 40%" @click="modelData2_1.point2=!modelData2_1.point2">新增</el-button></div>
              <div v-show="modelData2_1.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_1.point2=!modelData2_1.point2"/><el-input
                v-model="modelData2_1.point2text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point3" style="margin-left: 40%" @click="modelData2_1.point3=!modelData2_1.point3">新增</el-button></div>
              <div v-show="modelData2_1.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_1.point3=!modelData2_1.point3"/><el-input
                v-model="modelData2_1.point3text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point4" style="margin-left: 40%" @click="addModellength2_1('4')">新增</el-button></div>
              <div v-show="modelData2_1.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('4')"/><el-input
                v-model="modelData2_1.point4text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point5" style="margin-left: 40%" @click="addModellength2_1('5')">新增</el-button></div>
              <div v-show="modelData2_1.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('5')"/><el-input
                v-model="modelData2_1.point5text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point6" style="margin-left: 40%" @click="addModellength2_1('6')">新增</el-button></div>
              <div v-show="modelData2_1.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('6')"/><el-input
                v-model="modelData2_1.point6text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point7" style="margin-left: 40%" @click="addModellength2_1('7')">新增</el-button></div>
              <div v-show="modelData2_1.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('7')"/><el-input
                v-model="modelData2_1.point7text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point8" style="margin-left: 40%" @click="addModellength2_1('8')">新增</el-button></div>
              <div v-show="modelData2_1.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('8')"/><el-input
                v-model="modelData2_1.point8text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_1_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_1.imageUrl2" id="modelData2_1_img2" :src="modelData2_1.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">350:175</i>
              </el-upload>
              <el-input
                v-model="modelData2_1.text4"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData2_1.textarea2"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData2_1.point9" @click="modelData2_1.point9=!modelData2_1.point9">新增</el-button>
              <div v-show="modelData2_1.point9" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_1.point9=!modelData2_1.point9"/><el-input
                v-model="modelData2_1.point9text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point10" style="margin-left: 40%" @click="addModellength2_1('10')">新增</el-button></div>
              <div v-show="modelData2_1.point10" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('10')"/><el-input
                v-model="modelData2_1.point10text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point11" style="margin-left: 40%" @click="addModellength2_1('11')">新增</el-button></div>
              <div v-show="modelData2_1.point11" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('11')"/><el-input
                v-model="modelData2_1.point11text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point12" style="margin-left: 40%" @click="addModellength2_1('12')">新增</el-button></div>
              <div v-show="modelData2_1.point12" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('12')"/><el-input
                v-model="modelData2_1.point12text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point13" style="margin-left: 40%" @click="addModellength2_1('13')">新增</el-button></div>
              <div v-show="modelData2_1.point13" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('13')"/><el-input
                v-model="modelData2_1.point13text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point14" style="margin-left: 40%" @click="addModellength2_1('14')">新增</el-button></div>
              <div v-show="modelData2_1.point14" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('14')"/><el-input
                v-model="modelData2_1.point14text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point15" style="margin-left: 40%" @click="addModellength2_1('15')">新增</el-button></div>
              <div v-show="modelData2_1.point15" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('15')"/><el-input
                v-model="modelData2_1.point15text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData2_1.point16" style="margin-left: 40%" @click="addModellength2_1('16')">新增</el-button></div>
              <div v-show="modelData2_1.point16" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_1('16')"/><el-input
                v-model="modelData2_1.point16text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model2_2" :model="modelData2_2" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_2_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_2.imageUrl1" id="modelData2_2_img1" :src="modelData2_2.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_2_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_2.imageUrl2" id="modelData2_2_img2" :src="modelData2_2.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_2.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_2.textarea1"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData2_2.text2"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_2.textarea2"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_2_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_2.imageUrl3" id="modelData2_2_img3" :src="modelData2_2.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_2_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_2.imageUrl4" id="modelData2_2_img4" :src="modelData2_2.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_2.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_2.textarea3"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData2_2.text4"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_2.textarea4"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_3" :model="modelData2_3" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_3_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_3.imageUrl1" id="modelData2_3_img1" :src="modelData2_3.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_3.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_3.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_4" :model="modelData2_4" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_4_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_4.imageUrl1" id="modelData2_4_img1" :src="modelData2_4.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_4.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_4.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_5" :model="modelData2_5" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_5_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_5.imageUrl1" id="modelData2_5_img1" :src="modelData2_5.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_5.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_5.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_6" :model="modelData2_6" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_6.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_6.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_6_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_6.imageUrl1" id="modelData2_6_img1" :src="modelData2_6.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model2_7" :model="modelData2_7" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 10%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_7.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_7_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_7.imageUrl1" id="modelData2_7_img1" :src="modelData2_7.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData2_7.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_7.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_7_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_7.imageUrl2" id="modelData2_7_img2" :src="modelData2_7.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData2_7.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_7.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_7_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_7.imageUrl3" id="modelData2_7_img3" :src="modelData2_7.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData2_7.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_7.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_7_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_7.imageUrl4" id="modelData2_7_img4" :src="modelData2_7.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData2_7.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_7.textarea4"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_8" :model="modelData2_8" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
              <el-button v-show="!modelData2_8.point1" style="float: bottom;margin-top: 268px" @click="modelData2_8.point1=!modelData2_8.point1">新增</el-button>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_8_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_8.imageUrl1" id="modelData2_8_img1" :src="modelData2_8.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_8.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData2_8.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_8_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_8.imageUrl2" id="modelData2_8_img2" :src="modelData2_8.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_8.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData2_8.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_8_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_8.imageUrl3" id="modelData2_8_img3" :src="modelData2_8.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_8.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData2_8.text6"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_8_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_8.imageUrl4" id="modelData2_8_img4" :src="modelData2_8.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_8.text7"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData2_8.text8"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_8_5"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_8.imageUrl5" id="modelData2_8_img5" :src="modelData2_8.imageUrl5" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_8.text9"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData2_8.text10"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div v-show="modelData2_8.point1" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_8.point1=!modelData2_8.point1"/><el-input
                  v-model="modelData2_8.point1text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point2" @click="addModellength2_8('2')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point2" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('2')"/><el-input
                  v-model="modelData2_8.point2text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point3" @click="addModellength2_8('3')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point2text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point2text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point2text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point2text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point2text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point3" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('3')"/><el-input
                  v-model="modelData2_8.point3text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point4" @click="addModellength2_8('4')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point3text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point3text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point3text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point3text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point3text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point4" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('4')"/><el-input
                  v-model="modelData2_8.point4text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point5" @click="addModellength2_8('5')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point4text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point4text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point4text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point4text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point4text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point5" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('5')"/><el-input
                  v-model="modelData2_8.point5text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point6" @click="addModellength2_8('6')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point6" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('6')"/><el-input
                  v-model="modelData2_8.point6text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point7" @click="addModellength2_8('7')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point6text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point6text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point6text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point6text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point6text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point7" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('7')"/><el-input
                  v-model="modelData2_8.point7text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point8" @click="addModellength2_8('8')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point7text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point7text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point7text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point7text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point8" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('8')"/><el-input
                  v-model="modelData2_8.point8text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point9" @click="addModellength2_8('9')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point8text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point8text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point8text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point8text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point8text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point9" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('9')"/><el-input
                  v-model="modelData2_8.point9text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData2_8.point10" @click="addModellength2_8('10')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point9text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point9text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point9text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point9text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point9text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData2_8.point10" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_8('10')"/><el-input
                  v-model="modelData2_8.point10text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button @click="errorMessages">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point10text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point10text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point10text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point10text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData2_8.point10text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
          </div>
          <div v-show="model2_9" :model="modelData2_9" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div v-show="modelData2_9.imgDiv1" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_9_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_9.imageUrl1" id="modelData2_9_img1" :src="modelData2_9.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData2_9.imgDiv2" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_9_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_9.imageUrl2" id="modelData2_9_img2" :src="modelData2_9.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData2_9.imgDiv3" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_9_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_9.imageUrl3" id="modelData2_9_img3" :src="modelData2_9.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData2_9.imgDiv4" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_9_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_9.imageUrl4" id="modelData2_9_img4" :src="modelData2_9.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData2_9.textDiv1" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_9.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_9.textarea1"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData2_9.textDiv2" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_9.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_9.textarea2"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData2_9.textDiv3" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_9.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_9.textarea3"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData2_9.textDiv4" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_9.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_9.textarea4"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv2_1" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change2_9('1')"><i id="imgDiv2_1_i1" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData2_9.text5"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv2_2" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change2_9('2')"><i id="imgDiv2_2_i2" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData2_9.text6"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv2_3" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change2_9('3')"><i id="imgDiv2_3_i3" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData2_9.text7"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv2_4" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change2_9('4')"><i id="imgDiv2_4_i4" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData2_9.text8"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_10" :model="modelData2_10" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_10.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_10_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_10.imageUrl1" id="modelData2_10_img1" :src="modelData2_10.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 320px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_10.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_10.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_10.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData2_10.text4"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_10.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_10.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_10.text6"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData2_10.point1" @click="modelData2_10.point1=!modelData2_10.point1">新增</el-button>
              <div v-show="modelData2_10.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_10.point1=!modelData2_10.point1"/><el-input
                v-model="modelData2_10.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_10.point2" style="margin-left: 40%" @click="addModellength2_10('2')">新增</el-button></div>
              <div v-show="modelData2_10.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_10('2')"/><el-input
                v-model="modelData2_10.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_10.point3" style="margin-left: 40%" @click="addModellength2_10('3')">新增</el-button></div>
              <div v-show="modelData2_10.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_10('3')"/><el-input
                v-model="modelData2_10.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_10.point4" style="margin-left: 40%" @click="addModellength2_10('4')">新增</el-button></div>
              <div v-show="modelData2_10.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_10('4')"/><el-input
                v-model="modelData2_10.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_10.point5" style="margin-left: 40%" @click="addModellength2_10('5')">新增</el-button></div>
              <div v-show="modelData2_10.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_10('5')"/><el-input
                v-model="modelData2_10.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_10.point6" style="margin-left: 40%" @click="addModellength2_10('6')">新增</el-button></div>
              <div v-show="modelData2_10.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_10('6')"/><el-input
                v-model="modelData2_10.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_10.point7" style="margin-left: 40%" @click="addModellength2_10('7')">新增</el-button></div>
              <div v-show="modelData2_10.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_10('7')"/><el-input
                v-model="modelData2_10.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_10.point8" style="margin-left: 40%" @click="addModellength2_10('8')">新增</el-button></div>
              <div v-show="modelData2_10.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_10('8')"/><el-input
                v-model="modelData2_10.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
              <el-input
                v-model="modelData2_10.text7"
                style="padding-top: 19.5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_10.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_11" :model="modelData2_11" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_11_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_11.imageUrl1" id="modelData2_11_img1" :src="modelData2_11.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 362px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_11.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_11.text2"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_11.textarea1"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData2_11.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_11.textarea2"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_11.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData2_11.point1" @click="modelData2_11.point1=!modelData2_11.point1">新增</el-button>
              <div v-show="modelData2_11.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_11.point1=!modelData2_11.point1"/><el-input
                v-model="modelData2_11.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_11.point2" style="margin-left: 40%" @click="modelData2_11.point2=!modelData2_11.point2">新增</el-button></div>
              <div v-show="modelData2_11.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_11.point2=!modelData2_11.point2"/><el-input
                v-model="modelData2_11.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_11.point3" style="margin-left: 40%" @click="modelData2_11.point3=!modelData2_11.point3">新增</el-button></div>
              <div v-show="modelData2_11.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_11.point3=!modelData2_11.point3"/><el-input
                v-model="modelData2_11.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_11.point4" style="margin-left: 40%" @click="modelData2_11.point4=!modelData2_11.point4">新增</el-button></div>
              <div v-show="modelData2_11.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_11.point4=!modelData2_11.point4"/><el-input
                v-model="modelData2_11.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_11.point5" style="margin-left: 40%" @click="modelData2_11.point5=!modelData2_11.point5">新增</el-button></div>
              <div v-show="modelData2_11.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_11.point5=!modelData2_11.point5"/><el-input
                v-model="modelData2_11.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_11.point6" style="margin-left: 40%" @click="modelData2_11.point6=!modelData2_11.point6">新增</el-button></div>
              <div v-show="modelData2_11.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_11.point6=!modelData2_11.point6"/><el-input
                v-model="modelData2_11.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_11.point7" style="margin-left: 40%" @click="modelData2_11.point7=!modelData2_11.point7">新增</el-button></div>
              <div v-show="modelData2_11.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData2_11.point7=!modelData2_11.point7"/><el-input
                v-model="modelData2_11.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData2_11.point8" style="margin-left: 40%" @click="addModellength2_11('8')">新增</el-button></div>
              <div v-show="modelData2_11.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength2_11('8')"/><el-input
                v-model="modelData2_11.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model2_12" :model="modelData2_12" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_12.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="200"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_12_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_12.imageUrl1" id="modelData2_12_img1" :src="modelData2_12.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_12.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_12.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_12_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_12.imageUrl2" id="modelData2_12_img2" :src="modelData2_12.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_12.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_12.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_12_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_12.imageUrl3" id="modelData2_12_img3" :src="modelData2_12.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData2_12.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData2_12.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_13" :model="modelData2_13" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_13.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_13_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_13.imageUrl1" id="modelData2_13_img1" :src="modelData2_13.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 180px">970:600</i>
              </el-upload>
              <el-input
                v-model="modelData2_13.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-input
                v-model="modelData2_13.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_14" :model="modelData2_14" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData2_14_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData2_14.imageUrl1" id="modelData2_14_img1" :src="modelData2_14.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 360px">600:180</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model2_15" :model="modelData2_15" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_15.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData2_15.textarea1"
                :autosize="{minRows:15,maxRows:15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="5000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model2_16" :model="modelData2_16" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData2_16.textarea1"
                :autosize="{minRows:16,maxRows:16}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <a><div v-show="model2" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid" @click="choose('model2')"><p style="font-size: 25px;font-weight: bold;color:black;margin-top: 20%" onmouseout="this.style.color='black'" onmouseover="this.style.color='#ffb57f'">单击选择模板</p></div></a>
          <div style="width: 150px;height: 155px;border-left: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -50%;margin-right: -20px;text-align: center;"><p style="padding-top: 40px;font-size: 35px">模板二</p></div>
          <div style="width: 150px;height: 900px;border: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -32%;margin-right: -20px">
          <img :src="imgUrl" height="50" width="45" style="margin-top: 50%;margin-left: 36%" onmouseover="this.height=55;this.width=50" onmouseout="this.height=50;this.width=45" @click="deletes('model2')"></div>
        </el-card>
      </el-col>
      <el-col v-if="card3" :span="8" style="width: 102%;border: black 0px solid;padding-top: 50px">
        <el-card id="ssssss3" shadow="hover" style="width: 900px;height: 400px;margin:0 auto;">
          <div v-show="model3_1" :model="modelData3_1" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_1_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_1.imageUrl1" id="modelData3_1_img1" :src="modelData3_1.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">300:400</i>
              </el-upload>
              <el-input
                v-model="modelData3_1.text1"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_1.text2"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_1.text3"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData3_1.textarea1"
                :autosize="{ minRows: 5, maxRows: 5}"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData3_1.point1" @click="modelData3_1.point1=!modelData3_1.point1">新增</el-button>
              <div v-show="modelData3_1.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_1.point1=!modelData3_1.point1"/><el-input
                v-model="modelData3_1.point1text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point2" style="margin-left: 40%" @click="modelData3_1.point2=!modelData3_1.point2">新增</el-button></div>
              <div v-show="modelData3_1.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_1.point2=!modelData3_1.point2"/><el-input
                v-model="modelData3_1.point2text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point3" style="margin-left: 40%" @click="modelData3_1.point3=!modelData3_1.point3">新增</el-button></div>
              <div v-show="modelData3_1.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_1.point3=!modelData3_1.point3"/><el-input
                v-model="modelData3_1.point3text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point4" style="margin-left: 40%" @click="addModellength3_1('4')">新增</el-button></div>
              <div v-show="modelData3_1.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('4')"/><el-input
                v-model="modelData3_1.point4text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point5" style="margin-left: 40%" @click="addModellength3_1('5')">新增</el-button></div>
              <div v-show="modelData3_1.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('5')"/><el-input
                v-model="modelData3_1.point5text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point6" style="margin-left: 40%" @click="addModellength3_1('6')">新增</el-button></div>
              <div v-show="modelData3_1.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('6')"/><el-input
                v-model="modelData3_1.point6text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point7" style="margin-left: 40%" @click="addModellength3_1('7')">新增</el-button></div>
              <div v-show="modelData3_1.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('7')"/><el-input
                v-model="modelData3_1.point7text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point8" style="margin-left: 40%" @click="addModellength3_1('8')">新增</el-button></div>
              <div v-show="modelData3_1.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('8')"/><el-input
                v-model="modelData3_1.point8text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_1_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_1.imageUrl2" id="modelData3_1_img2" :src="modelData3_1.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">350:175</i>
              </el-upload>
              <el-input
                v-model="modelData3_1.text4"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData3_1.textarea2"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData3_1.point9" @click="modelData3_1.point9=!modelData3_1.point9">新增</el-button>
              <div v-show="modelData3_1.point9" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_1.point9=!modelData3_1.point9"/><el-input
                v-model="modelData3_1.point9text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point10" style="margin-left: 40%" @click="addModellength3_1('10')">新增</el-button></div>
              <div v-show="modelData3_1.point10" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('10')"/><el-input
                v-model="modelData3_1.point10text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point11" style="margin-left: 40%" @click="addModellength3_1('11')">新增</el-button></div>
              <div v-show="modelData3_1.point11" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('11')"/><el-input
                v-model="modelData3_1.point11text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point12" style="margin-left: 40%" @click="addModellength3_1('12')">新增</el-button></div>
              <div v-show="modelData3_1.point12" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('12')"/><el-input
                v-model="modelData3_1.point12text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point13" style="margin-left: 40%" @click="addModellength3_1('13')">新增</el-button></div>
              <div v-show="modelData3_1.point13" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('13')"/><el-input
                v-model="modelData3_1.point13text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point14" style="margin-left: 40%" @click="addModellength3_1('14')">新增</el-button></div>
              <div v-show="modelData3_1.point14" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('14')"/><el-input
                v-model="modelData3_1.point14text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point15" style="margin-left: 40%" @click="addModellength3_1('15')">新增</el-button></div>
              <div v-show="modelData3_1.point15" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('15')"/><el-input
                v-model="modelData3_1.point15text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData3_1.point16" style="margin-left: 40%" @click="addModellength3_1('16')">新增</el-button></div>
              <div v-show="modelData3_1.point16" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_1('16')"/><el-input
                v-model="modelData3_1.point16text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model3_2" :model="modelData3_2" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_2_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_2.imageUrl1" id="modelData3_2_img1" :src="modelData3_2.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_2_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_2.imageUrl2" id="modelData3_2_img2" :src="modelData3_2.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_2.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_2.textarea1"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData3_2.text2"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_2.textarea2"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_2_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_2.imageUrl3" id="modelData3_2_img3" :src="modelData3_2.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_2_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_2.imageUrl4" id="modelData3_2_img4" :src="modelData3_2.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_2.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_2.textarea3"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData3_2.text4"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_2.textarea4"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_3" :model="modelData3_3" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_3_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_3.imageUrl1" id="modelData3_3_img1" :src="modelData3_3.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_3.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_3.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_4" :model="modelData3_4" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_4_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_4.imageUrl1" id="modelData3_4_img1" :src="modelData3_4.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_4.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_4.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_5" :model="modelData3_5" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_5_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_5.imageUrl1" id="modelData3_5_img1" :src="modelData3_5.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_5.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_5.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_6" :model="modelData3_6" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_6.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_6.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_6_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_6.imageUrl1" id="modelData3_6_img1" :src="modelData3_6.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model3_7" :model="modelData3_7" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 10%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_7.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_7_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_7.imageUrl1" id="modelData3_7_img1" :src="modelData3_7.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData3_7.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_7.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_7_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_7.imageUrl2" id="modelData3_7_img2" :src="modelData3_7.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData3_7.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_7.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_7_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_7.imageUrl3" id="modelData3_7_img3" :src="modelData3_7.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData3_7.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_7.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_7_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_7.imageUrl4" id="modelData3_7_img4" :src="modelData3_7.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData3_7.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_7.textarea4"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_8" :model="modelData3_8" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
              <el-button v-show="!modelData3_8.point1" style="float: bottom;margin-top: 268px" @click="modelData3_8.point1=!modelData3_8.point1">新增</el-button>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_8_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_8.imageUrl1" id="modelData3_8_img1" :src="modelData3_8.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_8.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData3_8.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_8_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_8.imageUrl2" id="modelData3_8_img2" :src="modelData3_8.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_8.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData3_8.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_8_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_8.imageUrl3" id="modelData3_8_img3" :src="modelData3_8.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_8.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData3_8.text6"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_8_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_8.imageUrl4" id="modelData3_8_img4" :src="modelData3_8.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_8.text7"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData3_8.text8"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_8_5"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_8.imageUrl5" id="modelData3_8_img5" :src="modelData3_8.imageUrl5" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_8.text9"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData3_8.text10"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div v-show="modelData3_8.point1" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_8.point1=!modelData3_8.point1"/><el-input
                  v-model="modelData3_8.point1text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point2" @click="addModellength3_8('2')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point2" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('2')"/><el-input
                  v-model="modelData3_8.point2text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point3" @click="addModellength3_8('3')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point2text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point2text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point2text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point2text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point2text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point3" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('3')"/><el-input
                  v-model="modelData3_8.point3text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point4" @click="addModellength3_8('4')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point3text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point3text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point3text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point3text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point3text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point4" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('4')"/><el-input
                  v-model="modelData3_8.point4text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point5" @click="addModellength3_8('5')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point4text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point4text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point4text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point4text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point4text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point5" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('5')"/><el-input
                  v-model="modelData3_8.point5text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point6" @click="addModellength3_8('6')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point6" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('6')"/><el-input
                  v-model="modelData3_8.point6text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point7" @click="addModellength3_8('7')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point6text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point6text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point6text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point6text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point6text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point7" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('7')"/><el-input
                  v-model="modelData3_8.point7text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point8" @click="addModellength3_8('8')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point7text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point7text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point7text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point7text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point8" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('8')"/><el-input
                  v-model="modelData3_8.point8text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point9" @click="addModellength3_8('9')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point8text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point8text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point8text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point8text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point8text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point9" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('9')"/><el-input
                  v-model="modelData3_8.point9text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData3_8.point10" @click="addModellength3_8('10')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point9text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point9text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point9text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point9text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point9text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData3_8.point10" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_8('10')"/><el-input
                  v-model="modelData3_8.point10text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button @click="errorMessages">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point10text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point10text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point10text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point10text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData3_8.point10text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
          </div>
          <div v-show="model3_9" :model="modelData3_9" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div v-show="modelData3_9.imgDiv1" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_9_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_9.imageUrl1" id="modelData3_9_img1" :src="modelData3_9.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData3_9.imgDiv2" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_9_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_9.imageUrl2" id="modelData3_9_img2" :src="modelData3_9.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData3_9.imgDiv3" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_9_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_9.imageUrl3" id="modelData3_9_img3" :src="modelData3_9.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData3_9.imgDiv4" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_9_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_9.imageUrl4" id="modelData3_9_img4" :src="modelData3_9.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData3_9.textDiv1" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_9.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_9.textarea1"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData3_9.textDiv2" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_9.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_9.textarea2"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData3_9.textDiv3" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_9.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_9.textarea3"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData3_9.textDiv4" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_9.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_9.textarea4"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv3_1" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change3_9('1')"><i id="imgDiv3_1_i1" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData3_9.text5"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv3_2" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change3_9('2')"><i id="imgDiv3_2_i2" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData3_9.text6"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv3_3" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change3_9('3')"><i id="imgDiv3_3_i3" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData3_9.text7"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv3_4" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change3_9('4')"><i id="imgDiv3_4_i4" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData3_9.text8"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_10" :model="modelData3_10" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_10.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_10_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_10.imageUrl1" id="modelData3_10_img1" :src="modelData3_10.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 320px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_10.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_10.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_10.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData3_10.text4"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_10.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_10.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_10.text6"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData3_10.point1" @click="modelData3_10.point1=!modelData3_10.point1">新增</el-button>
              <div v-show="modelData3_10.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_10.point1=!modelData3_10.point1"/><el-input
                v-model="modelData3_10.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_10.point2" style="margin-left: 40%" @click="addModellength3_10('2')">新增</el-button></div>
              <div v-show="modelData3_10.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_10('2')"/><el-input
                v-model="modelData3_10.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_10.point3" style="margin-left: 40%" @click="addModellength3_10('3')">新增</el-button></div>
              <div v-show="modelData3_10.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_10('3')"/><el-input
                v-model="modelData3_10.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_10.point4" style="margin-left: 40%" @click="addModellength3_10('4')">新增</el-button></div>
              <div v-show="modelData3_10.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_10('4')"/><el-input
                v-model="modelData3_10.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_10.point5" style="margin-left: 40%" @click="addModellength3_10('5')">新增</el-button></div>
              <div v-show="modelData3_10.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_10('5')"/><el-input
                v-model="modelData3_10.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_10.point6" style="margin-left: 40%" @click="addModellength3_10('6')">新增</el-button></div>
              <div v-show="modelData3_10.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_10('6')"/><el-input
                v-model="modelData3_10.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_10.point7" style="margin-left: 40%" @click="addModellength3_10('7')">新增</el-button></div>
              <div v-show="modelData3_10.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_10('7')"/><el-input
                v-model="modelData3_10.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_10.point8" style="margin-left: 40%" @click="addModellength3_10('8')">新增</el-button></div>
              <div v-show="modelData3_10.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_10('8')"/><el-input
                v-model="modelData3_10.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
              <el-input
                v-model="modelData3_10.text7"
                style="padding-top: 19.5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_10.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_11" :model="modelData3_11" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_11_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_11.imageUrl1" id="modelData3_11_img1" :src="modelData3_11.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 362px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_11.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_11.text2"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_11.textarea1"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData3_11.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_11.textarea2"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_11.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData3_11.point1" @click="modelData3_11.point1=!modelData3_11.point1">新增</el-button>
              <div v-show="modelData3_11.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_11.point1=!modelData3_11.point1"/><el-input
                v-model="modelData3_11.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_11.point2" style="margin-left: 40%" @click="modelData3_11.point2=!modelData3_11.point2">新增</el-button></div>
              <div v-show="modelData3_11.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_11.point2=!modelData3_11.point2"/><el-input
                v-model="modelData3_11.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_11.point3" style="margin-left: 40%" @click="modelData3_11.point3=!modelData3_11.point3">新增</el-button></div>
              <div v-show="modelData3_11.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_11.point3=!modelData3_11.point3"/><el-input
                v-model="modelData3_11.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_11.point4" style="margin-left: 40%" @click="modelData3_11.point4=!modelData3_11.point4">新增</el-button></div>
              <div v-show="modelData3_11.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_11.point4=!modelData3_11.point4"/><el-input
                v-model="modelData3_11.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_11.point5" style="margin-left: 40%" @click="modelData3_11.point5=!modelData3_11.point5">新增</el-button></div>
              <div v-show="modelData3_11.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_11.point5=!modelData3_11.point5"/><el-input
                v-model="modelData3_11.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_11.point6" style="margin-left: 40%" @click="modelData3_11.point6=!modelData3_11.point6">新增</el-button></div>
              <div v-show="modelData3_11.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_11.point6=!modelData3_11.point6"/><el-input
                v-model="modelData3_11.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_11.point7" style="margin-left: 40%" @click="modelData3_11.point7=!modelData3_11.point7">新增</el-button></div>
              <div v-show="modelData3_11.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData3_11.point7=!modelData3_11.point7"/><el-input
                v-model="modelData3_11.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData3_11.point8" style="margin-left: 40%" @click="addModellength3_11('8')">新增</el-button></div>
              <div v-show="modelData3_11.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength3_11('8')"/><el-input
                v-model="modelData3_11.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model3_12" :model="modelData3_12" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_12.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="200"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_12_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_12.imageUrl1" id="modelData3_12_img1" :src="modelData3_12.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_12.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_12.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_12_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_12.imageUrl2" id="modelData3_12_img2" :src="modelData3_12.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_12.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_12.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_12_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_12.imageUrl3" id="modelData3_12_img3" :src="modelData3_12.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData3_12.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData3_12.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_13" :model="modelData3_13" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_13.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_13_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_13.imageUrl1" id="modelData3_13_img1" :src="modelData3_13.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 180px">970:600</i>
              </el-upload>
              <el-input
                v-model="modelData3_13.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-input
                v-model="modelData3_13.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_14" :model="modelData3_14" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData3_14_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData3_14.imageUrl1" id="modelData3_14_img1" :src="modelData3_14.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 360px">600:180</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model3_15" :model="modelData3_15" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_15.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData3_15.textarea1"
                :autosize="{minRows:15,maxRows:15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="5000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model3_16" :model="modelData3_16" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData3_16.textarea1"
                :autosize="{minRows:16,maxRows:16}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <a><div v-show="model3" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid" @click="choose('model3')"><p style="font-size: 25px;font-weight: bold;color:black;margin-top: 20%" onmouseout="this.style.color='black'" onmouseover="this.style.color='#ffb57f'">单击选择模板</p></div></a>
          <div style="width: 150px;height: 155px;border-left: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -50%;margin-right: -20px;text-align: center;"><p style="padding-top: 40px;font-size: 35px">模板三</p></div>
          <div style="width: 150px;height: 900px;border: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -32%;margin-right: -20px">
          <img :src="imgUrl" height="50" width="45" style="margin-top: 50%;margin-left: 36%" onmouseover="this.height=55;this.width=50" onmouseout="this.height=50;this.width=45" @click="deletes('model3')"></div>
        </el-card>
      </el-col>
      <el-col v-if="card4" :span="8" style="width: 102%;border: black 0px solid;padding-top: 50px">
        <el-card id="ssssss4" shadow="hover" style="width: 900px;height: 400px;margin:0 auto;">
          <div v-show="model4_1" :model="modelData4_1" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_1_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_1.imageUrl1" id="modelData4_1_img1" :src="modelData1_1.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">300:400</i>
              </el-upload>
              <el-input
                v-model="modelData4_1.text1"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_1.text2"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_1.text3"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData4_1.textarea1"
                :autosize="{ minRows: 5, maxRows: 5}"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData4_1.point1" @click="modelData4_1.point1=!modelData4_1.point1">新增</el-button>
              <div v-show="modelData4_1.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_1.point1=!modelData4_1.point1"/><el-input
                v-model="modelData4_1.point1text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point2" style="margin-left: 40%" @click="modelData4_1.point2=!modelData4_1.point2">新增</el-button></div>
              <div v-show="modelData4_1.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_1.point2=!modelData4_1.point2"/><el-input
                v-model="modelData4_1.point2text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point3" style="margin-left: 40%" @click="modelData4_1.point3=!modelData4_1.point3">新增</el-button></div>
              <div v-show="modelData4_1.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_1.point3=!modelData4_1.point3"/><el-input
                v-model="modelData4_1.point3text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point4" style="margin-left: 40%" @click="addModellength4_1('4')">新增</el-button></div>
              <div v-show="modelData4_1.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('4')"/><el-input
                v-model="modelData4_1.point4text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point5" style="margin-left: 40%" @click="addModellength4_1('5')">新增</el-button></div>
              <div v-show="modelData4_1.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('5')"/><el-input
                v-model="modelData4_1.point5text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point6" style="margin-left: 40%" @click="addModellength4_1('6')">新增</el-button></div>
              <div v-show="modelData4_1.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('6')"/><el-input
                v-model="modelData4_1.point6text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point7" style="margin-left: 40%" @click="addModellength4_1('7')">新增</el-button></div>
              <div v-show="modelData4_1.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('7')"/><el-input
                v-model="modelData4_1.point7text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point8" style="margin-left: 40%" @click="addModellength4_1('8')">新增</el-button></div>
              <div v-show="modelData4_1.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('8')"/><el-input
                v-model="modelData4_1.point8text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_1_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_1.imageUrl2" id="modelData4_1_img2" :src="modelData4_1.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">350:175</i>
              </el-upload>
              <el-input
                v-model="modelData4_1.text4"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData4_1.textarea2"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData4_1.point9" @click="modelData4_1.point9=!modelData4_1.point9">新增</el-button>
              <div v-show="modelData4_1.point9" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_1.point9=!modelData4_1.point9"/><el-input
                v-model="modelData4_1.point9text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point10" style="margin-left: 40%" @click="addModellength4_1('10')">新增</el-button></div>
              <div v-show="modelData4_1.point10" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('10')"/><el-input
                v-model="modelData4_1.point10text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point11" style="margin-left: 40%" @click="addModellength4_1('11')">新增</el-button></div>
              <div v-show="modelData4_1.point11" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('11')"/><el-input
                v-model="modelData4_1.point11text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point12" style="margin-left: 40%" @click="addModellength4_1('12')">新增</el-button></div>
              <div v-show="modelData4_1.point12" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('12')"/><el-input
                v-model="modelData4_1.point12text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point13" style="margin-left: 40%" @click="addModellength4_1('13')">新增</el-button></div>
              <div v-show="modelData4_1.point13" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('13')"/><el-input
                v-model="modelData4_1.point13text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point14" style="margin-left: 40%" @click="addModellength4_1('14')">新增</el-button></div>
              <div v-show="modelData4_1.point14" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('14')"/><el-input
                v-model="modelData4_1.point14text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point15" style="margin-left: 40%" @click="addModellength4_1('15')">新增</el-button></div>
              <div v-show="modelData4_1.point15" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('15')"/><el-input
                v-model="modelData4_1.point15text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData4_1.point16" style="margin-left: 40%" @click="addModellength4_1('16')">新增</el-button></div>
              <div v-show="modelData4_1.point16" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_1('16')"/><el-input
                v-model="modelData4_1.point16text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model4_2" :model="modelData4_2" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_2_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_2.imageUrl1" id="modelData4_2_img1" :src="modelData4_2.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_2_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_2.imageUrl2" id="modelData4_2_img2" :src="modelData4_2.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_2.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_2.textarea1"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData4_2.text2"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_2.textarea2"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_2_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_2.imageUrl3" id="modelData4_2_img3" :src="modelData4_2.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_2_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_2.imageUrl4" id="modelData4_2_img4" :src="modelData4_2.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_2.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_2.textarea3"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData4_2.text4"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_2.textarea4"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_3" :model="modelData4_3" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_3_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_3.imageUrl1" id="modelData4_3_img1" :src="modelData4_3.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_3.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_3.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_4" :model="modelData4_4" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_4_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_4.imageUrl1" id="modelData4_4_img1" :src="modelData4_4.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_4.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_4.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_5" :model="modelData4_5" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_5_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_5.imageUrl1" id="modelData4_5_img1" :src="modelData4_5.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_5.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_5.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_6" :model="modelData4_6" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_6.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_6.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_6_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_6.imageUrl1" id="modelData4_6_img1" :src="modelData4_6.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model4_7" :model="modelData4_7" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 10%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_7.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_7_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_7.imageUrl1" id="modelData4_7_img1" :src="modelData4_7.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData4_7.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_7.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_7_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_7.imageUrl2" id="modelData4_7_img2" :src="modelData4_7.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData4_7.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_7.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_7_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_7.imageUrl3" id="modelData4_7_img3" :src="modelData4_7.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData4_7.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_7.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_7_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_7.imageUrl4" id="modelData4_7_img4" :src="modelData4_7.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData4_7.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_7.textarea4"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_8" :model="modelData4_8" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
              <el-button v-show="!modelData4_8.point1" style="float: bottom;margin-top: 268px" @click="modelData4_8.point1=!modelData4_8.point1">新增</el-button>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_8_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_8.imageUrl1" id="modelData4_8_img1" :src="modelData4_8.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_8.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData4_8.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_8_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_8.imageUrl2" id="modelData4_8_img2" :src="modelData4_8.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_8.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData4_8.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_8_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_8.imageUrl3" id="modelData4_8_img3" :src="modelData4_8.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_8.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData4_8.text6"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_8_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_8.imageUrl4" id="modelData4_8_img4" :src="modelData4_8.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_8.text7"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData4_8.text8"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_8_5"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_8.imageUrl5" id="modelData4_8_img5" :src="modelData4_8.imageUrl5" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_8.text9"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData4_8.text10"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div v-show="modelData4_8.point1" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_8.point1=!modelData4_8.point1"/><el-input
                  v-model="modelData4_8.point1text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point2" @click="addModellength4_8('2')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point2" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('2')"/><el-input
                  v-model="modelData4_8.point2text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point3" @click="addModellength4_8('3')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point2text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point2text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point2text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point2text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point2text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point3" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('3')"/><el-input
                  v-model="modelData4_8.point3text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point4" @click="addModellength4_8('4')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point3text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point3text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point3text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point3text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point3text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point4" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('4')"/><el-input
                  v-model="modelData4_8.point4text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point5" @click="addModellength4_8('5')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point4text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point4text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point4text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point4text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point4text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point5" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('5')"/><el-input
                  v-model="modelData4_8.point5text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point6" @click="addModellength4_8('6')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point6" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('6')"/><el-input
                  v-model="modelData4_8.point6text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point7" @click="addModellength4_8('7')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point6text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point6text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point6text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point6text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point6text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point7" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('7')"/><el-input
                  v-model="modelData4_8.point7text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point8" @click="addModellength4_8('8')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point7text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point7text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point7text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point7text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point8" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('8')"/><el-input
                  v-model="modelData4_8.point8text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point9" @click="addModellength4_8('9')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point8text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point8text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point8text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point8text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point8text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point9" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('9')"/><el-input
                  v-model="modelData4_8.point9text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData4_8.point10" @click="addModellength4_8('10')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point9text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point9text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point9text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point9text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point9text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData4_8.point10" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_8('10')"/><el-input
                  v-model="modelData4_8.point10text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button @click="errorMessages">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point10text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point10text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point10text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point10text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData4_8.point10text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
          </div>
          <div v-show="model4_9" :model="modelData4_9" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div v-show="modelData1_9.imgDiv1" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_9_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_9.imageUrl1" id="modelData4_9_img1" :src="modelData4_9.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData4_9.imgDiv2" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_9_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_9.imageUrl2" id="modelData4_9_img2" :src="modelData4_9.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData4_9.imgDiv3" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_9_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_9.imageUrl3" id="modelData4_9_img3" :src="modelData4_9.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData1_9.imgDiv4" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_9_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_9.imageUrl4" id="modelData4_9_img4" :src="modelData4_9.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData4_9.textDiv1" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_9.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_9.textarea1"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData4_9.textDiv2" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_9.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_9.textarea2"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData4_9.textDiv3" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_9.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_9.textarea3"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData4_9.textDiv4" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_9.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_9.textarea4"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv4_1" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change4_9('1')"><i id="imgDiv4_1_i1" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData4_9.text5"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv4_2" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change4_9('2')"><i id="imgDiv4_2_i2" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData4_9.text6"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv4_3" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change4_9('3')"><i id="imgDiv4_3_i3" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData4_9.text7"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv4_4" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change4_9('4')"><i id="imgDiv4_4_i4" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData4_9.text8"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_10" :model="modelData4_10" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_10.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_10_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_10.imageUrl1" id="modelData4_10_img1" :src="modelData4_10.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 320px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_10.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_10.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_10.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData4_10.text4"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_10.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_10.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_10.text6"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData4_10.point1" @click="modelData4_10.point1=!modelData4_10.point1">新增</el-button>
              <div v-show="modelData4_10.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_10.point1=!modelData4_10.point1"/><el-input
                v-model="modelData4_10.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_10.point2" style="margin-left: 40%" @click="addModellength4_10('2')">新增</el-button></div>
              <div v-show="modelData4_10.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_10('2')"/><el-input
                v-model="modelData4_10.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_10.point3" style="margin-left: 40%" @click="addModellength4_10('3')">新增</el-button></div>
              <div v-show="modelData4_10.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_10('3')"/><el-input
                v-model="modelData4_10.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_10.point4" style="margin-left: 40%" @click="addModellength4_10('4')">新增</el-button></div>
              <div v-show="modelData4_10.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_10('4')"/><el-input
                v-model="modelData4_10.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_10.point5" style="margin-left: 40%" @click="addModellength4_10('5')">新增</el-button></div>
              <div v-show="modelData4_10.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_10('5')"/><el-input
                v-model="modelData4_10.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_10.point6" style="margin-left: 40%" @click="addModellength4_10('6')">新增</el-button></div>
              <div v-show="modelData4_10.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_10('6')"/><el-input
                v-model="modelData4_10.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_10.point7" style="margin-left: 40%" @click="addModellength4_10('7')">新增</el-button></div>
              <div v-show="modelData4_10.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_10('7')"/><el-input
                v-model="modelData4_10.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_10.point8" style="margin-left: 40%" @click="addModellength4_10('8')">新增</el-button></div>
              <div v-show="modelData4_10.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_10('8')"/><el-input
                v-model="modelData4_10.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
              <el-input
                v-model="modelData4_10.text7"
                style="padding-top: 19.5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_10.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_11" :model="modelData4_11" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_11_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_11.imageUrl1" id="modelData4_11_img1" :src="modelData4_11.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 362px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_11.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_11.text2"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_11.textarea1"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData4_11.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_11.textarea2"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_11.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData4_11.point1" @click="modelData4_11.point1=!modelData4_11.point1">新增</el-button>
              <div v-show="modelData4_11.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_11.point1=!modelData4_11.point1"/><el-input
                v-model="modelData4_11.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_11.point2" style="margin-left: 40%" @click="modelData4_11.point2=!modelData4_11.point2">新增</el-button></div>
              <div v-show="modelData4_11.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_11.point2=!modelData4_11.point2"/><el-input
                v-model="modelData4_11.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_11.point3" style="margin-left: 40%" @click="modelData4_11.point3=!modelData4_11.point3">新增</el-button></div>
              <div v-show="modelData4_11.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_11.point3=!modelData4_11.point3"/><el-input
                v-model="modelData4_11.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_11.point4" style="margin-left: 40%" @click="modelData4_11.point4=!modelData4_11.point4">新增</el-button></div>
              <div v-show="modelData4_11.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_11.point4=!modelData4_11.point4"/><el-input
                v-model="modelData4_11.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_11.point5" style="margin-left: 40%" @click="modelData4_11.point5=!modelData4_11.point5">新增</el-button></div>
              <div v-show="modelData4_11.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_11.point5=!modelData4_11.point5"/><el-input
                v-model="modelData4_11.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_11.point6" style="margin-left: 40%" @click="modelData4_11.point6=!modelData4_11.point6">新增</el-button></div>
              <div v-show="modelData4_11.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_11.point6=!modelData4_11.point6"/><el-input
                v-model="modelData4_11.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_11.point7" style="margin-left: 40%" @click="modelData4_11.point7=!modelData4_11.point7">新增</el-button></div>
              <div v-show="modelData4_11.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData4_11.point7=!modelData4_11.point7"/><el-input
                v-model="modelData4_11.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData4_11.point8" style="margin-left: 40%" @click="addModellength4_11('8')">新增</el-button></div>
              <div v-show="modelData4_11.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength4_11('8')"/><el-input
                v-model="modelData4_11.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model4_12" :model="modelData4_12" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_12.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="200"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_12_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_12.imageUrl1" id="modelData4_12_img1" :src="modelData4_12.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_12.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_12.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_12_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_12.imageUrl2" id="modelData4_12_img2" :src="modelData4_12.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_12.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_12.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_12_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_12.imageUrl3" id="modelData4_12_img3" :src="modelData4_12.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData4_12.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData4_12.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_13" :model="modelData4_13" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_13.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_13_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_13.imageUrl1" id="modelData4_13_img1" :src="modelData4_13.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 180px">970:600</i>
              </el-upload>
              <el-input
                v-model="modelData4_13.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-input
                v-model="modelData4_13.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_14" :model="modelData4_14" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData4_14_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData4_14.imageUrl1" id="modelData4_14_img1" :src="modelData4_14.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 360px">600:180</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model4_15" :model="modelData4_15" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_15.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData4_15.textarea1"
                :autosize="{minRows:15,maxRows:15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="5000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model4_16" :model="modelData4_16" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData4_16.textarea1"
                :autosize="{minRows:16,maxRows:16}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <a><div v-show="model4" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid" @click="choose('model4')"><p style="font-size: 25px;font-weight: bold;color:black;margin-top: 20%" onmouseout="this.style.color='black'" onmouseover="this.style.color='#ffb57f'">单击选择模板</p></div></a>
          <div style="width: 150px;height: 155px;border-left: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -50%;margin-right: -20px;text-align: center;"><p style="padding-top: 40px;font-size: 35px">模板四</p></div>
          <div style="width: 150px;height: 900px;border: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -32%;margin-right: -20px">
          <img :src="imgUrl" height="50" width="45" style="margin-top: 50%;margin-left: 36%" onmouseover="this.height=55;this.width=50" onmouseout="this.height=50;this.width=45" @click="deletes('model4')"></div>
        </el-card>
      </el-col>
      <el-col v-if="card5" :span="8" style="width: 102%;border: black 0px solid;padding-top: 50px">
        <el-card id="ssssss5" shadow="hover" style="width: 900px;height: 400px;margin:0 auto;">
          <div v-show="model5_1" :model="modelData5_1" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_1_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_1.imageUrl1" id="modelData5_1_img1" :src="modelData5_1.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">300:400</i>
              </el-upload>
              <el-input
                v-model="modelData5_1.text1"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_1.text2"
                type="text"
                placeholder="Enter headline text"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_1.text3"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData5_1.textarea1"
                :autosize="{ minRows: 5, maxRows: 5}"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData5_1.point1" @click="modelData5_1.point1=!modelData5_1.point1">新增</el-button>
              <div v-show="modelData5_1.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_1.point1=!modelData5_1.point1"/><el-input
                v-model="modelData5_1.point1text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point2" style="margin-left: 40%" @click="modelData5_1.point2=!modelData5_1.point2">新增</el-button></div>
              <div v-show="modelData5_1.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_1.point2=!modelData5_1.point2"/><el-input
                v-model="modelData5_1.point2text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point3" style="margin-left: 40%" @click="modelData5_1.point3=!modelData5_1.point3">新增</el-button></div>
              <div v-show="modelData5_1.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_1.point3=!modelData5_1.point3"/><el-input
                v-model="modelData5_1.point3text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point4" style="margin-left: 40%" @click="addModellength5_1('4')">新增</el-button></div>
              <div v-show="modelData5_1.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('4')"/><el-input
                v-model="modelData5_1.point4text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point5" style="margin-left: 40%" @click="addModellength5_1('5')">新增</el-button></div>
              <div v-show="modelData5_1.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('5')"/><el-input
                v-model="modelData5_1.point5text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point6" style="margin-left: 40%" @click="addModellength5_1('6')">新增</el-button></div>
              <div v-show="modelData5_1.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('6')"/><el-input
                v-model="modelData5_1.point6text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point7" style="margin-left: 40%" @click="addModellength5_1('7')">新增</el-button></div>
              <div v-show="modelData5_1.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('7')"/><el-input
                v-model="modelData5_1.point7text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point8" style="margin-left: 40%" @click="addModellength5_1('8')">新增</el-button></div>
              <div v-show="modelData5_1.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('8')"/><el-input
                v-model="modelData5_1.point8text"
                style="width: 85.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
            <div style="width: 30%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_1_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_1.imageUrl2" id="modelData5_1_img2" :src="modelData5_1.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 210px;height: 192px">350:175</i>
              </el-upload>
              <el-input
                v-model="modelData5_1.text4"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              />
              <el-input
                v-model="modelData5_1.textarea2"
                type="textarea"
                placeholder="Enter body text"
                maxlength="500"
                show-word-limit
              />
              <el-button v-show="!modelData5_1.point9" @click="modelData5_1.point9=!modelData5_1.point9">新增</el-button>
              <div v-show="modelData5_1.point9" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_1.point9=!modelData5_1.point9"/><el-input
                v-model="modelData5_1.point9text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point10" style="margin-left: 40%" @click="addModellength5_1('10')">新增</el-button></div>
              <div v-show="modelData5_1.point10" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('10')"/><el-input
                v-model="modelData5_1.point10text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point11" style="margin-left: 40%" @click="addModellength5_1('11')">新增</el-button></div>
              <div v-show="modelData5_1.point11" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('11')"/><el-input
                v-model="modelData5_1.point11text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point12" style="margin-left: 40%" @click="addModellength5_1('12')">新增</el-button></div>
              <div v-show="modelData5_1.point12" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('12')"/><el-input
                v-model="modelData5_1.point12text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point13" style="margin-left: 40%" @click="addModellength5_1('13')">新增</el-button></div>
              <div v-show="modelData5_1.point13" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('13')"/><el-input
                v-model="modelData5_1.point13text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point14" style="margin-left: 40%" @click="addModellength5_1('14')">新增</el-button></div>
              <div v-show="modelData5_1.point14" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('14')"/><el-input
                v-model="modelData5_1.point14text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point15" style="margin-left: 40%" @click="addModellength5_1('15')">新增</el-button></div>
              <div v-show="modelData5_1.point15" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('15')"/><el-input
                v-model="modelData5_1.point15text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button v-show="!modelData5_1.point16" style="margin-left: 40%" @click="addModellength5_1('16')">新增</el-button></div>
              <div v-show="modelData5_1.point16" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_1('16')"/><el-input
                v-model="modelData5_1.point16text"
                style="width: 80.7%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="200"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model5_2" :model="modelData5_2" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_2_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_2.imageUrl1" id="modelData5_2_img1" :src="modelData5_2.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_2_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_2.imageUrl2" id="modelData5_2_img2" :src="modelData5_2.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_2.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_2.textarea1"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData5_2.text2"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_2.textarea2"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_2_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_2.imageUrl3" id="modelData5_2_img3" :src="modelData5_2.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_2_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_2.imageUrl4" id="modelData5_2_img4" :src="modelData5_2.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon">135:135</i>
              </el-upload>
            </div>
            <div style="width: 25%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_2.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_2.textarea3"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
              <el-input
                v-model="modelData5_2.text4"
                style="padding-top: 6px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_2.textarea4"
                :autosize="{ minRows: 6, maxRows: 6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_3" :model="modelData5_3" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_3_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_3.imageUrl1" id="modelData5_3_img1" :src="modelData5_3.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_3.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_3.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_4" :model="modelData5_4" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData1_4_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_4.imageUrl1" id="modelData5_4_img1" :src="modelData5_4.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">970:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_4.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_4.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="500"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_5" :model="modelData5_5" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_5_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_5.imageUrl1" id="modelData5_5_img1" :src="modelData5_5.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_5.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_5.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_6" :model="modelData5_6" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_6.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_6.textarea1"
                :autosize="{ minRows: 15, maxRows: 15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 50%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_6_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_6.imageUrl1" id="modelData5_6_img1" :src="modelData5_6.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 360px;height: 365px">300:300</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model5_7" :model="modelData5_7" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 10%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_7.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_7_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_7.imageUrl1" id="modelData5_7_img1" :src="modelData5_7.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData5_7.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_7.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_7_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_7.imageUrl2" id="modelData5_7_img2" :src="modelData5_7.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData5_7.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_7.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_7_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_7.imageUrl3" id="modelData5_7_img3" :src="modelData5_7.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData5_7.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_7.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 25%;height: 90%;border: black 0px solid;float: left;padding-top: 5px">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_7_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_7.imageUrl4" id="modelData5_7_img4" :src="modelData5_7.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 180px;height: 180px">220:220</i>
              </el-upload>
              <el-input
                v-model="modelData5_7.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_7.textarea4"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_8" :model="modelData5_8" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
              <el-button v-show="!modelData5_8.point1" style="float: bottom;margin-top: 268px" @click="modelData5_8.point1=!modelData5_8.point1">新增</el-button>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_8_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_8.imageUrl1" id="modelData5_8_img1" :src="modelData5_8.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_8.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData5_8.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_8_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_8.imageUrl2" id="modelData5_8_img2" :src="modelData5_8.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_8.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData5_8.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_8_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_8.imageUrl3" id="modelData5_8_img3" :src="modelData5_8.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_8.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData5_8.text6"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_8_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_8.imageUrl4" id="modelData5_8_img4" :src="modelData5_8.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_8.text7"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData5_8.text8"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_8_5"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_8.imageUrl5" id="modelData5_8_img5" :src="modelData5_8.imageUrl5" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 120px;height: 200px;font-size: 20px">150:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_8.text9"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData5_8.text10"
                type="text"
                placeholder="请输入内容"
                maxlength="10"
                show-word-limit
              />
              <el-checkbox v-model="checked">高亮</el-checkbox>
            </div>
            <div v-show="modelData5_8.point1" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_8.point1=!modelData5_8.point1"/><el-input
                  v-model="modelData5_8.point1text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point2" @click="addModellength5_8('2')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point2" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('2')"/><el-input
                  v-model="modelData5_8.point2text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData1_8.point3" @click="addModellength5_8('3')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point2text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point2text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point2text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point2text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point2text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point3" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('3')"/><el-input
                  v-model="modelData5_8.point3text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point4" @click="addModellength5_8('4')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point3text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point3text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point3text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point3text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point3text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point4" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('4')"/><el-input
                  v-model="modelData5_8.point4text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point5" @click="addModellength5_8('5')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point4text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point4text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point4text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point4text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point4text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point5" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('5')"/><el-input
                  v-model="modelData5_8.point5text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point6" @click="addModellength5_8('6')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point6" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('6')"/><el-input
                  v-model="modelData5_8.point6text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point7" @click="addModellength5_8('7')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point6text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point6text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point6text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point6text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point6text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point7" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('7')"/><el-input
                  v-model="modelData5_8.point7text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point8" @click="addModellength5_8('8')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point7text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point7text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point1text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point7text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point7text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point8" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('8')"/><el-input
                  v-model="modelData5_8.point8text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point9" @click="addModellength5_8('9')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point8text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point8text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point8text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point8text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point8text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point9" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('9')"/><el-input
                  v-model="modelData5_8.point9text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button v-show="!modelData5_8.point10" @click="addModellength5_8('10')">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point9text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point9text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point9text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point9text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point9text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
            <div v-show="modelData5_8.point10" style="width: 100%;height: 13%;border: black 0px solid;float: left">
              <div style="width: 15%;height: 87%;border: black 0px solid;float: left">
                <div ref="testDiv" style="width: 99%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_8('10')"/><el-input
                  v-model="modelData5_8.point10text1"
                  style="width: 60%"
                  type="text"
                  placeholder="Enter subheadline text"
                  maxlength="250"
                  show-word-limit
                /><el-button @click="errorMessages">新增</el-button></div>
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point10text2"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point10text3"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point10text4"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point10text5"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
              <div style="width: 17%;height: 87%;border: black 0px solid;float: left">
                <el-input
                  v-model="modelData5_8.point10text6"
                  type="text"
                  placeholder="请输入内容"
                  maxlength="250"
                  show-word-limit
                />
              </div>
            </div>
          </div>
          <div v-show="model5_9" :model="modelData5_9" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div v-show="modelData1_9.imgDiv1" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_9_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_9.imageUrl1" id="modelData5_9_img1" :src="modelData5_9.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData5_9.imgDiv2" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_9_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_9.imageUrl2" id="modelData5_9_img2" :src="modelData5_9.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData1_9.imgDiv3" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_9_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_9.imageUrl3" id="modelData5_9_img3" :src="modelData5_9.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData1_9.imgDiv4" style="width: 40%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_9_4"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_9.imageUrl4" id="modelData5_9_img4" :src="modelData5_9.imageUrl4" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 288px;height: 360px">300:300</i>
              </el-upload>
            </div>
            <div v-show="modelData5_9.textDiv1" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_9.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_9.textarea1"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData5_9.textDiv2" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_9.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_9.textarea2"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData5_9.textDiv3" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_9.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_9.textarea3"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div v-show="modelData5_9.textDiv4" style="width: 60%;height: 50%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_9.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_9.textarea4"
                :autosize="{minRows:6,maxRows:6}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv5_1" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change5_9('1')"><i id="imgDiv5_1_i1" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData5_9.text5"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv5_2" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change5_9('2')"><i id="imgDiv5_2_i2" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData5_9.text6"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv5_3" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change5_9('3')"><i id="imgDiv5_3_i3" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData5_9.text7"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
            <div style="width: 15%;height: 50%;border: black 0px solid;float: left">
              <div id="imgDiv5_4" style="width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9" @click="change5_9('4')"><i id="imgDiv5_4_i4" class="el-icon-circle-plus" style="color: #4a90e2"/></div>
              <el-input
                v-model="modelData5_9.text8"
                style="width: 105px"
                type="text"
                placeholder="请输入内容"
                maxlength="250"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_10" :model="modelData5_10" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_10.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_10_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_10.imageUrl1" id="modelData5_10_img1" :src="modelData5_10.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 320px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_10.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_10.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_10.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData5_10.text4"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_10.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_10.text5"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_10.text6"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData5_10.point1" @click="modelData5_10.point1=!modelData5_10.point1">新增</el-button>
              <div v-show="modelData5_10.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_10.point1=!modelData5_10.point1"/><el-input
                v-model="modelData5_10.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_10.point2" style="margin-left: 40%" @click="addModellength5_10('2')">新增</el-button></div>
              <div v-show="modelData5_10.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_10('2')"/><el-input
                v-model="modelData5_10.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_10.point3" style="margin-left: 40%" @click="addModellength5_10('3')">新增</el-button></div>
              <div v-show="modelData5_10.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_10('3')"/><el-input
                v-model="modelData5_10.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_10.point4" style="margin-left: 40%" @click="addModellength5_10('4')">新增</el-button></div>
              <div v-show="modelData5_10.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_10('4')"/><el-input
                v-model="modelData5_10.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_10.point5" style="margin-left: 40%" @click="addModellength5_10('5')">新增</el-button></div>
              <div v-show="modelData5_10.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_10('5')"/><el-input
                v-model="modelData5_10.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_10.point6" style="margin-left: 40%" @click="addModellength5_10('6')">新增</el-button></div>
              <div v-show="modelData5_10.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_10('6')"/><el-input
                v-model="modelData5_10.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_10.point7" style="margin-left: 40%" @click="addModellength5_10('7')">新增</el-button></div>
              <div v-show="modelData5_10.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_10('7')"/><el-input
                v-model="modelData5_10.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_10.point8" style="margin-left: 40%" @click="addModellength5_10('8')">新增</el-button></div>
              <div v-show="modelData5_10.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_10('8')"/><el-input
                v-model="modelData5_10.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
              <el-input
                v-model="modelData5_10.text7"
                style="padding-top: 19.5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_10.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_11" :model="modelData5_11" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_11_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_11.imageUrl1" id="modelData5_11_img1" :src="modelData5_11.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 362px">300:300</i>
              </el-upload>
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_11.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_11.text2"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_11.textarea1"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
              <el-input
                v-model="modelData5_11.text3"
                style="padding-top: 5px"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_11.textarea2"
                :autosize="{minRows:5,maxRows:5}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_11.text4"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-button v-show="!modelData5_11.point1" @click="modelData5_11.point1=!modelData5_11.point1">新增</el-button>
              <div v-show="modelData5_11.point1" ref="testDiv" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_11.point1=!modelData5_11.point1"/><el-input
                v-model="modelData5_11.point1text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_11.point2" style="margin-left: 40%" @click="modelData5_11.point2=!modelData5_11.point2">新增</el-button></div>
              <div v-show="modelData5_11.point2" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_11.point2=!modelData5_11.point2"/><el-input
                v-model="modelData5_11.point2text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_11.point3" style="margin-left: 40%" @click="modelData5_11.point3=!modelData5_11.point3">新增</el-button></div>
              <div v-show="modelData5_11.point3" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_11.point3=!modelData5_11.point3"/><el-input
                v-model="modelData5_11.point3text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text1"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_11.point4" style="margin-left: 40%" @click="modelData5_11.point4=!modelData5_11.point4">新增</el-button></div>
              <div v-show="modelData5_11.point4" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_11.point4=!modelData5_11.point4"/><el-input
                v-model="modelData5_11.point4text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_11.point5" style="margin-left: 40%" @click="modelData5_11.point5=!modelData5_11.point5">新增</el-button></div>
              <div v-show="modelData5_11.point5" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_11.point5=!modelData5_11.point5"/><el-input
                v-model="modelData5_11.point5text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_11.point6" style="margin-left: 40%" @click="modelData5_11.point6=!modelData5_11.point6">新增</el-button></div>
              <div v-show="modelData5_11.point6" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_11.point6=!modelData5_11.point6"/><el-input
                v-model="modelData5_11.point6text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_11.point7" style="margin-left: 40%" @click="modelData5_11.point7=!modelData5_11.point7">新增</el-button></div>
              <div v-show="modelData5_11.point7" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="modelData5_11.point7=!modelData5_11.point7"/><el-input
                v-model="modelData5_11.point7text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button v-show="!modelData5_11.point8" style="margin-left: 40%" @click="addModellength5_11('8')">新增</el-button></div>
              <div v-show="modelData5_11.point8" style="width: 100%;text-align: left"><el-button style="color: black;background: white;border:rgba(204,204,204,0.15) 2px solid" circle type="danger" icon="el-icon-delete" @click="reduceModellength5_11('8')"/><el-input
                v-model="modelData5_11.point8text"
                style="width: 82.5%"
                type="text"
                placeholder="Enter subheadline text"
                maxlength="100"
                show-word-limit
              /><el-button style="margin-left: 40%" @click="errorMessages">新增</el-button></div>
            </div>
          </div>
          <div v-show="model5_12" :model="modelData5_12" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 12%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_12.text0"
                type="text"
                placeholder="请输入内容"
                maxlength="200"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_12_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_12.imageUrl1" id="modelData5_12_img1" :src="modelData5_12.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_12.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_12.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_12_2"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_12.imageUrl2" id="modelData5_12_img2" :src="modelData5_12.imageUrl2" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_12.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_12.textarea2"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
            <div style="width: 33.333333%;height: 90%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_12_3"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_12.imageUrl3" id="modelData5_12_img3" :src="modelData5_12.imageUrl3" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 240px;height: 180px">300:300</i>
              </el-upload>
              <el-input
                v-model="modelData5_12.text3"
                type="text"
                placeholder="请输入内容"
                maxlength="160"
                show-word-limit
              />
              <el-input
                v-model="modelData5_12.textarea3"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="1000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_13" :model="modelData5_13" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_13.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_13_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_13.imageUrl1" id="modelData5_13_img1" :src="modelData5_13.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 180px">970:600</i>
              </el-upload>
              <el-input
                v-model="modelData5_13.text2"
                type="text"
                placeholder="请输入内容"
                maxlength="150"
                show-word-limit
              />
              <el-input
                v-model="modelData5_13.textarea1"
                :autosize="{minRows:4,maxRows:4}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_14" :model="modelData5_14" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-upload
                :headers="headers"
                :show-file-list="false"
                :on-success="handleAvatarSuccess_modelData5_14_1"
                :before-upload="beforeAvatarUpload"
                :action="imagesUploadApi"
                class="avatar-uploader">
                <img v-if="modelData5_14.imageUrl1" id="modelData5_14_img1" :src="modelData5_14.imageUrl1" class="avatar" width="0px" height="0px">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:725px;height: 360px">600:180</i>
              </el-upload>
            </div>
          </div>
          <div v-show="model5_15" :model="modelData5_15" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_15.text1"
                type="text"
                placeholder="请输入内容"
                maxlength="80"
                show-word-limit
              />
              <el-input
                v-model="modelData5_15.textarea1"
                :autosize="{minRows:15,maxRows:15}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="5000"
                show-word-limit
              />
            </div>
          </div>
          <div v-show="model5_16" :model="modelData5_16" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid">
            <div style="width: 100%;height: 100%;border: black 0px solid;float: left">
              <el-input
                v-model="modelData5_16.textarea1"
                :autosize="{minRows:16,maxRows:16}"
                type="textarea"
                placeholder="请输入内容"
                maxlength="6000"
                show-word-limit
              />
            </div>
          </div>
          <a><div v-show="model5" style="width: 85%;height:360px;text-align: center;float: top;border: rgba(255,181,127,0) 1px solid" @click="choose('model5')"><p style="font-size: 25px;font-weight: bold;color:black;margin-top: 20%" onmouseout="this.style.color='black'" onmouseover="this.style.color='#ffb57f'">单击选择模板</p></div></a>
          <div style="width: 150px;height: 155px;border-left: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -50%;margin-right: -20px;text-align: center;"><p style="padding-top: 40px;font-size: 35px">模板五</p></div>
          <div style="width: 150px;height: 900px;border: rgba(151,194,219,0.16) 1px solid;float: right;margin-top: -32%;margin-right: -20px">
          <img :src="imgUrl" height="50" width="45" style="margin-top: 50%;margin-left: 36%" onmouseover="this.height=55;this.width=50" onmouseout="this.height=50;this.width=45" @click="deletes('model5')"></div>
        </el-card>
      </el-col>
    </div>
    <div v-show="show2">
      <div style="width: 100%;height: 50px;margin:0 auto;text-align: center;">
        <p style="font-size: 25px;font-weight: bold" >效果预览</p></div>
      <div style="width: 979px;height:712px;border: 1px black solid;margin:0 auto; ">
        <div style="width: 300px;height: 420px;float: left">
          <img alt="1" src="https://m.media-amazon.com/images/S/aplus-media/vc/719d3ac5-c60d-411e-96a2-012bc9855e98.__CR0,0,300,400_PT0_SX300_V1___.jpg">
        </div>
        <div style="float:right; width:230px; padding-left:30px; margin-left:30px; border-left:1px solid #dddddd;">
          <div class="apm-rightthirdcol-inner">
            <img alt="1" src="https://m.media-amazon.com/images/S/aplus-media/vc/48f1eecf-dff9-4ed3-b55e-763712f99652.__CR0,0,350,175_PT0_SX350_V1___.jpg" style="width: 199px;height: 99.5px;margin: 0px 0px 6px">
            <h5 class="a-color-secondary">
              BATH MASTER
            </h5>
            <p class="a-spacing-small a-size-small a-color-secondary">
              Bath master specializes in the production of sanitary products, including: acrylic bathtub, shower screen, sink, sink drain, faucet. Provide customers with high quality and reasonable price products. Bath master's philosophy is customer first, serving every customer seriously is the secret of our success.
            </p>
            <p class="a-spacing-small a-size-small a-color-secondary">
              If you have any questions, please don't hesitate to contact us.
            </p>
          </div>
        </div>
        <div class="apm-centerthirdcol apm-wrap">
          <h3 class="a-spacing-mini">
          </h3>
          <h4 class="a-spacing-mini a-color-secondary a-text-italic">
            Premium 304 Stainless steel, Never Rust or Oxidation
          </h4>
          <p class="a-spacing-base">
            BATH MASTER multi-function stainless steel shower panel,Sleek modern and impressive design，8 body jets design, full body coverage, let you enjoy the hearty bathing experience. Waterfall and rainfall mode make you feel in the nature and get relaxed.
          </p>
          <div class="amp-centerthirdcol-listbox">
            <div class="apm-listbox amp-centerthirdcol-listbox a-box a-color-alternate-background a-spacing-small">
              <div class="a-box-inner">
                <ul class="a-unordered-list a-vertical">
                  <li>
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary" >
                        Large Ultra Sleek Design
                      </span>
                    </span>
                  </li>
                  <li>
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary">
                        Simultaneous Action
                      </span>
                    </span>
                  </li>
                  <li>
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary">
                        Fingerprint-free Brushed Nickel
                      </span>
                    </span>
                  </li>
                  <li>
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary">
                        Rainfall Shower Head
                      </span>
                    </span>
                  </li>
                  <li>
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary">
                        Waterfall Shower Head
                      </span>
                    </span>
                  </li>
                  <li>
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary">
                        Power Body Sprays
                      </span>
                    </span>
                  </li>
                  <li v-if="true">
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary">
                        Handheld Shower Wand
                      </span>
                    </span>
                  </li>
                  <li v-if="false">
                    <span class="a-list-item">
                      <span class="a-size-base a-color-secondary">
                        Standard Plumbing Connection
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button v-show="buttonShow" style="margin-top: 12px;position:relative;left:43%;top:50%;margin-top: 20px" @click="back">上一步</el-button>
    <el-button style="margin-top: 12px;position:relative;left:45%;top:50%;margin-top: 20px" @click="next">下一步</el-button>
    <el-steps :active="active" finish-status="success" style="padding-top: 200px">
      <el-step title="步骤 1"/>
      <el-step title="步骤 2"/>
      <el-step title="步骤 3"/>
    </el-steps>
  </div>
</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
import { getToken } from '@/utils/auth'
import { mapGetters } from 'vuex'
export default {
  data: function() {
    return {
      card2: false,
      card3: false,
      card4: false,
      card5: false,
      choosemodel: '',
      styleLength1_1: 0,
      styleLength1_2: 0,
      styleLength2_1: 0,
      styleLength2_2: 0,
      styleLength3_1: 0,
      styleLength3_2: 0,
      styleLength4_1: 0,
      styleLength4_2: 0,
      styleLength5_1: 0,
      styleLength5_2: 0,
      headers: {
        'Authorization': 'Bearer ' + getToken()
      },
      modelData1_1: { imageUrl1: '', imageUrl2: '', text1: '', text2: '', text3: '', textarea1: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false,
        point9: false, point10: false, point11: false, point12: false, point13: false, point14: false, point15: false, point16: false,
        point8text: '', point9text: '', point10text: '', point11text: '', point12text: '', point13text: '', point14text: '', point15text: '', point16text: '', text4: '', textarea2: '' },
      modelData1_2: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '',
        textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData1_3: { imageUrl1: '', text1: '', textarea1: '' },
      modelData1_4: { imageUrl1: '', text1: '', textarea1: '' },
      modelData1_5: { imageUrl1: '', text1: '', textarea1: '' },
      modelData1_6: { imageUrl1: '', text1: '', textarea1: '' },
      modelData1_7: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text0: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData1_8: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', imageUrl5: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '',
        point1: true, point2: false, point3: false, point4: false, point5: false, point6: false, point7: false, point8: false, point9: false, point10: false,
        point1text1: '', point1text2: '', point1text3: '', point1text4: '', point1text5: '', point1text6: '',
        point2text1: '', point2text2: '', point2text3: '', point2text4: '', point2text5: '', point2text6: '',
        point3text1: '', point3text2: '', point3text3: '', point3text4: '', point3text5: '', point3text6: '',
        point4text1: '', point4text2: '', point4text3: '', point4text4: '', point4text5: '', point4text6: '',
        point5text1: '', point5text2: '', point5text3: '', point5text4: '', point5text5: '', point5text6: '',
        point6text1: '', point6text2: '', point6text3: '', point6text4: '', point6text5: '', point6text6: '',
        point7text1: '', point7text2: '', point7text3: '', point7text4: '', point7text5: '', point7text6: '',
        point8text1: '', point8text2: '', point8text3: '', point8text4: '', point8text5: '', point8text6: '',
        point9text1: '', point9text2: '', point9text3: '', point9text4: '', point9text5: '', point9text6: '',
        point10text1: '', point10text2: '', point10text3: '', point10text4: '', point10text5: '', point10text6: '' },
      modelData1_9: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '', text5: '', text6: '', text7: '', text8: '', imgDiv1: true, textDiv1: true,
        imgDiv2: false, textDiv2: false, imgDiv3: false, textDiv3: false, imgDiv4: false, textDiv4: false },
      modelData1_10: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', textarea1: '', textarea2: '', textarea3: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData1_11: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData1_12: { imageUrl1: '', imageUrl2: '', imageUrl3: '', text0: '', text1: '', text2: '', text3: '', textarea1: '', textarea2: '', textarea3: '' },
      modelData1_13: { imageUrl1: '', text1: '', text2: '', textarea1: '' },
      modelData1_14: { imageUrl1: '' },
      modelData1_15: { text1: '', textarea1: '' },
      modelData1_16: { textarea1: '' },
      modelData2_1: { imageUrl1: '', imageUrl2: '', text1: '', text2: '', text3: '', textarea1: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false,
        point9: false, point10: false, point11: false, point12: false, point13: false, point14: false, point15: false, point16: false,
        point8text: '', point9text: '', point10text: '', point11text: '', point12text: '', point13text: '', point14text: '', point15text: '', point16text: '', text4: '', textarea2: '' },
      modelData2_2: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '',
        textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData2_3: { imageUrl1: '', text1: '', textarea1: '' },
      modelData2_4: { imageUrl1: '', text1: '', textarea1: '' },
      modelData2_5: { imageUrl1: '', text1: '', textarea1: '' },
      modelData2_6: { imageUrl1: '', text1: '', textarea1: '' },
      modelData2_7: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text0: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData2_8: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', imageUrl5: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '',
        point1: true, point2: false, point3: false, point4: false, point5: false, point6: false, point7: false, point8: false, point9: false, point10: false,
        point1text1: '', point1text2: '', point1text3: '', point1text4: '', point1text5: '', point1text6: '',
        point2text1: '', point2text2: '', point2text3: '', point2text4: '', point2text5: '', point2text6: '',
        point3text1: '', point3text2: '', point3text3: '', point3text4: '', point3text5: '', point3text6: '',
        point4text1: '', point4text2: '', point4text3: '', point4text4: '', point4text5: '', point4text6: '',
        point5text1: '', point5text2: '', point5text3: '', point5text4: '', point5text5: '', point5text6: '',
        point6text1: '', point6text2: '', point6text3: '', point6text4: '', point6text5: '', point6text6: '',
        point7text1: '', point7text2: '', point7text3: '', point7text4: '', point7text5: '', point7text6: '',
        point8text1: '', point8text2: '', point8text3: '', point8text4: '', point8text5: '', point8text6: '',
        point9text1: '', point9text2: '', point9text3: '', point9text4: '', point9text5: '', point9text6: '',
        point10text1: '', point10text2: '', point10text3: '', point10text4: '', point10text5: '', point10text6: '' },
      modelData2_9: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '', text5: '', text6: '', text7: '', text8: '', imgDiv1: true, textDiv1: true,
        imgDiv2: false, textDiv2: false, imgDiv3: false, textDiv3: false, imgDiv4: false, textDiv4: false },
      modelData2_10: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', textarea1: '', textarea2: '', textarea3: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData2_11: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData2_12: { imageUrl1: '', imageUrl2: '', imageUrl3: '', text0: '', text1: '', text2: '', text3: '', textarea1: '', textarea2: '', textarea3: '' },
      modelData2_13: { imageUrl1: '', text1: '', text2: '', textarea1: '' },
      modelData2_14: { imageUrl1: '' },
      modelData2_15: { text1: '', textarea1: '' },
      modelData2_16: { textarea1: '' },
      modelData3_1: { imageUrl1: '', imageUrl2: '', text1: '', text2: '', text3: '', textarea1: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false,
        point9: false, point10: false, point11: false, point12: false, point13: false, point14: false, point15: false, point16: false,
        point8text: '', point9text: '', point10text: '', point11text: '', point12text: '', point13text: '', point14text: '', point15text: '', point16text: '', text4: '', textarea2: '' },
      modelData3_2: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '',
        textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData3_3: { imageUrl1: '', text1: '', textarea1: '' },
      modelData3_4: { imageUrl1: '', text1: '', textarea1: '' },
      modelData3_5: { imageUrl1: '', text1: '', textarea1: '' },
      modelData3_6: { imageUrl1: '', text1: '', textarea1: '' },
      modelData3_7: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text0: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData3_8: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', imageUrl5: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '',
        point1: true, point2: false, point3: false, point4: false, point5: false, point6: false, point7: false, point8: false, point9: false, point10: false,
        point1text1: '', point1text2: '', point1text3: '', point1text4: '', point1text5: '', point1text6: '',
        point2text1: '', point2text2: '', point2text3: '', point2text4: '', point2text5: '', point2text6: '',
        point3text1: '', point3text2: '', point3text3: '', point3text4: '', point3text5: '', point3text6: '',
        point4text1: '', point4text2: '', point4text3: '', point4text4: '', point4text5: '', point4text6: '',
        point5text1: '', point5text2: '', point5text3: '', point5text4: '', point5text5: '', point5text6: '',
        point6text1: '', point6text2: '', point6text3: '', point6text4: '', point6text5: '', point6text6: '',
        point7text1: '', point7text2: '', point7text3: '', point7text4: '', point7text5: '', point7text6: '',
        point8text1: '', point8text2: '', point8text3: '', point8text4: '', point8text5: '', point8text6: '',
        point9text1: '', point9text2: '', point9text3: '', point9text4: '', point9text5: '', point9text6: '',
        point10text1: '', point10text2: '', point10text3: '', point10text4: '', point10text5: '', point10text6: '' },
      modelData3_9: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '', text5: '', text6: '', text7: '', text8: '', imgDiv1: true, textDiv1: true,
        imgDiv2: false, textDiv2: false, imgDiv3: false, textDiv3: false, imgDiv4: false, textDiv4: false },
      modelData3_10: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', textarea1: '', textarea2: '', textarea3: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData3_11: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData3_12: { imageUrl1: '', imageUrl2: '', imageUrl3: '', text0: '', text1: '', text2: '', text3: '', textarea1: '', textarea2: '', textarea3: '' },
      modelData3_13: { imageUrl1: '', text1: '', text2: '', textarea1: '' },
      modelData3_14: { imageUrl1: '' },
      modelData3_15: { text1: '', textarea1: '' },
      modelData3_16: { textarea1: '' },
      modelData4_1: { imageUrl1: '', imageUrl2: '', text1: '', text2: '', text3: '', textarea1: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false,
        point9: false, point10: false, point11: false, point12: false, point13: false, point14: false, point15: false, point16: false,
        point8text: '', point9text: '', point10text: '', point11text: '', point12text: '', point13text: '', point14text: '', point15text: '', point16text: '', text4: '', textarea2: '' },
      modelData4_2: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '',
        textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData4_3: { imageUrl1: '', text1: '', textarea1: '' },
      modelData4_4: { imageUrl1: '', text1: '', textarea1: '' },
      modelData4_5: { imageUrl1: '', text1: '', textarea1: '' },
      modelData4_6: { imageUrl1: '', text1: '', textarea1: '' },
      modelData4_7: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text0: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData4_8: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', imageUrl5: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '',
        point1: true, point2: false, point3: false, point4: false, point5: false, point6: false, point7: false, point8: false, point9: false, point10: false,
        point1text1: '', point1text2: '', point1text3: '', point1text4: '', point1text5: '', point1text6: '',
        point2text1: '', point2text2: '', point2text3: '', point2text4: '', point2text5: '', point2text6: '',
        point3text1: '', point3text2: '', point3text3: '', point3text4: '', point3text5: '', point3text6: '',
        point4text1: '', point4text2: '', point4text3: '', point4text4: '', point4text5: '', point4text6: '',
        point5text1: '', point5text2: '', point5text3: '', point5text4: '', point5text5: '', point5text6: '',
        point6text1: '', point6text2: '', point6text3: '', point6text4: '', point6text5: '', point6text6: '',
        point7text1: '', point7text2: '', point7text3: '', point7text4: '', point7text5: '', point7text6: '',
        point8text1: '', point8text2: '', point8text3: '', point8text4: '', point8text5: '', point8text6: '',
        point9text1: '', point9text2: '', point9text3: '', point9text4: '', point9text5: '', point9text6: '',
        point10text1: '', point10text2: '', point10text3: '', point10text4: '', point10text5: '', point10text6: '' },
      modelData4_9: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '', text5: '', text6: '', text7: '', text8: '', imgDiv1: true, textDiv1: true,
        imgDiv2: false, textDiv2: false, imgDiv3: false, textDiv3: false, imgDiv4: false, textDiv4: false },
      modelData4_10: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', textarea1: '', textarea2: '', textarea3: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData4_11: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData4_12: { imageUrl1: '', imageUrl2: '', imageUrl3: '', text0: '', text1: '', text2: '', text3: '', textarea1: '', textarea2: '', textarea3: '' },
      modelData4_13: { imageUrl1: '', text1: '', text2: '', textarea1: '' },
      modelData4_14: { imageUrl1: '' },
      modelData4_15: { text1: '', textarea1: '' },
      modelData4_16: { textarea1: '' },
      modelData5_1: { imageUrl1: '', imageUrl2: '', text1: '', text2: '', text3: '', textarea1: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false,
        point9: false, point10: false, point11: false, point12: false, point13: false, point14: false, point15: false, point16: false,
        point8text: '', point9text: '', point10text: '', point11text: '', point12text: '', point13text: '', point14text: '', point15text: '', point16text: '', text4: '', textarea2: '' },
      modelData5_2: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '',
        textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData5_3: { imageUrl1: '', text1: '', textarea1: '' },
      modelData5_4: { imageUrl1: '', text1: '', textarea1: '' },
      modelData5_5: { imageUrl1: '', text1: '', textarea1: '' },
      modelData5_6: { imageUrl1: '', text1: '', textarea1: '' },
      modelData5_7: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text0: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '' },
      modelData5_8: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', imageUrl5: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '',
        point1: true, point2: false, point3: false, point4: false, point5: false, point6: false, point7: false, point8: false, point9: false, point10: false,
        point1text1: '', point1text2: '', point1text3: '', point1text4: '', point1text5: '', point1text6: '',
        point2text1: '', point2text2: '', point2text3: '', point2text4: '', point2text5: '', point2text6: '',
        point3text1: '', point3text2: '', point3text3: '', point3text4: '', point3text5: '', point3text6: '',
        point4text1: '', point4text2: '', point4text3: '', point4text4: '', point4text5: '', point4text6: '',
        point5text1: '', point5text2: '', point5text3: '', point5text4: '', point5text5: '', point5text6: '',
        point6text1: '', point6text2: '', point6text3: '', point6text4: '', point6text5: '', point6text6: '',
        point7text1: '', point7text2: '', point7text3: '', point7text4: '', point7text5: '', point7text6: '',
        point8text1: '', point8text2: '', point8text3: '', point8text4: '', point8text5: '', point8text6: '',
        point9text1: '', point9text2: '', point9text3: '', point9text4: '', point9text5: '', point9text6: '',
        point10text1: '', point10text2: '', point10text3: '', point10text4: '', point10text5: '', point10text6: '' },
      modelData5_9: { imageUrl1: '', imageUrl2: '', imageUrl3: '', imageUrl4: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', textarea3: '', textarea4: '', text5: '', text6: '', text7: '', text8: '', imgDiv1: true, textDiv1: true,
        imgDiv2: false, textDiv2: false, imgDiv3: false, textDiv3: false, imgDiv4: false, textDiv4: false },
      modelData5_10: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', textarea1: '', textarea2: '', textarea3: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData5_11: { imageUrl1: '', text1: '', text2: '', text3: '', text4: '', textarea1: '', textarea2: '', point1: true, point1text: '',
        point2: false, point2text: '', point3: false, point3text: '', point4: false, point4text: '', point5: false, point5text: '',
        point6: false, point6text: '', point7: false, point7text: '', point8: false, point8text: '' },
      modelData5_12: { imageUrl1: '', imageUrl2: '', imageUrl3: '', text0: '', text1: '', text2: '', text3: '', textarea1: '', textarea2: '', textarea3: '' },
      modelData5_13: { imageUrl1: '', text1: '', text2: '', textarea1: '' },
      modelData5_14: { imageUrl1: '' },
      modelData5_15: { text1: '', textarea1: '' },
      modelData5_16: { textarea1: '' },
      one: true,
      model1_1: false,
      model1_2: false,
      model1_3: false,
      model1_4: false,
      model1_5: false,
      model1_6: false,
      model1_7: false,
      model1_8: false,
      model1_9: false,
      model1_10: false,
      model1_11: false,
      model1_12: false,
      model1_13: false,
      model1_14: false,
      model1_15: false,
      model1_16: false,
      model2_1: false,
      model2_2: false,
      model2_3: false,
      model2_4: false,
      model2_5: false,
      model2_6: false,
      model2_7: false,
      model2_8: false,
      model2_9: false,
      model2_10: false,
      model2_11: false,
      model2_12: false,
      model2_13: false,
      model2_14: false,
      model2_15: false,
      model2_16: false,
      model3_1: false,
      model3_2: false,
      model3_3: false,
      model3_4: false,
      model3_5: false,
      model3_6: false,
      model3_7: false,
      model3_8: false,
      model3_9: false,
      model3_10: false,
      model3_11: false,
      model3_12: false,
      model3_13: false,
      model3_14: false,
      model3_15: false,
      model3_16: false,
      model4_1: false,
      model4_2: false,
      model4_3: false,
      model4_4: false,
      model4_5: false,
      model4_6: false,
      model4_7: false,
      model4_8: false,
      model4_9: false,
      model4_10: false,
      model4_11: false,
      model4_12: false,
      model4_13: false,
      model4_14: false,
      model4_15: false,
      model4_16: false,
      model5_1: false,
      model5_2: false,
      model5_3: false,
      model5_4: false,
      model5_5: false,
      model5_6: false,
      model5_7: false,
      model5_8: false,
      model5_9: false,
      model5_10: false,
      model5_11: false,
      model5_12: false,
      model5_13: false,
      model5_14: false,
      model5_15: false,
      model5_16: false,
      model1: true,
      model2: true,
      model3: true,
      model4: true,
      model5: true,
      shows: false,
      urls: [
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module1-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module10-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module-11._SX600_.png',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module-12._SX600_.png',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module2-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module3-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module4-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module5-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module6-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module7-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module8-large-dog._SX600_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module9-large-dog._SX600_.jpg',
        'https://m.media-amazon.com/images/G/01/aplus-module/3p-module-b._CB1526416193_._SX600_.png',
        'https://m.media-amazon.com/images/G/01/aplus/600x180._CB1560201888_._SX600_.png',
        'https://m.media-amazon.com/images/G/01/aplusautomation/templates/premium/premium-module-15-text._SX600_.png',
        'https://m.media-amazon.com/images/G/01/aplus/left-aligned-text._CB1560201807_._SX600_.png'
      ],
      centerDialogVisible: false,
      imgUrl: 'https://i.loli.net/2019/06/26/5d12ee86c68e083586.png',
      show: true,
      show1: false,
      show2: false,
      buttonShow: false,
      active: 0,
      dialog: true,
      form: { asin: '', radio: '1', value: '' },
      options: [{
        value: 'US',
        label: '美国'
      }, {
        value: 'UK',
        label: '英国'
      }, {
        value: 'DE',
        label: '德国'
      }, {
        value: 'JP',
        label: '日本'
      }, {
        value: 'FR',
        label: '法国'
      }, {
        value: 'ES',
        label: '西班牙'
      }, {
        value: 'IT',
        label: '意大利'
      }, {
        value: 'AU',
        label: '澳大利亚'
      }, {
        value: 'CA',
        label: '加拿大'
      }, {
        value: 'MX',
        label: '墨西哥'
      }, {
        value: 'IN',
        label: '印度'
      }],
      value: ''
    }
  },
  computed: {
    ...mapGetters([
      'imagesUploadApi'
    ])
  },
  methods: {
    change1_9(num) {
      if (num === '1') {
        this.modelData1_9.imgDiv1 = true
        this.modelData1_9.textDiv1 = true
        this.modelData1_9.imgDiv2 = false
        this.modelData1_9.textDiv2 = false
        this.modelData1_9.imgDiv3 = false
        this.modelData1_9.textDiv3 = false
        this.modelData1_9.imgDiv4 = false
        this.modelData1_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv1_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv1_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv1_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv1_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv1_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv1_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv1_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv1_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '2') {
        this.modelData1_9.imgDiv1 = false
        this.modelData1_9.textDiv1 = false
        this.modelData1_9.imgDiv2 = true
        this.modelData1_9.textDiv2 = true
        this.modelData1_9.imgDiv3 = false
        this.modelData1_9.textDiv3 = false
        this.modelData1_9.imgDiv4 = false
        this.modelData1_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv1_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv1_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv1_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv1_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv1_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv1_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv1_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv1_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '3') {
        this.modelData1_9.imgDiv1 = false
        this.modelData1_9.textDiv1 = false
        this.modelData1_9.imgDiv2 = false
        this.modelData1_9.textDiv2 = false
        this.modelData1_9.imgDiv3 = true
        this.modelData1_9.textDiv3 = true
        this.modelData1_9.imgDiv4 = false
        this.modelData1_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv1_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv1_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv1_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv1_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv1_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv1_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv1_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv1_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '4') {
        this.modelData1_9.imgDiv1 = false
        this.modelData1_9.textDiv1 = false
        this.modelData1_9.imgDiv2 = false
        this.modelData1_9.textDiv2 = false
        this.modelData1_9.imgDiv3 = false
        this.modelData1_9.textDiv3 = false
        this.modelData1_9.imgDiv4 = true
        this.modelData1_9.textDiv4 = true
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv1_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv1_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv1_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv1_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv1_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv1_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv1_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv1_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #8e8e8e')
        })
      }
    },
    errorMessages() {
      this.$message({
        message: '不能再添加了噢！',
        type: 'warning'
      })
    },
    reduceModellength1_1(num) {
      if (num === '4') {
        this.modelData1_1.point4 = !this.modelData1_1.point4
        this.styleLength1_1 = 400
        if (this.styleLength1_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData1_1.point5 = !this.modelData1_1.point5
        this.styleLength1_1 = 440
        if (this.styleLength1_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData1_1.point6 = !this.modelData1_1.point6
        this.styleLength1_1 = 480
        if (this.styleLength1_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData1_1.point7 = !this.modelData1_1.point7
        this.styleLength1_1 = 520
        if (this.styleLength1_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData1_1.point8 = !this.modelData1_1.point8
        this.styleLength1_1 = 560
        if (this.styleLength1_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData1_1.point10 = !this.modelData1_1.point10
        this.styleLength1_2 = 400
        if (this.styleLength1_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData1_1.point11 = !this.modelData1_1.point11
        this.styleLength1_2 = 440
        if (this.styleLength1_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData1_1.point12 = !this.modelData1_1.point12
        this.styleLength1_2 = 485
        if (this.styleLength1_1 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 485px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData1_1.point13 = !this.modelData1_1.point13
        this.styleLength1_2 = 530
        if (this.styleLength1_1 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 530px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData1_1.point14 = !this.modelData1_1.point14
        this.styleLength1_2 = 570
        if (this.styleLength1_1 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData1_1.point15 = !this.modelData1_1.point15
        this.styleLength1_2 = 610
        if (this.styleLength1_1 < 640) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData1_1.point16 = !this.modelData1_1.point16
        this.styleLength1_2 = 650
        if (this.styleLength1_1 < 695) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
    },
    addModellength1_1(num) {
      if (num === '4') {
        this.modelData1_1.point4 = !this.modelData1_1.point4
        this.styleLength1_1 = 440
        if (this.styleLength1_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData1_1.point5 = !this.modelData1_1.point5
        this.styleLength1_1 = 480
        if (this.styleLength1_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData1_1.point6 = !this.modelData1_1.point6
        this.styleLength1_1 = 520
        if (this.styleLength1_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData1_1.point7 = !this.modelData1_1.point7
        this.styleLength1_1 = 560
        if (this.styleLength1_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData1_1.point8 = !this.modelData1_1.point8
        this.styleLength1_1 = 600
        if (this.styleLength1_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData1_1.point10 = !this.modelData1_1.point10
        this.styleLength1_2 = 440
        if (this.styleLength1_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData1_1.point11 = !this.modelData1_1.point11
        this.styleLength1_2 = 480
        if (this.styleLength1_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData1_1.point12 = !this.modelData1_1.point12
        this.styleLength1_2 = 525
        if (this.styleLength1_1 < 525) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 525px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData1_1.point13 = !this.modelData1_1.point13
        this.styleLength1_2 = 568
        if (this.styleLength1_1 < 568) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 568px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData1_1.point14 = !this.modelData1_1.point14
        this.styleLength1_2 = 610
        if (this.styleLength1_1 < 610) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData1_1.point15 = !this.modelData1_1.point15
        this.styleLength1_2 = 650
        if (this.styleLength1_1 < 650) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData1_1.point16 = !this.modelData1_1.point16
        this.styleLength1_2 = 690
        if (this.styleLength1_1 < 690) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss')
            img.setAttribute('style', 'width: 900px;height: 690px;margin:0 auto')
          })
        }
      }
    },
    reduceModellength1_8(num) {
      if (num === '2') {
        this.modelData1_8.point2 = !this.modelData1_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData1_8.point3 = !this.modelData1_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData1_8.point4 = !this.modelData1_8.point4
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData1_8.point5 = !this.modelData1_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData1_8.point6 = !this.modelData1_8.point6
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData1_8.point7 = !this.modelData1_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData1_8.point8 = !this.modelData1_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData1_8.point9 = !this.modelData1_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 770px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData1_8.point10 = !this.modelData1_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
    },
    addModellength1_8(num) {
      if (num === '2') {
        this.modelData1_8.point2 = !this.modelData1_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData1_8.point3 = !this.modelData1_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData1_8.point4 = !this.modelData1_8.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData1_8.point5 = !this.modelData1_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData1_8.point6 = !this.modelData1_8.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData1_8.point7 = !this.modelData1_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData1_8.point8 = !this.modelData1_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 760px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData1_8.point9 = !this.modelData1_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData1_8.point10 = !this.modelData1_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 870px;margin:0 auto')
        })
      }
    },
    reduceModellength1_10(num) {
      if (num === '2') {
        this.modelData1_10.point2 = !this.modelData1_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData1_10.point3 = !this.modelData1_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData1_10.point4 = !this.modelData1_10.point4
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData1_10.point5 = !this.modelData1_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData1_10.point6 = !this.modelData1_10.point6
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData1_10.point7 = !this.modelData1_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData1_10.point8 = !this.modelData1_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
    },
    addModellength1_10(num) {
      if (num === '2') {
        this.modelData1_10.point2 = !this.modelData1_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData1_10.point3 = !this.modelData1_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData1_10.point4 = !this.modelData1_10.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData1_10.point5 = !this.modelData1_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData1_10.point6 = !this.modelData1_10.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData1_10.point7 = !this.modelData1_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData1_10.point8 = !this.modelData1_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 680px;margin:0 auto')
        })
      }
    },
    reduceModellength1_11(num) {
      if (num === '8') {
        this.modelData1_11.point8 = !this.modelData1_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
    },
    addModellength1_11(num) {
      if (num === '8') {
        this.modelData1_11.point8 = !this.modelData1_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
    },
    handleAvatarSuccess_modelData1_1_1(res, file) {
      this.modelData1_1.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_1_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 400) {
            alert('请上传300*400的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_1_2(res, file) {
      this.modelData1_1.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_1_img2')
        img.onload = function() {
          if (this.naturalWidth !== 350 && this.naturalHeight !== 175) {
            alert('请上传350*175的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_2_1(res, file) {
      this.modelData1_2.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_2_img1')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_2_2(res, file) {
      this.modelData1_2.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_2_img2')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_2_3(res, file) {
      this.modelData1_2.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_2_img3')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_2_4(res, file) {
      this.modelData1_2.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_2_img4')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_3_1(res, file) {
      this.modelData1_3.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_3_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_4_1(res, file) {
      this.modelData1_4.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_4_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_5_1(res, file) {
      this.modelData1_5.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_5_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_6_1(res, file) {
      this.modelData1_6.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_6_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_7_1(res, file) {
      this.modelData1_7.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_7_img1')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_7_2(res, file) {
      this.modelData1_7.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_7_img2')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_7_3(res, file) {
      this.modelData1_7.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_7_img3')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_7_4(res, file) {
      this.modelData1_7.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_7_img4')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_8_1(res, file) {
      this.modelData1_8.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_8_img1')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_8_2(res, file) {
      this.modelData1_8.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_8_img2')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_8_3(res, file) {
      this.modelData1_8.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_8_img3')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_8_4(res, file) {
      this.modelData1_8.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_8_img4')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_8_5(res, file) {
      this.modelData1_8.imageUrl5 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_8_img5')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_9_1(res, file) {
      this.modelData1_9.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_9_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_9_2(res, file) {
      this.modelData1_9.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_9_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_9_3(res, file) {
      this.modelData1_9.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_9_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_9_4(res, file) {
      this.modelData1_9.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_9_img4')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_10_1(res, file) {
      this.modelData1_10.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_10_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_11_1(res, file) {
      this.modelData1_11.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_11_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_12_1(res, file) {
      this.modelData1_12.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_12_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_12_2(res, file) {
      this.modelData1_12.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_12_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_12_3(res, file) {
      this.modelData1_12.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_12_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_13_1(res, file) {
      this.modelData1_13.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_13_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 600) {
            alert('请上传970*600的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData1_14_1(res, file) {
      this.modelData1_14.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData1_14_img1')
        img.onload = function() {
          if (this.naturalWidth !== 600 && this.naturalHeight !== 180) {
            alert('请上传600*180的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    change2_9(num) {
      if (num === '1') {
        this.modelData2_9.imgDiv1 = true
        this.modelData2_9.textDiv1 = true
        this.modelData2_9.imgDiv2 = false
        this.modelData2_9.textDiv2 = false
        this.modelData2_9.imgDiv3 = false
        this.modelData2_9.textDiv3 = false
        this.modelData2_9.imgDiv4 = false
        this.modelData2_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv2_1 = document.getElementById('imgDiv2_1')
          var imgDiv2_1_i1 = document.getElementById('imgDiv2_1_i1')
          var imgDiv2_2 = document.getElementById('imgDiv2_2')
          var imgDiv2_2_i2 = document.getElementById('imgDiv2_2_i2')
          var imgDiv2_3 = document.getElementById('imgDiv2_3')
          var imgDiv2_3_i3 = document.getElementById('imgDiv2_3_i3')
          var imgDiv2_4 = document.getElementById('imgDiv2_4')
          var imgDiv2_4_i4 = document.getElementById('imgDiv2_4_i4')
          imgDiv2_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_1_i1.setAttribute('style', 'color: #8e8e8e')
          imgDiv2_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv2_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv2_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '2') {
        this.modelData2_9.imgDiv1 = false
        this.modelData2_9.textDiv1 = false
        this.modelData2_9.imgDiv2 = true
        this.modelData2_9.textDiv2 = true
        this.modelData2_9.imgDiv3 = false
        this.modelData2_9.textDiv3 = false
        this.modelData2_9.imgDiv4 = false
        this.modelData2_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv2_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv2_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv2_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv2_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv2_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv2_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv2_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv2_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '3') {
        this.modelData2_9.imgDiv1 = false
        this.modelData2_9.textDiv1 = false
        this.modelData2_9.imgDiv2 = false
        this.modelData2_9.textDiv2 = false
        this.modelData2_9.imgDiv3 = true
        this.modelData2_9.textDiv3 = true
        this.modelData2_9.imgDiv4 = false
        this.modelData2_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv2_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv2_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv2_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv2_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv2_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv2_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv2_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv2_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '4') {
        this.modelData2_9.imgDiv1 = false
        this.modelData2_9.textDiv1 = false
        this.modelData2_9.imgDiv2 = false
        this.modelData2_9.textDiv2 = false
        this.modelData2_9.imgDiv3 = false
        this.modelData2_9.textDiv3 = false
        this.modelData2_9.imgDiv4 = true
        this.modelData2_9.textDiv4 = true
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv2_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv2_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv2_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv2_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv2_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv2_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv2_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv2_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #8e8e8e')
        })
      }
    },
    reduceModellength2_1(num) {
      if (num === '4') {
        this.modelData2_1.point4 = !this.modelData2_1.point4
        this.styleLength2_1 = 400
        if (this.styleLength2_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData2_1.point5 = !this.modelData2_1.point5
        this.styleLength2_1 = 440
        if (this.styleLength2_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData2_1.point6 = !this.modelData2_1.point6
        this.styleLength2_1 = 480
        if (this.styleLength2_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData2_1.point7 = !this.modelData2_1.point7
        this.styleLength2_1 = 520
        if (this.styleLength2_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData2_1.point8 = !this.modelData2_1.point8
        this.styleLength2_1 = 560
        if (this.styleLength2_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData2_1.point10 = !this.modelData2_1.point10
        this.styleLength2_2 = 400
        if (this.styleLength2_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData2_1.point11 = !this.modelData2_1.point11
        this.styleLength2_2 = 440
        if (this.styleLength2_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData2_1.point12 = !this.modelData2_1.point12
        this.styleLength2_2 = 485
        if (this.styleLength2_1 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 485px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData2_1.point13 = !this.modelData2_1.point13
        this.styleLength2_2 = 530
        if (this.styleLength2_1 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 530px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData2_1.point14 = !this.modelData2_1.point14
        this.styleLength2_2 = 570
        if (this.styleLength2_1 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData2_1.point15 = !this.modelData2_1.point15
        this.styleLength2_2 = 610
        if (this.styleLength2_1 < 640) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData2_1.point16 = !this.modelData2_1.point16
        this.styleLength2_2 = 650
        if (this.styleLength2_1 < 695) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
    },
    addModellength2_1(num) {
      if (num === '4') {
        this.modelData2_1.point4 = !this.modelData2_1.point4
        this.styleLength2_1 = 440
        if (this.styleLength2_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData2_1.point5 = !this.modelData2_1.point5
        this.styleLength2_1 = 480
        if (this.styleLength2_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData2_1.point6 = !this.modelData2_1.point6
        this.styleLength2_1 = 520
        if (this.styleLength2_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData2_1.point7 = !this.modelData2_1.point7
        this.styleLength2_1 = 560
        if (this.styleLength2_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData2_1.point8 = !this.modelData2_1.point8
        this.styleLength2_1 = 600
        if (this.styleLength2_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData2_1.point10 = !this.modelData2_1.point10
        this.styleLength2_2 = 440
        if (this.styleLength2_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData2_1.point11 = !this.modelData2_1.point11
        this.styleLength2_2 = 480
        if (this.styleLength2_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData2_1.point12 = !this.modelData2_1.point12
        this.styleLength2_2 = 525
        if (this.styleLength2_1 < 525) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 525px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData2_1.point13 = !this.modelData2_1.point13
        this.styleLength2_2 = 568
        if (this.styleLength2_1 < 568) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 568px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData2_1.point14 = !this.modelData2_1.point14
        this.styleLength1_2 = 610
        if (this.styleLength1_1 < 610) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData2_1.point15 = !this.modelData2_1.point15
        this.styleLength2_2 = 650
        if (this.styleLength2_1 < 650) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData2_1.point16 = !this.modelData2_1.point16
        this.styleLength2_2 = 690
        if (this.styleLength2_1 < 690) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss2')
            img.setAttribute('style', 'width: 900px;height: 690px;margin:0 auto')
          })
        }
      }
    },
    reduceModellength2_8(num) {
      if (num === '2') {
        this.modelData2_8.point2 = !this.modelData2_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData2_8.point3 = !this.modelData2_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData2_8.point4 = !this.modelData2_8.point4
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData2_8.point5 = !this.modelData2_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData2_8.point6 = !this.modelData2_8.point6
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData2_8.point7 = !this.modelData2_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData2_8.point8 = !this.modelData2_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData2_8.point9 = !this.modelData2_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 770px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData2_8.point10 = !this.modelData2_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
    },
    addModellength2_8(num) {
      if (num === '2') {
        this.modelData2_8.point2 = !this.modelData2_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData2_8.point3 = !this.modelData2_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData2_8.point4 = !this.modelData2_8.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData2_8.point5 = !this.modelData2_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData2_8.point6 = !this.modelData2_8.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData2_8.point7 = !this.modelData2_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData2_8.point8 = !this.modelData2_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 760px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData2_8.point9 = !this.modelData2_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData2_8.point10 = !this.modelData2_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 870px;margin:0 auto')
        })
      }
    },
    reduceModellength2_10(num) {
      if (num === '2') {
        this.modelData2_10.point2 = !this.modelData2_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData2_10.point3 = !this.modelData2_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData2_10.point4 = !this.modelData2_10.point4
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData2_10.point5 = !this.modelData2_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData2_10.point6 = !this.modelData2_10.point6
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData2_10.point7 = !this.modelData2_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData2_10.point8 = !this.modelData2_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
    },
    addModellength2_10(num) {
      if (num === '2') {
        this.modelData2_10.point2 = !this.modelData2_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData2_10.point3 = !this.modelData2_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData2_10.point4 = !this.modelData2_10.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData2_10.point5 = !this.modelData2_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData2_10.point6 = !this.modelData2_10.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData2_10.point7 = !this.modelData2_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData2_10.point8 = !this.modelData2_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 680px;margin:0 auto')
        })
      }
    },
    reduceModellength2_11(num) {
      if (num === '8') {
        this.modelData2_11.point8 = !this.modelData2_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
    },
    addModellength2_11(num) {
      if (num === '8') {
        this.modelData2_11.point8 = !this.modelData2_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss2')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
    },
    handleAvatarSuccess_modelData2_1_1(res, file) {
      this.modelData2_1.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_1_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 400) {
            alert('请上传300*400的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_1_2(res, file) {
      this.modelData2_1.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_1_img2')
        img.onload = function() {
          if (this.naturalWidth !== 350 && this.naturalHeight !== 175) {
            alert('请上传350*175的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_2_1(res, file) {
      this.modelData2_2.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_2_img1')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_2_2(res, file) {
      this.modelData2_2.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_2_img2')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_2_3(res, file) {
      this.modelData2_2.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_2_img3')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_2_4(res, file) {
      this.modelData2_2.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_2_img4')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_3_1(res, file) {
      this.modelData2_3.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_3_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_4_1(res, file) {
      this.modelData2_4.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_4_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_5_1(res, file) {
      this.modelData2_5.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_5_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_6_1(res, file) {
      this.modelData2_6.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_6_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_7_1(res, file) {
      this.modelData2_7.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_7_img1')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_7_2(res, file) {
      this.modelData2_7.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_7_img2')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_7_3(res, file) {
      this.modelData2_7.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_7_img3')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_7_4(res, file) {
      this.modelData2_7.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_7_img4')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_8_1(res, file) {
      this.modelData2_8.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_8_img1')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_8_2(res, file) {
      this.modelData2_8.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_8_img2')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_8_3(res, file) {
      this.modelData2_8.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_8_img3')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_8_4(res, file) {
      this.modelData2_8.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_8_img4')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_8_5(res, file) {
      this.modelData2_8.imageUrl5 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_8_img5')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_9_1(res, file) {
      this.modelData2_9.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_9_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_9_2(res, file) {
      this.modelData2_9.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_9_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_9_3(res, file) {
      this.modelData2_9.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_9_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_9_4(res, file) {
      this.modelData2_9.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_9_img4')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_10_1(res, file) {
      this.modelData2_10.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_10_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_11_1(res, file) {
      this.modelData2_11.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_11_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_12_1(res, file) {
      this.modelData2_12.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_12_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_12_2(res, file) {
      this.modelData2_12.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_12_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_12_3(res, file) {
      this.modelData2_12.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_12_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_13_1(res, file) {
      this.modelData2_13.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_13_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 600) {
            alert('请上传970*600的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData2_14_1(res, file) {
      this.modelData2_14.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData2_14_img1')
        img.onload = function() {
          if (this.naturalWidth !== 600 && this.naturalHeight !== 180) {
            alert('请上传600*180的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    change3_9(num) {
      if (num === '1') {
        this.modelData3_9.imgDiv1 = true
        this.modelData3_9.textDiv1 = true
        this.modelData3_9.imgDiv2 = false
        this.modelData3_9.textDiv2 = false
        this.modelData3_9.imgDiv3 = false
        this.modelData3_9.textDiv3 = false
        this.modelData3_9.imgDiv4 = false
        this.modelData3_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv2_1 = document.getElementById('imgDiv3_1')
          var imgDiv2_1_i1 = document.getElementById('imgDiv3_1_i1')
          var imgDiv2_2 = document.getElementById('imgDiv3_2')
          var imgDiv2_2_i2 = document.getElementById('imgDiv3_2_i2')
          var imgDiv2_3 = document.getElementById('imgDiv3_3')
          var imgDiv2_3_i3 = document.getElementById('imgDiv3_3_i3')
          var imgDiv2_4 = document.getElementById('imgDiv3_4')
          var imgDiv2_4_i4 = document.getElementById('imgDiv3_4_i4')
          imgDiv2_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_1_i1.setAttribute('style', 'color: #8e8e8e')
          imgDiv2_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv2_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv2_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '2') {
        this.modelData3_9.imgDiv1 = false
        this.modelData3_9.textDiv1 = false
        this.modelData3_9.imgDiv2 = true
        this.modelData3_9.textDiv2 = true
        this.modelData3_9.imgDiv3 = false
        this.modelData3_9.textDiv3 = false
        this.modelData3_9.imgDiv4 = false
        this.modelData3_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv3_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv3_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv3_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv3_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv3_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv3_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv3_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv3_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '3') {
        this.modelData3_9.imgDiv1 = false
        this.modelData3_9.textDiv1 = false
        this.modelData3_9.imgDiv2 = false
        this.modelData3_9.textDiv2 = false
        this.modelData3_9.imgDiv3 = true
        this.modelData3_9.textDiv3 = true
        this.modelData3_9.imgDiv4 = false
        this.modelData3_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv3_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv3_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv3_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv3_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv3_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv3_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv3_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv3_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '4') {
        this.modelData3_9.imgDiv1 = false
        this.modelData3_9.textDiv1 = false
        this.modelData3_9.imgDiv2 = false
        this.modelData3_9.textDiv2 = false
        this.modelData3_9.imgDiv3 = false
        this.modelData3_9.textDiv3 = false
        this.modelData3_9.imgDiv4 = true
        this.modelData3_9.textDiv4 = true
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv3_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv3_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv3_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv3_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv3_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv3_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv3_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv3_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #8e8e8e')
        })
      }
    },
    reduceModellength3_1(num) {
      if (num === '4') {
        this.modelData3_1.point4 = !this.modelData3_1.point4
        this.styleLength3_1 = 400
        if (this.styleLength3_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData3_1.point5 = !this.modelData3_1.point5
        this.styleLength3_1 = 440
        if (this.styleLength3_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData3_1.point6 = !this.modelData3_1.point6
        this.styleLength3_1 = 480
        if (this.styleLength3_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData3_1.point7 = !this.modelData3_1.point7
        this.styleLength3_1 = 520
        if (this.styleLength3_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData3_1.point8 = !this.modelData3_1.point8
        this.styleLength3_1 = 560
        if (this.styleLength3_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData3_1.point10 = !this.modelData3_1.point10
        this.styleLength3_2 = 400
        if (this.styleLength3_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData3_1.point11 = !this.modelData3_1.point11
        this.styleLength3_2 = 440
        if (this.styleLength3_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData3_1.point12 = !this.modelData3_1.point12
        this.styleLength3_2 = 485
        if (this.styleLength3_1 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 485px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData3_1.point13 = !this.modelData3_1.point13
        this.styleLength3_2 = 530
        if (this.styleLength3_1 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 530px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData3_1.point14 = !this.modelData3_1.point14
        this.styleLength3_2 = 570
        if (this.styleLength3_1 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData3_1.point15 = !this.modelData3_1.point15
        this.styleLength3_2 = 610
        if (this.styleLength3_1 < 640) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData3_1.point16 = !this.modelData3_1.point16
        this.styleLength3_2 = 650
        if (this.styleLength3_1 < 695) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
    },
    addModellength3_1(num) {
      if (num === '4') {
        this.modelData3_1.point4 = !this.modelData3_1.point4
        this.styleLength3_1 = 440
        if (this.styleLength3_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData3_1.point5 = !this.modelData3_1.point5
        this.styleLength3_1 = 480
        if (this.styleLength3_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData3_1.point6 = !this.modelData3_1.point6
        this.styleLength3_1 = 520
        if (this.styleLength3_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData3_1.point7 = !this.modelData3_1.point7
        this.styleLength3_1 = 560
        if (this.styleLength3_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData3_1.point8 = !this.modelData3_1.point8
        this.styleLength3_1 = 600
        if (this.styleLength3_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData3_1.point10 = !this.modelData3_1.point10
        this.styleLength3_2 = 440
        if (this.styleLength3_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData3_1.point11 = !this.modelData3_1.point11
        this.styleLength3_2 = 480
        if (this.styleLength3_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData3_1.point12 = !this.modelData3_1.point12
        this.styleLength3_2 = 525
        if (this.styleLength3_1 < 525) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 525px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData3_1.point13 = !this.modelData3_1.point13
        this.styleLength3_2 = 568
        if (this.styleLength3_1 < 568) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 568px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData3_1.point14 = !this.modelData3_1.point14
        this.styleLength3_2 = 610
        if (this.styleLength3_1 < 610) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData3_1.point15 = !this.modelData3_1.point15
        this.styleLength3_2 = 650
        if (this.styleLength3_1 < 650) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData3_1.point16 = !this.modelData3_1.point16
        this.styleLength3_2 = 690
        if (this.styleLength3_1 < 690) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss3')
            img.setAttribute('style', 'width: 900px;height: 690px;margin:0 auto')
          })
        }
      }
    },
    reduceModellength3_8(num) {
      if (num === '2') {
        this.modelData3_8.point2 = !this.modelData3_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData3_8.point3 = !this.modelData3_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData3_8.point4 = !this.modelData3_8.point4
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData3_8.point5 = !this.modelData3_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData3_8.point6 = !this.modelData3_8.point6
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData3_8.point7 = !this.modelData3_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData3_8.point8 = !this.modelData3_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData3_8.point9 = !this.modelData3_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 770px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData3_8.point10 = !this.modelData3_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
    },
    addModellength3_8(num) {
      if (num === '2') {
        this.modelData3_8.point2 = !this.modelData3_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData3_8.point3 = !this.modelData3_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData3_8.point4 = !this.modelData3_8.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData3_8.point5 = !this.modelData3_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData3_8.point6 = !this.modelData3_8.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData3_8.point7 = !this.modelData3_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData3_8.point8 = !this.modelData3_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 760px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData3_8.point9 = !this.modelData3_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData3_8.point10 = !this.modelData3_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 870px;margin:0 auto')
        })
      }
    },
    reduceModellength3_10(num) {
      if (num === '2') {
        this.modelData3_10.point2 = !this.modelData3_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData3_10.point3 = !this.modelData3_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData3_10.point4 = !this.modelData3_10.point4
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData3_10.point5 = !this.modelData3_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData3_10.point6 = !this.modelData3_10.point6
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData3_10.point7 = !this.modelData3_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData3_10.point8 = !this.modelData3_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
    },
    addModellength3_10(num) {
      if (num === '2') {
        this.modelData3_10.point2 = !this.modelData3_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData3_10.point3 = !this.modelData3_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData3_10.point4 = !this.modelData3_10.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData3_10.point5 = !this.modelData3_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData3_10.point6 = !this.modelData3_10.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData3_10.point7 = !this.modelData3_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData3_10.point8 = !this.modelData3_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 680px;margin:0 auto')
        })
      }
    },
    reduceModellength3_11(num) {
      if (num === '8') {
        this.modelData3_11.point8 = !this.modelData3_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
    },
    addModellength3_11(num) {
      if (num === '8') {
        this.modelData3_11.point8 = !this.modelData3_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss3')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
    },
    handleAvatarSuccess_modelData3_1_1(res, file) {
      this.modelData3_1.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_1_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 400) {
            alert('请上传300*400的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_1_2(res, file) {
      this.modelData3_1.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_1_img2')
        img.onload = function() {
          if (this.naturalWidth !== 350 && this.naturalHeight !== 175) {
            alert('请上传350*175的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_2_1(res, file) {
      this.modelData3_2.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_2_img1')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_2_2(res, file) {
      this.modelData3_2.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_2_img2')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_2_3(res, file) {
      this.modelData3_2.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_2_img3')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_2_4(res, file) {
      this.modelData3_2.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_2_img4')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_3_1(res, file) {
      this.modelData3_3.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_3_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_4_1(res, file) {
      this.modelData3_4.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_4_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_5_1(res, file) {
      this.modelData3_5.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_5_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_6_1(res, file) {
      this.modelData3_6.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_6_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_7_1(res, file) {
      this.modelData3_7.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_7_img1')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_7_2(res, file) {
      this.modelData3_7.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_7_img2')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_7_3(res, file) {
      this.modelData3_7.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_7_img3')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_7_4(res, file) {
      this.modelData3_7.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_7_img4')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_8_1(res, file) {
      this.modelData3_8.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_8_img1')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_8_2(res, file) {
      this.modelData3_8.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_8_img2')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_8_3(res, file) {
      this.modelData3_8.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_8_img3')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_8_4(res, file) {
      this.modelData3_8.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_8_img4')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_8_5(res, file) {
      this.modelData3_8.imageUrl5 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_8_img5')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_9_1(res, file) {
      this.modelData3_9.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_9_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_9_2(res, file) {
      this.modelData3_9.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_9_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_9_3(res, file) {
      this.modelData3_9.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_9_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_9_4(res, file) {
      this.modelData3_9.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_9_img4')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_10_1(res, file) {
      this.modelData3_10.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_10_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_11_1(res, file) {
      this.modelData3_11.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_11_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_12_1(res, file) {
      this.modelData3_12.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_12_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_12_2(res, file) {
      this.modelData3_12.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_12_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_12_3(res, file) {
      this.modelData3_12.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_12_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_13_1(res, file) {
      this.modelData3_13.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_13_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 600) {
            alert('请上传970*600的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData3_14_1(res, file) {
      this.modelData3_14.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData3_14_img1')
        img.onload = function() {
          if (this.naturalWidth !== 600 && this.naturalHeight !== 180) {
            alert('请上传600*180的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    change4_9(num) {
      if (num === '1') {
        this.modelData4_9.imgDiv1 = true
        this.modelData4_9.textDiv1 = true
        this.modelData4_9.imgDiv2 = false
        this.modelData4_9.textDiv2 = false
        this.modelData4_9.imgDiv3 = false
        this.modelData4_9.textDiv3 = false
        this.modelData4_9.imgDiv4 = false
        this.modelData4_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv2_1 = document.getElementById('imgDiv4_1')
          var imgDiv2_1_i1 = document.getElementById('imgDiv4_1_i1')
          var imgDiv2_2 = document.getElementById('imgDiv4_2')
          var imgDiv2_2_i2 = document.getElementById('imgDiv4_2_i2')
          var imgDiv2_3 = document.getElementById('imgDiv4_3')
          var imgDiv2_3_i3 = document.getElementById('imgDiv4_3_i3')
          var imgDiv2_4 = document.getElementById('imgDiv4_4')
          var imgDiv2_4_i4 = document.getElementById('imgDiv4_4_i4')
          imgDiv2_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_1_i1.setAttribute('style', 'color: #8e8e8e')
          imgDiv2_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv2_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv2_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '2') {
        this.modelData4_9.imgDiv1 = false
        this.modelData4_9.textDiv1 = false
        this.modelData4_9.imgDiv2 = true
        this.modelData4_9.textDiv2 = true
        this.modelData4_9.imgDiv3 = false
        this.modelData4_9.textDiv3 = false
        this.modelData4_9.imgDiv4 = false
        this.modelData4_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv4_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv4_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv4_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv4_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv4_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv4_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv4_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv4_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '3') {
        this.modelData4_9.imgDiv1 = false
        this.modelData4_9.textDiv1 = false
        this.modelData4_9.imgDiv2 = false
        this.modelData4_9.textDiv2 = false
        this.modelData4_9.imgDiv3 = true
        this.modelData4_9.textDiv3 = true
        this.modelData4_9.imgDiv4 = false
        this.modelData4_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv4_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv4_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv4_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv4_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv4_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv4_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv4_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv4_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '4') {
        this.modelData4_9.imgDiv1 = false
        this.modelData4_9.textDiv1 = false
        this.modelData4_9.imgDiv2 = false
        this.modelData4_9.textDiv2 = false
        this.modelData4_9.imgDiv3 = false
        this.modelData4_9.textDiv3 = false
        this.modelData4_9.imgDiv4 = true
        this.modelData4_9.textDiv4 = true
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv4_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv4_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv4_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv4_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv4_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv4_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv4_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv4_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #8e8e8e')
        })
      }
    },
    reduceModellength4_1(num) {
      if (num === '4') {
        this.modelData4_1.point4 = !this.modelData4_1.point4
        this.styleLength4_1 = 400
        if (this.styleLength4_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData4_1.point5 = !this.modelData4_1.point5
        this.styleLength4_1 = 440
        if (this.styleLength4_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData4_1.point6 = !this.modelData4_1.point6
        this.styleLength4_1 = 480
        if (this.styleLength4_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData4_1.point7 = !this.modelData4_1.point7
        this.styleLength4_1 = 520
        if (this.styleLength4_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData4_1.point8 = !this.modelData4_1.point8
        this.styleLength4_1 = 560
        if (this.styleLength4_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData4_1.point10 = !this.modelData4_1.point10
        this.styleLength4_2 = 400
        if (this.styleLength4_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData4_1.point11 = !this.modelData4_1.point11
        this.styleLength4_2 = 440
        if (this.styleLength4_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData4_1.point12 = !this.modelData4_1.point12
        this.styleLength4_2 = 485
        if (this.styleLength4_1 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 485px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData4_1.point13 = !this.modelData4_1.point13
        this.styleLength4_2 = 530
        if (this.styleLength4_1 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 530px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData4_1.point14 = !this.modelData4_1.point14
        this.styleLength4_2 = 570
        if (this.styleLength4_1 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData4_1.point15 = !this.modelData4_1.point15
        this.styleLength4_2 = 610
        if (this.styleLength4_1 < 640) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData4_1.point16 = !this.modelData4_1.point16
        this.styleLength4_2 = 650
        if (this.styleLength4_1 < 695) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
    },
    addModellength4_1(num) {
      if (num === '4') {
        this.modelData4_1.point4 = !this.modelData4_1.point4
        this.styleLength4_1 = 440
        if (this.styleLength4_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData4_1.point5 = !this.modelData4_1.point5
        this.styleLength4_1 = 480
        if (this.styleLength4_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData4_1.point6 = !this.modelData4_1.point6
        this.styleLength4_1 = 520
        if (this.styleLength4_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData4_1.point7 = !this.modelData4_1.point7
        this.styleLength4_1 = 560
        if (this.styleLength4_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData4_1.point8 = !this.modelData4_1.point8
        this.styleLength4_1 = 600
        if (this.styleLength4_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData4_1.point10 = !this.modelData4_1.point10
        this.styleLength4_2 = 440
        if (this.styleLength4_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData4_1.point11 = !this.modelData4_1.point11
        this.styleLength4_2 = 480
        if (this.styleLength4_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData4_1.point12 = !this.modelData4_1.point12
        this.styleLength4_2 = 525
        if (this.styleLength4_1 < 525) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 525px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData4_1.point13 = !this.modelData4_1.point13
        this.styleLength4_2 = 568
        if (this.styleLength4_1 < 568) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 568px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData4_1.point14 = !this.modelData4_1.point14
        this.styleLength4_2 = 610
        if (this.styleLength4_1 < 610) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData4_1.point15 = !this.modelData4_1.point15
        this.styleLength4_2 = 650
        if (this.styleLength4_1 < 650) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData4_1.point16 = !this.modelData4_1.point16
        this.styleLength4_2 = 690
        if (this.styleLength4_1 < 690) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss4')
            img.setAttribute('style', 'width: 900px;height: 690px;margin:0 auto')
          })
        }
      }
    },
    reduceModellength4_8(num) {
      if (num === '2') {
        this.modelData4_8.point2 = !this.modelData4_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData4_8.point3 = !this.modelData4_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData4_8.point4 = !this.modelData4_8.point4
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData4_8.point5 = !this.modelData4_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData4_8.point6 = !this.modelData4_8.point6
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData4_8.point7 = !this.modelData4_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData4_8.point8 = !this.modelData4_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData4_8.point9 = !this.modelData4_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 770px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData4_8.point10 = !this.modelData4_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
    },
    addModellength4_8(num) {
      if (num === '2') {
        this.modelData4_8.point2 = !this.modelData4_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData4_8.point3 = !this.modelData4_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData4_8.point4 = !this.modelData4_8.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData4_8.point5 = !this.modelData4_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData4_8.point6 = !this.modelData4_8.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData4_8.point7 = !this.modelData4_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData4_8.point8 = !this.modelData4_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 760px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData4_8.point9 = !this.modelData4_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData4_8.point10 = !this.modelData4_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 870px;margin:0 auto')
        })
      }
    },
    reduceModellength4_10(num) {
      if (num === '2') {
        this.modelData4_10.point2 = !this.modelData4_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData4_10.point3 = !this.modelData4_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData4_10.point4 = !this.modelData4_10.point4
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData4_10.point5 = !this.modelData4_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData4_10.point6 = !this.modelData4_10.point6
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData4_10.point7 = !this.modelData4_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData4_10.point8 = !this.modelData4_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
    },
    addModellength4_10(num) {
      if (num === '2') {
        this.modelData4_10.point2 = !this.modelData4_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData4_10.point3 = !this.modelData4_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData4_10.point4 = !this.modelData4_10.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData4_10.point5 = !this.modelData4_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData4_10.point6 = !this.modelData4_10.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData4_10.point7 = !this.modelData4_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData4_10.point8 = !this.modelData4_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 680px;margin:0 auto')
        })
      }
    },
    reduceModellength4_11(num) {
      if (num === '8') {
        this.modelData4_11.point8 = !this.modelData4_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
    },
    addModellength4_11(num) {
      if (num === '8') {
        this.modelData4_10.point8 = !this.modelData4_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss4')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
    },
    handleAvatarSuccess_modelData4_1_1(res, file) {
      this.modelData4_1.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_1_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 400) {
            alert('请上传300*400的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_1_2(res, file) {
      this.modelData4_1.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_1_img2')
        img.onload = function() {
          if (this.naturalWidth !== 350 && this.naturalHeight !== 175) {
            alert('请上传350*175的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_2_1(res, file) {
      this.modelData4_2.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_2_img1')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_2_2(res, file) {
      this.modelData4_2.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_2_img2')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_2_3(res, file) {
      this.modelData4_2.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_2_img3')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_2_4(res, file) {
      this.modelData4_2.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_2_img4')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_3_1(res, file) {
      this.modelData4_3.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_3_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_4_1(res, file) {
      this.modelData4_4.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_4_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_5_1(res, file) {
      this.modelData4_5.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_5_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_6_1(res, file) {
      this.modelData4_6.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_6_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_7_1(res, file) {
      this.modelData4_7.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_7_img1')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_7_2(res, file) {
      this.modelData4_7.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_7_img2')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_7_3(res, file) {
      this.modelData4_7.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_7_img3')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_7_4(res, file) {
      this.modelData4_7.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_7_img4')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_8_1(res, file) {
      this.modelData4_8.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_8_img1')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_8_2(res, file) {
      this.modelData4_8.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_8_img2')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_8_3(res, file) {
      this.modelData4_8.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_8_img3')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_8_4(res, file) {
      this.modelData4_8.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_8_img4')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_8_5(res, file) {
      this.modelData4_8.imageUrl5 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_8_img5')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_9_1(res, file) {
      this.modelData4_9.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_9_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_9_2(res, file) {
      this.modelData4_9.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_9_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_9_3(res, file) {
      this.modelData4_9.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_9_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_9_4(res, file) {
      this.modelData4_9.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_9_img4')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_10_1(res, file) {
      this.modelData4_10.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_10_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_11_1(res, file) {
      this.modelData4_11.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_11_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_12_1(res, file) {
      this.modelData4_12.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_12_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_12_2(res, file) {
      this.modelData4_12.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_12_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_12_3(res, file) {
      this.modelData4_12.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_12_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_13_1(res, file) {
      this.modelData4_13.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_13_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 600) {
            alert('请上传970*600的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData4_14_1(res, file) {
      this.modelData4_14.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData4_14_img1')
        img.onload = function() {
          if (this.naturalWidth !== 600 && this.naturalHeight !== 180) {
            alert('请上传600*180的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    change5_9(num) {
      if (num === '1') {
        this.modelData5_9.imgDiv1 = true
        this.modelData5_9.textDiv1 = true
        this.modelData5_9.imgDiv2 = false
        this.modelData5_9.textDiv2 = false
        this.modelData5_9.imgDiv3 = false
        this.modelData5_9.textDiv3 = false
        this.modelData5_9.imgDiv4 = false
        this.modelData5_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv2_1 = document.getElementById('imgDiv5_1')
          var imgDiv2_1_i1 = document.getElementById('imgDiv5_1_i1')
          var imgDiv2_2 = document.getElementById('imgDiv5_2')
          var imgDiv2_2_i2 = document.getElementById('imgDiv5_2_i2')
          var imgDiv2_3 = document.getElementById('imgDiv5_3')
          var imgDiv2_3_i3 = document.getElementById('imgDiv5_3_i3')
          var imgDiv2_4 = document.getElementById('imgDiv5_4')
          var imgDiv2_4_i4 = document.getElementById('imgDiv5_4_i4')
          imgDiv2_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_1_i1.setAttribute('style', 'color: #8e8e8e')
          imgDiv2_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv2_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv2_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv2_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '2') {
        this.modelData5_9.imgDiv1 = false
        this.modelData5_9.textDiv1 = false
        this.modelData5_9.imgDiv2 = true
        this.modelData5_9.textDiv2 = true
        this.modelData5_9.imgDiv3 = false
        this.modelData5_9.textDiv3 = false
        this.modelData5_9.imgDiv4 = false
        this.modelData5_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv5_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv5_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv5_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv5_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv5_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv5_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv5_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv5_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '3') {
        this.modelData5_9.imgDiv1 = false
        this.modelData5_9.textDiv1 = false
        this.modelData5_9.imgDiv2 = false
        this.modelData5_9.textDiv2 = false
        this.modelData5_9.imgDiv3 = true
        this.modelData5_9.textDiv3 = true
        this.modelData5_9.imgDiv4 = false
        this.modelData5_9.textDiv4 = false
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv5_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv5_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv5_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv5_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv5_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv5_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv5_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv5_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #8e8e8e')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #4a90e2')
        })
      }
      if (num === '4') {
        this.modelData5_9.imgDiv1 = false
        this.modelData5_9.textDiv1 = false
        this.modelData5_9.imgDiv2 = false
        this.modelData5_9.textDiv2 = false
        this.modelData5_9.imgDiv3 = false
        this.modelData5_9.textDiv3 = false
        this.modelData5_9.imgDiv4 = true
        this.modelData5_9.textDiv4 = true
        this.$nextTick(function() {
          var imgDiv1_1 = document.getElementById('imgDiv5_1')
          var imgDiv1_1_i1 = document.getElementById('imgDiv5_1_i1')
          var imgDiv1_2 = document.getElementById('imgDiv5_2')
          var imgDiv1_2_i2 = document.getElementById('imgDiv5_2_i2')
          var imgDiv1_3 = document.getElementById('imgDiv5_3')
          var imgDiv1_3_i3 = document.getElementById('imgDiv5_3_i3')
          var imgDiv1_4 = document.getElementById('imgDiv5_4')
          var imgDiv1_4_i4 = document.getElementById('imgDiv5_4_i4')
          imgDiv1_1.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_1_i1.setAttribute('style', 'color: #4a90e2')
          imgDiv1_2.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_2_i2.setAttribute('style', 'color: #4a90e2')
          imgDiv1_3.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px dashed;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_3_i3.setAttribute('style', 'color: #4a90e2')
          imgDiv1_4.setAttribute('style', 'width: 95%;height: 80%;border: #a5c7f0 2px solid;margin:0 auto;text-align: center;font-size: 50px;line-height: 140px;background: #e7edf9')
          imgDiv1_4_i4.setAttribute('style', 'color: #8e8e8e')
        })
      }
    },
    reduceModellength5_1(num) {
      if (num === '4') {
        this.modelData5_1.point4 = !this.modelData5_1.point4
        this.styleLength5_1 = 400
        if (this.styleLength5_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData5_1.point5 = !this.modelData5_1.point5
        this.styleLength5_1 = 440
        if (this.styleLength5_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData5_1.point6 = !this.modelData5_1.point6
        this.styleLength5_1 = 480
        if (this.styleLength5_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData5_1.point7 = !this.modelData5_1.point7
        this.styleLength5_1 = 520
        if (this.styleLength5_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData5_1.point8 = !this.modelData5_1.point8
        this.styleLength5_1 = 560
        if (this.styleLength5_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData5_1.point10 = !this.modelData4_1.point10
        this.styleLength5_2 = 400
        if (this.styleLength5_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData5_1.point11 = !this.modelData5_1.point11
        this.styleLength5_2 = 440
        if (this.styleLength5_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData5_1.point12 = !this.modelData5_1.point12
        this.styleLength5_2 = 485
        if (this.styleLength5_1 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 485px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData5_1.point13 = !this.modelData5_1.point13
        this.styleLength5_2 = 530
        if (this.styleLength5_1 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 530px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData5_1.point14 = !this.modelData5_1.point14
        this.styleLength5_2 = 570
        if (this.styleLength5_1 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData5_1.point15 = !this.modelData5_1.point15
        this.styleLength5_2 = 610
        if (this.styleLength5_1 < 640) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData5_1.point16 = !this.modelData5_1.point16
        this.styleLength5_2 = 650
        if (this.styleLength5_1 < 695) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
    },
    addModellength5_1(num) {
      if (num === '4') {
        this.modelData5_1.point4 = !this.modelData5_1.point4
        this.styleLength5_1 = 440
        if (this.styleLength5_2 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '5') {
        this.modelData5_1.point5 = !this.modelData5_1.point5
        this.styleLength5_1 = 480
        if (this.styleLength5_2 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '6') {
        this.modelData5_1.point6 = !this.modelData5_1.point6
        this.styleLength5_1 = 520
        if (this.styleLength5_2 < 520) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
          })
        }
      }
      if (num === '7') {
        this.modelData5_1.point7 = !this.modelData5_1.point7
        this.styleLength5_1 = 560
        if (this.styleLength5_2 < 560) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
          })
        }
      }
      if (num === '8') {
        this.modelData5_1.point8 = !this.modelData5_1.point8
        this.styleLength5_1 = 600
        if (this.styleLength5_2 < 600) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
          })
        }
      }
      if (num === '10') {
        this.modelData5_1.point10 = !this.modelData5_1.point10
        this.styleLength5_2 = 440
        if (this.styleLength5_1 < 440) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
          })
        }
      }
      if (num === '11') {
        this.modelData5_1.point11 = !this.modelData5_1.point11
        this.styleLength5_2 = 480
        if (this.styleLength5_1 < 480) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
          })
        }
      }
      if (num === '12') {
        this.modelData5_1.point12 = !this.modelData5_1.point12
        this.styleLength5_2 = 525
        if (this.styleLength5_1 < 525) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 525px;margin:0 auto')
          })
        }
      }
      if (num === '13') {
        this.modelData5_1.point13 = !this.modelData5_1.point13
        this.styleLength5_2 = 568
        if (this.styleLength5_1 < 568) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 568px;margin:0 auto')
          })
        }
      }
      if (num === '14') {
        this.modelData5_1.point14 = !this.modelData5_1.point14
        this.styleLength5_2 = 610
        if (this.styleLength5_1 < 610) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 610px;margin:0 auto')
          })
        }
      }
      if (num === '15') {
        this.modelData5_1.point15 = !this.modelData5_1.point15
        this.styleLength5_2 = 650
        if (this.styleLength5_1 < 650) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 650px;margin:0 auto')
          })
        }
      }
      if (num === '16') {
        this.modelData5_1.point16 = !this.modelData5_1.point16
        this.styleLength5_2 = 690
        if (this.styleLength5_1 < 690) {
          this.$nextTick(function() {
            var img = document.getElementById('ssssss5')
            img.setAttribute('style', 'width: 900px;height: 690px;margin:0 auto')
          })
        }
      }
    },
    reduceModellength5_8(num) {
      if (num === '2') {
        this.modelData5_8.point2 = !this.modelData5_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData5_8.point3 = !this.modelData5_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData5_8.point4 = !this.modelData5_8.point4
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData5_8.point5 = !this.modelData5_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData5_8.point6 = !this.modelData5_8.point6
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData5_8.point7 = !this.modelData5_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData5_8.point8 = !this.modelData5_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData5_8.point9 = !this.modelData5_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 770px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData5_8.point10 = !this.modelData5_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
    },
    addModellength5_8(num) {
      if (num === '2') {
        this.modelData5_8.point2 = !this.modelData5_8.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 470px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData5_8.point3 = !this.modelData5_8.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData5_8.point4 = !this.modelData5_8.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 570px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData5_8.point5 = !this.modelData5_8.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 620px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData5_8.point6 = !this.modelData5_8.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 670px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData5_8.point7 = !this.modelData5_8.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 720px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData5_8.point8 = !this.modelData5_8.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 760px;margin:0 auto')
        })
      }
      if (num === '9') {
        this.modelData5_8.point9 = !this.modelData5_8.point9
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 820px;margin:0 auto')
        })
      }
      if (num === '10') {
        this.modelData5_8.point10 = !this.modelData5_8.point10
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 870px;margin:0 auto')
        })
      }
    },
    reduceModellength5_10(num) {
      if (num === '2') {
        this.modelData5_10.point2 = !this.modelData5_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData5_10.point3 = !this.modelData5_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.$nextTick(function() {
          this.modelData5_10.point4 = !this.modelData5_10.point4
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData5_10.point5 = !this.modelData5_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.$nextTick(function() {
          this.modelData5_10.point6 = !this.modelData5_10.point6
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData5_10.point7 = !this.modelData5_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData5_10.point8 = !this.modelData5_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
    },
    addModellength5_10(num) {
      if (num === '2') {
        this.modelData5_10.point2 = !this.modelData5_10.point2
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
      if (num === '3') {
        this.modelData5_10.point3 = !this.modelData5_10.point3
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 480px;margin:0 auto')
        })
      }
      if (num === '4') {
        this.modelData5_10.point4 = !this.modelData5_10.point4
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 520px;margin:0 auto')
        })
      }
      if (num === '5') {
        this.modelData5_10.point5 = !this.modelData5_10.point5
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 560px;margin:0 auto')
        })
      }
      if (num === '6') {
        this.modelData5_10.point6 = !this.modelData5_10.point6
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 600px;margin:0 auto')
        })
      }
      if (num === '7') {
        this.modelData5_10.point7 = !this.modelData5_10.point7
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 640px;margin:0 auto')
        })
      }
      if (num === '8') {
        this.modelData5_10.point8 = !this.modelData5_10.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 680px;margin:0 auto')
        })
      }
    },
    reduceModellength5_11(num) {
      if (num === '8') {
        this.modelData5_11.point8 = !this.modelData5_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 400px;margin:0 auto')
        })
      }
    },
    addModellength5_11(num) {
      if (num === '8') {
        this.modelData5_11.point8 = !this.modelData5_11.point8
        this.$nextTick(function() {
          var img = document.getElementById('ssssss5')
          img.setAttribute('style', 'width: 900px;height: 440px;margin:0 auto')
        })
      }
    },
    handleAvatarSuccess_modelData5_1_1(res, file) {
      this.modelData5_1.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_1_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 400) {
            alert('请上传300*400的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_1_2(res, file) {
      this.modelData5_1.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_1_img2')
        img.onload = function() {
          if (this.naturalWidth !== 350 && this.naturalHeight !== 175) {
            alert('请上传350*175的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_2_1(res, file) {
      this.modelData5_2.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_2_img1')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_2_2(res, file) {
      this.modelData5_2.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_2_img2')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_2_3(res, file) {
      this.modelData5_2.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_2_img3')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_2_4(res, file) {
      this.modelData5_2.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_2_img4')
        img.onload = function() {
          if (this.naturalWidth !== 135 && this.naturalHeight !== 135) {
            alert('请上传135*135的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_3_1(res, file) {
      this.modelData5_3.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_3_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_4_1(res, file) {
      this.modelData5_4.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_4_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 300) {
            alert('请上传970*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_5_1(res, file) {
      this.modelData5_5.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_5_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_6_1(res, file) {
      this.modelData5_6.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_6_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_7_1(res, file) {
      this.modelData5_7.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_7_img1')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_7_2(res, file) {
      this.modelData5_7.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_7_img2')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_7_3(res, file) {
      this.modelData5_7.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_7_img3')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_7_4(res, file) {
      this.modelData5_7.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_7_img4')
        img.onload = function() {
          if (this.naturalWidth !== 220 && this.naturalHeight !== 220) {
            alert('请上传220*220的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_8_1(res, file) {
      this.modelData5_8.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_8_img1')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_8_2(res, file) {
      this.modelData5_8.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_8_img2')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_8_3(res, file) {
      this.modelData5_8.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_8_img3')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_8_4(res, file) {
      this.modelData5_8.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_8_img4')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_8_5(res, file) {
      this.modelData5_8.imageUrl5 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_8_img5')
        img.onload = function() {
          if (this.naturalWidth !== 150 && this.naturalHeight !== 300) {
            alert('请上传150*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_9_1(res, file) {
      this.modelData5_9.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_9_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_9_2(res, file) {
      this.modelData5_9.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_9_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_9_3(res, file) {
      this.modelData5_9.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_9_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_9_4(res, file) {
      this.modelData5_9.imageUrl4 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_9_img4')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_10_1(res, file) {
      this.modelData5_10.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_10_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_11_1(res, file) {
      this.modelData5_11.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_11_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_12_1(res, file) {
      this.modelData5_12.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_12_img1')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_12_2(res, file) {
      this.modelData5_12.imageUrl2 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_12_img2')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_12_3(res, file) {
      this.modelData5_12.imageUrl3 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_12_img3')
        img.onload = function() {
          if (this.naturalWidth !== 300 && this.naturalHeight !== 300) {
            alert('请上传300*300的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_13_1(res, file) {
      this.modelData5_13.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_13_img1')
        img.onload = function() {
          if (this.naturalWidth !== 970 && this.naturalHeight !== 600) {
            alert('请上传970*600的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    handleAvatarSuccess_modelData5_14_1(res, file) {
      this.modelData5_14.imageUrl1 = URL.createObjectURL(file.raw)
      this.$nextTick(function() {
        var img = document.getElementById('modelData5_14_img1')
        img.onload = function() {
          if (this.naturalWidth !== 600 && this.naturalHeight !== 180) {
            alert('请上传600*180的图片')
            img.setAttribute('src', '')
          }
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)
        }
      })
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      /* if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }*/
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      // isJPG &&
      return isLt2M
    },
    deletes(model) {
      if (model === 'model1') {
        this.model1 = true
        this.model1_1 = false
        this.model1_2 = false
        this.model1_3 = false
        this.model1_4 = false
        this.model1_5 = false
        this.model1_6 = false
        this.model1_7 = false
        this.model1_8 = false
        this.model1_9 = false
        this.model1_10 = false
        this.model1_11 = false
        this.model1_12 = false
        this.model1_13 = false
        this.model1_14 = false
        this.model1_15 = false
        this.model1_16 = false
      }
      if (model === 'model2') {
        this.model2 = true
        this.model2_1 = false
        this.model2_2 = false
        this.model2_3 = false
        this.model2_4 = false
        this.model2_5 = false
        this.model2_6 = false
        this.model2_7 = false
        this.model2_8 = false
        this.model2_9 = false
        this.model2_10 = false
        this.model2_11 = false
        this.model2_12 = false
        this.model2_13 = false
        this.model2_14 = false
        this.model2_15 = false
        this.model2_16 = false
      }
      if (model === 'model3') {
        this.model3 = true
        this.model3_1 = false
        this.model3_2 = false
        this.model3_3 = false
        this.model3_4 = false
        this.model3_5 = false
        this.model3_6 = false
        this.model3_7 = false
        this.model3_8 = false
        this.model3_9 = false
        this.model3_10 = false
        this.model3_11 = false
        this.model3_12 = false
        this.model3_13 = false
        this.model3_14 = false
        this.model3_15 = false
        this.model3_16 = false
      }
      if (model === 'model4') {
        this.model4 = true
        this.model4_1 = false
        this.model4_2 = false
        this.model4_3 = false
        this.model4_4 = false
        this.model4_5 = false
        this.model4_6 = false
        this.model4_7 = false
        this.model4_8 = false
        this.model4_9 = false
        this.model4_10 = false
        this.model4_11 = false
        this.model4_12 = false
        this.model4_13 = false
        this.model4_14 = false
        this.model4_15 = false
        this.model4_16 = false
      }
      if (model === 'model5') {
        this.model5 = true
        this.model5_1 = false
        this.model5_2 = false
        this.model5_3 = false
        this.model5_4 = false
        this.model5_5 = false
        this.model5_6 = false
        this.model5_7 = false
        this.model5_8 = false
        this.model5_9 = false
        this.model5_10 = false
        this.model5_11 = false
        this.model5_12 = false
        this.model5_13 = false
        this.model5_14 = false
        this.model5_15 = false
        this.model5_16 = false
      }
    },
    choose(model) {
      this.choosemodel = model
      this.centerDialogVisible = true
    },
    closes(obj) {
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module1-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_1 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_1 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_1 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_1 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_1 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module10-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_2 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_2 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_2 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_2 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_2 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module-11._SX600_.png') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_3 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_3 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_3 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_3 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_3 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module-12._SX600_.png') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_4 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_4 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_4 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_4 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_4 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module2-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_5 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_5 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_5 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_5 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_5 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module3-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_6 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_6 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_6 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_6 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_6 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module4-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_7 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_7 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_7 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_7 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_7 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module5-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_8 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_8 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_8 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_8 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_8 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module6-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_9 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_9 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_9 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_9 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_9 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module7-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_10 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_10 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_10 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_10 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_10 = true
        }
      }

      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module8-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_11 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_11 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_11 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_11 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_11 = true
        }
      }
      if (obj === 'https://images-na.ssl-images-amazon.com/images/G/01/aplus-module/module9-large-dog._SX600_.jpg') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_12 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_12 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_12 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_12 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_12 = true
        }
      }
      if (obj === 'https://m.media-amazon.com/images/G/01/aplus-module/3p-module-b._CB1526416193_._SX600_.png') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_13 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_13 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_13 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_13 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_13 = true
        }
      }
      if (obj === 'https://m.media-amazon.com/images/G/01/aplus/600x180._CB1560201888_._SX600_.png') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_14 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_14 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_14 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_14 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_14 = true
        }
      }
      if (obj === 'https://m.media-amazon.com/images/G/01/aplusautomation/templates/premium/premium-module-15-text._SX600_.png') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_15 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_15 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_15 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_15 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_15 = true
        }
      }
      if (obj === 'https://m.media-amazon.com/images/G/01/aplus/left-aligned-text._CB1560201807_._SX600_.png') {
        if (this.choosemodel === 'model1') {
          this.model1 = false
          this.model1_16 = true
          this.card2 = true
        }
        if (this.choosemodel === 'model2') {
          this.model2 = false
          this.model2_16 = true
          this.card3 = true
        }
        if (this.choosemodel === 'model3') {
          this.model3 = false
          this.model3_16 = true
          this.card4 = true
        }
        if (this.choosemodel === 'model4') {
          this.model4 = false
          this.model4_16 = true
          this.card5 = true
        }
        if (this.choosemodel === 'model5') {
          this.model5 = false
          this.model5_16 = true
        }
      }
      this.centerDialogVisible = false
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
        this.buttonShow = true
        this.show1 = false
        this.show2 = true
      }
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
        this.show2=false
      }
    }
  }
}
</script>
