import React, { useEffect, useState } from 'react'
import productos from '../lamparas.json'
import ItemList from './ItemList'
import Loader from './Loader'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [lamparas, setLamparas] = useState([]);
    const { category } = useParams();

    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.lamparas)
        }, 2000)
    })

    useEffect(() => {
        fetchData()
        .then(res => setLamparas(res))
    }, [category])
   
  return (
    <div>
        <h1>{greeting}</h1>
        <h1>Bienvenidos a Ranpu Lámparas</h1>
        <h4>La tienda virtual donde podrás elegir nuestra variedad de productos. Explora nuestras categorías: </h4>
        {lamparas.length == 0 ? <Loader /> : <ItemList lamparas={lamparas}/>}
    </div>
  )
}

export default ItemListContainer