import React from 'react';
import Button from '@mui/material/Button';
//import './index.css';
// Define custom styles using makeStyles hook from Material-UI

// ButtonInterface component
const ButtonInterface = () => {
  const classes = {
    row: 'row',
    rowMb5: 'row mb-5',
    btnConfig: '"btn btn-info btn-lg rounded-5',
    colMd10: 'col-md-10'
  }
  // Handle button click events
  const handleClick = (buttonName) => {
    // Implement button click logic here
    console.log(`Button ${buttonName} clicked`);
  };

  return (
    <>
    <div class="row">
      <div class={classes.colMd10}>
        <Button className={classes.btnConfig}
          variant="contained"
          color="primary"
          onClick={() => handleClick('Button 1')}
        >
          Clique neste botão para verificar como o seu <br /> perfil está sendo exibido para outras pessoas
        </Button>
      </div>
    </div>
    <div class="row">
        <div class={classes.colMd10}>
          <Button
            variant="contained"
            className={classes.btnConfig}
            onClick={() => handleClick('Button 2')}
          >

            Clique neste botão para ver as pessoas que você pode vir a ter uma amizade
          </Button>
        </div>
      </div>
      <div class="row">
        <div class={classes.colMd10}>
          <Button
            variant="contained"
            color="primary"
            className={classes.btnConfig}
            onClick={() => handleClick('Button 3')}
          >
            Clique neste botão para ver seus amigos e conversar com eles
          </Button>
        </div>
      </div>
      <div class="row">
        <div class={classes.colMd10}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnConfig}
            onClick={() => handleClick('Button 4')}
          >
            CLIQUE NESTE BOTÃO PARA ACESSAR suas ações favoritas
          </Button>
        </div>
      </div></>
  );
};

export default ButtonInterface;
