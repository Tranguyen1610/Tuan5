import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA= [
  {id:'1',
   image: require('./assets/ca_nau_lau.png'),
   name:'Ca nấu lẩu, nấu mì mini',
   shop:'Devang'},
   {id:'2',
   image:require('./assets/ga_bo_toi.png'),
   name:'1KG KHÔ GÀ BƠ TỎI',
   shop:'LDT Food'},
   {id:'3',
   image:require('./assets/xa_can_cau.png'),
   name:'Xe cần cẩu đa năng',
   shop:'Thế giới đồ chơi'},
   {id:'4',
   image:require('./assets/do_choi_dang_mo_hinh.png'),
   name:'Đồ chơi dạng mô hình',
   shop:'Thế giới đồ chơi'},
   {id:'5',
   image:require('./assets/lanh_dao_gian_don.png'),
   name:'Lãnh đạo giản đơn',
   shop:'Minh Long Book'},
];


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <Ionicons 
          name='arrow-back'
          size={25}
          color='#fff'/>
          <Text 
            style={{color:'#fff',fontSize:20}}>
              Chat</Text>
          <Ionicons 
            name='cart-outline'
            size={30}
            color='#fff'/>
      </View>
      <View style={styles.con1}>
        <Text style={{fontWeight:'500',}}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={styles.con2}>
        <FlatList
          data={DATA}
          renderItem={({item})=>(
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10,borderBottomWidth:1,borderBottomColor:'#C4C4C4'}}>
              <Image style={{width:100,height:100}} source={item.image}/>
              <View style={{marginLeft:10,}}>
                <Text style={{width:140,fontWeight:'500'}}>{item.name}</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={{color:'#7D5B5B'}}>Shop </Text>
                  <Text>{item.shop}</Text>
                </View>
                
              </View>
              <TouchableOpacity
                  style={{backgroundColor:'#F31111',width:80,height:40,justifyContent:'center',alignItems:'center',}}>
                <Text style={{color:'#fff',fontSize:20}}>Chat</Text>
              </TouchableOpacity>
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
    backgroundColor: '#E5E5E5',
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
    width:'100%',
  }
});
