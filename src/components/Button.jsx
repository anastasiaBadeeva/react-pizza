import React from 'react'
import classNames from 'classnames'

 const Button = ({classname,outline,onClick,children}) =>{
    return <button
    onClick= {onClick}
     className = {classNames('button', classname, {'button--outline' : outline})}>
        {children}
        </button>
}
export default Button;