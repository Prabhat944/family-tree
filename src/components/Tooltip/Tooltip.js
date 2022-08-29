import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    height:'30px',
    fontSize:'18px'
  },
});


export default function VariableWidth({textLine}) {
  
     const [place,setPlace]=React.useState(textLine);

     const placeText=place.length>14?`${textLine.slice(0,13)}...`:textLine;
  
  return (
    <div>
      <CustomWidthTooltip  title={place}>
        <Button sx={{color:'black',height:'30px'}}>
          <input style={{border:'none',textAlign:'right',margin:'0'}} onChange={(e)=>setPlace(e.target.value)} defaultValue={placeText} />
        </Button>
      </CustomWidthTooltip>
      
    </div>
  );
}
