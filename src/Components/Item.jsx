import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/Context'

const Item = ({ item }) => {

  const { agregarAlCarrito } = useAppContext();

  const img = 'https://images.app.goo.gl/gf1pcmKP9sMcuUGN7'
  return (
    <div className={item.stock > 0 ? 'card' : 'card-without-stock'}>
      <img src={img} alt="" />
      {
        item.stock > 0 ?
          <Link to={'/product/' + item.id}><h2>{item.name}</h2></Link>
          :
          <h2>{item.name} (sin stock)</h2>
      }
      <h3>${item.price}</h3>
      <button disabled={item.stock === 0} onClick={() => agregarAlCarrito(item)}>Agregar al carrito</button>
    </div>
  )
}

export default Item