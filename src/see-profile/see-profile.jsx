import React from "react";
import './see-profile.css';
const SeeProfile = () => {
    const classes = {
        nameSquare: 'name-square col-md-2',
        descriptionSquare: 'description-square col-md-8',
        userProfile: 'user-profile',
        row: 'row'
      }

      return (<div>
            <div class="container">
                <div class={classes.row}>
                    <div class="col-md-2">
                        <img id="user-pic" class={classes.userProfile} src="https://envolverde.com.br/wp-content/uploads/idosocapa.jpg" alt="sim"/> 
                    </div>
                    <div class={classes.nameSquare}>
                        <h5>Olá, meu nome é: Fulano</h5>
                    </div>
                </div>
                <br />
                <div class={classes.row}>
                    <div class={classes.descriptionSquare}>
                        <h5>Sobre mim: Eu gosto de passear no parque e assistir novela</h5>
                        <h5>Gostaria de um(a) amigo(a) para falar sobre: carros</h5>
                    </div>
                </div>
            </div>
      </div>);
    
};

export default SeeProfile;