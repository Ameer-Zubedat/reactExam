import React from 'react';
import { Table } from 'react-bootstrap';
export default ({ Name, Phone, How }) => (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Cellular Phone</th>
                    <th>How did you reached us ?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{Name}</td>
                    <td>{Phone}</td>
                    <td>{How}</td>
                </tr>
            </tbody>
        </Table>
    </>

);

