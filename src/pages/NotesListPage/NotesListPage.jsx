import NoteCard from "../../components/NoteCard/NoteCard";
import * as notesAPI from "../../utilities/notes-api"
import { useEffect } from "react"

export default function NotesListPage({ notes, setNotes }) {
    
    useEffect(function () {
        (async function() {
            const allNotes = await notesAPI.getAll()
            setNotes([...allNotes])
        })()
    }, [])

    const notesList = notes.map((note) => <NoteCard note={note} />)
    
    return(
        <>
        {notes.length ? notesList : "No Notes Yet!"}
        </>
    );
}