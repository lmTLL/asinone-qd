import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/prizesNum',
    method: 'post',
    async: false,
    data
  })
}

export function del(id) {
  return request({
    url: 'api/prizesNum/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/prizesNum',
    method: 'put',
    data
  })
}
