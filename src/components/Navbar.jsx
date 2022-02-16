import React from 'react'
import { useSelector } from 'react-redux'
import Sun from "../img/sun.png";
import Moon from "../img/moon.png";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../reduxFolder/action';

const Navbar = () => {
  const dispatch = useDispatch();
  const {dark, light} = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector(state => state.amount)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Redux Bank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li><img src={Sun} alt="sun" style={{height:"20px", width: "20px", cursor:"pointer", marginRight:"10px"}} onClick={()=>light("white")}/></li>
       <li><img src={Moon} alt="moon" style={{height:"20px", width: "20px", cursor:"pointer"}} onClick={()=>dark("black")}/></li>
      </ul>
       <div>
           <button className='btn btn-info'>Account Balance: {amount}</button>
       </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar