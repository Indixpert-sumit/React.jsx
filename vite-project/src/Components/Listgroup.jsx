import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Listgroup_example() {
    return (
        <ListGroup>
            <ListGroup.Item><FaFacebook /> Facebook <span style={{marginLeft:'300px'}}> <b>20%</b></span></ListGroup.Item>
            <ListGroup.Item><FaInstagram /> Instagram  <span style={{marginLeft:'300px'}}><b>20%</b></span></ListGroup.Item>
            <ListGroup.Item><FaYoutube />Youtube  <span style={{marginLeft:'315px'}}><b>20%</b></span></ListGroup.Item>
            <ListGroup.Item><FaXTwitter /> Twitter  <span style={{marginLeft:'320px'}}><b>20%</b></span>  </ListGroup.Item>
            <ListGroup.Item><FaLinkedin /> LinkedIn  <span style={{marginLeft:'310px'}}><b>20%</b></span>  </ListGroup.Item>
        </ListGroup>
    );
}

export default Listgroup_example;