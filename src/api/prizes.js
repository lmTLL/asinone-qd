import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/prizes',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/prizes/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/prizes',
    method: 'put',
    data
  })
}
