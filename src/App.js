import React from "react";
import "./App.css";
import Main from "./components/main";
import { Provider } from "react-redux";
import reducer from "./store/reducers";
import { createStore } from "redux";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
