import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/miner_list',
    method: 'post',
    data
  })
}
