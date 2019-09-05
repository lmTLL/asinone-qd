import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/saleOrder',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/saleOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/saleOrder',
    method: 'put',
    data
  })
}

export function sign(ids, signdate) {
  return request({
    url: 'api/saleOrder/sign/' + signdate,
    method: 'put',
    data: ids
  })
}

export function signHandle(ids) {
  return request({
    url: 'api/saleOrder/signHandle',
    method: 'put',
    data: ids
  })
}

export function back(ids) {
  return request({
    url: 'api/saleOrder/back',
    method: 'put',
    data: ids
  })
}

export function cancel(ids, remark) {
  return request({
    url: 'api/saleOrder/cancel/' + remark,
    method: 'put',
    data: ids
  })
}

export function agree(ids) {
  return request({
    url: 'api/saleOrder/agree',
    method: 'put',
    data: ids
  })
}

export function disagree(ids, remark) {
  return request({
    url: 'api/saleOrder/disagree/' + remark,
    method: 'put',
    data: ids
  })
}

export function dissign(ids, remark) {
  return request({
    url: 'api/saleOrder/dissign/' + remark,
    method: 'put',
    data: ids
  })
}

export function upload(data) {
  return request({
    url: 'api/saleOrder/upload',
    method: 'post',
    data
  })
}

export function changeChannel(ids, channelId) {
  return request({
    url: 'api/saleOrder/changeChannel/' + channelId,
    method: 'put',
    data: ids
  })
}

export function testGet(user) {
  return request({
    url: 'http://localhost/test',
    method: 'post',
    data: user
  })
}

export function getSalePaymentCode() {
  return request({
    url: 'api/saleOrder/getSalePaymentCode',
    method: 'get'
  })
}

export function getOpen() {
  return request({
    url: 'https://payment.asinone.vip/Refresh',
    method: 'get'
  })
}

export function addWaitPayment(data) {
  return request({
    url: 'api/waitPayment',
    method: 'post',
    data
  })
}

export function getWaitPayment(data) {
  return request({
    url: 'api/waitPayment/' + data,
    method: 'get'
  })
}

export function updateWaitPayment(data) {
  return request({
    url: 'api/waitPayment/callbackEl/' + data,
    method: 'get'
  })
}

export function playFollow(ids) {
  return request({
    url: 'api/saleOrder/playFollow',
    method: 'post',
    data: ids
  })
}
