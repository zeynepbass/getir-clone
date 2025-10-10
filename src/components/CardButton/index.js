import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import {addToCart} from "../../redux/actions/cardActions"
const {width,height} = Dimensions.get('window')
function index(props) {
  const dispatch=useDispatch();
const handleAddToCart=()=>{
  dispatch(addToCart({quantity:1,product}))
}
  return (
    <TouchableOpacity onPress={()=>handleAddToCart(props.product)} style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',height:height*0.1,position: 'absolute',bottom:0,width:'100%',backgroundColor:'white'}}>
        <View style={{backgroundColor:'#5D39C1',flexDirection:'row',alignItems:'center',height:height*0.06,justifyContent:'center',width:'88%',marginHorizontal:'6%',borderRadius:10}}>
            <Text style={{fontSize:14,fontWeight:'bold',color:'white'}} >Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  )
}


export default index