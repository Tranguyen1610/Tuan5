import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList, Alert} from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons'
import { useState,useRef,useEffect } from 'react';
import { render } from 'react-dom';
const DATA= [
  {id:1,
   name:'Học React Native',
   },
   {id:2,
   name:'Học React JS',},
];
export default function App() {
  const [names,setNames] =useState('');
  const [ids,setids] = useState(2);
  const [dataob,setDataob] =useState(DATA);
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Ionicons
          name='arrow-back'
          color={'#fff'}
          size={25}/>
        <Text style={styles.text_title}>Todo_App</Text>
        <Text/>
      </View>
      <View style={styles.main_con}> 
          <TextInput
            style={styles.textInput}
            placeholder='Nhập công việc'
            onChangeText={text => {setNames(text)}}
            value={names}
          />
          <TouchableOpacity
            style={styles.button}
            onPress = {() => {
              if(names===''){
                Alert.alert('Thông báo','Chưa nhập công việc')
              }
              else
              {
                let a={id:ids+1,name:names}
                dataob.push(a)
                setids(ids+1)
                Alert.alert('Thông báo','Thêm thành công')
                setNames('')
              }
            }}>
              <Text style={styles.text_button}>Thêm công việc</Text>
          </TouchableOpacity>
      </View >
      <View style={styles.main_con1}>
        <Text style={styles.text_main}>Danh sách công việc</Text>
        <FlatList
          data={dataob}
          renderItem={({item})=>(
            <View style={styles.list_con}>
              <Text style={{fontSize:20,width:'70%'}}>{item.name}</Text>
              <TouchableOpacity 
                style={styles.button_delete}
                onPress={()=>{
                  setDataob(dataob.filter((it)=> it.id!==item.id))
                }}>
                <Text style={{textAlign:'center',color:'#fff'}}>Xóa</Text>
              </TouchableOpacity>
            </View>
          )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:'100%',
  },
  status:{
    flex:1,
    backgroundColor:'#1BA9FF',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:15,
  },  
  main_con:{
    flex:3,
    paddingTop:30,
    alignItems:'center',
    width:'100%'
  },
  main_con1:{
    flex:13,
    paddingTop:30,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingHorizontal:10,
    flexDirection:'column',
    width:'100%'
  },
  text_title:{
    color:'#fff',
    fontSize:20,
  },
  textInput:{
    borderWidth:1,
    borderColor:'#F37710',
    width:350,
    padding:15,
    borderRadius:10,
  },
  text_button:{
    color:'#fff',
    fontSize:17,
  },
  button:{
    margin:20,
    padding:13,
    backgroundColor:'#F37710',
    borderRadius:10
  },
  text_main:{
    fontSize:20,
    fontWeight:'600',
    alignItems:'flex-start',
  },
  list_con:{
    flexDirection:'row',
    backgroundColor:'#2BD9C4',
    width:370,
    marginVertical:10,
    padding:10,
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:5,
  },
  button_delete:{
    backgroundColor:'#D83B11',
    width:'20%',
    height:30,
    justifyContent:'center',
    borderRadius:10,
  },
});
