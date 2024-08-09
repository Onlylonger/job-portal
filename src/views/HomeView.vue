<script setup>
import OfficialLayout from '@/components/OfficialLayout.vue'
import cn from 'classnames'
import Img01 from '../assets/img01.png'
import Img02 from '../assets/img02.png'
import Img03 from '../assets/img03.png'
import Img04 from '../assets/img04.png'

const list = [
  {
    img: Img01,
    width: 492,
    height: 233,
    title: '招聘职位管理',
    subList: [
      '一站式职位管理，招聘需求全面把控',
      '支持基于职位模板快速创建招聘职位',
      '支持职位复制，快速创建同类型职位',
      '支持招聘需求审批灵活配置'
    ]
  },
  {
    img: Img02,
    width: 262,
    height: 248,
    title: '简历管理',
    subList: [
      '灵活设置简历模板，统一简历形式、统一筛选标准',
      '支持邮件，短信，微信等多种沟通渠道，快速反馈信息',
      '方便的面试管理，支持个人面试、集体面试等面试方式',
      '自定义招聘流程，可配置offer信息和审批流程'
    ]
  },
  {
    img: Img03,
    width: 492,
    height: 311,
    title: '人才库管理',
    subList: [
      '支持公共人才库、私有人才库建设，可对储备人才进行分类管理',
      '实现全国各地区已入职求职者部分展示',
      '工作状态实时更新：入职/离职/待入职',
      '通过大数据技术对人才库进行挖掘，以满足当前招聘需求'
    ]
  },
  {
    img: Img04,
    width: 492,
    height: 350,
    title: '渠道管理',
    subList: [
      '支持近百家不同行业和地区的招聘网站，真正实现“云发布”',
      '社交网络的招聘信息发布',
      '平台对接企业端口与人力端口，实现企业发帖，人力接单的模式',
      '免除企业复杂的沟通、邀约、背调、初筛的过程'
    ]
  }
]
</script>

<template>
  <OfficialLayout>
    <!--  -->
    <section class="relative bg-gray-400" v-in="'duration-1000 animate-in slide-in-from-top-full'">
      <img src="../assets/banner.jpg" class="h-auto w-full" alt="banner" />
      <div
        class="absolute bottom-0 left-1/2 top-0 flex w-[1200px] -translate-x-1/2 justify-between"
      >
        <div class="mt-40">
          <h2 class="mb-6 text-[40px] text-[#333]">智能化招聘管理系统</h2>
          <p class="mb-2 text-[19px] text-[#333]">
            灵活自定义招聘流程， 打造通畅的人才企业互动模式
          </p>
          <p class="text-[19px] text-[#333]">优化企业招聘的各个环节，从细节出发，提升招聘效率</p>
        </div>
        <img
          src="../assets/banner-img.png"
          class="mt-20 max-h-[311px] max-w-[600px]"
          alt="banner-img"
          v-in="'duration-1000 animate-in slide-in-from-top-full'"
        />
      </div>
    </section>
    <!--  -->
    <section
      class="h-[452px]"
      :class="i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'"
      v-for="(item, i) in list"
      :key="i"
    >
      <div
        class="mx-auto flex h-full w-[1200px] items-center justify-between"
        :class="i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
      >
        <div class="flex w-[500px] flex-shrink-0 justify-center">
          <img
            :src="item.img"
            :style="`max-width: ${item.width}px; max-height: ${item.height}px`"
            alt="banner-img"
            v-in="
              cn([
                'duration-1000',
                'animate-in',
                i % 2 === 0 ? 'slide-in-from-left-full' : 'slide-in-from-right-full'
              ])
            "
          />
        </div>
        <div
          class="h-[233px] w-[550px]"
          v-in="
            cn([
              'duration-1000',
              'animate-in',
              i % 2 === 0 ? 'slide-in-from-right-full' : 'slide-in-from-left-full'
            ])
          "
        >
          <h2 class="pb-4 text-4xl text-[#333]">{{ item.title }}</h2>
          <p
            class="mt-4 flex items-center text-lg font-normal text-[#333]"
            v-for="(sub, subIndex) in item.subList"
            :key="subIndex"
          >
            <i class="mr-4 inline-block h-2 w-2 rotate-45 bg-[#f86900]"></i> {{ sub }}
          </p>
        </div>
      </div>
    </section>
  </OfficialLayout>
</template>
