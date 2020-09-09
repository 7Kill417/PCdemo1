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
            </template><br/>
            <div style="margin-top: 10px">
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
        </div>
    
        <div class="d2">
            <div class="btnd1">
                <el-row>
                    <el-button type="primary">新增</el-button>
                    <el-button type="danger" @click="Del">批量删除</el-button>
                    <el-button @click="pwd">通过</el-button>
                    <el-button @click="pwd">驳回</el-button>
                    <el-button @click="pwd">提交</el-button>
                    <el-button @click="pwd">导出</el-button>
                </el-row>
            </div>
            <div class="bd1">
                <template>
                    <el-table :data="tableData" :cell-style='cellStyle' :header-cell-style='rowClass' border
                        style="width: 100%">
                        <el-table-column type="selection">
                        </el-table-column>
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column prop="date" label="申报时间" >
                        </el-table-column>
                        <el-table-column prop="zt" label="状态" >
                        </el-table-column>
                        <el-table-column prop="name" label="项目名称" >
                        </el-table-column>
                        <el-table-column prop="zhu" label="申报单位" >
                        </el-table-column>
                        
                        <el-table-column prop="ztz" label="计划类别" >
                        </el-table-column>
                        <el-table-column prop="bm" label="项目类别" >
                        </el-table-column>
                        <el-table-column prop="on" label="支持方向" >
                        </el-table-column>
                        <el-table-column prop="ks" label="管理处室" >
                        </el-table-column>
                        <el-table-column prop="tj" label="下沉公司" >
                        </el-table-column>
                        <el-table-column prop="bz" label="项目负责人" >
                        </el-table-column>
                        <el-table-column label="操作" >
                            <!-- <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                            </template> -->
                            <el-row>
                                <el-button type="success" size="mini">查看</el-button>
                                <el-button type="primary" size="mini">编辑</el-button>
                                <el-button type="warning" size="mini">公告</el-button>
                                <el-button type="danger" size="mini">删除</el-button>
                               
                         
                              </el-row>
                        </el-table-column>
                    </el-table>
                </template>

            </div>
        </div>
        <div class="block" id="d3">

            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="2000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                input: '',
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
                tableData: [{
                    date: '2016-05-02',
                    zt:'待提交',
                    name: '某某荣誉',
                    zhu:'某某某主体描述',
                    cc:'某某子公司',
                    st:'2020-09-01',
                    op:"2021-08-91",
                    ztz:"1000万元",
                    bm:'发改',
                    on:'国家级',
                    ks:'科室一',
                    phone: '13278570090',
                    sex: '男',
                    province: '上海',
                    tj:'条件1，条件2，条件3',
                    city: '1、发文单位：省发改委 2、文件名称：关于开展2020 年度企业研发准备金备案工作的通知3、文件要求：见附件。',
                    address: '管理员',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    sex: '男',
                    phone: '13278570090',
                    city: '1、发文单位：省发改委 2、文件名称：关于开展2020 年度企业研发准备金备案工作的通知3、文件要求：见附件。',
                    address: '管理员',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    phone: '13278570090',
                    sex: '女',
                    city: '1、发文单位：省发改委 2、文件名称：关于开展2020 年度企业研发准备金备案工作的通知3、文件要求：见附件。',
                    address: '管理员',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    phone: '13278570090',
                    province: '上海',
                    sex: '女',
                    city: '1、发文单位：省发改委 2、文件名称：关于开展2020 年度企业研发准备金备案工作的通知3、文件要求：见附件。',
                    address: '管理员',
                    zip: 200333
                }]
            }
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