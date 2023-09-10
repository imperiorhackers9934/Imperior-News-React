import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
function Myplaceholder() {
  return (
    <>
    <div className="d-flex justify-content-around my-5">
      <Card style={{ width: '18rem',backgroundColor:'#150b3b',color:'white',margin:'20px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="danger" xs={6} />
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',backgroundColor:'#150b3b',color:'white',margin:'20px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="danger" xs={6} />
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',backgroundColor:'#150b3b',color:'white',margin:'20px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="danger" xs={6} />
        </Card.Body>
      </Card>
	  <Card style={{ width: '18rem',backgroundColor:'#150b3b',color:'white',margin:'20px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="danger" xs={6} />
        </Card.Body>
      </Card>
    </div></>
  );
}

export default Myplaceholder;