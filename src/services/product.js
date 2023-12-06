import { API } from "../config/axios"

export const getData = async () => {
    let {data} = await API.get("https://fakestoreapi.com/products")
    return data
}
export const getSingleData = async (id) => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await res.json()
    return data
}