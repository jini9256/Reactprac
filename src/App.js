import "./styles.css";
import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todos, setTodos] = useState(iniTodos);

  const [title, setTitle] = useState("");
  const changeMode = (event) => {
    setTitle(event.target.value);
  };
  const submitMode = (event) => {
    event.preventDefault();

    const newTodos = { title, isDone: false, id: "" };

    setTodos((prev) => {
      return [...prev, newTodos];
    });
    setTitle("");
  };

  return (
    <div className="App">
      <header>
        <h1>Todo-List</h1>
      </header>
      <main>
        <section>
          <form onSubmit={submitMode}>
            <input
              onChange={changeMode}
              value={title}
              placeholder="일정을 입력하세요."
            ></input>
            <button>Click</button>
          </form>
        </section>
        <section>
          <Todoboard isWork={true} setTodos={setTodos} todos={todos} />
          <Todoboard isWork={false} setTodos={setTodos} todos={todos} />
        </section>
      </main>
    </div>
  );
}

const iniTodos = [
  { title: "오늘도", isDone: false, id: "0" },
  { title: "과제 다시 한번", isDone: false, id: "1" },
  { title: "연습하는 중!!! ", isDone: true, id: "2" }
];

const Todoboard = ({ setTodos, todos, isWork }) => {
  return (
    <div>
      <h2>{isWork ? "~ing" : "Done"}</h2>
      {todos
        .filter((item) => item.isDone !== isWork)
        .map((item) => {
          return (
            <div>
              <Todo item={item} setTodos={setTodos}></Todo>
            </div>
          );
        })}
    </div>
  );
};

const Todo = ({ item, setTodos }) => {
  const deleteClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={deleteClick}>삭제</button>
    </div>
  );
};
