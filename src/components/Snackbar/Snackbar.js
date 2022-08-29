import React, { useEffect } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({changeState}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant)=> {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`This is a ${variant} message!`, { variant });
  };
  useEffect(()=>{
    if(changeState!=='default')
    handleClickVariant(changeState);
    // eslint-disable-next-line
  },[changeState]);
 

  return (
    <React.Fragment>
      {/* <Button onClick={()=>handleClickVariant('success')}>Show success snackbar</Button>
      <Button onClick={()=>handleClickVariant('error')}>Show Failed snackbar</Button> */}
    </React.Fragment>
  );
}

export default function IntegrationNotistack(props) {

  return (
    <SnackbarProvider maxSnack={1}>
      <MyApp changeState={props.changeState}/>
    </SnackbarProvider>
  );
}
