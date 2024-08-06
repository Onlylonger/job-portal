<script setup>
import { getOfficersList } from '@/api'
import AdminLayout from '@/components/AdminLayout.vue'
import { eductionMap, genderMap, workExpMap, areaDataMap } from '@/components/OfferFormDialog'
import { ref, onMounted } from 'vue'

const tableData = ref([])
const total = ref()

const pageNum = ref(5)
const pageSize = ref(100)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

onMounted(async () => {
  const res = await getOfficersList({})
  tableData.value =
    res.rows.map((v) => ({
      ...v,
      gender: genderMap[v.gender],
      workYears: workExpMap[v.workYears],
      education: eductionMap[v.education],
      location: `${areaDataMap[v.workAddressProvince] || v.workAddressProvince} - ${areaDataMap[v.workAddressCity] || v.workAddressCity} - ${areaDataMap[v.workAddressZone] || v.workAddressZone} - ${v.workAddressDetail || ''} `
    })) ?? []
  total.value = res.total
})
</script>

<template>
  <AdminLayout>
    <el-card class="w-full p-2">
      <template #header>
        <span>分享简历</span>
      </template>
      <div class="w-full">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="interviewTime" label="面试时间" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="jobName" label="职位" />
          <el-table-column prop="gender" label="性别" />
          <el-table-column prop="age" label="年龄" />
          <el-table-column prop="workYears" label="工作年限" />
          <el-table-column prop="education" label="学历" />
          <el-table-column prop="location" label="地区" />
          <el-table-column prop="kickback" label="悬赏佣金" />
          <el-table-column prop="xx" label="状态操作" />
        </el-table>
        <el-pagination
          class="mt-5 flex justify-end"
          v-model:current-page="pageNum"
          v-model:page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </AdminLayout>
</template>
