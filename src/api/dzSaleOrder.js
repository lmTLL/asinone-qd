import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/dzSaleOrder',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/dzSaleOrder/' + id,
    method: 'delete'
  })
}

export function payment(data) {
  return request({
    url: 'api/dzSaleOrder/payment',
    method: 'post',
    data
  })
}

export function sign(data) {
  return request({
    url: 'api/dzSaleOrder/sign',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'api/dzSaleOrder',
    method: 'put',
    data
  })
}
