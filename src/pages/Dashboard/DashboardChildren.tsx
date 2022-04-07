import { Button } from '@mui/material';
import {FC} from 'react'

interface Props {
    count : number;
    increment: ()=>void;
}

const DashboardChildren:FC<Props> = ({count, increment}) => {
  return (
    <div>
        DashboardChildren
        <h1>{count}</h1>
        <Button variant="contained" onClick={increment}>Tambah</Button>
    </div>
  )
}

export default DashboardChildren