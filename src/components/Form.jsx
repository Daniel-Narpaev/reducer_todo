import React from "react";
import styled from "styled-components";

const Form = ({ title, setTitle, dispatch, state }) => {
  const inputChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const savehandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: title,
      complated:false
    });
    setTitle("")
  };
  return (
    <Container>
      <Input 
        type="text" 
        value={title} 
        onChange={inputChangeHandler} 
        placeholder="Введите текст"/>
      <StyledBtn onClick={savehandler}>add</StyledBtn>
    </Container>
  );
};

export default Form;

const Container = styled.div`
    display: flex;
`
const Input = styled.input`
    width: 500px;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: #b6bbb6;
    margin-left: 20px;
    border-radius: 5px;
    padding: 6px;
    outline: none;
    border: none;
    font-size: 1.4rem;
    background-color: rgb(199, 213, 228, 0.584);
    border: 1px solid rgb(179, 179, 179);

  :disabled {
    background-color: rgb(255, 121, 235, 0.584);
    border: 1px solid red;
  }

  &:focus {
    background-color: white;
  }
`
const StyledBtn = styled.button`
    width: 130px;
    height: 43px;
    background-color: #ffffff;
    color: #000000;
    border: none;
    font-size: 1.4rem;
    margin-left: 15px;
    font-weight:bold;
`