import { ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import NavBar from "../../assets/svg/navigation.svg"
import Cart from "../../assets/svg/cart.svg"
import Search from "../../assets/svg/search.svg"
import Veggie from "../../assets/svg/veggie.svg"
import Sauce from "../../assets/svg/sauce.svg"


export default function HomeScreen() {

  const foods:{key:number, name:string, price:number, img:any}[] = [
    {key:1, name:"Veggie tomato mix", price:1900, img:<Veggie/>},
    {key:2, name:"Spicy fish sauce", price:2300.99, img:<Sauce/>},
  ]


  return (
    <View className='bg-[#F2F2F2]'>
      <View className='mt-[60px] px-[50px]'>
        <View className='w-full flex-row justify-between items-end'>
          <NavBar/>
          <Cart/>
        </View>
        <View className='mt-[43px] flex flex-col'>
          <Text className='text-[34px] font-bold'>Delicious</Text>
          <Text className='text-[34px] font-bold'>food for you</Text>
        </View>
        <View className='mt-[28px] p-[20px] pl-[35px] w-full bg-[#EFEEEE] rounded-full flex flex-row justify-start items-center'>
          <Search/>
          <TextInput className='pl-[16px] text-[17px]' placeholder='Search'/>
        </View>
        <View className='mt-[46px] ml-[75px]'>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Text className='w-[87px] border-b-2 border-[#FA4A0C] text-center text-[#FA4A0C] pb-[10px] text-[17px]'>Food</Text>
            <Text className='w-[87px] text-center text-[#9A9A9D] pb-[10px] text-[17px]'>Drinks</Text>
            <Text className='w-[87px] text-center text-[#9A9A9D] pb-[10px] text-[17px]'>Snacks</Text>
            <Text className='w-[87px] text-center text-[#9A9A9D] pb-[10px] text-[17px]'>Sauce</Text>
          </ScrollView>
        </View>
        <View className='mt-[45px]'>
          <Text className='w-full text-right text-[#FA4A0C] text-[15px]'>see more</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {
              foods.map(food => (
                <View className='mt-[1px] mr-[34px] w-[220px] h-[320px] relative flex justify-start items-center' key={food.key}>
                  <View className='absolute w-[220px] h-[270px] rounded-[30px] bg-[#FFFFFF] top-[50px]'>
                    <Text className='text-[22px] text-center mt-[145px] font-bold px-[20%]'>{food.name}</Text>
                    <Text className='text-[17px] text-[#FA4A0C] text-center font-bold mt-[15px]'>N{food.price.toLocaleString()}</Text>
                  </View>
                  {food.img}
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
      <StatusBar backgroundColor='#FA4A0C' barStyle='light-content'/>
    </View>
  );
}