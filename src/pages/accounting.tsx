import React from 'react';

const Accounting = () => {
  return (
    <div>
      <h1>Accounting</h1>
      <p>Welcome to the Accounting department. Here, you can find resources and training modules related to accounting.</p>

      <h2>Training Modules</h2>
      <ul>
        <li><a href="/accounting/invoice-processing">Invoice Processing</a></li>
        <li><a href="/accounting/reconciliation">Reconciliation</a></li>
        <li><a href="/accounting/financial-reporting">Financial Reporting</a></li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li><a href="/accounting/policies">Accounting Policies</a></li>
        <li><a href="/accounting/guidelines">Guidelines</a></li>
        <li><a href="/accounting/tools">Tools</a></li>
      </ul>

      <h2>Feedback</h2>
      <p>We value your feedback. Please fill out the <a href="/accounting/feedback-form">Accounting Feedback Form</a>.</p>
    </div>
  );
};

export default Accounting;
