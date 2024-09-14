import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Mycard(props) {
	//Default image when a card has no image to Show
  let myimg = "https://cdn.pixabay.com/photo/2015/04/10/19/17/magazines-716801_1280.jpg";
  return (
    <Card border="danger" style={{width: '18rem',backgroundColor:'#150b3b',color:'white',marginTop:'15px',marginRight:'10px' }}>
      <Badge pill bg="success" style={{width:"auto",position:"absolute",display:"block"}}>{props.source}</Badge>
        <Card.Img variant="top" src={props.image?props.image:myimg} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
		  <Card.Text>
			{props.text}
		  </Card.Text>
		</Card.Body>
		<Card.Footer>
			<Button variant="danger" style={{display:'block',justifyContent:'end'}} href={props.link}>Read More</Button>
        </Card.Footer>
      <Card.Footer style={{color:'white'}}>
          <p className="small">Last updated on {`${props.date.split('-')[2].split("T")[0]}/${props.date.split('-')[1]}/${props.date.split('-')[0]}`}</p>
        </Card.Footer>
      </Card>
  );
}

export default Mycard;
