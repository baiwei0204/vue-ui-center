<template>
  <div id="app">
    <fixedbar></fixedbar>
    <el-container>
      <el-header>
        <top-bar></top-bar>
      </el-header>
      <el-container>
        <el-aside>
        <leftmenu :menu-group="menuGroup"></leftmenu>
      </el-aside>
      <el-main>
        <router-view></router-view>  
      </el-main>
      </el-container>
      
    </el-container>
    <el-footer>
      <footer-bar></footer-bar>
    </el-footer>
  </div>
</template>
<script>
import Fixedbar from './components/fixed-topbar.vue'
import Leftmenu from './components/leftmenu.vue'
import FooterBar from './components/footerbar.vue'
import TopBar from './components/topbar.vue'
export default {
  data(){
    return {
      menuGroup: [
        {
          label: '组件',
          value: '1.1', 
          children: [
            {label:'Accordion', value: '1.1', router: 'accordion'},
            {label: 'toolTips', value: '1.2', router: 'tooltips'},
            {label: 'modal', value: '1.3', router: 'medal'}
        ]},
        {
          label: '动画',
          value: '2.1',
          children: [
            {label: 'fade in', value: '2.1', router: 'feadin'},
            {label: 'fade out', value: '2.2', router: 'deadout'}
          ]
        },
        {
          label: '实例',
          value: '3',
          children: [
            {label: 'Test1', value: '3.1', router: 'test1'},
            {label: 'Test2', value: '3.2', router: 'test2'}
          ]
        }
      ]
    }
  },
  components: {
    Fixedbar,
    FooterBar,
    Leftmenu,
    TopBar
  }
}

</script>
<style lang="sass">
@import './styles/main.sass'
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
.body 
  background: $backgroundColor
.el-aside
  max-width: 200px

</style>
