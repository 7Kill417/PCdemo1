<template>
    <div id="add">
        <header>
            <p>项目管理平台</p>
        </header>
        <div class="box">
                <el-row :gutter="20" style="margin: 0;padding:0">
                        <el-col :span="6" :offset="14"><div class="grid-content bg-purple">
                                <div class="d1">
                                        <p class="p1">平台登录</p>
                                        <div class="zh">
                                            <span>账号</span><input class="ip1" type="text" style="outline: none;" v-model="name"
                                                placeholder="请输入账号">
                                        </div>
                                        <div style="height: 20px">
                                            <p class="ts" v-show="no1==1">请输入正确的账号</p>
                                        </div>
                                        <div class="psd">
                                            <span>账号</span><input class="ip1" type="password" style="outline: none;" v-model="pwd"
                                                placeholder="请输入密码">
                                        </div>
                                        <div style="height: 20px">
                                            <p class="ts" v-show="no2==1">请输入正确的密码</p>
                                        </div>
                                        <div class="yzm">
                                            <span>验证码</span><input class="ip1" id="ip1" type="text" style="outline: none;" v-model="value"
                                                placeholder="请输入验证码">
                                            <div class="suyam">
                                                <strong @click="qh()" onbeforecopy='return false'  style="user-select: none;"  >{{yzm}}</strong>
                                            </div>
                                        </div>
                                        <div style="height: 20px">
                                            <p class="ts" v-show="no3==1" max-length="4">请输入正确的验证码</p>
                                        </div>
                                        <div class="dl">
                                            <el-button type="primary" @click="login">登录</el-button>
                                        </div>
                        
                                    </div>

                        </div></el-col>          
                    </el-row>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                no1: 0,
                no2: 0,
                no3: 0,
                userlist: [],
                user: '',
                name: '',
                pwd: '',
                error: '',
                yzm: '1234',
                value: ''
            }
        },
        created() {
            this.qh();

        },
        methods: {
            login() {
                let than = this
                this.$axios({
                    url: 'http://139.9.169.87:8081/examsystem/login?username='+than.name+'&password='+than.pwd,
                    method: "post",
                    params: {

                    }
                }).then(res => {
                    console.log(res)
                    if(res.data.success){
                        sessionStorage.setItem("token",res.data.data.token)
                        than.$router.push("/app");
                    }
                
                  
                    // than.userlist = res.data.User;
                    // console.log(than.userlist)
                    // for (let i = 0; i < than.userlist.length; i++) {
                    //     if (than.name == than.userlist[i].name) {
                    //         if (than.pwd == than.userlist[i].pwd) {
                    //             if (than.value == than.yzm) {
                    //                 let flag = true;
                    //                 this.$store.commit('token', flag);
                    //                 this.$router.push("/app");
                    //                 console.log("登录成功");
                    //                 than.no1 = 0;
                    //                 than.no2 = 0;
                    //                 than.no3 = 0;
                    //                 break;
                    //             } else {
                    //                 than.no1 = 0;
                    //                 than.no2 = 0;
                    //                 than.no3 = 1;
                    //             }

                    //         } else {
                    //             than.no1 = 0;
                    //             than.no3 = 0;
                    //             than.no2 = 1;

                    //         }
                    //     } else {
                    //         than.no1 = 1;
                    //         than.no2 = 0;
                    //         than.no3 = 0;
                    //         console.log(than.userlist[i].name)
                    //         console.log(than.name)
                    //         console.log(than.name == than.userlist[i].name)
                    //     }
                    // }

                })
            },
            qh() {
                var nums = new Array("q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "A", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
                var nums1 = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
                var nums2 = new Array("1", "2", "3", "4", "5", "6", "7");
                var str = "";
                var n1 = "";
                var n2;
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 6; j++) {
                        var k = Math.floor(Math.random() * 100) % 16;
                        n1 = n1 + nums1[k];
                    }
                    var o = Math.floor(Math.random() * 100) % 8;
                    n2 = nums2[o];
                    var p = Math.floor(Math.random() * 1000) % 62;
                    str += nums[p]
                }
                this.yzm = str
                console.log(this.yzm)
            }
        },
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    header {
        width: 100%;
        background-color: #2DA9FA;
        color: white;
        font-size: 30px;
        height: 85px;
        line-height: 85px;
    }

    header>p {
        margin-left: 50px;
    }

    .box {
        margin-top: 100px;
        height: 500px;
        background-color: #EEF7FE;
        background-image: url('/images/u70.png');
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: 115px 80px;
    }

    .d1 {
        width: 345px;
        height: 380px;
        background: white;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #E0E7ED;
        float: right;
       
        margin-top: 60px;
     
    }

    .p1 {
        margin-top: 20px;
        margin-left: 20px;
        color: #2DA9FA;
        font-size: 20px;
    }

    .zh {
        margin-top: 20px;
        margin-left: 25px;
        margin-right: 30px;
        border-bottom: 1px solid #E4E4E4;
        padding-bottom: 15px;
    }

    .psd {
        margin-top: 20px;
        margin-left: 25px;
        margin-right: 30px;
        border-bottom: 1px solid #E4E4E4;
        padding-bottom: 15px;
    }

    .yzm {
        margin-top: 20px;
        margin-left: 25px;
        margin-right: 30px;
        border-bottom: 1px solid #E4E4E4;
        padding-bottom: 15px;
        position: relative;
    }

    .ip1 {
        border: none;
        margin-left: 30px;
    }

    #ip1 {
        margin-left: 15px;
    }

    .ts {
        color: red;
        font-size: 10px;
        margin-left: 25px;
    }

    .dl {
        text-align: center;
        margin-top: 20px;
    }

    .el-button--primary {
        color: #FFF;
        background-color: #409EFF;
        border-color: #409EFF;
        width: 290px;
    }

    .suyam {
        background: url(/images/yzm.png);
        width: 75px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        position: absolute;
        right: 0px;
        top: 0px;
        cursor: pointer;
    }
</style>