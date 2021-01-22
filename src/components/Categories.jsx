import React, { useState } from 'react'

const Categories = ({items,onClick}) => {
    const [activItem, setActivItem] = useState(null)
    return (
        <div className="categories">
                <ul>
                  <li>Все</li>
                 {
                     items.map((name,index)=>(<li key= {`${name}_${index}`} onClick= {()=>{setActivItem(index)}}
                     className = {activItem === index ? "active" :null} >
                         {name}
                         </li>))
                 }
                  
                
                </ul>
              </div>
    )
}
export default Categories;