import request from '@/utils/request'

export function getSaleMinerList(data) {
  return request({
    url: '/miner_list',
    method: 'post',
    data
  })
}
