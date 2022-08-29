import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import SelectOtherProps from '../Select/Select';
import VariableWidth from '../Tooltip/Tooltip';
import { useEffect, useState } from 'react';

const FamilyMember=(props)=>{
  const {member,level=10,changeState}=props;
  const [state,setState]=useState('');


  useEffect(()=>{
    changeState(state);

    const interval=setTimeout(()=>{
      setState('default')
    },5000);
     
    return ()=>{
      clearTimeout(interval);
    }
    
  },[state,changeState]);
  
  const MemberName={
    border:'none',
  }
  const MemberInfo={
    border:'none',
    textAlign:'right'
  }

if(member.isMother){
  return(
    <>
    <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
            >  
              <TableCell style={{paddingLeft:`${level}px`,display:'flex',alignItems:'center',gap:'10px'}} component="th" scope="row">
                <img src={member.imageUrl} width='30px' height='30px' alt={member.imageUrl}/>
                <span>
                  <input style={MemberName} 
                         defaultValue={member.name} 
                        //  onFocus={()=>setState('info')} 
                         onBlur={()=>setState('success')}/>
                </span>
              </TableCell>
              <TableCell  align="right">
                <SelectOtherProps gen={member.gender} onFocus={()=>setState('info')}/>
              </TableCell>
              <TableCell align="right">
                <input style={MemberInfo}
                       defaultValue={member.birth} 
                      //  onFocus={()=>setState('info')} 
                       onBlur={()=>setState('success')}/>
              </TableCell>
              <TableCell align="right">
                <VariableWidth textLine={member.birthLocation} />
              </TableCell>
              <TableCell align="right">
                <input style={MemberInfo} 
                       defaultValue={member.death} 
                      //  onFocus={()=>setState('info')} 
                       onBlur={()=>setState('success')}/>
              </TableCell>
              <TableCell align='right'>
                <VariableWidth textLine={member.deathLocation} />
              </TableCell>
              <TableCell align='right'>
                <input style={MemberInfo} 
                       defaultValue={member.marriage} 
                      //  onFocus={()=>setState('info')} 
                       onBlur={()=>setState('success')}/>
              </TableCell>
              <TableCell align='right'>
                <input style={MemberInfo}
                       defaultValue={member.spouse} 
                      //  onFocus={()=>setState('info')} 
                       onBlur={()=>setState('success')}/>
              </TableCell>
            </TableRow>
            
            {member.child.map((children)=>{
              return <FamilyMember key={children.birthLocation} member={children} level={level+20} changeState={props.changeState}/>
            })}
            
    </>
  )
}else{
  return(
    <>
    <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{paddingLeft:`${level}px`,display:'flex',alignItems:'center',gap:'10px'}} component="th" scope="row">
              <img src={member.imageUrl} width='30px' height='30px'alt={member.imageUrl} /> 
              <span><input style={MemberName} defaultValue={member.name} onBlur={()=>setState('success')}/></span>
              </TableCell>
              <TableCell  align="right">
                <SelectOtherProps gen={member.gender}/>
              </TableCell>
              <TableCell align="right">
                <input style={MemberInfo} 
                       defaultValue={member.birth} 
                      //  onFocus={()=>setState('info')} 
                       onBlur={()=>setState('success')}/>
              </TableCell>
              <TableCell align="right">
                <VariableWidth textLine={member.birthLocation}/>
              </TableCell>
              <TableCell align="right">
                <input style={MemberInfo} 
                       defaultValue={member.death}
                      //  onFocus={()=>setState('info')} 
                       onBlur={()=>setState('success')} />
              </TableCell>
              <TableCell align='right'>
                <VariableWidth textLine={member.deathLocation}/>
              </TableCell>
              <TableCell align='right'>
                <input style={MemberInfo} 
                       defaultValue={member.marriage} 
                       onBlur={()=>setState('success')}/>
              </TableCell>
              <TableCell align='right'>
                <input style={MemberInfo} 
                       defaultValue={member.spouse} 
                      //  onFocus={()=>setState('info')} 
                       onBlur={()=>setState('success')}
                       />
              </TableCell>
            </TableRow>
    </>
  )
}
}

export default FamilyMember