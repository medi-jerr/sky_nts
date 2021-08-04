import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { random } from "../Outil";

const Container = styled.div`
  height: 50px;
  background: #2d6187;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin: 10px auto;
`;
const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.color};
  margin: 2px;
  border-radius: 5%;
  position: relative;
  &:after {
    content: " ";
    width: 15px;
    height: 7px;
    position: absolute;
    border-left: 1px solid;
    border-bottom: 1px solid;
    top: 8px;
    left: 7px;
    transform: rotate(-45deg);
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;

const Input = styled.input`
  margin: 0 10px;
`;
const Button = styled.button`
  margin: 0 10px;
  background: #6b5b95;
  border: #6b5b95;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 30px;
  border-radius: 3%;
  outline: none;
  &:active {
    box-shadow: none;
    transition: 1s;
  }
`;

function Nav(props) {
  const [title, setTitle] = useState([]);
  const [color, setColor] = useState("#f6ffbf");
  const [counter, setCounter] = useState(0);
  const { addNote } = props;

  useEffect(() => {
    const c = localStorage.getItem("counter")
      ? parseInt(localStorage.getItem("counter"))
      : 0;
    setCounter(c);
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const note = {
      id: counter + 1,
      title,
      color,
      top: random(),
      left: random(),
      rotate: Math.random() > 0.5,
    };
    addNote(note);
    setCounter(counter + 1);
    localStorage.setItem("counter", counter + 1);
    setTitle("");
  };

  return (
    <Container>
      <Form onSubmit={handleAdd}>
        <Input type="text" value={title} onChange={handleTitle} />
        <ColorBox
          color="#f6ffbf"
          onClick={() => handleColor("#f6ffbf")}
          active={"#f6ffbf" === color}
        />
        <ColorBox
          color="#c7ffc2"
          onClick={() => handleColor("#c7ffc2")}
          active={"#c7ffc2" === color}
        />
        <ColorBox
          color="#d6afff"
          onClick={() => handleColor("#d6afff")}
          active={"#d6afff" === color}
        />
        <ColorBox
          color="#ffaeff"
          onClick={() => handleColor("#ffaeff")}
          active={"#ffaeff" === color}
        />

        <Button type="submit"> Add</Button>
      </Form>
    </Container>
  );
}

export default Nav;
