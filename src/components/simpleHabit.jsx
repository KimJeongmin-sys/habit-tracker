import React, {
  Component,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";

const SimpleHabit = props => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, []); //두번째 인자인 배열에 변수를 넣으면 해당 변수가 update될 때 호출(공백이면 update될 때 호출이 안됨.)

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
