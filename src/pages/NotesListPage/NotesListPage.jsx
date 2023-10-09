import NoteCard from "../../components/NoteCard/NoteCard";
import * as notesAPI from "../../utilities/notes-api"
import { useEffect, useState } from "react"
import NewNotesPage from "../../pages/NewNotesPage/NewNotesPage"

export default function NotesListPage({ notes, setNotes }) {
    const [newNotes, setNewNotes] = useState([])

    useEffect(function () {
        (async function() {
            const allNotes = await notesAPI.getAll()
            setNotes([...allNotes])
        })()
    }, [newNotes])

    const notesList = notes.map((note) => <NoteCard note={note} />)
    
    return(
        <>
        <NewNotesPage setNewNotes={setNewNotes} />
        {notes.length ? notesList : "No Notes Yet!"}
        </>
    );
}