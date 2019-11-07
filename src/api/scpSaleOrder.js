import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/scpSaleOrder',
    method: 'post',
    data
  })
}

export function payment(data) {
  return request({
    url: 'api/scpSaleOrder/payment',
    method: 'post',
    data
  })
}

export function uploadChatImg(data) {
  return request({
    url: 'api/scpSaleOrder/uploadChatImg',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/scpSaleOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/scpSaleOrder',
    method: 'put',
    data
  })
}
