import React from 'react'
import classNames from 'classnames'

 const Button = ({classname,outline,onClick,children,circle}) =>{
    return <button
    onClick= {onClick}
     className = {classNames('button', classname, {'button--outline' : outline},{'button--circle' : circle})}>
        {children}
        </button>
}
export default Button;