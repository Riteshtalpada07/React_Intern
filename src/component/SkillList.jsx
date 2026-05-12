import React from 'react'
import SkillBadge from './SkillBadge';

const SkillList = (props) => {

  return (
    props.skill.map( function (elem){
      console.log(elem);
      return <SkillBadge name = {elem.name} level = {elem.level} />
    }
  )
)
}

export default SkillList