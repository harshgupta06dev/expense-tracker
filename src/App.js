import Heading from "./Heading";
import Summary from "./Summary";
import FormSection from "./FormSection";
import TransactionHistory from "./TransactionHistory";
import ExpensePieChart from "./ExpensePieChart";
import { useEffect, useState } from "react";
function App() {
  const [summary, setSummaryData] = useState();
  const [data, setData] = useState([]);
  const [edit, setEditData] = useState();
  useEffect(
    function () {
      if (summary) {
        setData((prevRows) => [...prevRows, summary]);
      }
    },
    [summary]
  );

  return (
    <div className="container">
      <Heading />
      <FormSection
        setSummaryData={setSummaryData}
        edit={edit}
        setData={setData}
        data={data}
        setEditData={setEditData}
      />
      <Summary summary={summary} data={data} />
      <TransactionHistory
        summary={summary}
        data={data}
        setData={setData}
        setEditData={setEditData}
      />
      <ExpensePieChart expenses={data} />
    </div>
  );
}

export default App;
