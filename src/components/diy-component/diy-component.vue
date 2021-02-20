<template>
    <div>
        <div style="margin-top: 40px">实现自定义组件-diy-component by {{author}}</div>
        <i class="el-icon-user-solid diyComponent"></i>
        <!--写法1 触发方式：hover-->
        <el-popover
                placement="top-start"
                title="个人中心"
                :width="200"
                trigger="hover"
                content="关于我"
        >
            <template #reference>
                <el-button>关于我</el-button>
            </template>
        </el-popover>

        <i class="el-icon-user diyComponent"></i>
        <!--写法2 触发方式：click-->
        <el-popover
                placement="right"
                :width="400"
                trigger="click"
        >
            <template #reference>
                <el-button>关于我2</el-button>
            </template>
            <el-table :data="myInfo">
                <el-table-column width="50" property="nickName" label="姓名"></el-table-column>
                <el-table-column width="50" property="age" label="年龄"></el-table-column>
                <el-table-column width="130" property="phone" label="手机"></el-table-column>
                <el-table-column width="300" property="homeUrl" label="博客网址"></el-table-column>
                <el-table-column width="250" property="githubUrl" label="github网址"></el-table-column>
                <el-table-column width="250" property="gitlabUrl" label="gitlab网址"></el-table-column>
                <el-table-column width="250" property="giteeUrl" label="gitee网址"></el-table-column>
            </el-table>
        </el-popover>
    </div>
</template>

<script>
    export default {
        name: "diy-component",
        data() {
            return {
                title: 'hello diy-component -> this is my info',
                msg: '实现自定义组件',
                author: 'LC',
                myInfo: [{
                    nickName: 'LC',
                    age: 18,
                    phone: '158****1980',
                    homeUrl: 'http://www.oneplusone.vip/index.html',
                    githubUrl: 'https://github.com/ahviplc',
                    gitlabUrl: 'https://gitlab.com/ahviplc',
                    giteeUrl: 'https://gitee.com/ahviplc'
                }]
            }
        }
    }
</script>

<style scoped>
    .diyComponent {
        margin-top: 40px;
        margin-left: 10px;
    }
</style>
