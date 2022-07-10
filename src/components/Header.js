// import React from 'react' -> used to be required for every react component

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

  const onClick = () => {
    console.log('Click')
  }  
  return (
    <header class='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}></Button>
        {/* <Button color='blue' text='Chich'></Button>
        <Button color='red' text='Em'></Button> */}

    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
    color: 'steelblue'
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
/* const headingStyle = {
    color: 'red', backgroundColor: 'black'
} */

export default Header