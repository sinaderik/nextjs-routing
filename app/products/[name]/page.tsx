import React from 'react'

interface Params {
    name: string;
  }

const product = ({params}:{ params: Params }) => {
  return (
    <h3>This is a {params.name}</h3>
  )
}

export default product