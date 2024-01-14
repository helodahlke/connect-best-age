
import React from 'react';


const ConversationInterface = () => {
    const classes = {
        nameSquare: 'name-square',
        userDescription: 'user-description',
        userProfile: 'user-profile'
      }
        console.log("just");

    
    return (<form>
        <label>
          Name:
          <input type="text" class="form-control" id="action-name" name="action-name"/>
        </label>
        <input type="text" class="form-control" id="action-url" name="action-url"/>
        <input type="submit" value="Submit" />
      </form>);
  };
  
  export default ConversationInterface;

  