<template>
  <div class="box">
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">剑指题解</h1>
                <p class="mt-4 text-lg text-gray-300">
                  互联网人题解神器，神器在手，offer我有 随手刷题 |
                  无广告绿色免费 | 个性推荐 | 每日自动推送 | 多维度丰富领域知识
                </p>
                <a
                  href="https://github.com/swordCodePractice/InternetQuestionBank"
                  class="bg-gray-500 mt-12 text-white active:bg-blueGray-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i class="fas fa-heart"></i> github
                </a>
                <a
                  href="https://gitee.com/yinzhuoei/InternetQuestionBank"
                  class="bg-gray-500 mt-12 text-white active:bg-blueGray-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i class="fas fa-heart"></i> Gitee码云
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </div>
                  <h6 class="text-xl font-semibold">免费开源</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    我们将开源有关剑指题解的一切，包括合作的所有题库的内容将开发成API
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h6 class="text-xl font-semibold">多维度聚合题库</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    面向互联网人群极广，产品|编程|UI|软技能|算法，助你在职场上披荆斩棘
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-xl font-semibold">丰富的周边</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    服务号推送，定时爬虫插件，自助认证出题官，QQ群机器人，互联网社区
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <img
                  src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c7e81452-9d28-4486-bedc-5dbf7c8386a5/f833054d-ef71-4a3e-b98b-699554b9ee17.png"
                  alt=""
                />
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                一个有开源精神的聚合题库团队
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                项目的起源是一个 github 仓库，名为前端知识每日
                3+1，正是这个优秀的题库项目才有了我们团队开发聚合题库的想法。在我们国内程序员圈子，大多数小伙伴为了更好的技术发展和
                offer，都通过训练题来提高自己的眼界，其中不乏包括算法/业务/软技能的题目，但是因为我们的环境和侧重点不一样，所以我们接触的项目和题目都不一样，而市面上很少有一个项目能做到，涵盖不同圈子的聚合题库。
                《剑指题解》项目就是一个优秀的互联网行业聚合题库神器。
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                class="font-bold text-gray-800 mt-8"
                >快去Github中支持我们吧~</a
              >
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-600"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-gray-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">快来加入我们</h4>
                  <p class="text-md font-light mt-2 text-white">
                    团队需要有跨平台云开发经验的前端工程师加入，我们需要：大前端开发，运营，UI设计师，产品助理等云岗位，需要我们线上协作，打造出更好的题解神器为广大互联网人服务。
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c7e81452-9d28-4486-bedc-5dbf7c8386a5/30639890-a665-44c5-9732-d201619d9496.png"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 class="text-3xl font-semibold">API</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  我们采用了Unicloud云函数作为我们的服务的基础接口；使用了Python和Node.js作为爬取/拉取等定时任务；如果你想要...
                  <a
                    href="https://www.yuque.com/docs/share/85a9f079-8b89-47c1-b3fd-c89c7600e532?# 《API云函数文档》"
                    class="text-gray-500 background-transparent font-bold uppercase py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    了解更多
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">感谢</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                我们万分感谢，在剑指题解中提供技术帮助/赞助的平台，但这并不是所有的
              </p>
            </div>
          </div>
          <div class="flex justify-center flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c7e81452-9d28-4486-bedc-5dbf7c8386a5/c502ced2-6a3d-43e7-ab79-2d20d2c3341c.png"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Unicloud&Uniapp</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Dcloud
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c7e81452-9d28-4486-bedc-5dbf7c8386a5/d99738b5-c2b7-4100-a98b-931d61b50f2e.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">语雀知识文档</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    yuque
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c7e81452-9d28-4486-bedc-5dbf7c8386a5/cd621e6a-ee6d-4ff9-9799-932fe9f839a9.png"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">慕客原型设计</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Mockplus
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-2 lg:pt-12 lg:pb-6">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white"></h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                你可以通过以下渠道快速和我们取得联系
              </p>
              <img class="w-20 m-auto" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c7e81452-9d28-4486-bedc-5dbf7c8386a5/8b451114-cd77-4699-8104-2dd91b485fca.png" alt="">
            </div>
          </div>
        </div>
        <div class="text-white text-center">友情链接: <a href="https://www.yinzhuoei.com">因卓诶博客</a></div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Index",
  setup() {
    return {};
  },
});
</script>
