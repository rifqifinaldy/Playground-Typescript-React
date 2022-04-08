import { Button } from '@mui/material';
import {FC} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';

interface Props {
    count : number;
    increment: ()=>void;
}

const DashboardChildren:FC<Props> = ({count, increment}) => {
  
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)

  return (
    <div>
        DashboardChildren
        <h1>{amount}</h1>
        <Button onClick={() => depositMoney(1000)} variant="contained">Deposit</Button>
        <Button onClick={() => withdrawMoney(500)} variant="contained">Withdraw</Button>
        <Button onClick={() => bankrupt()} variant="contained">Bankrupt</Button>
    </div>
  )
}

export default DashboardChildren