<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { areaData } from './constants'
import { addJob } from '@/api'

import {
  getObAry,
  genderList,
  workExpList,
  eductionList,
  moneyList,
  welfareList
} from './constants'

const props = defineProps({
  visible: Boolean
})
const emit = defineEmits(['change-visible'])

const ruleFormRef = ref()
const loading = ref(false)
const ruleForm = reactive({
  ageMax: null,
  ageMin: null,
  desc: `一、薪资架构
二、工作时间
三、作息时间
四、任职要求
五、福利待遇
六、公司介绍`,
  education: null,
  gender: null,
  interviewContacts: '',
  interviewPhone: '',
  interviewTime: '',
  jobName: '',
  kickback: null,
  quantity: null,
  salaryMax: null,
  salaryMin: null,
  welfare: [],
  workAddressCity: '',
  workAddressDetail: '',
  workAddressProvince: '',
  workAddressZone: '',
  workYears: null
})

const rules = reactive({
  jobName: [{ required: true, message: '请输入职位名称', trigger: 'blur' }],
  gender: [{ required: true, message: '请选择性别', trigger: 'blur' }],
  ageMin: [{ required: true, message: '请输入最小年龄', trigger: 'blur' }],
  ageMax: [{ required: true, message: '请输入最大年龄', trigger: 'blur' }],
  quantity: [{ required: true, message: '请输入招聘人数', trigger: 'blur' }],
  kickback: [{ required: true, message: '请输入佣金', trigger: 'blur' }],
  workYears: [{ required: true, message: '请选择工作地址', trigger: 'blur' }],
  workAddressCity: [{ required: true, message: '请选择工作地址', trigger: 'change' }],
  workAddressDetail: [{ required: true, message: '请选择工作地址', trigger: 'change' }],
  workAddressProvince: [{ required: true, message: '请选择工作地址', trigger: 'change' }],
  workAddressZone: [{ required: true, message: '请选择工作地址', trigger: 'change' }],
  education: [{ required: true, message: '请选择学历要求', trigger: 'blur' }],
  salaryMin: [{ required: true, message: '请选择最小薪资待遇', trigger: 'blur' }],
  salaryMax: [{ required: true, message: '请选择最大薪资待遇', trigger: 'blur' }],
  interviewTime: [{ required: true, message: '请输入面试时间', trigger: 'blur' }],
  interviewPhone: [
    { required: true, message: '请输入面试电话', trigger: 'blur' },
    {
      validator(rule, value, cb) {
        if (/^\d{5,11}$/.test(value) === false) {
          cb(new Error('请输入正确手机号格式'))
        } else {
          cb()
        }
      },
      trigger: 'blur'
    }
  ],
  interviewContacts: [{ required: true, message: '请输入面试联系人', trigger: 'blur' }],
  welfare: [
    {
      type: 'array',
      required: true,
      message: '请选择福利待遇',
      trigger: 'change'
    }
  ],
  desc: [{ required: true, message: '请填写职位描述', trigger: 'blur' }]
})

const handleSubmit = async () => {
  if (!ruleFormRef.value) return
  console.log(ruleFormRef.value)
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        await addJob({
          ageMax: ruleForm.ageMax,
          ageMin: ruleForm.ageMin,
          desc: ruleForm.desc,
          education: ruleForm.education,
          gender: ruleForm.gender,
          interviewContacts: ruleForm.interviewContacts,
          interviewPhone: ruleForm.interviewPhone,
          interviewTime: ruleForm.interviewTime,
          jobName: ruleForm.jobName,
          kickback: ruleForm.kickback,
          quantity: ruleForm.quantity,
          salaryMax: ruleForm.salaryMax,
          salaryMin: ruleForm.salaryMin,
          welfare: ruleForm.welfare.join(','),
          workAddressCity: ruleForm.workAddressCity,
          workAddressDetail: ruleForm.workAddressDetail,
          workAddressProvince: ruleForm.workAddressProvince,
          workAddressZone: ruleForm.workAddressZone,
          workYears: ruleForm.workYears
        })
        emit('change-visible', false)
        ElMessage.success('发布成功')
      } catch (error) {
        //
      } finally {
        loading.value = false
      }
    } else {
      // console.log('error submit!', fields)
    }
  })
}

const provinceList = getObAry(areaData[86])

const cityList = computed(() => getObAry(areaData[ruleForm.workAddressProvince]))
const zoneList = computed(() => getObAry(areaData[ruleForm.workAddressCity]))

