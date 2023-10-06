export default function NoteCard({ note }) {
    return(
    <>
        <h3>{ note.text }</h3>
        <h3>{ note.createdAt.toLocaleString("en-US") }</h3>
    </>
    )
}