import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
        <div className='block_1'>
            <Users/>
            <Posts/>
        </div>
        <Comments/>
    </div>
  );
}

export default App;
