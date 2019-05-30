import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup, Button } from "react-bootstrap";
import {faPhone,faTag, faList } from "@fortawesome/free-solid-svg-icons";

import validator, { field } from './validator';

export default class TaskOneContactForm extends React.Component {
    render() {
        return <>
            <div className="container" >
                <Form style={{ height: 250, margin: "80px 300px  0px 300px" }}  >
                    <h1 style={{ color: "red" ,textAlign:"center",marginBottom:"50px"}} className="font-weight-bold">Contact Form</h1>
                    <Form.Group>
                        <Form.Label className="font-weight-bold">Name</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faTag} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                id="Name"
                                name="Name"
                                placeholder="Enter Your Name"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="font-weight-bold"> Cellular Phone</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faPhone} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                id=" CellularPhone"
                                name=" CellularPhone"
                                placeholder="Enter  Cellular Phone"
                                
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="font-weight-bold">How did you reached us</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faList} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                id="How"
                                name="How"
                            >
                                <option value="">How did you reached us?</option>
                                <option value="New Born">Advertisment</option>
                                <option value="Wedding">News</option>
                                <option value="Birthday">Friends</option>
                                <option value="Party">Social Media</option>
                            </Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white" }} type="submit">Submit</Button>
                </Form>
            </div>
        </>;
    }
}
