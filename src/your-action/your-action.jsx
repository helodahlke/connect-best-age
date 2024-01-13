import React from 'react'


const YourAction = () => {
    const classes = {
        firstClass: 'mt-4 row justify-content-md-center',
        colMd3: 'col-md-3',
      }

    return (<><div class={classes.firstClass}>
            <div class={classes.colMd3}>
                <label for="action-name" class="mb-4">Como é o nome do que você costuma fazer?</label>
                <input type="text" class="form-control" id="action-name" name="action-name"/>
            </div>
            <div class="col-md-3">
                <label for="action-name">Aqui você pode pedir ajuda para alguma pessoa copiar a URL da sua ação favorita e colar abaixo: </label>
                <input type="text" class="form-control" id="action-url" name="action-url"/>
                </div>
        </div><div class="row justify-content-md-center mt-4 ">
                <div class="col-md-3 offset-md-7">
                    <button type="button" class="btn btn-success" id="save" name="save">Salvar</button>
                </div>
            </div></>);
};

export default YourAction;
