import { post, get, put, del } from './helper'

export const login = (params) => post('login', params)

export const getUserInfo = () => get('getInfo')

export const updateUserInfo = (params) => put('system/accountInfo', params)

export const captchaImage = (params) => get('captchaImage', params)

export const getOfficersList = (params) => get('system/talent/list', params)

export const addJob = (params) => post('job/publish', params)

export const getJobList = (params) => get('job/publish/list', params)

export const delJob = (ids) => del(`job/publish/${ids}`)
