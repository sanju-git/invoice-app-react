import { useState, useEffect } from "react";
import Header from "../components/Header";
import PDFUploader from "../components/PDFUploader";
import InvoiceForm from "../components/InvoiceForm";
import jsPDF from "jspdf";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("vendor");
  const [formData, setFormData] = useState({
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
  });

  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    return () => {
      if (pdfFile) {
        URL.revokeObjectURL(pdfFile);
      }
    };
  }, [pdfFile]);

  const handlePopulateData = () => {
    const sampleData = {
      vendorName: "ABC Corp",
      purchaseOrderNumber: "PO-12345",
      invoiceNumber: "INV-67890",
      invoiceDate: "2024-02-23",
      totalAmount: "5000",
      paymentTerms: "Credit Card",
      invoiceDueDate: "2024-03-01",
      glPostDate: "2024-02-25",
      invoiceDescription: "Consulting services",
      lineAmount: "5000",
      department: "Finance",
      account: "456789",
      location: "New York",
      expenseDescription: "Business expenses",
      comments: "Urgent processing required",
    };

    setFormData(sampleData);

    if (pdfFile) {
      URL.revokeObjectURL(pdfFile);
      setPdfFile(null);
    }

    setTimeout(() => {
      const doc = new jsPDF();
      doc.text("Invoice Details", 20, 20);
      Object.entries(sampleData).forEach(([key, value], index) => {
        doc.text(`${key}: ${value}`, 20, 30 + index * 10);
      });

      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfFile(pdfUrl);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <Header
        activeSection={activeSection}
        handlePopulateData={handlePopulateData}
      />
      <div className="p-6 grid grid-cols-2 gap-6 w-full">
        <div className="w-full">
          <PDFUploader pdfFile={pdfFile} setPdfFile={setPdfFile} />
        </div>
        <div className="w-full" style={{ height: "85vh" }}>
          <InvoiceForm
            formData={formData}
            setFormData={setFormData}
            setActiveSection={setActiveSection}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
