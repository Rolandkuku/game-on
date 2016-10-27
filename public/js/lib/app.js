import { createStore } from "redux";
import { saveUser, addUser, setVisibilityFilter, VisibilityFilters } from "./actions";
import userApp from "./reducers";

let store = createStore(userApp);

// Testing purpose
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );
//
// store.dispatch(addUser("toto", "pdwToto"));
// store.dispatch(addUser("tutu", "pdwTutu"));
// store.dispatch(addUser("tata", "pdwTata"));
// store.dispatch(saveUser(0));
// store.dispatch(saveUser(2));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_SAVED));
//
//
// // Stop listening to state updates
// unsubscribe();
