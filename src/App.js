import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './redux/slices/counterSlices';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  // select store state
  const post = useSelector((state) => state.post);
  const { postsList, loading } = post;
  console.log(post);
  return (
    <div className='App'>
      <h1>Post List</h1>
      <hr />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        postsList?.map((post) => (
          <div key={post?.id}>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <hr></hr>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
