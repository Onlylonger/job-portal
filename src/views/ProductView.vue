<script setup>
import OfficialLayout from '@/components/OfficialLayout.vue'
import BannerBlock from '@/components/BannerBlock.vue'

import Img01 from '../assets/img01.png'
import Img02 from '../assets/img02.png'
import Img03 from '../assets/img03.png'
import Img04 from '../assets/img04.png'
import Img05 from '../assets/img05.png'
import Img06 from '../assets/img06.png'
import Img07 from '../assets/img07.png'

const list = [
  {
    img: Img01,
    width: 492,
    height: 233,
    title: '组织架构',
    subList: [
      '招聘号在进行组织结构设计时，综合考虑了工作专',
      '业化、部门化、命令链、控制跨度、集权与分权、',
      '正规化等要素'
    ],
    tipsList: [
      '确保组织机构的稳定性过渡或稳定性存在',
      '分工清晰，有利考核与协调',
      '部门、岗位的设置要与培养人才、提供良好发展空间相结合'
    ]
  },
  {
    img: Img02,
    width: 262,
    height: 248,
    title: '岗位管理',
    subList: [
      '通过岗位分析设计、描述、培训、规划、考评、激',
      '励与约束等过程控制，实现因岗择人，在人与岗的',
      '互动中实现人与岗、人与人之间的最佳配合，以发',
      '挥企业中人力资源的作用，谋求劳动效率的提高'
    ]
  },
  {
    img: Img03,
    width: 492,
    height: 311,
    title: '员工管理',
    subList: [
      '人力接单根据企业筛选求职者以后，上传的求职者',
      '简历到企业帖子下方，方便企业在二面后操作求职',
      '者入职/离职/结算，灵活操作企业更易使用'
    ]
  },
  {
    img: Img04,
    width: 492,
    height: 350,
    title: '招聘设置',
    subList: [
      '企业登录自己的独立后台，实现发帖操作',
      '发帖简历中有相对应的模板，',
      '根据企业实际要求、实际用工人数去实现自由发布'
    ]
  },
  {
    img: Img05,
    width: 492,
    height: 350,
    title: '简历管理',
    subList: [
      '实现不用企业去单独筛选海量简历',
      '实现企业免除邀约过程',
      '实现企业免除对求职者的背调过程'
    ]
  },
  {
    img: Img06,
    width: 492,
    height: 350,
    title: '录用审批',
    subList: [
      '全面管理候选人的offer以及到岗流程',
      '线上Offer 录用状态记录和追踪',
      '候选人录用过程线上管理，系统覆盖简历入库到人',
      '才入职全流程',
      '企业可直接在帖子下方的求职者简历中，根据实际',
      '面试情况，点击入职/离职'
    ]
  },
  {
    img: Img07,
    width: 492,
    height: 350,
    title: '人才库',
    subList: [
      '根据人力入驻平台后的资源去进行整合，与企业',
      '的用工要求进行匹配，盘活企业优质资源，降低',
      '外部招聘渠道招聘成本'
    ]
  }
]
</script>

<template>
  <OfficialLayout>
    <BannerBlock>
      <div class="mt-28 pl-6">
        <h2 class="mb-6 text-[40px] text-white">让招聘成为企业增长驱动力</h2>
        <p class="mb-2 text-[19px] text-white">一站式招聘流程管理，构建畅通的人企互动模式</p>
        <p class="text-[19px] text-white">定制化招聘解决方案，提升企业人才获取竞争力</p>
      </div>
    </BannerBlock>
    <section :class="i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'" v-for="(item, i) in list" :key="i">
      <NormalBlock :item="item" :reverse="i % 2 !== 0" />
    </section>
  </OfficialLayout>
</template>
