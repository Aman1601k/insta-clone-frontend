import Navbar from "./components/navbar/Navbar";
import Home from "./containers/home/Home";
import Message from "./containers/message/Message";
import Explore from "./containers/explore/Explore";
import Profile from './containers/profile/Profile';
import SavedPost from './containers/profile/SavedPost/SavedPosts'
import GoToPost from './containers/home/GoToPost'
import {  BrowserRouter as Router , Switch, Route, useHistory } from "react-router-dom";
import AuthComponents from "./components/AuthComponents/AuthComponents";
import SignUpPage from "./containers/Signup/SignUpPage";
import LoginPage from "./containers/Login/LoginPage";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";
import { getSavedPosts, isUserLoggedIn } from "./actions";
import UserProfile from "./containers/profile/UserProfile";
import Reset from "./containers/ResetPassword/Reset";
import NewPassPage from "./containers/ResetPassword/NewPassPage";

function App() {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  let ids = JSON.parse(localStorage.getItem('ids'));

  useEffect(() => {
    if(!auth?.authenticate){
      dispatch(isUserLoggedIn())
    }
    if(auth?.authenticate){
      if(location.pathname.startsWith('/reset')){
        history.push('/');
        window.location.reload();
      }
    }
    
  }, [auth?.authenticate])

  useEffect(() => {
    // if (location.pathname === '/') {
    //   dispatch(getMyFollowingsPost());
    // }

    if (location.pathname === '/') {
      localStorage.setItem('location', 'home');
    } else if (location.pathname === '/message') {
      localStorage.setItem('location', 'message');
    } else if (location.pathname === '/explore') {
      localStorage.setItem('location', 'explore');
    } else if (location.pathname === '/profile') {
      localStorage.setItem('location', 'profile');
    }
    if (location.pathname === '/savedpost') {
      ids = JSON.parse(localStorage.getItem('ids'));
      console.log(ids);
      dispatch(getSavedPosts(ids));
    }
  }, [location.pathname , ids?.length ]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/signin" component={LoginPage}/>
          <Route exact path="/reset" component={Reset}/>
          <Route path="/reset/:token" component={NewPassPage}/>
          <Layout>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute path="/message" component={Message}/>
            <PrivateRoute exact path="/savedpost" component={SavedPost} />
            <PrivateRoute path="/explore" component={Explore }/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <PrivateRoute path="/profile/:userid" component={UserProfile}/>
            <PrivateRoute exact path="/post/:id" component={GoToPost} />
          </Layout>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
