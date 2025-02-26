import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id =>dispatch(fetchUser(id)))
   .value();

  // console.log(userIds);
  // console.log(getState().posts);
  // console.log('fetched posts!')
  // *** if you needed to run another fucntion depenedent on the return
  // *** something like this
  // await Promise.all(userIds.map(id => dispatch(fetchUser(id))));

}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
 
};

//***** memoized  version */
// export const fetchUser = (id) =>  dispatch => {
//   _fetchUser(id, dispatch);

// };

// const _fetchUser = _.memoize(async(id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });


 // console.log(`payload ${JSON.stringify(response.data)}`)