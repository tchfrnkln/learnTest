import { StatusBar, Text, View } from 'react-native';
import NavBar from "../../assets/svg/navigation.svg"
import Cart from "../../assets/svg/cart.svg"


export default function TabTwoScreen() {
  return (
    <View>
      <View className='mt-[60px] px-[50px]'>
        <View className='w-full flex-row justify-between items-end'>
          <NavBar/>
          <Cart/>
        </View>
        <View>
          <Text>Explore Page</Text>
        </View>
      </View>
      <StatusBar backgroundColor='#FA4A0C' barStyle='light-content'/>
    </View>
  );
}