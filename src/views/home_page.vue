<template>
    <div>
        <div class="box">
            <!-- 左侧边导航栏 -->

            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router
                :collapse="isCollapse" background-color="#545c64" active-text-color="while" text-color="#fff"
                style="height: 920px">
                <el-menu-item index="shouye" background-color="#2DA9FA">
                    项目
                    <span slot="title">管理系统</span>
                </el-menu-item>
                <el-menu-item index="/app">
                    <i class="el-icon-s-home"></i>
                    <span slot="title" index="/shouye">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/czrz">操作日志</el-menu-item>
                        <el-menu-item index="/role">角色管理</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="/qxgl">权限管理</el-menu-item>
                    <el-menu-item index="/qygl">企业管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-coin"></i>
                        <span slot="title">基础维护</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/gswh">专业管理</el-menu-item>
                        <el-menu-item index="/kswh">科目管理</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="/zffs">支付方式</el-menu-item>
                    <el-menu-item index="/zgbm">主管部门</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-data-board"></i>
                        <span slot="title">公告发布</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/xmfb">项目发布</el-menu-item>
                        <el-menu-item index="/tzfb">通知发布</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="/ckcl">参考材料</el-menu-item>

                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-document-remove"></i>
                        <span slot="title">项目填报</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/zjl">资金类填报</el-menu-item>
                        <el-menu-item index="/ryl">荣誉类填报</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="/kjl">科技类填报</el-menu-item>

                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-pie-chart"></i>
                        <span slot="title">进度</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/zjl1">资金类进度</el-menu-item>

                    </el-menu-item-group>
                    <el-menu-item index="/kjl1">科技类进度</el-menu-item>

                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <i class="el-icon-document-checked"></i>
                        <span slot="title">验收管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/zjl2">资金类验收</el-menu-item>

                    </el-menu-item-group>
                    <el-menu-item index="/kjl2">科技类验收</el-menu-item>

                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="8">
                    <template slot="title">
                        <i class="el-icon-notebook-1"></i>
                        <span slot="title">项目档案</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/xmwj">项目文件</el-menu-item>

                    </el-menu-item-group>
                    <el-menu-item index="/sjbg">审计报告</el-menu-item>

                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="9">
                    <template slot="title">
                        <i class="el-icon-s-grid"></i>
                        <span slot="title">项目总览</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/xmzl">项目总览</el-menu-item>

                    </el-menu-item-group>



                </el-submenu>
                <el-submenu index="10">
                    <template slot="title">
                        <i class="el-icon-delete"></i>
                        <span slot="title">回收站</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/hsz">项目回收站</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <!-- 顶部导航栏 -->
            <div class="dh">
                <el-row>
                    <el-col :span="8" style="padding-left: 25px;">
                        <div class="grid-content bg-purple">
                            <div @click="isCollapse = !isCollapse" class="ss">
                                <i class="el-icon-s-fold" style="color: white" v-show="isCollapse"></i>
                                <i class="el-icon-s-unfold" style="color: white" v-show="!isCollapse"></i>
                            </div>
                            <i class="el-icon-house dleft" style="cursor: pointer"></i>
                            <i class="el-icon-monitor dleft" style="cursor: pointer"></i>
                            <i class="el-icon-refresh-left dleft" @click="winReload" style="cursor: pointer"></i>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light" style="line-height: 40px;  color: white;">
                            {{date|formateTime}}</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <p class="rt" @click="out()">炒鸡管理员&nbsp;&nbsp;&nbsp;&nbsp;退出</p>
                        </div>
                    </el-col>
                </el-row>
                <div class="tablan">
                    <i class="el-icon-d-arrow-left left" style="color: #BEBEBE"></i>
                    <el-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" :type="tag.type"
                        @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <i class="el-icon-d-arrow-right right" style="color: #BEBEBE"></i>
                </div>
                <router-view />
            </div>



        </div>

    </div>
</template>
<script>
    var parseDate = function (datetime) {
        return datetime < 10 ? '0' + datetime : datetime;
    }
    export default {
        name: 'bar',
        data() {
            return {
                isCollapse: true,
                date: new Date(),
                dynamicTags: ['标签一', '标签二', '标签三'],

            };
        },
        beforeRouteEnter(to, from, next) {
            if (to.name != 'sign') {
                let token = sessionStorage.getItem('token');
                if (token == null) {
                    next('/sign')
                } else if (token != null) {
                    next()
                } else {
                    next(false)
                }
            } else {
                next()
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            winReload: function (cond) {
                window.location.reload();
            },
            out(){
            sessionStorage.removeItem("token");
            this.$router.push("/sign");
        }

        },
        filters: {
            formateTime: function (val) {
                var date = new Date(val);
                var year = date.getFullYear();
                var month = parseDate(date.getMonth() + 1);
                var day = parseDate(date.getDate());
                var week = parseDate(date.getDay());
                var hours = parseDate(date.getHours());
                var min = parseDate(date.getMinutes());
                var sec = parseDate(date.getSeconds());
                return year + '年' + month + '月' + day + '日' + ' ' + '星期' + week + '  ' + '  ' + hours + ':' + min + ':' + sec
            }
        },
        created() {
            var that = this;//作用域一致
            this.timer = setInterval(function () {
                that.date = new Date();
            }, 1000)
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer)
            }
        },
       
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .box {
        display: flex;
    }

    .dh {
        width: 100%;
        background: #2DA9FA;
        height: 45px;

    }

    .dleft {
        font-size: 25px;
        color: white;
        margin: 9px;
    }

    .ss {
        font-size: 30px;
        top: 2px;
        width: 30px;
        z-index: 5;
        cursor: pointer;
        float: left;
    }

    .rt {
        float: right;
        color: white;
        line-height: 40px;
        margin-right: 60px;
    }

    .tablan {
        height: 45px;
        width: 100%;
        box-shadow: 1px 1px 1px black;
        position: relative;
    }

    .left {
        color: rgb(190, 190, 190);
        /* font-size: 43px; */
        background: #F2F2F2;
        font-size: 25px;
        padding: 9px;
        margin-top: 2px;
        cursor: pointer;
    }

    .right {
        color: rgb(190, 190, 190);
        background: #F2F2F2;
        font-size: 25px;
        padding: 9px;
        margin-top: 2px;
        float: right;
        cursor: pointer;
        position: absolute;
        right: 0;
    }
</style>