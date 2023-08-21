import React from "react";
import Container from "react-bootstrap/Container";

export default CommonTableRow = (data) => { 
    const entries = Object.entries(data);
    return (
        <Container>
            <tr>
                    {entries.map(([key, value]) => (
                        <td key={key}>{value}</td>
                    ))}
            </tr>
        </Container>
    );
}