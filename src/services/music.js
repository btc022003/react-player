import { get } from '../utils/request';

export function loadMusic(keywords) {
  return get('/search', {
    params: {
      keywords
    }
  });
}

export function loadMusicDetail(id) {
  return get('/song/url', {
    params: {
      id
    }
  });
}
