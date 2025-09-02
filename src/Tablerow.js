function Tablerow({ summary, data, setData, setEditData }) {
  if (!summary) return;
  function handleDeleteData(e) {
    setData((objData) =>
      objData.filter((objData) => objData.id !== summary.id)
    );
    setEditData({
      description: "",
      amount: "",
      type: "income",
      category: "",
      id: "",
      editf: false,
    });
  }
  function handleEditData(e) {
    // console.log(summary);
    setEditData({
      description: summary.description,
      amount: summary.amount,
      type: summary.type,
      category: summary.category,
      id: summary.id,
      edit: true,
    });
  }
  return (
    <tr className="table-roww">
      <td className="description-cell">{summary.description}</td>
      <td>{summary.amount}</td>
      <td>{summary.type}</td>
      <td>{summary.category}</td>
      <td>{summary.date}</td>
      <td>
        <button onClick={() => handleEditData()}>Edit</button>
        <button onClick={() => handleDeleteData()}>Delete</button>
      </td>
    </tr>
  );
}

export default Tablerow;
