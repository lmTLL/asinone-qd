<template>
  <el-menu-item v-if="sidebarLogo" :class="{'submenu-title-noDropdown':isCollapse}" index="0" style="pointer-events: none;">
    <!-- 缩小时显示的logo，可以自定义，这里直接使用图标库中的 -->
    <svg-icon v-if="isCollapse" icon-class="run" />
    <!--正常状态下显示的，可以使用本地的logoImg-->
    <div class="logo-con" style="">
      <img src="https://eladmin.szsydd.com/statics/2019/09/02/0f47adab08d15d60dd2e2d41ac21a45basinone%E7%99%BD%E5%AD%97%E6%A9%98%E7%BA%BF.png" style="width: 150px;height:40px;margin-top: -5px;margin-left: -5px">
      <!--<img :src="logoImg">-->
    </div>
  </el-menu-item>
</template>

<script>
// import logoImg from '@/assets/logo/logo.png'
import { mapState } from 'vuex'
export default {
  name: 'Logo',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // logoImg: logoImg
    }
  },
  computed: {
    ...mapState({
      sidebarLogo: state => state.settings.sidebarLogo
    })
  }
}
</script>

<style scoped>

</style>
