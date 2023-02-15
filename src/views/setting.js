import React from 'react'
import { 
    StyleSheet, 
    SafeAreaView,
    Text, 
    TouchableOpacity,
    Image,
    View, 
} from 'react-native'

export default Setting = ({ navigation }) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            {/* Header */}
            <View style={{ height:'10%', width:'100%', borderBottomWidth:1, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ height:'100%', aspectRatio: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => { navigation.goBack() }}
                >
                    <Image style={{height: '50%', width: '50%'}} source={require('../images/btn_back.png')} resizeMode={'stretch'} />
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Back</Text>
                </TouchableOpacity>
                
            </View>
            {/* Body */}
            <View style={{ flex:1, justifyContent: 'center', alignItems:'center' }}>
                <Text style={{ fontSize:30 }}>Setting</Text>
                <TouchableOpacity
                    style={{width:'50%', height:50, borderWidth:1, borderRadius:25, marginTop:50, alignItems:'center', justifyContent:'center'}}
                    onPress={() => { navigation.popToTop()}}  
                >
                    <Text style={{ fontSize:20, fontWeight:'500'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})