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
                    <el-button type="primary">新增</el-button>
                    <el-button type="danger" @click="Del">批量删除</el-button>
                    <el-button @click="pwd">导出</el-button>
                </el-row>
            </div>
            <div class="bd1">
                <template>
                    <el-table id="table" ref="multipleTable" border tooltip-effect="dark" 
                    v-loading="loading"
                        :cell-style='cellStyle' :header-cell-style='rowClass'
                        :data="axioscs.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                        <el-table-column type="selection" >
                        </el-table-column>
                        <el-table-column label="序号" type="index" >
                        </el-table-column>
                        <el-table-column prop="Title" label="问题" >
                        </el-table-column>
                        <el-table-column prop="Prize" label="手机号（登录账号）" >
                        </el-table-column>
                        <el-table-column prop="VisitCount" label="性别">
                        </el-table-column>
                        <el-table-column prop="CreateUserName" label="公司名称" >
                        </el-table-column>
                        <el-table-column prop="Content" label="具体问题" >
                        </el-table-column>
                        <el-table-column label="是否启用" >
                            <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-table-column>
                        <el-table-column label="操作" >
                            <!-- <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small">编辑</el-button>
                                </template> -->
                            <el-row>
                                <el-button type="success">查看</el-button>
                                <el-button type="primary">编辑</el-button>


                            </el-row>
                        </el-table-column>
                    </el-table>
                </template>

            </div>
        </div>
        <div class="block" id="d3">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" 
                :page-size="pagesize"  layout="total, sizes, prev, pager, next, jumper"
                :total="axioscs.length"> //这是显示总共有多少数据，
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: true,
                currentPage: 1,//初始页
                pagesize: 5,    //    每页的数据
                axioscs: [],        
                input: '',
                multipleSelection: [],
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
                value: '',
                value1: true,


            }
        },
        created() {
            this.$axios.get('http://47.111.250.151:8081/api/Question/GetQuestion',{params:{type:17}}).then(res => {
                this.axioscs = res.data.rows
                console.log(this.axioscs)   
                this.loading=false;
            })
        },
        methods: {

            handleClick(row) {
                console.log(row);
            },
            cellStyle({ row, column, rowIndex, columnIndex }) {
                return 'text-align:center';
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
            },
            // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.pagesize = size;
            console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage;
            console.log(this.currentPage)  //点击第几页
        },
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
</style>