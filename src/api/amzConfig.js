import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/amzConfig',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/amzConfig/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/amzConfig',
    method: 'put',
    data
  })
}
