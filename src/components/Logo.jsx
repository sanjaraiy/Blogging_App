import React from 'react'

function Logo({width='100px'}) {
  return (
    <div>
      <img src="Blogger-Logo.png" width={`${width}`} alt="Blogger-Logo.png" />
    </div>
  )
}

export default Logo