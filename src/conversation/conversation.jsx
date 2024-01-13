
import React from 'react';
import './conversation.css'

const Conversation = () => {
    const classes = {
        nameSquareLeft: 'name-square col-md-2',
        nameSquareRight: 'name-square col-md-2 offset-md-8',
        userDescription: 'user-description',
        userProfile: 'user-profile', 
        row: 'row'
      }
        console.log("just");

    
    return (<div class="container">
                <div class={classes.row}>
                    <div class={classes.nameSquareLeft}>
                        <img id="user-pic" class={classes.userProfile} src="https://envolverde.com.br/wp-content/uploads/idosocapa.jpg"/> 
                        <h5>Sua amiga Meire disse:</h5>
                    </div> 
                </div>
                <div class={classes.row}>
                    <div class={classes.nameSquareLeft}>
                        <h5>Olá, Joelson, bem vindo aos meus amigos</h5>
                    </div>
                </div>
                <div class={classes.row}>
                    <div class={classes.nameSquareRight}>
                        <img id="user-pic" class={classes.userProfile} src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"/> 
                        <h5>Você disse:</h5>
                    </div> 
                </div>
                <div class={classes.row}>
                    <div class={classes.nameSquareRight}>
                        <h5>Olá, Meire, obrigado você também!</h5>
                    </div>
                </div>
                <div class={classes.row}>
                    <div class={classes.nameSquareLeft}>
                        Sua amiga meire está escrevendo algo para você...
                    </div> 
                </div>
            </div>);
  };
  
  export default Conversation;

  