import React from 'react';
import Table from 'react-bootstrap/Table'

const Answer3 = () => {
    return (
        <div className='answer'>
            <h3 className='question'>Differences between sql and  databases.</h3>
            <Table className='card-body' striped bordered hover size="sm" responsive="sm">
    <thead>
      <tr>
        <th>Features</th>
        <th>sql</th>
        <th>nosql</th>        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data Storage Model</td>
        <td>Tables with fixed rows and columns</td>
        <td>Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges.</td>        
      </tr>
      <tr>
        <td>Development History</td>
        <td>Developed in the 1970s with a focus on reducing data duplication.</td>
        <td>Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices.</td>        
      </tr>
      <tr>
        <td>Schemas</td>
        <td>Rigid</td>
        <td>Flexible</td>        
      </tr>
      <tr>
        <td>Scaling</td>
        <td>Vertical (scale-up with a larger server)</td>
        <td>Horizontal (scale-out across commodity servers)</td>        
      </tr>
      <tr>
        <td>Joins</td>
        <td>Typically required</td>
        <td>Typically not required</td>        
      </tr>
      <tr>
        <td>Examples</td>
        <td>Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</td>
        <td>Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune</td>        
      </tr>
    </tbody>
  </Table>
        </div>
    );
};

export default Answer3;