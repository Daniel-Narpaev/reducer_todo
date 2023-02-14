// import { useState } from "react";
import { useReducer, useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Todo from "./components/Todo";
import reducer from "./reducer";



function App() {
  const [state, dispatch] = useReducer(reducer,[])
  const [title, setTitle] = useState("")
  return (
    <AppBox>
      <Form 
      state={state}
      dispatch={dispatch}
      title={title}
      setTitle={setTitle}/>
      <Todo 
      state={state}
      dispatch={dispatch}
      setTitle={setTitle}/>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  box-sizing:border-box;
  width: 700px;
  margin:50px auto;
`