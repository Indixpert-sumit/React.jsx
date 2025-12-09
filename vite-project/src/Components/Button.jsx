import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaPen } from "react-icons/fa";

const Button_demo = () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);



    const textStyle = {
        fontWeight: bold ? "500" : "400",
        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
        marginTop: "10px",
    };

    return (
        <div>
            <h3>Button Styles</h3>
            <Button variant="primary" style={{ marginRight: '20px' }}>Primary</Button>
            <Button variant="primary">
                <FaPen /><span style={{ marginLeft: '5px' }}>Edit Record</span>
            </Button>
            <Button variant="outline-primary" style={{ marginLeft: '15px' }}>Outline Button</Button>
            <Button variant="outline-primary" style={{ marginLeft: '15px' }} disabled>Disabled Button</Button>

            <h3>Button Types</h3>
            <Button variant="primary" style={{ marginRight: '20px' }}>Link</Button>
            <Button variant="primary" style={{ marginRight: '20px' }}>Button</Button>
            <Button variant="primary" style={{ marginRight: '20px' }}>Input</Button>
            <Button variant="primary" style={{ marginRight: '20px' }}>Submit</Button>
            <Button variant="primary" style={{ marginRight: '20px' }}>Reset</Button>

            <h3>Toggle Buttons</h3>

            <ButtonGroup>
                <Button
                    variant={bold ? "primary" : "outline-primary"}
                    onClick={() => setBold(!bold)}
                >
                    <b>B</b>
                </Button>

                <Button
                    variant={italic ? "primary" : "outline-primary"}
                    onClick={() => setItalic(!italic)}
                >
                    <i>I</i>
                </Button>

                <Button
                    variant={underline ? "primary" : "outline-primary"}
                    onClick={() => setUnderline(!underline)}
                >
                    <u>U</u>
                </Button>


            </ButtonGroup>

            <p style={textStyle}>
                Here, the actions of the above buttons will be reflected.
            </p>
        </div>
    );
}

export default Button_demo;
