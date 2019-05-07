<template>
<div class="fixed-bar">
    <el-row type="flex" justify="space-between">
        <el-col :span="2" class="pop-menu"><div class="el-icon-menu"></div></el-col>
        <el-col :span="8" :ofset="12">
            <div class="grid-content">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-submenu index="1">
                        <template slot="title">{{$t('languae_switch')}}</template>
                        <el-menu-item index="en_US">{{$t('en_US')}}</el-menu-item>
                        <el-menu-item index="zh_CN">{{$t('zh_CN')}}</el-menu-item>
                        <el-menu-item index="zh_HK">{{$t('zh_HK')}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">Theme</template>
                        <el-menu-item index="2-1">Light</el-menu-item>
                        <el-menu-item index="2-2">Dark</el-menu-item>
                        <el-menu-item index="2-3">Carbon</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" disabled>About Us</el-menu-item>
                </el-menu>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
import {loadLanugageAsync} from '@/i18n'
export default {
    name: 'FixedBar',
    data : () => {
        return {
            activeIndex: '2',
        }
    },
    methods: {
        ...mapMutations(['CHANGE_LANGUAGE']),
        

        // 使用es5 方法, 为了获取局部 this
        handleSelect (key, path) {
            console.log('key, path is %s, %s', key, path );
            debugger
            this.$store.commit('CHANGE_LANGUAGE', key);
            // mapMutations 将 `this.CHANGE_LANGUAGE()` 映射为 `this.$store.commit('CHANGE_LANGUAGE')`
            this.CHANGE_LANGUAGE(key); // set store
            loadLanugageAsync(key) 
        }
    }
}
</script>

<style lang="sass">
@import '../styles/main'
.fixed-bar
    position: fixed
    width: 100%
    z-index: 1000
    .pop-menu
        @include flexbox
        cursor: pointer
</style>
