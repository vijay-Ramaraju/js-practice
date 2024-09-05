import React, { useEffect, useState } from 'react'

const useFetchCustom = () => {
 
    const [data,setData] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async ()=>{
        const res = await fetch('https://jsonplaceholder.org/users')
        .then(res=> res.json())
        .then(res=>(setData(res)))
        .catch(rej => (console.log(rej)))
        .finally(()=>{
            setLoading(false)
        })
    }
    fetchData()
    },[data])
    return {data , loading}   

}

export default useFetchCustom