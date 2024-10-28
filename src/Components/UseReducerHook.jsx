import React, { useReducer } from "react";

export default function UseReducerHook() {
  const initData = {
    Text_1: "",
    Text_2: "",
    Text_3: "",
  };

  function reducerFunction(state,action) {
        switch(action.type){
            case 'cgtext':{
                return{
                    ...state,
                    [action.field]:action.payload
                }
            }
            default:{
                return state;
            }
        }
  }

  const [state, dispatch] = useReducer(reducerFunction, initData);

  function handleCHangeText(e) {
    const { name, value } = e.target; 

    dispatch({
      type: "cgtext",
      field: name,
      payload: value,
    });
  }

  return (
    <div>
      <label htmlFor="">Text 1</label>
      <input
        type="text"
        value={state.Text_1}
        onChange={handleCHangeText}
        name="Text_1"
        id=""
      />

      <label htmlFor="">Text 2</label>
      <input
        type="text"
        value={state.Text_2}
        onChange={handleCHangeText}
        name="Text_2"
        id=""
      />

      <label htmlFor="">Text 3</label>
      <input
        type="text"
        value={state.Text_3}
        onChange={handleCHangeText}
        name="Text_3"
        id=""
      />

      <h1>
        Text 1 : {state.Text_1}<br />
        Text 2 : {state.Text_2}<br />
        Text 3 : {state.Text_3}
      </h1>
    </div>
  );
}
