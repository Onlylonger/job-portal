import { getToken, removeToken, jumpLogin } from '@/utils'
import { ElMessage } from 'element-plus'

function getCompositeUrl(path) {
  return `http://123.57.205.111:8095/${path}`
}

function getOptions(method = 'get', data = {}) {
  const common = {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getToken()}`
    }
  }

  if (['get', 'delete', 'put'].includes(method)) {
    return {
      ...common
    }
  } else if (method === 'post') {
    return {
      ...common,
      body: JSON.stringify(data)
    }
  }
}

async function wrapFetch(...reset) {
  return fetch(...reset)
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        if (data.code === 200) {
          return data
        } else {
          if (data.code === 401) {
            removeToken()
            jumpLogin()
          }
          return Promise.reject(new Error(data.msg))
        }
      }
    })
    .catch((err) => {
      ElMessage.error(err.message)
      return Promise.reject(err)
    })
}

export function post(path, data) {
  return wrapFetch(getCompositeUrl(path), getOptions('post', data))
}

export function del(path, data) {
  return wrapFetch(getCompositeUrl(path), getOptions('delete', data))
}

export function put(path, data) {
  return wrapFetch(getCompositeUrl(path), getOptions('put', data))
}

export function get(path, data = {}) {
  const url = new URL(getCompositeUrl(path))
  Object.keys(data).forEach((key) => {
    url.searchParams.append(key, data[key])
  })
  return wrapFetch(url, getOptions('get'))
}
