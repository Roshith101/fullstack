import PropTypes from'prop-types'

import React from 'react'

const UserLayout = ({children}) => {
  return (
    <div className="user_container">
    <header>
    
    </header>
    <main>
      {children}
    </main>
    <footer>
    
    </footer>
    </div>
  )
}
UserLayout.PropTypes={
  children:PropTypes.node.isRequired
}

export default UserLayout