import React, { useState } from "react";
import {
  increment,
  decrement,
  decrementByUser,
  incrementByUser,
} from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux";
export default function CounterAPP() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Decrement
      </button>{" "}
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        name=""
        id=""
      />
      <button
        onClick={() => {
          dispatch(incrementByUser(Number(amount)));
        }}
      >
        Add Amount
      </button>
      <button
        onClick={() => {
          dispatch(decrementByUser(Number(amount)));
        }}
      >
        Less Amount
      </button>
    </div>
  );
}
