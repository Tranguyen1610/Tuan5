import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Rating } from 'react-native-ratings'

const DATA= [
  {id:'1',
   image: require('./assets/giacchuyen 1.png'),
   name:'Cáp chuyển từ Cổng USB sang PS2',
   },
   {id:'2',
   image:require('./assets/daynguon 1.png'),
   name:'Cáp chuyển từ Cổng USB sang PS2',
   },
   {id:'3',
   image:require('./assets/dauchuyendoipsps2 1.png'),
   name:'Cáp chuyển từ Cổng USB sang PS2',
   },
   {id:'4',
   image:require('./assets/dauchuyendoi 1.png'),
   name:'Cáp chuyển từ Cổng USB sang PS2',
   },
   {id:'5',
   image:require('./assets/carbusbtops2 1.png'),
   name:'Cáp chuyển từ Cổng USB sang PS2',
   },
   {id:'6',
   image:require('./assets/daucam 1.png'),
   name:'Cáp chuyển từ Cổng USB sang PS2',
   },
];


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <Ionicons 
          name='arrow-back'
          size={25}
          color='#fff'/>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',paddingLeft:5}}>
              <Ionicons
                name='search'
                size={25}
                />
              <TextInput
                placeholder='Dây cáp usb'
                style={{backgroundColor:'#fff',padding:10}}
                />
          </View>
          <View style={{flexDirection:'row'}}>
            <Ionicons 
              name='cart-outline'
              size={30}
              color='#fff'/>
              <View style={{backgroundColor:'red',width:15,height:15,borderRadius:'100%',position:'absolute',marginLeft:20,}}>
              </View>
          </View>
          <Feather
            name='more-horizontal'
            size={30}
            color='#fff'/>
      </View>
      <View style={styles.con2}>
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={({item})=>(
            <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',alignItems:'center',padding:15,}}>
              <Image style={{width:165,height:100}} source={item.image}/>
              <View style={{marginLeft:10,}}>
                <Text style={{width:140,fontWeight:'500'}}>{item.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Rating
                    startingValue={4}
                    ratingCount={5}
                    imageSize={20}
                    />
                    <Text>(15)</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontWeight:'bold'}}>69.900 đ</Text>
                  <Text style={{color:'#7D5B5B',marginLeft:5}}>-39%</Text>
                </View>
              </View>
            </View>
            
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  con: {
    flex: 1,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#1BA9FF',
    paddingHorizontal:10,
  },
  con1: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20,
    borderBottomWidth:1,
    borderBottomColor:'#C4C4C4'
  },
  con2:{
    flex:12,
    display:'flex',
    flexDirection:'column',
    width:'100%',
  }
});
