import { GiCheckMark } from "react-icons/gi";

const Premium = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white flex flex-row justify-center items-center py-10">
        <h1 className="self-center text-2xl font-bold mx-5">
          All Premium plans include
        </h1>
        <div className="mx-5 self-center">
          <ul>
            <li className="my-1 flex items-center">
              <span className="mr-2">
                <GiCheckMark />
              </span>
              <p>Add free music</p>
            </li>
            <li className="my-1 flex items-center">
              <span className="mr-2">
                <GiCheckMark />
              </span>
              <p>Download and listen online</p>
            </li>
            <li className="my-1 flex items-center">
              <span className="mr-2">
                <GiCheckMark />
              </span>
              <p>Play songs in any order</p>
            </li>
            <li className="my-1 flex items-center">
              <span className="mr-2">
                <GiCheckMark />
              </span>
              <p>High quality audio</p>
            </li>
            <li className="my-1 flex items-center">
              <span className="mr-2">
                <GiCheckMark />
              </span>
              <p>Listen with friends in real time</p>
            </li>
            <li className="my-1 flex items-center">
              <span className="mr-2">
                <GiCheckMark />
              </span>
              <p>Organise listening queue</p>
            </li>
            <li className="my-1 flex items-center">
              <span className="mr-2">
                <GiCheckMark />
              </span>
              <p>Listening insights (not in Mini)</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Premium;
