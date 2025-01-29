import React from 'react';
import { Link } from 'react-router-dom';

const BackOffice = () => {
  return (
    <div>
      <h1>Back Office</h1>
      <p>Welcome to the Back Office section. Here, you can find resources and training modules for various departments.</p>
      <ul>
        <li><Link to="/backoffice/hr">Human Resources</Link></li>
        <li><Link to="/backoffice/it">Information Technology</Link></li>
        <li><Link to="/backoffice/accounting">Accounting</Link></li>
      </ul>
    </div>
  );
};

export default BackOffice;
