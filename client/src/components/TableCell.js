import { useState } from "react";
import Container from "react-bootstrap/Container"
const TableCell = ({ content }) => {
  const [state, setState] = useState(content);

  return (
    <Container style= {{width: "100%", padding:"0"}}>
      <input
        value={state}
        onChange={({ target }) => setState(target.value)}
        type="text"
        style={{borderStyle: "none", width:"100%"}} />
    </Container>
  )
}

export default TableCell;