import { useState } from "react";
import Container from "react-bootstrap/Container"

const TableCell = ({ children }) => {
  const [state, setState] = useState(children);

  return (
    <Container style= {{width: "100%", padding:"0"}}>
      <input
        className="bg-transparent text-center w-100 border-0"
        value={state}
        onChange={({ target }) => setState(target.value)}
        type="text"/>
    </Container>
  );
}

export default TableCell;