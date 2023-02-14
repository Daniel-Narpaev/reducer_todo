import React from 'react'
import styled from 'styled-components'
import {CiEdit} from "react-icons/ci"
import { RiDeleteBinLine } from "react-icons/ri"
import { BsCheckLg } from "react-icons/bs"


const TodoList = ({setTitle, dispatch, title, item }) => {
  const deleteHandler = () => {
    dispatch({
      type: "DELETE", 
      payload: item.id})
  }
  const editHandler = () => {
    setTitle(title)
    deleteHandler(item.id)
  }
  const complateHandler = () => {
    dispatch({
      type: "COMPLATED", 
      payload: item.id})
  }
  
  return (
    <List>      
        <TitleBox>
           <CheckedBtn className={`${item.complated && "line-through"}` } onClick={complateHandler}/>
        <Title onClick={complateHandler} className={`${item.complated ? "line-through" : ''}` }>{title}</Title>
      </TitleBox>
      <Btn>
      <DeleteBtn onClick={deleteHandler}/>
      <EditBtn onClick={editHandler}/>      
      </Btn>
 
    </List>
    
  )
}

export default TodoList

const List = styled.div`
  width: 640px;
  height: 60px;
  background-color: #000000;
  margin:0px 20px 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
`
const Btn = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.9rem;
  margin-right: 30px;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  margin-right: 30px;
  .line-through{
    text-decoration:line-through;
    color: green;
  }
`
const Title = styled.li`
  color: white;
  font-size: 1.5rem;
  margin-left: 20px;
`
const EditBtn = styled(CiEdit)`
  color: white;
`
const DeleteBtn = styled(RiDeleteBinLine)`
  color: white;
`
const CheckedBtn = styled(BsCheckLg)`
  color: white;
  font-size: 1rem;
  margin-left: 20px;
  
`

