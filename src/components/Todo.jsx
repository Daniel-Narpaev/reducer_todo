import styled from "styled-components"
import TodoList from "./TodoList"

const Todo = ({setTitle, dispatch, state}) => {
    console.log(state)
  return (
    <UlList>
        {state.map((item)=>{
            return(
            <TodoList
            key={item.id}
            dispatch={dispatch}
            setTitle={setTitle}
            item={item}
            title={item.title}/>
            )
           
        })}
    </UlList>
  )
}

export default Todo

const UlList = styled.ul`
  width: 640px;
  min-height: 50px;
  /* background-color: aliceblue; */
  list-style:none;
  margin: 30px auto;
  padding: 10px;
`