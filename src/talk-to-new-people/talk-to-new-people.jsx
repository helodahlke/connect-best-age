import React from 'react';
import './talk-to-new-people.css'

const TalkToNewPeople = () => {
    const classes = {
        userProfile: 'user-profile',
        tableConfig: 'table table-striped table-bordered table-responsive',
        col: 'col',
        btnInfo: "btn btn-info"
      }
     
    return (<div class="container">
                <table class={classes.tableConfig}>
                    <thead>
                    <tr>
                        <th scope="col">Foto do seu possível novo amigo</th>
                        <th scope="col">Nome do seu possível novo amigo</th>
                        <th scope="col">Assuntos que seu possível novo amigo gosta</th>
                        <th scope="col">Você deseja fazer amizade?</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img id="user-pic" class={classes.userProfile} src={"https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"}/> </td>
                        <td>Joelson</td>
                        <td>Gosto de sertanejo e cerveja</td>
                        <td><button type="button" class="btn btn-info">Sim, quero ser amigo de Joelson </button></td>
                    </tr>
                    <tr>
                        <td><img id="user-pic" class={classes.userProfile} src={"https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"}/></td>
                        <td>Monalisa</td>
                        <td>Gosto de Girassóis</td>
                        <td><button type="button" class={classes.btnInfo}>Sim, quero ser amigo de Monalisa  </button></td>
                    </tr>
                    <tr>
                        <td><img id="user-pic" class={classes.userProfile} src={"https://envolverde.com.br/wp-content/uploads/idosocapa.jpg"}/></td>
                        <td>Meire</td>
                        <td>Gosto dos meus netos </td>
                        <td><button type="button" class={classes.btnInfo}>Sim, quero ser amigo de Meire </button></td>
                    </tr>
                    </tbody>
                </table>
            </div>);
  };
  
  export default TalkToNewPeople;
