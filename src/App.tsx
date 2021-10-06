import { Provider } from "react-redux";
import classes from "./App.module.scss"
import Avatar from "./containers/Avatar";
import Categories from "./containers/Categories";
import Traits from "./containers/Traits";
import Store from "./store";



function App() {
  return (
    <Provider store={Store}>
      <div className={classes.App}>
        <Categories />
        <Avatar />
        <Traits />
      </div>
    </Provider>
  );
}

export default App;
