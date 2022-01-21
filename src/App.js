import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import FirstUsersPage from "./pages/UsersPage/FirstUsersPage/FirstUsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import FirstPostsPage from "./pages/PostsPage/FirstPostPage/FirstPostsPage";
import SecondPostPage from "./pages/PostsPage/SecondPostPage/SecondPostPage";
import SecondUsersPage from "./pages/UsersPage/SecondUsersPage/SecondUsersPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<FirstUsersPage/>}>
                            <Route path={'posts'} element={<SecondUsersPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<FirstPostsPage/>}>
                            <Route path={'comments'} element={<SecondPostPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};


export default App;