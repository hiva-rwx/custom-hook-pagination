import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./redux/actions/apiAction";
import Posts from "./components/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:'SET_LOADING'})
    dispatch(getData());
  }, [dispatch]);
  return (
    <Fragment>
      <Posts />
    </Fragment>
  );
};

export default App;
