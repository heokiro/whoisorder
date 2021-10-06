import React from 'react'
import PeopleBirth from './PeopleBirth';

function People({name, image, birth, header}) {

  return (
    <>
     <img src ={image} />
     <PeopleBirth 
        birth={birth}
        header={header}  />
     <div>{name}</div> 
     </>
  )
}

export default People;