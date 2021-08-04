import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(${(props) => (props.rotate ? "7deg" : "-7deg")});
  width: 150px;
  height: 200px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background: ${(props) => props.color};
  position: absolute;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
`;

const CardHead = styled.div`
  height: 30px;
  margin: 0 10px;
  border-bottom: 1px solid black;
  text-align: center;
  padding-top: 10px;
  position: relative;
`;
const CardBody = styled.div`
  margin: 10px;
  height: 100%;
`;

const Close = styled(AiOutlineClose)`
  position: absolute;
  right: 0;
`;

const Textarea = styled.textarea`
  width: calc(100% - 5px);
  height: 140px;
`;

function Note({ note, deleteNote, save, setCurrent, current, width, height }) {
  const [title, setTitle] = useState("");

  // const [editMode, setEditMode] = useState(false);

  const handleSave = (e) => {
    if (e.key === "Enter") {
      const newNote = { id: note.id, title };
      save(newNote);
      setCurrent(null);
    }
  };

  const changeEditMode = (e) => {
    e.preventDefault();
    setTitle(note.title);
    // setEditMode(true);
    setCurrent(note.id);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const editMode = note.id == current;

  return (
    <Card
      color={note.color}
      top={note.top * height}
      left={note.left * width}
      rotate={note.rotate}
    >
      <CardHead>
        note #{note.id}
        <Close onClick={() => deleteNote(note.id)} />
      </CardHead>
      <CardBody onDoubleClick={changeEditMode}>
        {editMode ? (
          <Textarea onKeyPress={handleSave} onChange={handleTitle}>
            {title}
          </Textarea>
        ) : (
          note.title
        )}
      </CardBody>
    </Card>
  );
}

export default Note;
