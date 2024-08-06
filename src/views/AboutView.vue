<script setup>
import OfficialLayout from '@/components/OfficialLayout.vue'
import BannerBlock from '@/components/BannerBlock.vue'
import CircleIcon from '@/components/CircleIcon.vue'
import { Position, Flag, Message, Platform, Medal, Timer } from '@element-plus/icons-vue'
</script>

<template>
  <OfficialLayout>
    <BannerBlock>
      <div class="mt-28 pl-6">
        <h2 class="mb-6 text-[40px] text-white">关于我们</h2>
        <p class="mb-2 text-[19px] text-white">
          一站式提供所有网站及线上线下资源，提高招聘效率。平台将联合用人单位，集结职业HR，针对招人难，留人难的企业猎聘其所需要的人才，真正实现我负责速聘，你坐等面试。整合万千渠道为企业打造高素质，高水准的人才供企业使用
        </p>
      </div>
    </BannerBlock>
    <div class="bg-[url('../assets/bg01.jpg')] bg-cover bg-no-repeat py-24 text-center text-[#333]">
      <div class="text-[30px]">公司简介</div>
      <p
        class="mt-10 px-7 text-left indent-8 text-[16px] leading-8 tracking-wide"
        v-in="'duration-1000 animate-in slide-in-from-bottom-full'"
      >
        智能悬赏招聘平台悬赏招聘网站是跟各个行业各个领域的HR合作，企业只需要在后台发布悬赏招聘帖子，并且设置赏金，我们合作的HR会把手上的闲置的求职者资源源源不断的推荐到企业去面试，企业不需要开通其他平台端口，也不需要请人事专员进行招聘，只需要发布一个悬赏招聘帖子，然后坐等人才面试就可以了，面试不成功，或者面试成功干了几天离职的均不扣币，HR推荐的求职者入职满30天之后才扣悬赏币，大大降低了企业的招聘成本。
      </p>
    </div>
    <div class="bg-gray-50">
      <div class="mx-auto max-w-[1200px] py-24">
        <div class="text-center text-[30px]">企业文化</div>
        <div
          class="mt-12 flex gap-14 px-20"
          v-in="'duration-1000 animate-in slide-in-from-bottom-full'"
        >
          <div class="flex flex-1 flex-col gap-6">
            <CircleIcon :icon="Position" title="企业愿景" subTitle="成为一流的招聘管理服务提供商" />
            <CircleIcon
              :icon="Message"
              title="企业精神"
              subTitle="责任、勤奋、专业、创新、激情、忠诚"
            />
            <CircleIcon
              :icon="Platform"
              title="企业定位"
              :subTitle="['招聘管理系统互联网服务的引导者', '招聘管理系统互联网服务的推广者']"
            />
          </div>
          <div class="flex flex-1 flex-col gap-6">
            <CircleIcon
              :icon="Medal"
              title="企业目标"
              subTitle="致力于为企业以更低成本建立互联网服务平台"
            />
            <CircleIcon :icon="Timer" title="企业使命" subTitle="一切为了招聘管理系统服务" />
            <CircleIcon
              :icon="Flag"
              title="企业价值观"
              :subTitle="['成就客户、诚信为本、承担责任', '团队合作、变革创新、共赢成长']"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center py-24"
      v-in="'duration-1000 animate-in slide-in-from-bottom-full'"
    >
      <img src="../assets/t2.png" alt="t2" class="m-w-[946px] h-auto" />
    </div>
  </OfficialLayout>
</template>
