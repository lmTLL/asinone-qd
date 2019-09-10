import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/zwDealSite',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/zwDealSite/' + id,
    method: 'delete'
  })
}

export function zwDealSiteAll(site) {
  return request({
    url: 'api/zwDealSiteAll/' + site,
    method: 'get'
  })
}

export function edit(data) {
  return request({
    url: 'api/zwDealSite',
    method: 'put',
    data
  })
}
