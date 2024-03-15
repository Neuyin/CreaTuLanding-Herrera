import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../lamparas.json'
import Contador from './Contador'
import { useAppContext } from '../context/Context'

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const {agregarAlCarrito} = useAppContext();
    const img = 'https://images.app.goo.gl/gf1pcmKP9sMcuUGN7'
    const {id} =  useParams()
    
    useEffect(() => {
        const findItem = productos.lamparas.find((item) => item.id == id)
        setItemDetail(findItem)
    }, [])

  return (
    <div>
        <img src={img} alt="" width={400}/>
        <h1>{itemDetail.name}</h1>
        <h3>${itemDetail.price}</h3>
        <p>{itemDetail.description}</p>
        <Contador stock={itemDetail.stock}/>
        <button onClick={() => agregarAlCarrito(itemDetail)}>Agregar al carrito</button>
        
    </div>
  )
}

export default ItemDetailContainer