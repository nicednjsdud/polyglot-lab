import { ReactElement, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
  onClickAdd: (text : string) => void;
  children: ReactElement;
}

export default function Editor(props: Props) {

  const dispatch = useTodoDispatch();
  
  const [text, setText] = useState("");

  const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  }
  
  return (
    <input 
        value={text} 
        onChange={onChangeInput}
    />
    <button onClick={onClickButton}>추가</button>
  )
};