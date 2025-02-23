import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InvoiceDetails = ({ formData, errors, handleChange }) => {
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <FontAwesomeIcon
          style={{
            color: "#4683c1",
            height: 18,
            width: 18,
            cursor: "hover",
            paddingTop: 5,
          }}
          icon={faReceipt}
        />
        &nbsp;&nbsp;&nbsp;
        <h2 className="text-xl font-semibold mb-2">Invoice Details</h2>
      </div>

      <h4 className="text-l font-semibold mb-2">General Information</h4>

      <label className="block mb-2">
        Purchase Order Number<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="purchaseOrderNumber"
        value={formData.purchaseOrderNumber}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        placeholder="Enter Purchase Order Number"
      />
      {errors.purchaseOrderNumber && (
        <div className="text-red-500 text-sm">{errors.purchaseOrderNumber}</div>
      )}

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">
            Invoice Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            placeholder="Enter Invoice Number"
          />
          {errors.invoiceNumber && (
            <div className="text-red-500 text-sm">{errors.invoiceNumber}</div>
          )}
        </div>

        <div className="w-1/2">
          <label className="block mb-2">
            Invoice Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="invoiceDate"
            value={formData.invoiceDate}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {errors.invoiceDate && (
            <div className="text-red-500 text-sm">{errors.invoiceDate}</div>
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">
            Total Amount<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            placeholder="Enter Amount"
          />
          {errors.totalAmount && (
            <div className="text-red-500 text-sm">{errors.totalAmount}</div>
          )}
        </div>

        <div className="w-1/2">
          <label className="block mb-2">
            Payment Terms<span className="text-red-500">*</span>
          </label>
          <select
            name="paymentTerms"
            value={formData.paymentTerms}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          >
            <option value="">Select</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
          {errors.paymentTerms && (
            <div className="text-red-500 text-sm">{errors.paymentTerms}</div>
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">
            Invoice Due Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="invoiceDueDate"
            value={formData.invoiceDueDate}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {errors.invoiceDueDate && (
            <div className="text-red-500 text-sm">{errors.invoiceDueDate}</div>
          )}
        </div>

        <div className="w-1/2">
          <label className="block mb-2">
            GL Post Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="glPostDate"
            value={formData.glPostDate}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {errors.glPostDate && (
            <div className="text-red-500 text-sm">{errors.glPostDate}</div>
          )}
        </div>
      </div>

      <label className="block mb-2">
        Invoice Description<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="invoiceDescription"
        value={formData.invoiceDescription}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      {errors.invoiceDescription && (
        <div className="text-red-500 text-sm">{errors.invoiceDescription}</div>
      )}

      <h2 className="text-xl font-semibold mb-2">Expense Details</h2>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">
            Line Amount<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="lineAmount"
            value={formData.lineAmount}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            placeholder="0.00"
          />
          {errors.lineAmount && (
            <div className="text-red-500 text-sm">{errors.lineAmount}</div>
          )}
        </div>

        <div className="w-1/2">
          <label className="block mb-2">
            Department<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {errors.department && (
            <div className="text-red-500 text-sm">{errors.department}</div>
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">
            Account<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="account"
            value={formData.account}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {errors.account && (
            <div className="text-red-500 text-sm">{errors.account}</div>
          )}
        </div>

        <div className="w-1/2">
          <label className="block mb-2">
            Location<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {errors.location && (
            <div className="text-red-500 text-sm">{errors.location}</div>
          )}
        </div>
      </div>

      <label className="block mb-2">
        Expense Description<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="expenseDescription"
        value={formData.expenseDescription}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      {errors.expenseDescription && (
        <div className="text-red-500 text-sm">{errors.expenseDescription}</div>
      )}
    </div>
  );
};

export default InvoiceDetails;
