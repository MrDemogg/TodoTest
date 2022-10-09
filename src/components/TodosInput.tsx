import React, {FC, useState} from 'react';
import {InputGroup, Form, Button} from "react-bootstrap";

interface TodosInputProps {
  setTodos: any,
  todos: any
}

const TodosInput: FC<TodosInputProps> = ({setTodos, todos}) => {
  const [text, setText] = useState('')
  return (
    <div style={{margin: '0 auto', display: 'flex', justifyContent: 'space-between', width: '90%'}}>
      <InputGroup className="mb-3" style={{margin: '0 auto', width: '90%'}}>
        <InputGroup.Text id="basic-addon1">Create New To Do</InputGroup.Text>
        <Form.Control value={text} onChange={(e) => setText(e.currentTarget.value)} />
      </InputGroup>
      <Button onClick={() => {
        const ToDo = [...todos['To Do']]
        ToDo.push({text: text})
        setTodos({...todos, 'To Do': ToDo})
      }}>Add</Button>
    </div>
  );
};

export default TodosInput;