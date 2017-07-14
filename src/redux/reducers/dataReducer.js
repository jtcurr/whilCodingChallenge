const defaults = {
  apiData: [],
  postData: null
};

export default function dataReducer(state = defaults, action) {
  switch(action.type) {
    case 'REDDIT_DATA_RECEIVED': {
      return { ...state, 
        apiData: action.payload,
      };
    }
    case 'POST_CLICKED': {
      return { ...state, 
        postData: action.payload,
      };
    }
  }
  return state;
};