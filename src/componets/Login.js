import React, {useState} from "react";
import {SafeAreaView, View, Text, ActivityIndicator, ScrollView, Image, TextInput} from "react-native";
import { login } from "../api/RestApi"

import StyledTextInput from './common/StyledTextInput'
import StyledButton from './common/StyledButton'

import globalStyles from '@assets/styles';

const Login = (props) => {
    let {navigation} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);



    const submitLogin = async () => {

        setIsLoading(true);

        if(password !== "" && email !==""){
          async function eventLogin(email, password) {
             const isLoggedIn = await login(email, password);
             console.log("isLoggedIn", isLoggedIn + email + " " +password);
             if(isLoggedIn){
                navigation.navigate("ListProductPage");
             }else{
               alert("Wrong username or password!");
             }
             setIsLoading(false);
          }
          eventLogin(email, password);
        }else{
          setIsLoading(false);
          alert("Please enter username and password");
        }
    }

    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
              <View style={globalStyles.content}>
                 <Image style={globalStyles.logo} source={require('@assets/images/logo.png')} />
                 {(isLoading)&&
                    <View>
                      <ActivityIndicator size="small" color="#0087E1"/>
                      <Text>Loading...</Text>
                    </View>
                 }
                 <View style={globalStyles.form}>
                   <Text style={globalStyles.titleText}>Login</Text>
                   <Text style={[globalStyles.normalText,{marginBottom:25}]}>Please login to your account.</Text>
                   <StyledTextInput
                     value={email}
                     onChangeText={setEmail}
                     placeholder={"Email Address"}
                     style={globalStyles.borderBottom}
                    />

                   <StyledTextInput
                     placeholder={"Password"}
                     value={password}
                     onChangeText={setPassword}
                     secureTextEntry
                     style={globalStyles.borderBottom}/>

                   <StyledButton onPress={submitLogin} label="LOGIN" size={14} />
                 </View>
              </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;
