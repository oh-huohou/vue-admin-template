import request from '@/utils/request'

export function getSaleMinerList(data) {
  return request({
    url: '/miner_list',
    method: 'post',
    data
  })
}

export function getSaleBomList(data) {
  return request({
    url: '/miner_bom_list',
    method: 'post',
    data
  })
}

