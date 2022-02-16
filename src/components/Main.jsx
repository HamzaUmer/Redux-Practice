import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from "../reduxFolder/action"
import "./main.css"

const Main = () => {
  const dispatch = useDispatch();
  const {deposit, withdraw} = bindActionCreators(actionCreators, dispatch);
  const theme = useSelector(state=> state.theme)
  return (
    <>
    <div className= "container my-4" style={theme}>
    <h1>Deposit/Withdraw Money</h1>
    <button type="button" class="btn btn-warning mx-2" onClick={()=> withdraw(1000)}>-</button>
     Amount
    <button type="button" class="btn btn-warning mx-2" onClick={()=> deposit(1000)}>+</button>
    </div>
    </>
  )
}

export default Main