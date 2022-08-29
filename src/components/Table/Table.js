import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FamilyMember from './TableRow';
import IntegrationNotistack from '../Snackbar/Snackbar';



export default function BasicTable({familyMember}) {
  const [state,setState]=React.useState('');
  const userStateHandler=(val)=>{
    setState(val);
  }
  return (
    <div>
      <IntegrationNotistack changeState={state}/>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'blue',fontWeight:'bold'}}>Parents & Siblings</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">Gender</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">Birth</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">BirthLocation</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">Death</TableCell>
            <TableCell style={{fontWeight:'bold'}} align='right'>Death Location</TableCell>
            <TableCell style={{fontWeight:'bold'}} align='right'>Marriage</TableCell>
            <TableCell style={{fontWeight:'bold'}} align='right'>Spouse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {familyMember.map((member) => (
             <FamilyMember key={member.name} member={member} changeState={userStateHandler} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
