<script setup lang="ts">
const url = (value: string) => {
    // 跳转网页
    window.open(value)
}
</script>
<template>
    <div class="sword-index">
        <div class="sword-index-show" flex items="center" m="auto t-5">
            <!-- left -->
            <div class="sword-index-show-left">
                <div class="sword-index-show-left-title">
                    <img src="/images/sword.dev.png" alt="">
                </div>
                <div class="sword-index-show-left-content">
                    swordjs是一个开源团队, 善于使用多种语言/工具去解决开发中的问题, 比如Nodejs & Serverless / 状态管理 / 开发服务器 & 编译器,
                    我现在的大部分工作都围绕着[sword.js]这款框架的开发, 当然还有像[剑指题解app]这样的作品, 欢迎关注👏
                </div>
                <!-- about me -->
                <div class="sword-index-show-left-me" flex @click="url('https://github.com/1018715564')">
                    <!-- 头像 -->
                    <div class="sword-index-show-left-me-avatar">
                        <img src="/images/avatar.png" alt="">
                    </div>
                    <!-- 内容 -->
                    <div class="sword-index-show-left-me-content">
                        <div class="nickname">seho</div>
                        <div class="desc">sword.js作者</div>
                    </div>
                </div>
                <!-- button -->
                <client-only>
                    <div class="github" flex justify="center" cursor="pointer" align="center" items="center"
                        @click="url('https://github.com/swordjs')">
                        GITHUB
                    </div>
                </client-only>
            </div>
            <div class="sword-index-show-right">
                <img src="/images/people.png" alt="">
            </div>
        </div>
    </div>
</template>
<style>
.sword-index-show {
    width: 83.3854vw;
    height: 42.3438vw;
    background: url(/images/bg.jpg) no-repeat center / 100%;
    overflow: hidden;
}


.sword-index-show-left-title img {
    width: 21.875vw;
    height: 3.75vw;
    margin-left: 14.0625vw;

}

.sword-index-show-left-content {
    font-family: 'Hannotate SC';
    width: 27.6563vw;
    margin-left: 12.7083vw;
    letter-spacing: 0.11em;
    line-height: 33px;
    font-size: 0.7813vw;
    font-weight: 400;
    color: black;
    margin-top: 0.9229vw;
}

.sword-index-show-left-me {
    margin-left: 12.7083vw;
    margin-top: 1.6813vw;
}

.sword-index-show-left-me-avatar img {
    width: 2.7604vw;
    height: 2.7604vw;
}

.sword-index-show-left-me-content {
    margin-left: 0.4167vw;
}

.sword-index-show-left-me-content .nickname {
    font-family: 'Hiragino Kaku Gothic StdN';
    font-size: 0.6771vw;
    font-weight: 800;
    margin-top: 0.2604vw;
}

.sword-index-show-left-me-content .desc {
    font-family: 'Hannotate SC';
    font-size: 0.6771vw;
}

.github {
    font-family: 'Hannotate SC';
    width: 7.7083vw;
    height: 2.8646vw;
    margin-left: 12.7083vw;
    margin-top: 1.6521vw;
    font-size: 1.0417vw;
    background: #4E46B4;
    border-radius: 9999px;
    color: #fff;

}

.sword-index-show-right img {
    width: 25.8266vw;
    height: 26.8229vw;
    margin-left: 5.6771vw;
}
</style>