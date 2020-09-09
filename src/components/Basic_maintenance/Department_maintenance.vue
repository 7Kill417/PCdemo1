<!-- <template>
        <div class="app">
            <div class="d1">
                <el-input v-model="input" class="in1" placeholder="模糊搜索"></el-input>
                <el-button style="margin-left: 20px" type="primary">搜索</el-button>
                <el-button>重置</el-button>
            </div>
            <div>
                <el-button style="margin: 20px;" type="primary">新增</el-button>
                <el-button type="danger" @click="Del">批量删除</el-button>
                <template>
                    <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%"
                        :cell-style='cellStyle' :header-cell-style='rowClass' @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="num" label="序号" width="120">
    
                        </el-table-column>
                        <el-table-column prop="name" label="科室名称" width="120">
                          
                        </el-table-column>
                      
                       
                        <el-table-column prop="address" label="备注" width="1000">
                        </el-table-column>
                        <el-table-column label="操作" width="200">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small">编辑</el-button>
                                </template>
                            </el-table-column>
    
                    </el-table>
    
                </template>
                <div class="block" id="d3">
    
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper" :total="2000">
                    </el-pagination>
                </div>
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
                    index: 0,
                    tableData: [{
                        num: 1,
                        date: '2016-05-03',
                        name: '科室一',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 2,
                        date: '2016-05-02',
                        name: '科室二',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 3,
                        date: '2016-05-04',
                        name: '科室三',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 4,
                        date: '2016-05-01',
                        name: '科室四',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 5,
                        date: '2016-05-08',
                        name: '科室四',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 6,
                        date: '2016-05-06',
                        name: '科室四',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 7,
                        date: '2016-05-07',
                        name: '科室四',
                        address: '点击了填报按钮    ',
                        ip: '198.126.1.1'
                    }],
                    multipleSelection: []
                }
            },
    
            methods: {
                toggleSelection(rows) {
                    if (rows) {
                        rows.forEach(row => {
                            this.$refs.multipleTable.toggleRowSelection(row);
                        });
                    } else {
                        this.$refs.multipleTable.clearSelection();
                    }
                },
                handleSelectionChange(val) {
                    this.multipleSelection = val;
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
            }
        }
    </script>
    <style scoped>
        * {
            padding: 0;
            margin: 0;
        }
    
        .app {
            background: white;
            margin: 5px;
            padding: 15px;
            border-radius: 5px;
            height: 800px;
        }
    
        .in1 {
            width: 300px;
        }
    
        .d1 {
            border-bottom: 1px solid #999999;
            padding-bottom: 30px;
        }
    
        #d3 {
            margin-top: 20px;
            margin-left: 20px;
        }
    </style> -->
