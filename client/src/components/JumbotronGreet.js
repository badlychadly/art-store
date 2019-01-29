import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronGreet = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to the Art-Store</h1>
          <p className="lead">Art-Store is an online store to help an Artist sell his paintings</p>
          <p>-Click on painting to see if the original or prints are for sale.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronGreet;