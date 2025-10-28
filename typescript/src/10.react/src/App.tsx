import { useContext, useEffect, useReducer, useRef} from 'react';
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

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text : string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch(){
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) {
    throw new Error("TodoDispatchContext가 존재하지 않습니다.");
  }
  return dispatch;
}

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
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
          <Editor/>
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} content={todo.content}/>
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      
    </div>
  );
}

export default App;
