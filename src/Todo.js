import { useState } from "react";
import "./App.css";
// import Button/ from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
function Todo() {
  const [data, setData] = useState([])
  const [newdata, setNewdata] = useState('');
  const change = () => {
    if(newdata.length>0){
      

      setData([...data, newdata.toUpperCase()])
      setNewdata('')
    }

  }
  function deleteHandle(index) {

    const newtask = [...data]
    newtask.splice(index, 1)
    setData(newtask)
  

  }
  
  return (
    <>

<h1>plzz enter lower case and see magic!!!!!!!!</h1>
      <div className="cont">
        <input type="text" value={newdata} onChange={e => { setNewdata(e.target.value) }} placeholder="add text"></input>
        <button onClick={change} className="ad" >add</button>
        <div className="list">

          <ul>
            {data.map((todo, index) => (
              <li key={index}  >{todo}
                <button onClick={() => deleteHandle(index)}  className="but"> &nbsp;delete</button>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Todo;