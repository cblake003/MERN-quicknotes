import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from "../../utilities/users-service";
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NewNotesPage from "../NewNotesPage/NewNotesPage";
import NotesListPage from "../NotesListPage/NotesListPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser())
  const [notes, setNotes] = useState([])
  console.log(user)
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={ user } setUser={ setUser }/>
          <Routes>
            <Route path="/notes/new" element={ <NewNotesPage /> }/>
            <Route path="/" element={ <NotesListPage notes={ notes } setNotes={setNotes} />} />
          </Routes>  
        </>
        :
        <AuthPage setUser={ setUser } />
      }
    </main>
  );
}