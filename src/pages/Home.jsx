import React from 'react'

const Home = () => {
  console.log(import.meta.env)
  return (
    <div >Home <p>{import.meta.env.MODE} -sdbjk</p></div>
  )
};

export default Home