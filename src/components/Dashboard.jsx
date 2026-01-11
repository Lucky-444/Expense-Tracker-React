import React from "react";
import ExpenseSummary from "./ExpenseSummary";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Expense summary */}
      <ExpenseSummary />
    </div>
  );
};

export default Dashboard;
