import React, {Component} from 'react';
import { 
    StyleSheet, 
    SafeAreaView,
    Text, 
    TouchableOpacity,
    Image,
    View,  
} from 'react-native';



export default Home = ({ route, navigation }) => {
    const { email } = route.params;
    return (
        <SafeAreaView style={{flex: 1}}>
            {/* Header */}
            <View style={{ height:'10%', width:'100%', borderBottomWidth: 1, flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                <TouchableOpacity
                    style={{ height:'100%', aspectRatio: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => { navigation.goBack() }}
                >
                    <Image style={{height: '50%', width: '50%'}} source={require('../images/btn_back.png')} resizeMode={'stretch'} />
                    <Text style={{fontSize: 20, fontWeight: '500', margin: 10}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ height:'100%', aspectRatio: 2, justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => { navigation.navigate('Setting') }}
                >
                    <Image style={{height: '50%', width: '50%'}} source={require('../images/btn_setting.png')} resizeMode={'stretch'} />
                </TouchableOpacity>
            </View>
            <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize:30 }}>Home screen</Text>
                <Text style={{ fontSize: 20 }}>Email: <Text>{email}</Text></Text>
            </View>
        </SafeAreaView>
    )   
}

const styles = StyleSheet.create({})