const handleProvince = () => {
  ruleForm.workAddressCity = ''
  ruleForm.workAddressZone = ''
}

const handleCity = () => {
  ruleForm.workAddressZone = ''
}

onMounted(() => {
  ruleForm.gender = genderList[0].value
  ruleForm.workAddressProvince = provinceList[0].value
  ruleForm.workAddressCity = cityList.value[0].value
  ruleForm.workAddressZone = zoneList.value[0].value
  ruleForm.education = eductionList[0].value
  ruleForm.salaryMin = moneyList[0].value
  ruleForm.salaryMax = moneyList[0].value
  ruleForm.ageMin = 18
  ruleForm.ageMax = 50
  ruleForm.workYears = workExpList[0].value
})
</script>

<template>
  <el-dialog
    :model-value="props.visible"
    @close="() => emit('change-visible', false)"
    title="职位录入"
    width="70%"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="w-full px-5"
      status-icon
    >
      <el-form-item label="职位名称" prop="jobName">
        <el-input v-model="ruleForm.jobName" placeholder="请填写" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender" placeholder="请选择性别">
          <el-option
            v-for="item in genderList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="最小年龄" prop="ageMin">
        <el-input-number v-model="ruleForm.ageMin" :min="18" :max="100" placeholder="请填写" />
      </el-form-item>
      <el-form-item label="最大年龄" prop="ageMax">
        <el-input-number v-model="ruleForm.ageMax" :min="18" :max="100" placeholder="请填写" />
      </el-form-item>
      <el-form-item label="招聘人数" prop="quantity">
        <el-input-number :min="1" v-model="ruleForm.quantity" placeholder="请填写" />
      </el-form-item>
      <el-form-item label="佣金/人" prop="kickback">
        <el-input-number :min="0" v-model="ruleForm.kickback" placeholder="请填写" />
      </el-form-item>
      <el-form-item label="省" prop="workAddressProvince">
        <el-select-v2
          v-model="ruleForm.workAddressProvince"
          placeholder="请选择省份"
          @change="handleProvince"
          :options="provinceList"
        />
      </el-form-item>
      <el-form-item v-if="ruleForm.workAddressProvince" label="市" prop="workAddressCity">
        <el-select-v2
          v-model="ruleForm.workAddressCity"
          placeholder="请选择市"
          @change="handleCity"
          :options="cityList"
        />
      </el-form-item>
      <el-form-item v-if="ruleForm.workAddressCity" label="区" prop="workAddressZone">
        <el-select-v2
          v-model="ruleForm.workAddressZone"
          placeholder="请选择区"
          :options="zoneList"
        />
      </el-form-item>
      <el-form-item v-if="ruleForm.workAddressZone" label="详细地址" prop="workAddressDetail">
        <el-input v-model="ruleForm.workAddressDetail" placeholder="请填写详细地址" />
      </el-form-item>
      <el-form-item label="工作经验" prop="workYears">
        <el-select v-model="ruleForm.workYears" placeholder="请选择工作经验">
          <el-option
            v-for="item in workExpList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="学历要求" prop="education">
        <el-select v-model="ruleForm.education" placeholder="学历要求">
          <el-option
            v-for="item in eductionList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最小薪资待遇" prop="salaryMin">
        <el-select v-model="ruleForm.salaryMin" placeholder="薪资待遇">
          <el-option
            v-for="item in moneyList"
            :value="item.value"
            :key="item.value"
            :label="item.label"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="最大薪资待遇" prop="salaryMax">
        <el-select v-model="ruleForm.salaryMax" placeholder="薪资待遇">
          <el-option
            v-for="item in moneyList"
            :value="item.value"
            :key="item.value"
            :label="item.label"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="职位描述" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" :rows="8" />
      </el-form-item>
      <el-form-item label="福利待遇" prop="welfare">
        <el-checkbox-group v-model="ruleForm.welfare">
          <el-checkbox
            v-for="item in welfareList"
            :value="item.value"
            :key="item.value"
            :label="item.label"
          />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="面试时间" prop="interviewTime">
        <el-input v-model="ruleForm.interviewTime" />
      </el-form-item>
      <el-form-item label="面试电话" prop="interviewPhone">
        <el-input v-model="ruleForm.interviewPhone" />
      </el-form-item>
      <el-form-item label="面试联系人" prop="interviewContacts">
        <el-input v-model="ruleForm.interviewContacts" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="() => emit('change-visible', false)">取消</el-button>
        <el-button type="primary" :loading="loading" @click="handleSubmit"> 确认提交 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
