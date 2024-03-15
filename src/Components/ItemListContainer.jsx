import React, { useEffect, useState } from 'react'
import productos from '../lamparas.json'
import ItemList from './ItemList'
import Loader from './Loader'

const ItemListContainer = ({greeting}) => {
    const [lamparas, setLamparas] = useState([])

    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.lamparas)
        }, 2000)
    })

    useEffect(() => {
        fetchData()
        .then(res => setLamparas(res))
    }, [])

    // Deberian hacer para la 2da pre-entrega
        // Lógica para obtener mediante useParams() si existe tal category que muestre la lista filtrada (metodo .filter())
    //
   
  return (
    <div>
        <h1>Bienvenidos a Ranpu Lámparas</h1>
        <h4>La tienda virtual donde podrás elegir entre nuestra variedad de productos. Explora nuestras categorías: </h4>
        {lamparas.length == 0 ? <Loader /> : <ItemList lamparas={lamparas}/>}
    </div>
  )
}

export default ItemListContainer