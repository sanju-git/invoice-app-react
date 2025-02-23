import { useState, useEffect } from "react";
import VendorDetails from "./VendorDetails";
import InvoiceDetails from "./InvoiceDetails";
import Comments from "./Comments";
import { toast } from "react-toastify";

const InvoiceForm = ({ formData, setFormData, setActiveSection }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("invoiceFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [setFormData]); // ✅ Fixed: Added `setFormData` to the dependency array.

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("invoiceFormData", JSON.stringify(updatedFormData));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });

    if (["vendorName", "purchaseOrderNumber"].includes(name)) {
      setActiveSection("vendor");
    } else if (
      [
        "invoiceNumber",
        "invoiceDate",
        "totalAmount",
        "paymentTerms",
        "invoiceDueDate",
        "glPostDate",
        "invoiceDescription",
        "lineAmount",
        "department",
        "account",
        "location",
        "expenseDescription",
      ].includes(name)
    ) {
      setActiveSection("invoice");
    } else if (name === "comments") {
      setActiveSection("comments");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "comments") {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      toast.success("Invoice Submitted");

      const emptyFormData = {
        vendorName: "",
        purchaseOrderNumber: "",
        invoiceNumber: "",
        invoiceDate: "",
        totalAmount: "",
        paymentTerms: "",
        invoiceDueDate: "",
        glPostDate: "",
        invoiceDescription: "",
        lineAmount: "",
        department: "",
        account: "",
        location: "",
        expenseDescription: "",
        comments: "",
      };

      setFormData(emptyFormData);
      localStorage.setItem("invoiceFormData", JSON.stringify(emptyFormData)); // ✅ Fixed: Now correctly resetting localStorage.
      setErrors({});
      setActiveSection("vendor");
    } else {
      toast.error("Mandatory Field(s) are missing. Please fill them.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto pt-0 p-6">
      <VendorDetails
        formData={formData}
        handleChange={handleChange}
        errors={errors}
      />
      <InvoiceDetails
        formData={formData}
        handleChange={handleChange}
        errors={errors}
      />
      <Comments
        formData={formData}
        handleChange={handleChange}
        errors={errors}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default InvoiceForm;