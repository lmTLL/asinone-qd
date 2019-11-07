import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/fxSaleOrder',
    method: 'post',
    data
  })
}

export function payment(data) {
  return request({
    url: 'api/fxSaleOrder/payment',
    method: 'post',
    data
  })
}

export function sign(data) {
  return request({
    url: 'api/fxSaleOrder/sign',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/fxSaleOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/fxSaleOrder',
    method: 'put',
    data
  })
}
