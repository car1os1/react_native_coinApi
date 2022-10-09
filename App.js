  import React, { useEffect, useState } from "react";

  import { Text, View, FlatList,StyleSheet, TextInput} from "react-native";
  import Constants from "expo-constants"
  import CoinItem from "./componets/CoinItems.js"

  const App = () =>{
    const [coins, setCoins] = useState([])
    const [search,setSearch] = useState('')
    const [refreshing,setRefreshing] = useState(false)

    const loadDate = async() => {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        const data = await res.json()
      setCoins(data)
    }


    useEffect(()=>{
      loadDate()
    },[])

    return (
      <View style = {{marginTop : Constants.statusBarHeight , flex:1}}>
      <View style= {style.container }  >
        <View style={style.header}>
          <Text style={style.title}>CarlosCripto</Text>
          <TextInput style={style.headerImput} 
          placeholder="Buscar coin"
          placeholderTextColor={"#5D6D7E"}
          onChangeText={(text) => setSearch(text.toLowerCase())}/>
        </View>

        <FlatList
          style={style.list}
          data={
            coins.filter((coin)=> coin.name.includes(search)||
            coin.symbol.includes(search)
            
            )
          }
          renderItem={({item})=>{
            return <CoinItem  coin = {item}/>  
          }
        }
        refreshing={refreshing}
        onRefresh={()=>{setRefreshing(true)
          await loadDate();
          setRefreshing(false)
        }}
        />
      </View>
      </View>
    )
  }


const style = StyleSheet.create({
  container:{
    backgroundColor:'#141414',
    alignItems:"center",
    flex:1
  } ,
  title: {
    color:"#ffffff",
    marginTop:20,
    fontSize:20
  },
  list:{
    width:'95%'
  },
  header: {
    flexDirection:"row",
    justifyContent:"space-between",
    width:'95%',
    marginBottom:10

  },
  headerImput:{
    color:'#fff',
    borderBottomColor:'#D35400',
    borderBottomWidth:1,
    width:'40%',
    textAlign:'center'
  }
})






  export default App