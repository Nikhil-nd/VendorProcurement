
import { useState } from "react";
import { submitInvoice } from "../../api/vendorService";

export default function SubmitInvoice() {

  const [form, setForm] = useState({
    poId: "",
    invoiceNumber: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    submitInvoice({
      purchaseOrder: { id: form.poId },
      invoiceNumber: form.invoiceNumber,
      amount: form.amount
    })
      .then(() => alert("Invoice Submitted"))
      .catch(err => console.error(err));
  };

  return (
    <div className="vendor-page-section">
      <h2 className="vendor-title-card">Submit Invoice</h2>

      <div className="vendor-form-card">
        <form
          className="vendor-inline-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            className="vendor-input"
            name="poId"
            placeholder="Purchase Order ID"
            onChange={handleChange}
          />

          <input
            className="vendor-input"
            name="invoiceNumber"
            placeholder="Invoice Number"
            onChange={handleChange}
          />

          <input
            className="vendor-input"
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
          />

          <button className="vendor-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}