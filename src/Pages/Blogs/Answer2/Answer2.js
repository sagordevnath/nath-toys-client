import React from "react";
import Card from 'react-bootstrap/Card'

const Answer2 = () => {
  return (
    <div className='answer'>
      <Card>
        <Card.Header className='question' as="h3">When should you use nodejs and when should you use mongodb</Card.Header>
        <Card.Body className='card-body'>
          <Card.Title className='text-primary'>When should you use nodejs</Card.Title>
          <Card.Text>
          You did a great job of summarizing what's awesome about Node.js. My feeling is that Node.js is especially suited for applications where you'd like to maintain a persistent connection from the browser back to the server. Using a technique known as "long-polling", you can write an application that sends updates to the user in real time.
          </Card.Text>          
        </Card.Body>
        <Card.Body className='card-body'>
          <Card.Title className='text-primary'>When should you use mongodb</Card.Title>
          <Card.Text>
          Suppose we are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.
          </Card.Text>          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Answer2;
