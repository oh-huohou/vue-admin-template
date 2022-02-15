import request from '@/utils/request6808'

export function getBlob(data) {
  return request({
    data,
    url: '/blob',
    method: 'get',
    params: {
      'blob': data
    }
  })
}
