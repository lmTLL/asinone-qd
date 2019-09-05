import request from '@/utils/request'

export function login(username, password, code, uuid) {
  return request({
    url: 'auth/login',
    method: 'post',
    data: {
      username,
      password,
      code,
      uuid
    }
  })
}

export function getInfo() {
  return request({
    url: 'auth/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'auth/vCode',
    method: 'get'
  })
}

export function getWeChatCodeImg() {
  return request({
    url: 'mpLogin',
    method: 'get'
  })
}
export function checkLogin(scene_str) {
  console.log(scene_str)
  return request({
    url: 'checkLogin/' + scene_str,
    method: 'get'
  })
}

export function testCode(data) {
  return request({
    url: 'api/invitationcodes/testCode',
    method: 'post',
    data
  })
}
