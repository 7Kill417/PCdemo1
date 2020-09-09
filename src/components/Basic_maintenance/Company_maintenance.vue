<template>
    <div id="app">
        <div class="bd1">
            <input type="te" placeholder="按名称查询" v-model="pname">
            <el-button type="primary" @click="getdata()">查询</el-button>
            <input type="text" v-model="addprofessional.professionalName" placeholder="新增专业">
            <el-button type="primary" @click=" add()">新增</el-button>
            <input type="text" v-model="updateprofessional.professionalName"></input>
            <el-button type="primary" @click="updata()">保存</el-button>
            <template>
                <el-table :cell-style='cellStyle' :header-cell-style='rowClass' border v-loading="loading"
                    :data="datas.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
                    <el-table-column type="selection">
                    </el-table-column>
                    <el-table-column label="序号" type="index">
                    </el-table-column>
                    <el-table-column prop="id" label="id">
                    </el-table-column>
                    <el-table-column prop="professionalName" label="名称">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
                            <el-button type="danger" @click.native.prevent="deleteRow(scope.row)" size="small">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <div class="block" id="d3">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper" :total="datas.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage: 1,
                pagesize: 5,
                pname: '',
                zname: '',
                datas: '',
                professional: {
                    id: '',
                    professionalName: ''
                },
                addprofessional: {
                    professionalName: ''
                },
                updateprofessional: {
                    id: '',
                    professionalName: ''

                },
                delprofessional: {
                    id: '',
                }

            }
        },
        created() {
            this.getdata();
        },
        methods: {
            deleteRow(data) {
                this.delprofessional.id = data.id
                var that = this;
                this.$axios.get(this.$location.deleteProfessional, {
                    params: {
                        id: that.delprofessional.id
                    }
                }
                ).then(res => {
                    that.delprofessional = res.data.data.data;
                })
                this.getdata();
            },
            handleClick(data) {
                this.updateprofessional.id = data.id;
                this.updateprofessional.professionalName = data.professionalName;
            },
            updata() {
                var that = this;
                this.$axios.post(this.$location.updateProfessional, this.$qs.stringify({
                    id: that.updateprofessional.id,
                    professionalName: that.updateprofessional.professionalName
                })
                ).then(res => {
                    that.updateprofessional = res.data.data.data;
                })
                this.getdata();
            },

            add() {
                var that = this;
                this.$axios.post(this.$location.addProfessional, this.$qs.stringify({
                    professionalName: that.addprofessional.professionalName
                })
                ).then(res => {
                    that.addprofessional = res.data.data.data;
                })
                this.getdata();
            },
            getdata() {
                var that = this;
                this.$axios.get(this.$location.professionalForPage, {
                    params: {
                        pname: that.pname,
                        pageSize: 5,
                        currentPage: that.currentPage,
                    }
                }).then(res => {
                    that.professional = res.data.data.data;
                    that.datas = res.data.data.data
                    that.pagesize = res.data.data.pageSize
                    console.log(res.data.data.data)


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