import React from 'react'
import SkillList from './component/SkillList';

const App = () => {
  const skills = [{name:'Js',level:'95'},{name:'React',level:'80'},{name:'Node',level:'85'},{name:'MongoDB',level:'90'}];
  const name = import.meta.env.VITE_INTERN_NAME;

  return (
  <>
  <h1>Hello,I'm {name} </h1>
  <SkillList skill = {skills} />
  </>
  
    
  )
}

export default App