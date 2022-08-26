const fetchProduct = ()=>{
    fetch('https://fakestoreapi.com/products?limit=15')
            .then(res=>res.json())
            .then(json=>console.log(json))
            /* fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json)) */
}

export {fetchProduct}