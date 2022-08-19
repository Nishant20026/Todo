import "./App.css";
import React, { useState } from "react";
function App() {
  // const [inputList, setInputList] = useState([]);
  // const [list, setList] = useState([]);

  // const OnChangeTask = (event) => {
  //   setInputList(event.target.value);
  // };

  // function onClickTask(e) {
  //   e.preventDefault();
  //   e.target.parentNode[0].value="";
  //   console.log(e);
  //   setList((e) => {
  //     return [...e, inputList];
  //   });

  //}
  const [inputList, setInputList] = useState("");
  const [list, listItems] = useState([]);
  let OnChangeTask = (event) => {
    let x = event.target.value;

    setInputList(x);
  };
  let dblClk=(e)=>{
    e.target.style.cursor="text";
  };
  let onClickTask = (event) => {
    event.preventDefault();
    console.log(event);
    if (event.target.parentNode[0].value != "") {
      listItems((event) => {
        //console.log(event);
        return [...event, inputList];
      });
      setInputList("");
    } else alert("Please add Task!");
  };
  let deleteIt = (event) => {
    //console.log(event.currentTarget);
    event.currentTarget.parentNode.parentNode.remove();
  };
  return (
    <div className="main">
      <div className="sMain">
        <form>
          <input
            className="input"
            type="text"
            value={inputList}
            placeholder="Start adding task..."
            onChange={OnChangeTask}
          />
          <button className="btn" onClick={onClickTask}>
            Add
          </button>
        </form>
      </div>
      <div
        style={{ marginLeft: "450px", wordWrap: "break-word", width: "600px"}}
      >
        {list.map((li, key) => {
          return (
            <div className="fin" key={key} id={'id'+key}>
             
                <div style={{display:"flex"}}>
                  <input type="checkbox" className="in"></input>
                  <label forHTML="cbox3"> <input defaultValue={li} className="inpt" onDoubleClick={dblClk}  style={{background:"transparent",outline:"none", border:"none" ,cursor:"default" }}></input> </label>
                </div>
              
            
              <div className="flt">
                <button className="btn2"   onClick={deleteIt}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
