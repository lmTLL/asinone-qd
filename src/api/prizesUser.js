import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/prizesUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/prizesUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/prizesUser',
    method: 'put',
    data
  })
}
