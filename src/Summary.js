import { useEffect, useReducer } from "react";
function Summary({ summary, data }) {
  // console.log(summary);
  const intialRender = {
    expense: 0,
    income: 0,
  };
  const f = {
    income: data
      .filter((data) => data.type === "income")
      .reduce((acc, cur) => acc + Number(cur.amount), 0),
    expense: data
      .filter((data) => data.type === "expense")
      .reduce((acc, cur) => acc + Number(cur.amount), 0),
  };

  // function handleAddSummary(state, action) {
  //   switch (action.type) {
  //     case "income":
  //       return {
  //         ...state,
  //         income: Number(summary?.amount) + state.income,
  //       };
  //     case "expense":
  //       return { ...state, expense: Number(summary?.amount) + state.expense };
  //     default:
  //       return state;
  //   }
  // }
  // const [state, dispatch] = useReducer(handleAddSummary, intialRender);

  // useEffect(() => {
  //   if (summary?.type === "income") {
  //     dispatch({ type: "income" });
  //   }
  //   if (summary?.type === "expense") {
  //     dispatch({ type: "expense" });
  //   }
  // }, [summary]);

  return (
    <div className="summary-grid">
      <div className="summary-card income-card">
        <h3 className="summary-title">Total Income</h3>
        <p id="totalIncome" className="summary-value">
          ${f.income === 0 ? "0.00" : f.income}
        </p>
      </div>
      <div className="summary-card expense-card">
        <h3 className="summary-title">Total Expenses</h3>
        <p id="totalExpense" className="summary-value">
          ${f.expense === 0 ? "0.00" : f.expense}
        </p>
      </div>
      <div className="summary-card balance-card">
        <h3 className="summary-title">Balance</h3>
        <p id="balance" className="summary-value">
          ${f.income - f.expense}
        </p>
      </div>
    </div>
  );
}

export default Summary;
