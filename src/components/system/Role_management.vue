<template>
    <div id="app">
        <div class="d1">
            <template>
                <el-select v-model="value" style="margin: 0 20px" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </template>
            <template>
                <el-select v-model="value" style="margin: 0 20px" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </template>
            <template>
                <el-select v-model="value" style="margin: 0 20px" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </template>
            <el-input v-model="input" class="in1" placeholder="模糊搜索"></el-input>
            <el-button style="margin-left: 20px" type="primary">搜索</el-button>
            <el-button>重置</el-button>

        </div>
        <div class="d2">
            <div class="btnd1">
                <el-row>
                    <el-button type="primary" @click="show=1">新增</el-button>
                    <el-button type="danger" @click="Del">批量删除</el-button>
                    <el-button @click="pwd">重置密码</el-button>
                </el-row>
            </div>
            <div class="bd1">
                <template>
                    <el-table :cell-style='cellStyle' :header-cell-style='rowClass' border v-loading="loading"
                        :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column label="序号" type="index" width="50">
                        </el-table-column>
                        <el-table-column prop="name" label="id" width="200">
                        </el-table-column>
                        <el-table-column prop="phone" label="名称" width="200">
                        </el-table-column>
                        <!-- 
                        <el-table-column prop="sex" label="性别" width="200">
                        </el-table-column>
                        <el-table-column prop="city" label="公司名称" width="200">
                        </el-table-column>
                        <el-table-column prop="address" label="角色" width="400">
                        </el-table-column>
                        <el-table-column label="是否启用" width="180">
                            <template slot-scope="scope">
                                <el-switch v-model="scope.row.shishi" active-color="#13ce66" inactive-color="#ff4949">
                                </el-switch>
                            </template>
                        </el-table-column> -->
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
                                <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, userList)"
                                    size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
                <div v-show="show==1" class="zeng">

                    <div class="toubu">角色</div>
                    <div class="adduser">
                        <div class="left">
                            <p class="ps">姓名:<el-input v-model="name"  placeholder="请输入内容" style="width: 200px;margin-left: 30px"></el-input></p>
                            <p class="ps"> 电话号:<el-input  v-model="phone" placeholder="请输入内容" style="width: 200px;margin-left: 10px"></el-input></p>
                            <p class="ps"> <span style="padding-right: 30px">性别:</span><template >
                                    <el-radio v-model="radio" label="1">男</el-radio>
                                    <el-radio v-model="radio" label="2">女</el-radio>
                                  </template></p>

                        </div>
                        <div class="right">
                            <div class="ds"> 公司名称:<template>
                                    <el-select v-model="value" style="margin-left: 20px" placeholder="请选择">
                                        <el-option v-for="items in gongs" :key="items.value" :label="items.label"
                                            :value="items.value">
                                        </el-option>
                                    </el-select>
                                </template></div>
                            <div class="ds">
                                角色:<template>
                                    <el-select style="margin-left: 50px" v-model="value6" placeholder="请选择">
                                        <el-option v-for="item in gongss" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>

                                </template>
                            </div>
                            <div class="ds">
                                是否启用:<el-switch style="margin-left: 20px" v-model="values" active-color="#13ce66" inactive-color="#ff4949">
                                </el-switch>
                            </div>

                        </div>

                    </div>
                    <div class="qr">
                        <el-button type="primary" @click="add()">保存</el-button>
                        <el-button @click="show=0">返回</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="block" id="d3">

            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper" :total="userList.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value6:"",
                name:'',
                phone:'',
                radio: '1',
                values: true,
                show: 0,
                currentPage: 1, //初始页
                pagesize: 10,    //    每页的数据
                userList: [],
                loading: true,
                input: '',
                course:{
                    id:'',
                    courseName:'',
                    courseDesc:'',
                    professionalId:'',

                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                gongs: [{
                    value: '某某子公司1',
                    label: '某某子公司1'
                }, {
                    value: '某某子公司2',
                    label: '某某子公司2'
                }, {
                    value: '某某子公司3',
                    label: '某某子公司3'
                }, {
                    value: '某某子公司4',
                    label: '某某子公司4'
                }, {
                    value: '某某子公司5',
                    label: '某某子公司5'
                }

                ],
                gongss: [{
                    value: '申报人',
                    label: '申报人'
                }, {
                    value: '审核人',
                    label: '审核人'
                }, {
                    value: '领导',
                    label: '领导'
                }, {
                    value: '炒鸡管理员',
                    label: '炒鸡管理员'
                }

                ],
                value: '',
                value1: true,

            }
        },
        created() {
            this.handleUserList()
        },
        methods: {
            add(){
                this.$axios.get($location.insertCourse,).then(res => {  //这是从本地请求的数据接口，
                    this.userList = res.data.userpo;
                    console.log(this.userList);
                    this.loading = false;

                })
                // this.userList.push(
                //   {                  
                //     "name": this.name,               
                //     "phone": this.phone,
                //     "sex": this.radio == 1 ? "男" : "女",
                //     "city": this.value,
                //     "address": this.value6,
                //     "shishi": this.values
                //   }
                // )
                // this.show=0

            },
            handleClick(row) {
                console.log(row);
            },
            cellStyle({ row, column, rowIndex, columnIndex }) {
                return 'text-align:center';
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            rowClass({ row, rowIndex }) {
                return 'text-align:center';
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
            },
            handleUserList() {
                this.$axios.get('https://www.fastmock.site/mock/104ec3594e68714c937935d5d5dc4e19/_houtai/api/user').then(res => {  //这是从本地请求的数据接口，
                    this.userList = res.data.userpo;
                    console.log(this.userList);
                    this.loading = false;

                })
            },





            Del() {
                this.$confirm('你确定要删除这条信息吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            pwd() {
                this.$confirm('你确定要重置密码吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success '
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '重置成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消重置'
                    });
                });
            }
        },
    }
</script>
<style scoped>
    #app {
        margin: 5px;
        background: white;
        height: 800px;
    }

    .d1 {
        padding: 10px;
        border-bottom: 1px solid #333333;
        padding-bottom: 30px;
    }

    .toubu {
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        border-bottom: 1px solid;
    }

    .in1 {
        width: 250px;
    }



    .btnd1 {
        margin-top: 20px;
        margin-left: 10px;
    }

    .bd1 {
        margin-top: 20px;
    }

    #d3 {
        margin-top: 20px;
        margin-left: 20px;
    }

    .zeng {
        width: 96%;
        height: 800px;
        position: absolute;
        z-index: 5;
        top: 94px;
        background: white;
    }

    .adduser {
        width: 1000px;
        height: 500px;
        margin: 0 auto;
        margin-top: 20px;
        display: flex;
    }

    .qr {
        width: 200px;
        margin: 0 auto;
    }

    .left {
        flex: 1;

    }

    .right {
        flex: 1;
    }
    .ps{
        margin: 20px;
    }
    .ds{
        margin: 20px;
    }
</style>