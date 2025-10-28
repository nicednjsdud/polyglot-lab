import { useEffect, useRef , useState} from 'react';
import './App.css';
import Editor from './component/editor';


interface Todo {
  id: number;
  content: string;
}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  

  const idRef = useRef(0);

  

  const onClickAdd = () => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text
      }
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
    </div>
  );
}

export default App;
