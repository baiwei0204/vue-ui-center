<template>
  <div class="hello">

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1"   class="el-menu-vertical-demo"  @open="handleOpen"  @close="handleClose"  :collapse="isCollapse" router>
      <el-submenu v-for="item in menuGroup" :key="item.$index" :index="item.value">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group v-if="item.children && item.children.length>0">
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item v-for="child in item.children" :key="child.$index" :index="child.router">{{child.label}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Leftmenu",
  props: {
    msg: String,
    menuGroup: Array
  },
  data(){
    return {
      isCollapse: true,
    }
  },
  methods: {
    handleOpen: (key, keyPath) => {
      console.log('key, keyPath', key, keyPath)
    },
    handleClose: (key, keyPath) => {
      console.log('key, keyPath', key, keyPath)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.el-submenu
  display: block
  padding: 0 10px
  text-align: left
  .el-menu-item-group
    padding 0 10px
  

  
</style>
