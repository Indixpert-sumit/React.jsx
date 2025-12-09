import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Progress() {
  const [value, setValue] = useState(50);

  const handleIncrease = () => {
    setValue(prev => Math.min(prev + 5, 100 ));
  };
  const decrease = () => {
    setValue(prev => Math.max(prev - 5, 0));
  };

  return (
    <div>
      <ProgressBar variant="success" now={value}label={`${value}%`} /> <br />
      <ProgressBar variant="info" now={value}  label={`${value}%`}/> <br />
    
      <br /><br />
      <button onClick={handleIncrease} style={{backgroundColor:'green', marginLeft:'180px'}}>+5</button>
      <button onClick={decrease} style={{backgroundColor:'red', marginLeft:'260px'}} >-5</button>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.academy.indixpert.com/images/logo/indixpert-logo.svg" />
      <Card.Body>
        <Card.Title> <h4>Bootstrap Dashboard application</h4> </Card.Title>
        <Card.Text>
       In progress
             <ProgressBar variant="danger" now={value}label={`${value}%`} /> <br />

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Progress;
