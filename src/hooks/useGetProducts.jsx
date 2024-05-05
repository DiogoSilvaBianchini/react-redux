import { useEffect } from "react"
import { useState } from "react"

const useGetProducts = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            const req = await fetch("http://localhost:5173/src/database/db.json")
            const results = await req.json()
            setData(results)
        }

        getProducts()
    },[])

    return data
}

export default useGetProducts
