import { useEffect } from "react";
import { useState } from "react"

const useProducts = () =>{
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // Return Necessery Things
    return [products , setProducts];
}

export default useProducts;