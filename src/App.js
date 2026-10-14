import "./app.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] =useState(["Schlafen", "Essen"]);
  const [aktuellesTodo, setAktuellesTodo] = useState("");
  console.log(aktuellesTodo);

  const removeTodo = (index) => {
    const neueTodoList = todoList.filter((todo, i) => index !== i);
    setTodoList(neueTodoList)
  };

  return (
    <div id="app">
      <header>Übung WID 4 - Array State </header>
      <h2> Todo-Liste</h2>
      <div id="container">
        {/* ---- Hinzufügen von Todos ----  */}
        <div id="eingabeZeile">
          <input type="text" onChange={() => setAktuellesTodo(event.target.value)} />
          <button className="Button" onClick={() => setTodoList([...todoList, aktuellesTodo])}>
            Todo hinzufügen
          </button>
        </div>
        <hr />
        {/* ---- Anzeigen von Todos ----  */}
        <ol>
          {todoList.map((todo, index) => (
            <div className = "todoList" key = {index}>
              <li>{todo}</li>
              <button onClick = {() => removeTodo(index)}>Todo löschen</button>
            </div>))}
        </ol>
      </div>
    </div>
  );
}

export default App;
