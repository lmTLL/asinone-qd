import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/asinInfo',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/asinInfo/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/asinInfo',
    method: 'put',
    data
  })
}

export function sel(data) {
  return request({
    url: 'api/asinInfo/' + data,
    method: 'get'
  })
}
