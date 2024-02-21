import React, { Component } from 'react'
import {Suspense} from 'react'
import propTypes from 'prop-types'

const LazyLayout = () => {
  return (
   <Suspense fallback="Loading...">
   <Component {...rest}/>
   </Suspense>
  )
}
LazyLayout.propTypes={
  component:propTypes.elementType.isRequired
}

export default LazyLayout