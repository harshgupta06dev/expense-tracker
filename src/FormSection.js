import TransactionForm from "./TransactionForm";

function FormSection({ setSummaryData, edit, data, setData, setEditData }) {
  return (
    <div className="form-section">
      <h2 className="section-title">Add Transaction</h2>
      <TransactionForm
        setSummaryData={setSummaryData}
        edit={edit}
        setData={setData}
        data={data}
        setEditData={setEditData}
      />
    </div>
  );
}

export default FormSection;
