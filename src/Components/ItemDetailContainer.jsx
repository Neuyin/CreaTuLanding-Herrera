import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../lamparas.json'
import Contador from './Contador'
import { useAppContext } from '../context/Context'

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const {agregarAlCarrito} = useAppContext();
    const img = 'https://batavia.es/blog/wp-content/uploads/2017/04/Lamparas_de_diseno_italiano_blog_batavia_04.jpg'
    const {id} =  useParams()
    // const {category} =  useParams() estudiar 
    
    useEffect(() => {
        const findItem = productos.lamparas.find((item) => item.id == id)
        setItemDetail(findItem)
    }, [])

  return (
    <div>
        {/* Usamos la propiedad 'img' de cada objeto de lámpara para mostrar la imagen */}
        <img src={itemDetail.img} alt="" width={400}/>
        <h1>{itemDetail.name}</h1>
        <h3>${itemDetail.price}</h3>
        <p>{itemDetail.description}</p>
        <Contador stock={itemDetail.stock}/>
        <button onClick={() => agregarAlCarrito(itemDetail)}>Agregar al carrito</button>
        
    </div>
  )
}

export default ItemDetailContainer