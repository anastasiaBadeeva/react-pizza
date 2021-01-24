import React, { useState } from 'react'

const Categories = ({items,onClick}) => {
    const [activItem, setActivItem] = useState(null)
    const onSelectItem = (index) =>{
        setActivItem(index)
    }
    return (
        <div className="categories">
                <ul>
                  <li  className = {activItem === null ? "active" : ""} onClick= {()=>{onSelectItem(null)}}>Все</li>
                 {items &&
                     items.map((name,index)=>(<li key= {`${name}_${index}`} onClick= {()=>{onSelectItem(index)}}
                     className = {activItem === index ? "active" : ""} >
                         {name}
                         </li>))
                 }
                  
                
                </ul>
              </div>
    )
}
export default Categories;