<template>
    <div class="app">
        <header>
            <p style="font-size: 13px; color: #2DA9FA;">早上好，尊敬的超级管理员</p>
        </header>
        <div style="margin-top: 20px">
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content bg-purple" style="border: 1px solid #E7E7E7;">
                        <p class="p1" style="background: #5ACFCA;"> <img src="/images/u329.png"></img></p>
                        <div class="d1">
                            <p class="p2">项目总填报数<span class="s1" style="background: #43DDD2;">总</span></p>
                            <p class="p3" style=" color: #43DDD2;">500</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple" style="border: 1px solid #E7E7E7;">
                        <p class="p1" style="background: #FF9800;"> <img src="/images/u329.png"></p>
                        <div class="d1">
                            <p class="p2">已完成项目<span class="s1" style="background: #FF9800;">完</span></p>
                            <p class="p3" style=" color: #FF9800;">300</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple" style="border: 1px solid #E7E7E7;">
                        <p class="p1" style="background: #2DA9FA"> <img src="/images/u330.png"></img></p>
                        <div class="d1">
                            <p class="p2">项目总投资<span class="s1" style="background: #2DA9FA;">投</span></p>
                            <p class="p3" style=" color: #2DA9FA;">70,000,000</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple" style="border: 1px solid #E7E7E7;">
                        <p class="p1" style="background: #43DDD2;"> <img src="/images/u330.png"></p>
                        <div class="d1">
                            <p class="p2">项目累计投资<span class="s1" style="background: #43DDD2;">累</span></p>
                            <p class="p3" style=" color: #43DDD2;">30,000,000</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple" style="border: 1px solid #E7E7E7;">
                        <p class="p1" style="background: #FF9800;"><img src="/images/u330.png"></p>
                        <div class="d1">
                            <p class="p2">项目下单资金<span class="s1" style="background: #FF9800;">下</span></p>
                            <p class="p3" style=" color: #FF9800;">15,000,000</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple" style="border: 1px solid #E7E7E7;">
                        <p class="p1" style="background: #2DA9FA;"> <img src="/images/u330.png"></p>
                        <div class="d1">
                            <p class="p2">项目到位资金<span class="s1" style="background: #2DA9FA;">到</span></p>
                            <p class="p3" style=" color: #2DA9FA;">800,000</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div style="height: 270px;">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="d2">待处理项目</div>
                    <div class="grid-content bg-purple">
                        <template>
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="date" width="180">
                                </el-table-column>
                                <el-table-column prop="name" width="180">
                                </el-table-column>
                                <el-table-column prop="address">
                                </el-table-column>
                            </el-table>
                        </template>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="d2">项目通知</div>
                    <div class="grid-content bg-purple">
                        <template>
                            <el-table :data="tableData2" style="width: 100%">
                                <el-table-column prop="date" width="180">
                                </el-table-column>
                                <el-table-column prop="name" width="180">
                                </el-table-column>
                                <el-table-column prop="address">
                                </el-table-column>
                            </el-table>
                        </template>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="d2" style="width: 93%">项目公告</div>
                    <div class="grid-content bg-purple">
                        <template>
                            <el-table :data="tableData2" style="width: 100%">
                                <el-table-column prop="date" width="180" height="0">
                                </el-table-column>
                                <el-table-column prop="name" width="180" height="0">
                                </el-table-column>
                                <el-table-column prop="address">
                                </el-table-column>
                            </el-table>
                        </template>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="">
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple" ref="chart" id="bar_dv" style="height:400px;width: 100%;">

                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple" id="bar_dv1" ref="chart1" style="height:400px;width: 100%;">

                    </div>
                </el-col>
            </el-row>


        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '某某某项目',
                    name: '子公司一',
                    address: '审核'
                }, {
                    date: '某某某项目',
                    name: '子公司二',
                    address: '审核'
                }, {
                    date: '某某某项目',
                    name: '子公司三',
                    address: '审核'
                }, {
                    date: '某某某项目',
                    name: '子公司四 ',
                    address: '审核'
                }],
                tableData2: [{
                    date: '申报国家外贸基地通知',
                    name: '',
                    address: '查看'
                }, {
                    date: '申报国家外贸基地通知',
                    name: '',
                    address: '查看'
                }, {
                    date: '申报国家外贸基地通知',
                    name: '',
                    address: '查看'
                }, {
                    date: '申报国家外贸基地通知',
                    name: ' ',
                    address: '查看'
                }]
            }
        },
        methods: {
            drawChart() {
                // 基于准备好的dom，初始化echarts实例
                // let myChart = this.$echarts.init(document.getElementById("main"));
                var bar_dv = this.$refs.chart;
                let myChart = this.$echarts.init(bar_dv)
                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: "项目上报统计"
                    },
                    color: ['#3398DB'],

                    xAxis: {
                        type: 'category',
                        data: ['2020-08-08', '2020-08-09', '2020-08-10', '2020-08-11', '2020-08-12', '2020-08-13', '2020-08-14']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [11, 9, 13, 6, 7, 9, 14],
                        type: 'line'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            drawChart1() {
                // 基于准备好的dom，初始化echarts实例
                // let myChart = this.$echarts.init(document.getElementById("main"));
                var bar_dv1 = this.$refs.chart1;
                let myChart = this.$echarts.init(bar_dv1)
                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: "项目总投资"
                    },
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27',
                                '2020-06-28'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '总投资',
                            type: 'bar',
                            barWidth: '20%',
                            data: [1124, 985, 1355, 688, 796, 998, 1450]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },


        },
        mounted() {
            this.drawChart();
            this.drawChart1();
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

    .el-row {
        margin-bottom: 20px;

    }

    .el-col {
        border-radius: 4px;
        height: 80px;
        position: relative;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        height: 80px;
        background: white;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        /* border: 1px solid #E7E7E7; */
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .p1 {
        height: 80px;
        line-height: 90px;
        float: left;
        width: 45px;
        text-align: center
    }

    .p2 {

        margin: 0 auto;
        border-bottom: 1px solid #D3DCE6;
        margin-top: 10px;
        padding-bottom: 10px;
        margin-left: 10px
    }

    .d1 {
        margin-left: 45px;

    }

    .s1 {
        float: right;

        color: white;
        padding: 4px;
        border-radius: 5px;
        position: absolute;
        right: 15px;
    }

    .p3 {
        text-align: center;
        font-size: 2.5rem;

    }

    .d2 {
        position: absolute;
        z-index: 9;
        background: #EEF7FE;
        width: 94%;
        height: 44px;
        line-height: 44px;
        padding-left: 20px;
        color: #2DA9FA;
    }
</style>