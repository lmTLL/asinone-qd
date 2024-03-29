import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/zwSaleOrder',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/zwSaleOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/zwSaleOrder',
    method: 'put',
    data
  })
}

export function upload(data) {
  return request({
    url: 'api/zwSaleOrder/upload',
    method: 'post',
    data
  })
}

export function feedback(data) {
  return request({
    url: 'api/zwSaleOrder/feedback',
    method: 'post',
    data
  })
}

export function getMessage(msgKey) {
  return request({
    url: 'api/messageAll/' + msgKey,
    method: 'get'
  })
}

export function addMessage(data) {
  return request({
    url: 'api/message',
    method: 'post',
    data
  })
}

export function arrange(ids) {
  return request({
    url: 'api/zwSaleOrder/arrange',
    method: 'put',
    data: ids
  })
}

export function revoke(ids) {
  return request({
    url: 'api/zwSaleOrder/revoke',
    method: 'put',
    data: ids
  })
}

export function updateChannelRemark(data) {
  return request({
    url: 'api/zwSaleOrder/updateChannelRemark',
    method: 'post',
    data
  })
}

export function showAllZwEffect(id) {
  return request({
    url: 'api/zwPostingEffect/' + id,
    method: 'get'
  })
}

export function signPayment(ids) {
  return request({
    url: 'api/zwSaleOrder/signPayment',
    method: 'put',
    data: ids
  })
}
