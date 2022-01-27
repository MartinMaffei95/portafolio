import { useState, useEffect } from "react"
import { get } from "axios"

const useFetch = (endpoint)=>{
    const [data , setData] = useState()

    useEffect( () => {
        get(`${process.env.NEXT_PUBLIC_URL_API}${endpoint}`)
        .then(({data}) => setData(data))
        .catch(e => console.log(e))
    }, [endpoint])


    return data
}

export default useFetch