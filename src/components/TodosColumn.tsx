import React, {FC} from 'react';
import {Button, Card} from "react-bootstrap";

interface TodosColumnProps {
  setTodos: any;
  todos: any;
  selectedTodos: string
}

const TodosColumn: FC<TodosColumnProps> = ({selectedTodos, todos, setTodos}) => {
  const removeTodo = (id: any) => {
    const oldTodos = [...todos[selectedTodos]]
    const newTodos = oldTodos.filter(oldTodo => oldTodo.text !== id)
    setTodos({...todos, [selectedTodos]: newTodos})
  }
  return (
    <Card style={{ width: '23.3%' }}>
      <Card.Header>
        <Card.Title>{selectedTodos}</Card.Title>
      </Card.Header>
      <Card.Body>
        {todos[selectedTodos]
          ? <div>
            {
              todos[selectedTodos].length > 0
                ? <div>{todos[selectedTodos].map((todo: any) =>
                  <Card key={todo.text} style={{width: '95%', margin: '10px auto'}}>
                    <Card.Header>
                      <div
                        style={{display: 'flex',
                          width: '98%',
                          justifyContent: 'space-between',
                          margin: '0 auto'
                        }}
                      >
                        <Card.Title style={{width: '70%'}}>{todo.text}</Card.Title>
                        <Button id={todo.text} variant='outline-danger'
                                onClick={(e) => {
                                  removeTodo(e.currentTarget.id)
                                }}>Close</Button>
                      </div>
                    </Card.Header>
                    {
                      selectedTodos !== 'Done'
                      && <Card.Body>
                      <Button id={todo.text} onClick={(e) => {
                          const todo = todos[selectedTodos].filter((todo: any) => todo.text === e.currentTarget.id)
                          const oldTodos = [...todos[selectedTodos]]
                          const newTodos = oldTodos.filter(oldTodo => oldTodo.text !== e.currentTarget.id)
                          let addToTodo
                          switch (selectedTodos) {
                            case 'To Do':
                              addToTodo = todos['In Progress']
                              addToTodo.push(todo[0])
                              setTodos({...todos, 'In Progress': addToTodo, 'To Do': newTodos })
                              break;
                            case 'In Progress':
                              addToTodo = todos['Done']
                              addToTodo.push(todo[0])
                              setTodos({...todos, 'Done': addToTodo, 'In Progress': newTodos})
                              break;
                            case 'Done':
                              setTodos({...todos, 'Done': newTodos})
                          }
                        }
                        }>{'Next >'}</Button>
                    </Card.Body>}
                  </Card>
                )}
                </div>
                : <Card.Text style={{textAlign: 'center'}}>Тут ничего нет</Card.Text>
            }
          </div>
          : <Card.Text style={{textAlign: 'center'}}>Тут ничего нет</Card.Text>
        }

      </Card.Body>
    </Card>
  );
};

export default TodosColumn;