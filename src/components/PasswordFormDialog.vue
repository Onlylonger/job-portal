<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { updateUserInfo } from '@/api'

const props = defineProps({
  visible: Boolean
})
const emit = defineEmits(['change-visible'])

const ruleFormRef = ref()
const loading = ref(false)
const ruleForm = reactive({
  oldPassword: null,
  newPassword: null,
  confirmPassword: null
})

const rules = reactive({
  oldPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  newPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirmPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const handleSubmit = async () => {
  if (!ruleFormRef.value) return
  console.log(ruleFormRef.value)
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        await updateUserInfo({})
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

onMounted(() => {
  //
})
</script>

<template>
  <el-dialog
    :model-value="props.visible"
    @close="() => emit('change-visible', false)"
    title="密码修改"
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
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input
          v-model="ruleForm.oldPassword"
          placeholder="请填写"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input
          v-model="ruleForm.newPassword"
          placeholder="请填写"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item label="重复新密码" prop="confirmPassword">
        <el-input
          v-model="ruleForm.confirmPassword"
          placeholder="请填写"
          type="password"
          show-password
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="() => emit('change-visible', false)">取消</el-button>
        <el-button type="primary" v-loading="loading" @click="handleSubmit"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
