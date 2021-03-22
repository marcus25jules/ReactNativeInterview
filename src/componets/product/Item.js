
import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View, Image, Text } from "react-native";


import { scale } from "@utils/scale";
import globalStyles from '@assets/styles';


function Item({ brand, name, ...others }) {

  const image = '@assets/images/product/' + name + '.png';


  return (
          <View style={[styles.item,{flexDirection: "row"}]}>
            <View style={{flexDirection: "column"}}>
               <Image style={globalStyles.logo} source={{ uri: image }} />
               <Text>{name}</Text>
            </View>
            <View style={[styles.colContent, {backgroundColor:'#0087E1'}]}>
               <Text style={styles.textLabel}>Original</Text>
               <Text style={styles.textLabel}>Selling</Text>
            </View>
            <View style={styles.colContent}>
               <Text style={globalStyles.normalText}>{others.originalPrice}</Text>
               <Text style={[globalStyles.normalText,{color:"#2F9752"}]}>{others.sellingPrice}</Text>
            </View>
            <View style={[styles.colContent,{backgroundColor:"#EEEEEE", alignItems:'center'}]}>
               <Text style={globalStyles.smallText}>{brand}</Text>
               <Text style={globalStyles.smallText}>{others.type}</Text>
               <Text style={globalStyles.smallText}>{others.category}</Text>
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
   //If you need style here
   item:{
        backgroundColor:'#fff',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        padding:scale(10)
   },
   textLabel:{
      textAlign: 'center',
      fontWeight: 'bold',
      width:'100%',
      color:'#fff'
   },
   colContent:{
     flexDirection: "column",
     alignSelf:"center",
     padding:'2%',
     width:'25%'
   }
});

Item.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
