import React ,{useCallback,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { getPizza } from '../redux/actions/pizza';
import {setCategory,setSortBy} from '../redux/actions/filters'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
const categoryName =['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems =[{name : 'популярности', type: 'popular',  order: 'desc'}, {name : 'цене', type: 'price',  order: 'desc'}, {name : 'алфавиту', type: 'name',  order: 'asc'}]
const Main = () => {
  const dispatch = useDispatch()
  const { pizza } = useSelector(({ pizza }) => {
    return {
      pizza: pizza.items,
    };
  });
  const { isLoading } = useSelector(({ pizza }) => {
    return {
      isLoading: pizza.isLoading,
    };
  });
  const { category, sortBy } = useSelector(({filter})=>  filter);
  useEffect(() => {
    dispatch(getPizza(category,sortBy));
  }, [category,sortBy]);
  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [],
  )
  const onSelectSortBy = useCallback(
    (index) => {
      dispatch(setSortBy(index));
    },
    [],
  )
    return (
        <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickItem={onSelectCategory}
            items={categoryName}
          />
          <SortPopup items={sortItems} activItem={sortBy.type} setActivItem={onSelectSortBy} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                isLoading ? pizza.map((obj)=>( <PizzaBlock key={obj.id} {...obj}  />)) : Array(12).fill(0).map((_, index )=> <LoadingBlock key={index}/>) 
            }
            
      </div>
      </div>
    )
}


export default Main
