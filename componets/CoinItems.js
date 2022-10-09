import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const CoinItems = ({coin}) => {
    return(
        <View style={style.items}>
            <View style= {style.coinName}>
            <Image
                style= {style.images}
                source={{uri : coin.image}}
            />
            <View style={style.containerText}>
            <Text style={style.Text}>{coin.name} </Text>
            <Text style={style.TextSymbol}>{coin.symbol}</Text>
            </View>
            
            </View>
            <View>
            <Text style= {style.text_Price}>{coin.current_price}</Text>
            <Text style={[style.price_Percentage, coin.price_change_percentage_24h>0 ? style.priceUp:style.priceDown]}>{coin.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    items:{
        backgroundColor:'#121212',
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"

    },
    containerText:{
        marginLeft:20        
    },


    coinName:{
        flexDirection:"row"
    },  
    images : {
        width:30,
        height:30,
    },

    Text: {
        color:'#ffffff'
    },
    TextSymbol: {
        color:"#434343",
        textTransform:"uppercase"
    },
    text_Price:{
        textAlign:"right",
        color:"#fff"
    },
    price_Percentage:{
        textAlign:"right"
    },
    priceUp:{
        color:"#229954"
    },
    priceDown:{
        color:"#E74C3C"
    }

})
export default CoinItems;