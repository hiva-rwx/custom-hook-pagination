import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./redux/actions/apiAction";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:'SET_LOADING'})
    dispatch(getData());
  }, [dispatch]);
  return (
    <Fragment>
      <Users />
    </Fragment>
  );
};

export default App;
