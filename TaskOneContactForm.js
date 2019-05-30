import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup, Button } from "react-bootstrap";
import {faPhone,faTag, faList } from "@fortawesome/free-solid-svg-icons";

import validator, { field } from './validator';

export default class TaskOneContactForm extends React.Component {
    constructor(){
        super();
        this.state = {
            Name: field({ value: '', name: 'Name',minLength: 2 }),
            CellularPhone: field({ value: '', name: 'CellularPhone',pattern:/^05\d([-]{0,1})\d{7}$/ }),
            How: field({ value: '', name: 'How' }),
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onInputChange({ target: { name, value } }) {
        console.log(name, value);
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                ...validator(value, name, this.state[name].validations)
            }
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        for (let key in user) {
            const { value, validations } = user[key];
            const { valid, errors } = validator(value, key, validations);
            if (!valid) {
              user[key].valid = valid;
              user[key].errors = errors;
            }
        }
        this.setState({ ...user });
    }
    render() {

        return <>
            <div className="container" >
                <Form style={{ height: 250, margin: "80px 300px  0px 300px" }} onSubmit={this.onSubmit} >
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
                                onBlur={this.onInputChange}
                            />
                        </InputGroup>
                        {this.state.Name.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
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
                                id="CellularPhone"
                                name="CellularPhone"
                                type="phone"
                                placeholder="Enter  Cellular Phone"
                                onBlur={this.onInputChange}
                            />
                        </InputGroup>
                        {this.state.CellularPhone.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
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
                                onBlur={this.onInputChange}
                            >
                                <option value="">How did you reached us?</option>
                                <option value="New Born">Advertisment</option>
                                <option value="Wedding">News</option>
                                <option value="Birthday">Friends</option>
                                <option value="Party">Social Media</option>
                            </Form.Control>
                        </InputGroup>
                        {this.state.How.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white" }} type="submit">Submit</Button>
                </Form>
            </div>
        </>;
    }
}
