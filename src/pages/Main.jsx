import React ,{useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, PizzaBlock, SortPopup } from '../components';
import {setCategory} from '../redux/actions/filters'
const categoryName =['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const Main = () => {
  const dispatch = useDispatch()
  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
      console.log(index)
    },
    [],
  )
  const { pizza } = useSelector(({ pizza }) => {
    return {
      pizza: pizza.items,
    };
  });
    return (
        <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={onSelectCategory}
            items={categoryName}
          />
          <SortPopup items={[{name : 'популярности', type: 'popular'}, {name : 'цене', type: 'price'}, {name : 'алфавиту', type: 'alphabet'}]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                pizza && pizza.map((obj)=>( <PizzaBlock key={obj.id} {...obj} />))
            }
            
      </div>
      </div>
    )
}


export default Main
