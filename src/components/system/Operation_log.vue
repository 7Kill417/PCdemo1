<template>
    <div class="app">
        <div class="d1">
            <el-input v-model="input" class="in1" placeholder="模糊搜索"></el-input>
            <el-button style="margin-left: 20px" type="primary">搜索</el-button>
            <el-button>重置</el-button>
        </div>
        <div>
            <el-button style="margin: 20px;" @click="fileSaver()">导出</el-button>
            <template>
                <el-table id="table" ref="multipleTable" border tooltip-effect="dark" style="width: 100%"
                    :cell-style='cellStyle' :header-cell-style='rowClass'
                    v-loading="loading"
                    :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" >
                    </el-table-column>
                    <el-table-column  type="index" label="序号" >
                    </el-table-column>
                    <el-table-column prop="date" label="日期" >
                        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                    </el-table-column>
                    <el-table-column prop="name" label="操作人" >
                    </el-table-column>
                    <el-table-column prop="name" label="操作功能" >
                        项目填报
                    </el-table-column>
                    <el-table-column prop="address" label="描述" >
                    </el-table-column>
                    <el-table-column prop="ip" label="ip" >
                    </el-table-column>

                </el-table>

            </template>
            <div class="block" id="d3">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper" :total="userList.length">
                </el-pagination>
            </div>
        </div>
    </div>  
</template>
<script>
    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'
    export default {
        data() {
            return {
                loading: true,
                currentPage:1, //初始页
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 1,
                pagesize: 10,    //    每页的数据
                userList: [],
                input: '',
                index: 0,
                multipleSelection: []
            }
        },
        created() {
            this.handleUserList()
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
            fileSaver() {
                this.$nextTick(function () {
                    let wb = XLSX.utils.table_to_book(document.getElementById('table'));
                    let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
                    try {
                        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '学生信息.xlsx')
                    } catch (e) {
                        if (typeof console !== 'undefined') console.log(e, wbout)
                    }
                    return wbout;
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
            handleUserList() {
                this.$axios.get('https://www.fastmock.site/mock/104ec3594e68714c937935d5d5dc4e19/_houtai/api/user').then(res => {  //这是从本地请求的数据接口，
                    this.userList = res.data.tableData;
                    console.log(this.userList);
                    this.loading=false;
               
                })
            }
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