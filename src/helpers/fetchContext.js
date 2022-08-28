
const fetchContext = (api, func)=>{
    fetch(`${api}`)
            .then(res=>res.json())
            .then(json=>{func(json)})
}

export {fetchContext}