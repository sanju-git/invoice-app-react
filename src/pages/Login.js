import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <Formik initialValues={{ username: "", password: "" }} validationSchema={loginSchema} onSubmit={handleLogin}>
          {() => (
            <Form className="space-y-4">
              <div>
                <Field type="text" name="username" placeholder="Username" className="w-full p-2 border rounded" />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;