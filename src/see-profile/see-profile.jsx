import React, { useEffect, useState } from "react";
import './see-profile.css';
import getUser from './see-profile.service'

const apiFirst = async () => {
    const classes = {
        nameSquare: 'name-square col-md-2',
        descriptionSquare: 'description-square col-md-8',
        userProfile: 'user-profile',
        row: 'row'
    }
    
    const response = await getUser();
    console.log("response")
    console.log(response)
    const toRender = [];
    if (!response) return;
    const userList = response.data;
    console.log("userList")
    console.log(userList)
    for(let a in userList){
        console.log("a")
        console.log(a)
        toRender.push(<div class="container">
            <div class={classes.row} key={userList[a].id}>
                <div class="col-md-2">
                    <img id="user-pic" class={classes.userProfile} src="https://envolverde.com.br/wp-content/uploads/idosocapa.jpg" alt="sim"/> 
                </div>
                <div class={classes.nameSquare}>
                    <h5>Olá, meu nome é: {userList[a].name}</h5>
                </div>
            </div>
            <br />
            <div class={classes.row}>
                <div class={classes.descriptionSquare}>
                    <h5>Sobre mim: {userList[a].description}</h5>
                    <h5>Gostaria de um(a) amigo(a) para falar sobre: carros</h5>
                </div>
            </div>
        </div> )
    }


    console.log("toRender")
    console.log(toRender)



        return toRender
    };
    



const SeeProfile = () => {
    
      
      let getUser =apiFirst()
     return (<div>{getUser}</div>);
    
};

export default SeeProfile;