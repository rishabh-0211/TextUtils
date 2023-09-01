import React from 'react'

function About(props) {
  return (
    <div className={` p-3 mb-2 text-${
                props.Mode === "light" ? "dark" : "light"
              }`}>About h jiii</div>
  )
}

export default About