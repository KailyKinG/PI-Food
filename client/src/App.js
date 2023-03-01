import Landing from "./page/Landing";
import Home from "./page/Home";
import Error from "./page/Error";
import About from "./page/About";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Detail from "./components/Detail";
import './App.css';
import {Route, Switch, useLocation } from "react-router-dom";
import { getAllFood, getAllDiets } from "./redux/actions/actions";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function App(props) {
  const creadas = useSelector((state) => state.creadas);
  const [currentPage, setCurrentPage] = useState(1);                            //props

  const paginado = (number) => {                                                //props
    setCurrentPage(number);
  };

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllFood());
    dispatch(getAllDiets());
  }, [creadas, dispatch]);

  return (
    <div className="App">
      {
        location.pathname !== '/' && <Nav paginado={paginado} />
      }
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' render={() => <Home currentPage={currentPage} paginado={paginado} />}/> {/* Home */}
        <Route exact path='/about' component={About} />
        <Route exact path='/form' component={Form} />
        <Route exact path='/detail/:idDetail' render={({match}) => <Detail match={match.params.idDetail}/>} />
        <Route path='*' render={() => <Error location={location.pathname} />} />
      </Switch>
    </div>
  );
}

export default App;

