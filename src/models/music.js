import { loadMusic, loadMusicDetail } from '../services/music';

export default {
  namespace: 'music',
  state: {
    list: [],
    current: {}
  },
  effects: {
    *loadMusic(action, { call, put }) {
      const result = yield call(loadMusic, action.payload.keywords);
      yield put({
        type: 'save',
        payload: {
          list: result.data.result.songs
        }
      });
    },
    *play(action, { call, put }) {
      const result = yield call(loadMusicDetail, action.payload.id);
      yield put({
        type: 'save',
        payload: {
          current: result.data.data[0]
        }
      });
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
