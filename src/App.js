import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminManage from "./admin/AdminManage";
import CreatePost from './admin/adminPost/CreatePost';
import PostList from "./admin/postList/PostList";
import UserList from "./admin/userList/UserList";
import "./app.scss";
import Auth from "./component/auth/Auth";
import AuthContextProvider from "./component/authContext/AuthContext";
import PostDetail from "./component/details/PostDetail";
import Category from "./component/HomePage/homepage/category/Category";
import HomePage from "./component/HomePage/homepage/HomePage";
import Main from './component/HomePage/Main';
import Place from "./component/place/Place";
import PlaceDetail from "./component/place/placeDetail/PlaceDetail";
import PlaceHome from "./component/place/PlaceHome";
function App() {
  const isAdmin = useSelector((state) => state.adminReducer.isAdminAuthentication)

  return (

    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} >
            <Route path="/:page" element={<Category />} />
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Auth authRoute='login' />} />
          <Route path="/register" element={<Auth authRoute='register' />} />
          <Route path="/admin" element={isAdmin ? <AdminManage /> : <Navigate to='/' />} >
            <Route path="them-bai" element={<CreatePost />} />
            <Route path="list-post" element={<PostList />} />
            <Route path="list-user" element={<UserList />} />
          </Route>
          <Route exact path="/post/:idPost" element={<PostDetail />} />
          <Route path="/diadiem" element={<Place />} >
            <Route path="/diadiem/:tendiadiem" element={<PlaceDetail />} />
            <Route path="/diadiem/" element={<PlaceHome />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
