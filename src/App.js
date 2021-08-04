import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./Components/Nav";
import Note from "./Components/Note";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const DashBoard = styled.div`
  width: 100%;
  height: 100%;
  background: #666666;
  position: relative;
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [current, setCurrent] = useState(null);
  const [width, setWidth] = useState(window.innerWidth - 150);
  const [height, setHeight] = useState(window.innerHeight - 250);

  const addNote = (note) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const save = (note) => {
    const newNotes = notes.map((nt) =>
      note.id === nt.id ? { ...nt, ...note } : nt
    );
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const handleResize = () => {
    setWidth(window.innerWidth - 150);
    setHeight(window.innerHeight - 250);
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];

    setNotes(storedNotes);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Nav addNote={addNote} />
      <DashBoard>
        {notes.map((note) => (
          <Note
            width={width}
            height={height}
            setCurrent={setCurrent}
            current={current}
            note={note}
            deleteNote={deleteNote}
            save={save}
            key={note.id}
          />
        ))}
      </DashBoard>
    </Container>
  );
}

export default App;
