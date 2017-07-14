const defaults = {
  redditData: ['asdfasf'],
  postData: null
};

export default function dataReducer(state = defaults, action) {
  switch(action.type) {
    case 'REDDIT_DATA_RECEIVED': {
      return { ...state, 
        redditData: action.payload.redditData,
      };
    }
    case 'POST_CLICKED': {
      return { ...state, 
        postData: action.payload.postData,
      };
    }
  }
  return state;
};