import logo from './logo.svg';
import Loader from "react-loader-spinner";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListPost from './components/posts/ListPost';
import AddPost from './components/posts/AddPost';
import EditPost from './components/posts/EditPost';
function App() {
  return (
   <>
    <Router>
        <Switch>
       
        <Route path="/addPost" component={AddPost} />
        <Route path="/editCategory/:id" component={EditPost} />
        <Route path={["/","/posts"]} component={ListPost} />
        </Switch>
    </Router>
   </>
  );
}

export default App;
