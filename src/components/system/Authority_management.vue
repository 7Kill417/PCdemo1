<template>
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
                        <el-table-column type="selection" >
                        </el-table-column>
                        <el-table-column prop="num" label="序号" >
    
                        </el-table-column>
                        <el-table-column prop="name" label="角色" >
                          
                        </el-table-column>
                      
                       
                        <el-table-column prop="address" label="描述" >
                        </el-table-column>
                        <el-table-column label="操作" >
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
                        name: '王小虎',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 2,
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 3,
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 4,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 5,
                        date: '2016-05-08',
                        name: '王小虎',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 6,
                        date: '2016-05-06',
                        name: '王小虎',
                        address: '点击了填报按钮',
                        ip: '198.126.1.1'
                    }, {
                        num: 7,
                        date: '2016-05-07',
                        name: '王小虎',
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
    </style>