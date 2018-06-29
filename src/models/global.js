/**
 * Created by jinpeng on 2018/6/29.
 */
import * as services from '../services/global'

export default {

  namespace: 'global',

  state: {},

  subscriptions: {},

  reducers: {},

  effects: {
    *getUser({ payload }, { call }) {
      return yield call(services.getUser);
    },

  }
}