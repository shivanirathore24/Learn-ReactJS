import { Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/todo"
            element={
              <>
                <h1>To Do</h1>
                <TodoForm />
                <TodoList />
              </>
            }
          />

          <Route
            path="/notes"
            element={
              <>
                <h1>Notes</h1>
                <NoteForm />
                <NoteList />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
