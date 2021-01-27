import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components';
const Main = ({pizza}) => {
    console.log(pizza)
    return (
        <div className="container">
        <div className="content__top">
          <Categories
            onClick={(name) => {
              console.log(name);
            }}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <SortPopup items={['популярности', 'цене', 'алфавиту']} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                pizza && pizza.map((obj)=>( <PizzaBlock key={obj.id} {...obj}/>))
            }
            
      </div>
      </div>
    )
}

export default Main
