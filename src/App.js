import './App.css';
import {Route, Routes} from "react-router-dom";
import {CarsPage, CommentsPage, HomePage, PostsPage, UsersPage} from "./pages";
import {Layout} from "./components";

function App() {

    return (
        <div>
            <Routes>
                <Route patch={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
