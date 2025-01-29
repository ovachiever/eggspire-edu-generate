import React from 'react';

const IT = () => {
  return (
    <div>
      <h1>Information Technology</h1>
      <p>Welcome to the IT department. Here, you can find resources and training modules related to IT.</p>

      <h2>Training Modules</h2>
      <ul>
        <li><a href="/it/network-security">Network Security</a></li>
        <li><a href="/it/software-development">Software Development</a></li>
        <li><a href="/it/data-management">Data Management</a></li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li><a href="/it/documentation">IT Documentation</a></li>
        <li><a href="/it/guidelines">Guidelines</a></li>
        <li><a href="/it/tools">Tools</a></li>
      </ul>

      <h2>Feedback</h2>
      <p>We value your feedback. Please fill out the <a href="/it/feedback-form">IT Feedback Form</a>.</p>
    </div>
  );
};

export default IT;
