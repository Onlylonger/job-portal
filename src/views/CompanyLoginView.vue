<script setup>
import { login } from '@/api'
import OfficialLayout from '@/components/OfficialLayout.vue'
import { setToken } from '@/utils'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'

const router = useRouter()

const loginFormRef = ref()
const loading = ref(false)
const loginForm = reactive({
  tel: 'admin',
  password: 'admin123'
})

const rules = reactive({
  tel: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true
      try {
        const data = await login({
          username: loginForm.tel,
          password: loginForm.password
        })
        setToken(data.token)
        router.push({
          name: 'company-dashboard'
        })
      } finally {
        loading.value = false
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <OfficialLayout>
    <div class="h-[700px] bg-gray-100 pt-20">
      <section
        class="mx-auto flex h-[550px] w-[1200px] items-center justify-center bg-white shadow-slate-900"
      >
        <div class="w-1/2 p-14">
          <el-form
            ref="loginFormRef"
            :hide-required-asterisk="true"
            :model="loginForm"
            label-position="left"
            :rules="rules"
            label-width="auto"
            class="w-full"
            size="large"
            status-icon
          >
            <el-form-item label="手机号码" prop="tel">
              <el-input v-model="loginForm.tel" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
                @keydown.enter="submitForm(loginFormRef)"
              />
              <el-button class="absolute right-0 top-full mt-3" type="warning" link>
                忘记密码
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button
                class="mt-14 w-full"
                :loading="loading"
                type="primary"
                @click="submitForm(loginFormRef)"
              >
                立即登录
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button class="w-full" @click="submitForm(loginFormRef)">
                没有账号？立即注册
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="w-1/2">
          <img src="../assets/login-bg3.jpg" alt="bg" class="h-full w-full" />
        </div>
      </section>
    </div>
  </OfficialLayout>
</template>
