import React from "react";
import Table from "react-bootstrap/Table";
import "./Answer1.css";

const Answer1 = () => {
  return (
    <div className="answer">
      <h3 className="question">Difference between javascript and nodejs</h3>
      <Table
        className="cardBody"
        striped
        bordered
        hover
        size="sm"
        responsive="sm"
      >
        <thead>
          <tr>
            <th>Features</th>
            <th>JavaScript</th>
            <th>Node Js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition</td>
            <td>
              It is an open-source, cross-platform, interpreted, lightweight
              scripting programming language that is used to develop dynamic and
              web applications.
            </td>
            <td>
              It is a cross-platform, open-source JavaScript runtime environment
              that allows JavaScript to be run on the server.
            </td>
          </tr>
          <tr>
            <td>Type</td>
            <td>
              It is a programming language. It works in any browser that has a
              proper browser engine.
            </td>
            <td>
              It's a JavaScript interpreter and environment with some valuable
              libraries that JavaScript programming can use separately.
            </td>
          </tr>
          <tr>
            <td>Dedicated Server</td>
            <td>It is generally used on the client-side server.</td>
            <td>It is generally used on the server-side.</td>
          </tr>
          <tr>
            <td>Community</td>
            <td>All the JavaScript is not important to the node community.</td>
            <td>All node projects represent the JavaScript community.</td>
          </tr>
          <tr>
            <td>Used for</td>
            <td>It is designed to build network-centric applications.</td>
            <td>
              It's designed for data-intensive real-time applications that run
              on several platforms.
            </td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>
              It's a newer version of the ECMA script that runs on Chrome's V8
              engine, which is written in C++.
            </td>
            <td>It uses C, C++, and JavaScript.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Answer1;
