/**
 * Created by jinpeng on 2018/6/29.
 */
import request from '../utils/request'

export async function getUser() {
  return request('/api/users', {
    method: 'get'
  })
}
