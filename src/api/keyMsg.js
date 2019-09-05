import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/keyMsg',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/keyMsg/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/keyMsg',
    method: 'put',
    data
  })
}
