import Landing from "./page/Landing";
import Home from "./page/Home";
import Error from "./page/Error";
import About from "./page/About";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Detail from "./components/Detail";
import './App.css';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Henry Food</h1>
      <Landing />
      <Home />
      <Error />
      <About />
      <Nav />
      <Form />
      <Detail />
    </div>
  );
}

export default App;
