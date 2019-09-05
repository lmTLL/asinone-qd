import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/navigation',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/navigation/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/navigation',
    method: 'put',
    data
  })
}
