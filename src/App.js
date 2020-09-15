import React, { useState, useEffect } from 'react'
import './App.css';
import Member from './Member'
import TeamMemberForm from './TeamMemberForm'
const initialFormValues = {
  name: '',
  email: '',
  title: '',
}
 function App() {  
  const [teamMembers, setTeamMembers] = useState([]) 
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
   
      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        title: formValues.title,
        badge: formValues.badge,
      }
    //  b) prevent further action if either username or email or role is empty string after trimming
    if (!newMember.name || !newMember.email || !newMember.title) {
      return
    }
    setTeamMembers(teamMembers.concat(newMember))
    setFormValues(initialFormValues)
    
  }
  

  return (

    <div className="App">
      <h1>Team Members</h1>
      <TeamMemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
     
    {
        
        teamMembers.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
    
  );
}

export default App;
