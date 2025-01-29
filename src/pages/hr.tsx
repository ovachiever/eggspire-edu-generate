import React from 'react';

const HR = () => {
  return (
    <div>
      <h1>Human Resources</h1>
      <p>Welcome to the HR department. Here, you can find resources and training modules related to HR.</p>

      <h2>Training Modules</h2>
      <ul>
        <li><a href="/hr/employee-onboarding">Employee Onboarding</a></li>
        <li><a href="/hr/payroll-processing">Payroll Processing</a></li>
        <li><a href="/hr/benefits-management">Benefits Management</a></li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li><a href="/hr/policies">HR Policies</a></li>
        <li><a href="/hr/guidelines">Guidelines</a></li>
        <li><a href="/hr/forms">Forms</a></li>
      </ul>

      <h2>Feedback</h2>
      <p>We value your feedback. Please fill out the <a href="/hr/feedback-form">HR Feedback Form</a>.</p>
    </div>
  );
};

export default HR;
