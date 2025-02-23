export const saveFormData = (data) =>
  localStorage.setItem("invoiceData", JSON.stringify(data));
export const loadFormData = () =>
  JSON.parse(localStorage.getItem("invoiceData")) || null;