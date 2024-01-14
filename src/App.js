import React from 'react';
import './App.css';

import ButtonInterface from './index/index';
//import Conversation from './conversation/conversation';
import SeeProfile from './see-profile/see-profile';
//import YourAction from './your-action/your-action';
//import Conversation from './conversation/conversation';
//import TalkToFriends from './talk-to-friends/talk-to-friends';
//import TalkToNewPeople from './talk-to-new-people/talk-to-new-people';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="App">
             <SeeProfile />
          </div>
      </header>
    </div>
  );
}

export default App;
//<h1>Bem vindo! Escolha o que deseja fazer agora:</h1>
//<ButtonInterface /> {/* Render ButtonInterface component */}
//<ConversationInterface/> {}
//<SeeProfile/>
