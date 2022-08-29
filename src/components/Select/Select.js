import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps({gen}) {
  const [gender, setGender] = React.useState(gen);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ Width:'50px',height:'30px' }}>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={gender}
          onChange={handleChange}
          renderValue={(value) => `${value}`}
          style={{fontSize:'15px',height:'30px'}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'M'}>Male</MenuItem>
          <MenuItem value={'F'}>Female</MenuItem>
          <MenuItem value={'O'}>Other</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}
