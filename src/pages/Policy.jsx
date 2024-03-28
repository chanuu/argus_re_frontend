import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import API_PATH from "../redux/api";
import Board from "../components/Board";

import { fetchDataAction } from "../redux";

const Policy = () => {
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  // Create a DataManager instance and bind it to the Kanban component

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchDataAction());
  }, [dispatch]);

  let kanban;
  return <div></div>;
};

export default Policy;
