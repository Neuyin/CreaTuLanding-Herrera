import React from 'react'
import Item from './Item'

const ItemList = ({lamparas}) => {

  return (
    <div className='list'>
        {lamparas.map((item) => <Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemList