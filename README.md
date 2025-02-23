# **Invoice Management App**

This is a **React-based invoice management system** with **user authentication, invoice creation, and PDF handling**. The application allows users to **upload invoices, fill in details, save progress, and generate a PDF preview**. Data persistence is managed using **localStorage**, and authentication is **mocked via localStorage**.

---

## **🚀 Features**

- **User Authentication** (Login using a mock user)
- **Invoice Form with Data Persistence** (Auto-saves in `localStorage` while typing)
- **Tab Navigation for Invoice Sections** (Vendor Details, Invoice Details, Comments)
- **PDF Upload and Display** (Using `react-pdf`)
- **Auto Populate Data** (Fills form with sample data and generates a PDF)
- **Form Validation** (Using `Formik` and `Yup`)

---

## **📦 Tech Stack**

- **Frontend:** React (with `react-router-dom`, `react-toastify`, `formik`, `yup`)
- **PDF Handling:** `react-pdf`, `jspdf`
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Styling:** Tailwind CSS

---

## **🛠 Installation & Setup**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/invoice-management.git
cd invoice-management
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**

```sh
npm start
```

- The app will be available at **`http://localhost:3000`**.

---

## **🛠 Usage**

### **🔑 Login**

1. Open `http://localhost:3000`
2. Enter any **username and password**.
3. Click **Login** (this stores user data in `localStorage`).
4. You will be redirected to the **Dashboard**.

### **📑 Create a New Invoice**

1. Upload a PDF invoice (optional).
2. Fill in invoice details in the form.
3. Data is **automatically saved** in `localStorage` while typing.
4. Click **Submit** to validate and save.

### **✨ Auto Populate Data**

- Click **"Auto Populate Data"** in the header.
- The form gets pre-filled with sample data.
- A PDF is generated dynamically with that data.

### **📂 Upload & View PDFs**

- Click the **"Upload File"** button.
- Select a PDF to view in the embedded preview.

### **🚪 Logout**

- Click the **Logout** button to clear user data.

---

## **📂 Project Structure**

```
📦 invoice-management
├── 📂 src
│   ├── 📂 components
│   │   ├── Header.js
│   │   ├── InvoiceForm.js
│   │   ├── PDFUploader.js
│   │   ├── VendorDetails.js
│   │   ├── InvoiceDetails.js
│   │   ├── Comments.js
│   │   ├── LogoutButton.js
│   ├── 📂 pages
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│── .gitignore
│── package.json
│── README.md
```

---

## **💡 Environment Variables**

No `.env` file is required, as all authentication and data handling are done using **localStorage**.

---

## **🛠 Dependencies Used**

```json
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "react-toastify": "^9.x",
  "formik": "^2.x",
  "yup": "^1.x",
  "react-pdf": "^6.x",
  "jspdf": "^2.x",
  "@fortawesome/react-fontawesome": "^0.2.x",
  "@fortawesome/free-solid-svg-icons": "^6.x"
}
```