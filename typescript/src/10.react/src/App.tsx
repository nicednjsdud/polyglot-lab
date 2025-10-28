import { useEffect, useReducer, useRef} from 'react';
import './App.css';
import Editor from './component/editor';
import { Todo } from './types';
import TodoItem from './component/TodoItem';

type Action = {
  type : "CREATE";
    data : {
      id: number;
      content: string;
    }
} | {
  type : "DELETE";
  data : {
    id: number;
  }
}

function reducer (state : Todo[], action : Action) {
  switch(action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: action.data.id,
          content: action.data.content
        }
      ];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.data.id);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);

  const onClickAdd = (text: string) => {

    dispatch({
      type : "CREATE",
      data : {
        id: idRef.current++,
        content: text
      }
    })
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type : "DELETE",
      data : {
        id: id
      }
    })
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} content={todo.content}  onClickDelete={onClickDelete}/>
        ))}
      </div>
    </div>
  );
}

export default App;
