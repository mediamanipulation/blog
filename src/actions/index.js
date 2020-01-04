import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
 // const id = '4'; 
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
  // console.log(`payload user ${JSON.stringify(response.data)}`)
};




 // console.log(`payload ${JSON.stringify(response.data)}`)