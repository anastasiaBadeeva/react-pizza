import React from 'react'
import PropTypes from 'prop-types'
const Categories = React.memo(({items,onClickItem ,activeCategory}) => {


    return (
        <div className="categories">
                <ul>
                  <li  className = {activeCategory === null ? "active" : ""} onClick= {()=>{onClickItem(null)}}>Все</li>
                 {items &&
                     items.map((name,index)=>(<li key= {`${name}_${index}`} onClick= {()=>{onClickItem(index)}}
                     className = {activeCategory === index ? "active" : ""} >
                         {name}
                         </li>))
                 }
                  
                
                </ul>
              </div>
    )
})
Categories.propTypes= {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    price: PropTypes.number.isRequired,
    onClickItem: PropTypes.func
  
  }
  Categories.defaultProps= {
    items: [],
    activeCategory: null,
    
  
  }
export default Categories;