import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample_card() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61zvPe52NQL._AC_SY200_.jpg" />
      <Card.Body>
        <Card.Title>Mini Clip-On Reading Lamp</Card.Title>
        <Card.Text >
       <b><p>  M.R.P: <span style={{ textDecoration: "line-through" ,color:'red'}}>₹999</span>
</p></b>   
         <b>70% ₹299</b> 
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
        <Button variant="primary" style={{ marginLeft: '50px' }}>Buy Now</Button>

      </Card.Body>
    </Card>
  );
}

export default BasicExample_card;