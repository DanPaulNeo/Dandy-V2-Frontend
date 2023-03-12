import React from 'react'
import config from '../../Config/config';

function HomePage() {
  return (
    <div>
      <h1>This is home page</h1>
      <h1>ENV : {config.environment}</h1>
    </div>
  )
}

export default HomePage