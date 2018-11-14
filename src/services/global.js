/**
 * Created by jinpeng on 2018/6/29.
 */
import request from '../utils/request'

export async function getUser() {
  return request('/api/users', {
    method: 'get'
  })
}

export async function saveUser(payload) {
  return request('/api/save-user', {
    method: 'post',
    body: payload
  })
}

export async function delUser(payload) {
  return request('/api/del-user', {
    method: 'post',
    body: payload
  })
}
