import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/followDetails',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/followDetails/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/followDetails',
    method: 'put',
    data
  })
}

export function followDetailsAll(data) {
  return request({
    url: 'api/followDetailsAll/' + data,
    method: 'get'
  })
}


export function addOth(data) {
  return request({
    url: 'api/followOthers',
    method: 'post',
    data
  })
}

export function delOth(id) {
  return request({
    url: 'api/followOthers/' + id,
    method: 'delete'
  })
}

export function editOth(data) {
  return request({
    url: 'api/followOthers',
    method: 'put',
    data
  })
}

export function followOthersAll(data) {
  return request({
    url: 'api/followOthersAll/' + data,
    method: 'get'
  })
}
