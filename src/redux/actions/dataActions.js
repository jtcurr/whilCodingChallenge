import store from '../store';

export function redditData(redditData) {
  store.dispatch({
    type: 'REDDIT_DATA_RECEIVED',
    redditData: redditData,
  });
}
export function postData(postData) {
  store.dispatch({
    type: 'POST_CLICKED',
    postData: postData,
  });
}