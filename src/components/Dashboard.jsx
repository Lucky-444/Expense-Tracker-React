import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseChart from "./ExpenseChart";
import ExpenseForm from "./ExpenseForm";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Expense summary */}
      <ExpenseSummary />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          {/* Expense Chart */}
          <ExpenseChart />
        </div>

        <div>
          {/* Expense Form */}
          <ExpenseForm />
        </div>
      </div>

      <ExpenseList />
    </div>
  );
};

export default Dashboard;
