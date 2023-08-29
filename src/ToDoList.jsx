import React, { useState } from "react";
import { ReactDOM } from "react";
import ToDoLi from "./ToDoLi";

const ToDoList = () =>{
    
    const [showProduct, setProduct] = useState();
    const [showProductList, setProductList] = useState([]);

    const inputProductValu = (event) =>{
        setProduct(event.target.value);
       // console.log(event.target.value);
    }
    

    const OnSubmitToDo = () =>{
      //  submitEventToDo.preventDefault();
      setProductList((oldProduct) =>{
        return[...oldProduct, showProduct];
      });
      setProduct("");
    };
// Delete 
    const deleteProduct = (id) =>{
      //console.log("delete");
      setProductList((oldProduct) => {
        return oldProduct.filter((arrElem, indexS) => {
          return indexS !== id; });
      });
  };

  //green color
  const [line, setLine] =useState(false);
  const checkComplet = () => {
      setLine(true);
  };

    return(
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-3 col-md-3'></div>
        <div className='col-6 col-md-6'>
          <div className="header">
            <h2 className="text-center">Management App</h2>

            <input type="text" placeholder="Add product" value={showProduct} onChange={inputProductValu} />
            <button className="btn" onClick={OnSubmitToDo}> + </button>
            </div>
            <ul className="fa-ul" style={{padding:"0px", margin:"0"}}>              
                {showProductList.map((productvalue, indexS)=>{
                  return <ToDoLi id = {indexS} key={indexS} text={productvalue} onSelect={deleteProduct} />;
                }
                )}
            </ul>
        </div>
        <div className='col-3 col-md-3'></div>
       </div>
    </div>
    </>
    );
}

export default ToDoList;