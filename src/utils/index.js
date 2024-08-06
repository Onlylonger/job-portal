import router from '@/router'

export function setToken(value) {
  sessionStorage.setItem('token', value)
}

export function getToken() {
  return sessionStorage.getItem('token')
}

export function removeToken() {
  return sessionStorage.removeItem('token')
}

export function isCompanyRoute(path) {
  if (path.startsWith('/company/')) {
    return true
  } else {
    return false
  }
}

export function jumpLogin() {
  const path = router.currentRoute.value.path
  if (isCompanyRoute(path)) {
    router.push({
      name: 'company-login'
    })
  } else {
    router.push({
      name: 'hr-login'
    })
  }
}
