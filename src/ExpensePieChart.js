import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28EFF",
  "#FF6384",
];

const ExpensePieChart = ({ expenses }) => {
  // Filter for expenses and aggregate by category
  const aggregatedData = expenses
    .filter((expense) => expense.type === "expense") // Adjust based on your data
    .reduce((acc, expense) => {
      const { category, amount } = expense;
      const existing = acc.find((item) => item.name === category);
      if (existing) {
        existing.value += parseFloat(amount); // Convert string to number
      } else {
        acc.push({ name: category, value: parseFloat(amount) });
      }
      return acc;
    }, []);

  // If no expense data, show a message
  if (aggregatedData.length === 0) {
    return <p>No expenses to display.</p>;
  }

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3>Spending by Category</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={aggregatedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label
        >
          {aggregatedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpensePieChart;
