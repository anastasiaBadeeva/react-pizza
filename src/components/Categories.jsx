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
    onClickItem: PropTypes.func.isRequired,
    items : PropTypes.arrayOf(PropTypes.string).isRequired,
    // activeCategory : PropTypes.oneOf([PropTypes.number,null]),
  
  }
  Categories.defaultProps= {
    activeCategory: null,
    items: []
  }
export default Categories;