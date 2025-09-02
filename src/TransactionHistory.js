import Tablerow from "./Tablerow";

function TransactionHistory({ summary, data, setData, setEditData }) {
  // const [rows, setRows] = useState([]);
  // const [rows, setRows] = useState(data);

  // // whenever summary changes, add it as a new row
  // useEffect(() => {
  //   if (summary) {
  //     setRows((prevRows) => {
  //       return [...prevRows, summary];
  //     });
  //   }
  // }, [summary]);
  // console.log(data[data.length - 1]);
  // console.log(rows);

  return (
    <div>
      <table className="transaction-table">
        <thead>
          <tr className="table-header">
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody id="transactionTable">
          {data.map((row, index) => (
            <Tablerow
              key={index}
              summary={row}
              data={data}
              setData={setData}
              setEditData={setEditData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
