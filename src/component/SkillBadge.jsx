import React from 'react'

const SkillBadge = (props) => {
    if(props.level >= 90){
        return (
            <h1>{props.name}: {props.level} ⭐</h1>
          )
    }
    else{
        return (
            <h1>{props.name}: {props.level}</h1>
          )
    }
}

export default SkillBadge