<template>
    <div id="app">
        <el-divider content-position="left">增加</el-divider>
        <el-input v-model="addcourse.courseName" placeholder="科目名称" style="width: 200px;margin: 0px 10px"></el-input>
        <el-input v-model="addcourse.courseDesc" placeholder="科目课程" style="width: 200px;margin-right: 10px"></el-input>
        <template>
            <el-select style="margin-right: 10px" v-model="addcourse.professionalId" placeholder="请选择专业">
                <el-option v-for="item in professional" :key="item.id" :label="item.professionalName" :value="item.id">
                </el-option>
            </el-select>
        </template>
        <el-button type="primary" @click="addprofessional()">增加</el-button>{{addcourse.professionalId}}

        <el-divider content-position="left">删除</el-divider>

        <el-divider content-position="left">修改</el-divider>
        <el-input v-model="updateCourse.courseName" placeholder="科目名称" style="width: 200px;margin: 0px 10px"></el-input>
        <el-input v-model="updateCourse.courseDesc" placeholder="科目课程" style="width: 200px;margin-right: 10px"></el-input>
        <template>
            <el-select style="margin-right: 10px" v-model="updateCourse.professionalId" placeholder="请选择专业">
                <el-option v-for="item in professional" :key="item.id" :label="item.professionalName" :value="item.id">
                </el-option>
            </el-select>
        </template>
        <el-button type="primary" @click="update()">保存</el-button>{{updateCourse.professionalId}}


        <el-divider content-position="left">查询</el-divider>
        <el-input v-model="name" placeholder="请输入内容" style="width: 200px"></el-input>
        <el-button type="primary" @click="getdata()">查询</el-button>

        <div class="table">
            <template>
                <el-table :data="subject.slice((currentPage-1)*pagesize,currentPage*pagesize)" border
                    >
                    <el-table-column prop="id" label="id">
                    </el-table-column>
                    <el-table-column prop="courseName" label="科目名称" >
                    </el-table-column>
                    <el-table-column prop="courseDesc" label="课程" >
                    </el-table-column>
                    <el-table-column prop="professional.professionalName" label="专业" >
                    </el-table-column>
                    <el-table-column label="操作" >
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" @click.native.prevent="updateCourses(scope.row)" size="small">编辑</el-button>
                            <el-button type="warning" size="small" @click.native.prevent="deleteCourse(scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <div class="block" id="d3">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper" :total="subject.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: '', //查询名称
                currentPage: 1,//初始页
                pagesize: 1,//每页大小
                subject: [],//接收科目数组
                professional: [],//接收所有专业数组
                professional2:[],
                addcourse: {    //接收添加字段传递参数
                    courseName: '',
                    courseDesc: '',
                    professionalId: '',
                },
                deleteid: '', //删除id
                updateCourse :{  //接收修改字段传递参数
                    id:'',
                    courseName: '',
                    courseDesc: '',
                    professionalId: '',
                }
           

            }
        },
        created() {
            this.getdata(),
          this.getprofessional();
        },
        methods: {
            //修改数据源
            update(){
                let that =  this;
                this.$axios.post(this.$location.updateCourse,this.$qs.stringify({
                    id : that.updateCourse.id,
                    courseName :that.updateCourse.courseName,
                    courseDesc :that.updateCourse.courseDesc,
                    professionalId :that.updateCourse.professionalId
                })).then( rse =>{
                    this.getdata()
                })
                this.getdata()
            },
            //修改显示数据方法
            updateCourses(data){
                let that =  this;
                that.updateCourse.courseName= data.courseName
                that.updateCourse.courseDesc = data.courseDesc
                that.updateCourse.id= data.id
                this.$axios.get(this.$location.professionalForPage, {
                    params: {
                        pname: data.professional.professionalName,
                        pageSize: 19,
                        currentPage: 1,
                    }
                }).then(rse => {
                    that.professional2 = rse.data.data.data
                    console.log(rse.data.data.data[0].id)
                    that.updateCourse.professionalId =rse.data.data.data[0].id
                    this.getdata()
                })

            },
            //删除方法
            deleteCourse(date) {

                this.id = date.id
                let that = this;

                this.$axios.get(this.$location.deleteCourse, {
                    params: {
                        id: that.id
                    }
                }).then(rse => {
                    console.log(rse.data.data.data)
                    this.getdata()
                })
                this.getdata();
            },
            //增加方法
            addprofessional() {
                let that = this;
                this.$axios.post(this.$location.addCourse, this.$qs.stringify({
                    courseName: that.addcourse.courseName,
                    courseDesc: that.addcourse.courseDesc,
                    professionalId: that.addcourse.professionalId
                })).then(rse => {
                    console.log(rse.data.data.data)
                    this.getdata()
                })
                this.getdata();
            },
            //初始化表格数据--查询方法
            getdata() {
                let that = this;
                this.$axios.get(this.$location.courseForPage, {
                    params: {
                        courseName: that.name,
                        pageSize: 100,
                        currentPage: that.currentPage
                    }
                }).then(rse => {
                    that.subject = rse.data.data.data
                    that.pagesize = rse.data.data.pageSize
                })

            },
            //查询专业
            getprofessional() {
                let that = this;
                this.$axios.get(this.$location.professionalForPage, {
                    params: {
                        pname: '',
                        pageSize: 19,
                        currentPage: 1,
                    }
                }).then(rse => {
                    that.professional = rse.data.data.data
                })
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


        },
    }
</script>
<style>

</style>