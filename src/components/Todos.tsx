import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import TodosInput from "./TodosInput";
import TodosColumn from "./TodosColumn";

const Todos = () => {
  const [todos, setTodos] = useState({
    'To Do': [],
    'In Progress': [],
    'Done': []
  })
  return (
    <Card>
      <Card.Header>
        <TodosInput setTodos={setTodos} todos={todos} />
      </Card.Header>
      <Card.Body style={{width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-between'}}>
        <TodosColumn setTodos={setTodos} todos={todos} selectedTodos='To Do'/>
        <TodosColumn setTodos={setTodos} todos={todos} selectedTodos='In Progress'/>
        <TodosColumn setTodos={setTodos} todos={todos} selectedTodos='Done'/>
      </Card.Body>
    </Card>
  );
};

export default Todos;