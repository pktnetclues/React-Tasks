import { useState } from "react";

export default function CalFun() {
  const [output, setOutput] = useState();

  const calculate = () => {
    result = "";
    setOutput(eval(result));
  };

  return (
    <>
      <div>
        <form className="form">
          <p>{output}</p>

          <div>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="7"
              type="button"
              className="btn btn-light"
            >
              7
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="8"
              type="button"
              className="btn btn-light"
            >
              8
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="9"
              type="button"
              className="btn btn-light"
            >
              9
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="/"
              type="button"
              className="btn btn-light"
            >
              /
            </button>
          </div>
          <div>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="4"
              type="button"
              className="btn btn-light"
            >
              4
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="5"
              type="button"
              className="btn btn-light"
            >
              5
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="6"
              type="button"
              className="btn btn-light"
            >
              6
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="*"
              type="button"
              className="btn btn-light"
            >
              *
            </button>
          </div>
          <div>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="1"
              type="button"
              className="btn btn-light"
            >
              1
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="2"
              type="button"
              className="btn btn-light"
            >
              2
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="3"
              type="button"
              className="btn btn-light"
            >
              3
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="-"
              type="button"
              className="btn btn-light"
            >
              -
            </button>
          </div>
          <div>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="%"
              type="button"
              className="btn btn-light"
            >
              %
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="0"
              type="button"
              className="btn btn-light"
            >
              0
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="="
              type="button"
              className="btn btn-light"
            >
              =
            </button>
            <button
              onClick={(e) => onClickBtn(e.target.value)}
              value="+"
              type="button"
              className="btn btn-light"
            >
              +
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
