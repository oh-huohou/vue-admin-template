import request from '@/utils/request6808'

export function getBlob(data) {
  return request({
    data,
    url: '/blob?blob=' + data,
    method: 'get'
  })
}
