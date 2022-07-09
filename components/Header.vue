<script setup lang="ts">
const url = (value: string) => {
    // 跳转网页
    window.open(value)
}
const email = () => {
    // 发送邮件
    window.open('mailto:seho.zaq@gmail.com');
}
</script>
<template>
    <div class="sword-header" flex justify="between" align="items-center">
        <!-- logo -->
        <img src="/images/logo.svg" alt="">
        <div class="tab" flex items="center" select="none" m="r-5">
            <div class="tab-content" flex items="center">
                <div class="tab-content-item" hover="opacity-70" flex items="center" cursor="pointer" @click="url('https://github.com/swordjs/sword-framework')">
                    sword.js
                    <div class="i-tabler-flame" color="red" font="bold"></div>
                </div>
                <div class="tab-content-item" hover="opacity-70" m="l-3" cursor="pointer" @click="url('https://github.com/swordjs/app')">
                    sword.app
                </div>
                <div class="tab-content-item" hover="opacity-70" m="l-3" cursor="pointer" @click="email">
                    concat-us
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>