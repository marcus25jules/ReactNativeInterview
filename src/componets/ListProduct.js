import React, {useState, useEffect} from "react"
import {SafeAreaView, ScrollView, View, Text} from "react-native"
import { getProducts } from "../api/RestApi"

import { List } from "./product"


const ListProduct = () => {

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
           const data = await getProducts();
            setIsLoading(false);
            setProductData(data)
        }
        getData();
    }, [])



    return (
        <SafeAreaView>
           <List
              data = {productData}
              refreshing={isLoading}
           />
        </SafeAreaView>
    )
}

export default ListProduct;
