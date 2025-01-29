import React from 'react';

const Payroll = () => {
  return (
    <div>
      <h1>Payroll</h1>
      <p>Welcome to the Payroll department. Here, you can find resources and training modules related to payroll processing.</p>

      <h2>Training Modules</h2>
      <ul>
        <li><a href="/payroll/payroll-processing">Payroll Processing</a></li>
        <li><a href="/payroll/tax-compliance">Tax Compliance</a></li>
        <li><a href="/payroll/benefits-management">Benefits Management</a></li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li><a href="/payroll/policies">Payroll Policies</a></li>
        <li><a href="/payroll/guidelines">Guidelines</a></li>
        <li><a href="/payroll/tools">Tools</a></li>
      </ul>

      <h2>Feedback</h2>
      <p>We value your feedback. Please fill out the <a href="/payroll/feedback-form">Payroll Feedback Form</a>.</p>
    </div>
  );
};

export default Payroll;
