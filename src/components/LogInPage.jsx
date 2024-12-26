import { useFormik } from "formik";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const initialValues = {
  usernameOrEmail: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const error = {};

  if (!values.usernameOrEmail) {
    error.usernameOrEmail = "Enter username or email.";
  }

  if (!values.password) {
    error.password = "Password is required.";
  }

  return error;
};

const LogInPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="dark:bg-black dark:text-black h-[85vh]">
        <div className="flex flex-row justify-center items-center px-20 py-8">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="flex flex-row items-center">
              <label
                htmlFor="usernameOrEmail"
                className="mr-3 text-2xl dark:text-white"
              >
                <FaRegUser />
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                placeholder="Enter username"
                onChange={formik.handleChange}
                value={formik.values.usernameOrEmail}
                onBlur={formik.handleBlur}
                className="h-[3rem] w-[20rem] border rounded-3xl text-lg px-5"
              />
            </div>
            {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
              <p className="text-sm text-red-700 ml-12 mt-2">
                {formik.errors.usernameOrEmail}
              </p>
            ) : null}

            <div className="flex flex-row items-center my-2">
              <label
                htmlFor="password"
                className="mr-3 text-2xl dark:text-white"
              >
                <RiLockPasswordLine />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                className="h-[3rem] w-[20rem] border rounded-3xl text-lg px-5"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm text-red-700 ml-12 mt-2">
                {formik.errors.password}
              </p>
            ) : null}

            <div className="flex justify-center">
              <button
                className="dark:text-white rounded-3xl px-3 py-2 w-full mt-2 dark:bg-green-700 text-lg font-semibold"
                type="submit"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
