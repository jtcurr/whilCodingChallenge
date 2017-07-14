import store from '../store';

//Updates reducer with reddit data
export function redditData(redditData) {
  store.dispatch({
    type: 'REDDIT_DATA_RECEIVED',
    payload: redditData,
  });
}

//Updates reducer with individual post data
export function postData(postData) {
  store.dispatch({
    type: 'POST_CLICKED',
    payload: postData,
  });
}