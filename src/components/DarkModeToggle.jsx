import styles from "./DarkModeToggle.module.css";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/darkmodeSlice";

const DarkModeToggle = () => {
  const darkmodeFlag = useSelector(
    (state) => state.darkmodeReducer.darkmodeFlag
  );

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(
      toggleDarkMode({
        type: "darkmode/toggleDarkMode",
      })
    );
  };

  return (
    <>
      <div className="flex items-center mr-4">
        <label className={`${styles.switch}`}>
          <input type="checkbox" onChange={handleChange} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>

        {darkmodeFlag ? (
          <FaMoon className="text-2xl ml-3" />
        ) : (
          <FaSun className="text-2xl ml-3" />
        )}
      </div>
    </>
  );
};

export default DarkModeToggle;
