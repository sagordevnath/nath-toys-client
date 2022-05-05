import React from "react";
import Card from "react-bootstrap/Card";

const Answer4 = () => {
  return (
    <div className='answer'>
      <Card>
        <Card.Header className='question' as="h3">
          What is the purpose of jwt and how does it work
        </Card.Header>
        <Card.Body className='card-body'>
          <Card.Title className='text-primary'>JWT or JSON Web Token</Card.Title>
          <Card.Text>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWT are mainly used for
            authentication. After a user logs in to an application, the
            application will create a JWT and send it back to the user.
            Subsequent requests by the user will include the JWT. The token
            tells the server what routes, services, and resources the user is
            allowed to access.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Answer4;
