import { useState, useEffect } from "react";
function TransactionForm({ setSummaryData, edit, data, setData, setEditData }) {
  // console.log("this is an edit data", edit);
  const intialRender = {
    description: "",
    amount: "",
    type: "income",
    category: "",
  };
  const [form, setFormData] = useState(intialRender);
  const [check, setCheck] = useState();
  useEffect(() => {
    if (edit) {
      setFormData(edit);
    }
  }, [edit]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const lettersOnly = e.target.value.replace(/[^A-Za-z ]/g, "");
    setCheck(e.target.name === "category" ? e.target.value : "");
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "description" ? lettersOnly : value,
    }));
  };
  function handleAddTransaction() {
    if (!form.description || !form.amount || !form.category) {
      // ignore it just for testing
      alert(
        `${!form.description === true ? "description input  " : ""} ${
          !form.amount === true ? "Amount input  " : ""
        } ${
          !form.category === true ? "catagory input" : ""
        } Fielded Must Be Filled`
      );
      return;
    }
    // add a current date when a user add transaction
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0"); // 01, 02, ... 31
    const month = date.toLocaleString("default", { month: "short" }); // Jan, Feb, Mar
    const year = date.getFullYear(); // 2025

    const formattedDate = `${day}-${month}-${year}`;
    form.date = formattedDate;
    form.id = Date.now();
    setSummaryData(form);

    setFormData({
      description: "",
      amount: "",
      type: "income",
      category: "",
    });
  }
  function handleEditTransaction() {
    if (!check) return alert("Expense Category should be filled!");
    console.log("this is will be edit", edit);
    console.log("this is will be form", form);
    if (!form.description || !form.amount || !form.category) {
      // ignore it just for testing
      alert(
        `${!form.description === true ? "description input  " : ""} ${
          !form.amount === true ? "Amount input  " : ""
        }
         ${
           !form.category === true ? "catagory input" : ""
         } Fielded Must Be Filled to the edit data`
      );
      return;
    }
    const editArr = data.filter((data) => data.id !== edit.id);
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0"); // 01, 02, ... 31
    const month = date.toLocaleString("default", { month: "short" }); // Jan, Feb, Mar
    const year = date.getFullYear(); // 2025

    const formattedDate = `${day}-${month}-${year}`;
    form.date = formattedDate;
    setData([...editArr, form]);

    setEditData({
      description: "",
      amount: "",
      type: "income",
      category: "",

      edit: false,
    });
  }

  return (
    <div>
      <form id="transactionForm" className="form-grid">
        <input
          placeholder="Description"
          className="input-field"
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="input-field"
          onChange={handleChange}
          value={form.amount}
        />
        <select
          name="type"
          className="select-field"
          onChange={handleChange}
          value={form.type}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          name="category"
          className="select-field hidden"
          onChange={handleChange}
          value={form.category}
        >
          <option value="">Select Category</option>
          {form.type === "expense" ? (
            <>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>
            </>
          ) : (
            <>
              <option value="Job">Job</option>
              <option value="Bussiness">Bussiness</option>
              <option value="Royalty">Royalty</option>
              <option value="Investment">Investment</option>
              <option value="Other">Other</option>
            </>
          )}
        </select>
        {edit?.edit ? (
          <button
            className="btn-submit"
            type="button"
            onClick={handleEditTransaction}
          >
            Edit Transaction
          </button>
        ) : (
          <button
            className="btn-submit"
            type="button"
            onClick={handleAddTransaction}
          >
            Add Transaction
          </button>
        )}
      </form>
    </div>
  );
}

export default TransactionForm;
