<script setup>
import AdminLayout from '@/components/AdminLayout.vue'
import { genderMap, eductionMap, areaDataMap, workExpMap } from '@/components/OfferFormDialog'
import { ElMessageBox, ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'
import { getJobList, delJob } from '@/api'

const activeName = ref()
const currentJob = ref({})
const jobTotal = ref()
const currentPage = ref(1)
const visible = ref(false)

const faqList = [
  {
    title: '电话客服或微信客服不回复？',
    content: `您好，电话客服或微信客服的工作时间周一到周五，早9：00到12:00 下午1：30到6:30为工作时间`
  },
  {
    title: '手机无法获取验证码？',
    content: `请确保您的手机处于非欠费、可通信状态；\n普通用户，当日可获取短信验证码条数上限为：5条/日；\n请确保您的手机号码合法、真实、有效；`
  },
  {
    title: '如何修改密码？',
    content: `将鼠标停放在最顶部导航栏的最右侧，弹出下拉菜单中，有“修改密码”的快捷入口，点击即在弹框表单中填写数据，确认后提交修改。`
  }
]

const handleDel = async () => {
  await ElMessageBox.confirm('确定删除当前页的职位吗?', {
    cancelButtonText: '取消',
    confirmButtonText: '确认删除'
  })
  await delJob(currentJob.value.id)
  ElMessage.success('删除成功')
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1
  }
  fetchData()
}

const fetchData = async () => {
  const data = await getJobList({
    pageNum: currentPage.value,
    pageSize: 1
  })
  jobTotal.value = data.total
  currentJob.value = data.rows[0] ?? {}
}

onMounted(async () => {
  fetchData()
})

const handleCurrentChange = (page) => {
  currentPage.value = page
  fetchData()
}

// const welfareStr = computed(() => (currentJob.value.welfare || '').split(',').map(v => welfareMap[v]).join)
</script>

<template>
  <AdminLayout>
    <el-card class="w-full p-2">
      <template #header>
        <div class="flex justify-between">
          <span>我的职位: {{ jobTotal }}</span>
          <div>
            <el-button type="danger" @click="handleDel">- 删除职位</el-button>
            <el-button type="primary" @click="visible = true">+ 发布职位</el-button>
          </div>
        </div>
      </template>
      <div class="w-full">
        <div class="text-[12px]">
          <p>温馨提示：</p>
          <p>线上HR推荐人才到企业面试，企业需及时更改求职者状态。</p>
        </div>
        <el-divider />
        <div class="flex justify-between text-sm text-[#606266]">
          <ul class="w-1/2 flex-shrink-0 list-disc px-4">
            <li><b>招聘职位:</b> {{ currentJob.jobName }}</li>
            <li><b>性别:</b> {{ genderMap[currentJob.gender] }}</li>
            <li><b>年龄:</b> {{ currentJob.ageMin }} ~ {{ currentJob.ageMax }}</li>
            <li><b>工作年限:</b> {{ workExpMap[currentJob.workYears] }}</li>
            <li><b>学历要求:</b> {{ eductionMap[currentJob.education] }}</li>
            <li><b>招聘人数:</b> {{ currentJob.quantity }}</li>
            <li>
              <b>工作地址:</b>
              {{ areaDataMap[currentJob.workAddressProvince] || currentJob.workAddressProvince }}-{{
                areaDataMap[currentJob.workAddressCity] || currentJob.workAddressCity
              }}-{{ areaDataMap[currentJob.workAddressZone] || currentJob.workAddressZone }}-{{
                currentJob.workAddressDetail
              }}
            </li>
            <li><b>佣金/</b>人: {{ currentJob.kickback }}</li>
            <li><b>薪资待遇:</b> {{ currentJob.salaryMin }} ~ {{ currentJob.salaryMax }}</li>
            <li><b>面试时间:</b> {{ currentJob.interviewTime }}</li>
            <li><b>面试电话:</b> {{ currentJob.interviewPhone }}</li>
            <li><b>面试联系人:</b> {{ currentJob.interviewContacts }}</li>
            <li><b>福利待遇:</b> {{ currentJob.welfare }}</li>
          </ul>
          <div>
            <p><b>职位描述:</b> {{ currentJob.desc }}</p>
            <p class="mt-2"><b>其他要求:</b> {{ currentJob.otherRequirements }}</p>
            <div class="mt-2 flex gap-2">
              <el-button type="primary">刷新置顶帖</el-button>
              <el-button type="primary">佣金结算</el-button>
              <el-button type="primary">已被xx个HR收藏</el-button>
            </div>
          </div>
        </div>
        <el-pagination
          class="mt-5 flex justify-end"
          :current-page="currentPage"
          :page-size="1"
          layout="prev, pager, next, jumper"
          :total="jobTotal"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>

    <el-card class="mt-2 w-full p-2">
      <template #header>
        <span>您共有xx条推荐信息</span>
      </template>
      <div class="w-full">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </el-card>
    <template #side>
      <p>常见问题</p>
      <div class="bg-white px-2">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item, k) in faqList" :key="k" :name="k">
            <template #title>
              <div class="text-left !leading-5">
                {{ item.title }}
              </div>
            </template>
            <div class="whitespace-break-spaces">{{ item.content }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </template>
  </AdminLayout>
  <OfferFormDialog :visible="visible" @change-visible="(v) => (visible = v)" />
</template>
