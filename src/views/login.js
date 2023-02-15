import React, {Component, useState } from 'react'
import { 
    SafeAreaView,
    StyleSheet, 
    Text, 
    TextInput,
    View,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default Login = ({ navigation }) => {
    const [getPasswordVisible, setPasswordVisible] = useState(false);
    const [getEmail, setEmail] = useState('');


    return(
        <ImageBackground style={{height:'100%', width:'100%'}} source={require('../images/background.png')} resizeMode='stretch' >
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={{flex:1}}>
                <View style={{width:'100%', height:'100%'}}>
                    {/* Email & Password */}
                    <View style={{width:'100%', height:'20%', marginTop:0.3*windowHeight, alignItems:'center'}}>
                        {/* Email */}
                        <View style={{width:'70%', height:40, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={{color:'white'}}>Email</Text>
                            <TextInput 
                            style={{color:'white', height:'100%', width:'70%', borderBottomColor:'white', borderBottomWidth:1, textAlign:'right'}}
                            autoCapitalize='none'
                            value={getEmail}
                            onChangeText={setEmail}
                            />
                        </View>
                        {/* Password */}
                        <View style={{width:'70%', height:40, flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10}}>
                            <Text style={{color:'white'}}>Password</Text>
                            <TextInput 
                            style={{color: 'white', height:'100%', width:'70%', borderBottomColor:'white', borderBottomWidth:1, textAlign:'right', paddingRight:35}}
                            autoCapitalize='none'
                            secureTextEntry={getPasswordVisible ? false : true}
                            />
                            <TouchableOpacity 
                                style={{height:'100%', width:30, aspectRatio:1, position:'absolute', right:0}}
                                onPress={()=>{
                                    setPasswordVisible(!getPasswordVisible)
                                }}
                            >
                                { getPasswordVisible ?
                                    <Image source={require('../images/invisible.png')} style={{width:'100%', height:'100%'}} resizeMode='contain'/>
                                    :
                                    <Image source={require('../images/visible.png')} style={{width:'100%', height:'100%'}} resizeMode='contain'/>
                                }
                                
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Button Login & Register */}
                    <View style={{width:'100%', height:'20%', marginTop:0.15*windowHeight, justifyContent:'center', alignItems:'center'}}>
                        {/* Dang nhap */}
                        <TouchableOpacity 
                            style={{width:'60%', height:'30%', borderWidth:2, borderColor:'white', borderRadius:25, backgroundColor:'#00bfff', alignItems:'center', justifyContent:'center'}}
                            onPress={() => {
                                navigation.navigate('Home', { email: getEmail })
                            }}
                        >
                            <Text style={{color:'white', fontSize:20}}>Đăng nhập</Text>
                        </TouchableOpacity>

                        {/* Dang ky */}
                        <TouchableOpacity style={{width:'60%', height:'30%', borderWidth:2, borderColor:'white', borderRadius:25, backgroundColor:'#bdb76b', marginTop:20, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'white', fontSize:20}}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({})