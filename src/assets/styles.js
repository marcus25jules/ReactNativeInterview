'use strict'
const React = require('react-native');
const { Stylesheet } = React;
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window");

module.exports = {

  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: '#FFFFFF'
  },
  content:{
      flex: 1,
      alignItems: 'center',
      width: width,
      marginTop:40,
      backgroundColor: '#FFFFFF'
  },

  form:{
    alignItems: 'flex-start',
    width: width,
    padding:'10%',
  },

  logo:{
    width: 100,
    height: 120,
    resizeMode:"contain"
  },

  //
  titleText:{
    fontSize: 34,
    color: '#1D2226',
    fontWeight:'bold'
  },

  normalText:{
    fontSize: 14,
    color: '#1D2226'
  },

  smallText:{
    fontSize: 10,
    color: '#1D2226'
  },


  borderBottom:{
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 3,
    marginBottom: 20,
    width:'100%'
  }



};
