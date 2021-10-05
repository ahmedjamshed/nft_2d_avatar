import classes from "./App.module.scss"
import Avatar from "./containers/Avatar";
import Categories from "./containers/Categories";
import Traits from "./containers/Traits";
import Store from "./store";



function App() {
  return (
    <Store>
      <div className={classes.App}>
        <Categories />
        <Avatar />
        <Traits />
      </div>
    </Store>
  );
}

export default App;
