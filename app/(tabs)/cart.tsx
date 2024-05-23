import { Animated, Image, PanResponder, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import BackArrow from "../../assets/svg/backarrow.svg";
import Swipe from "../../assets/svg/swipe.svg";
import { Btn } from '@/components/Button';
import { useRef, useState } from 'react';

const initialFoods = [
  { key: 1, name: "Veggie tomato mix", price: 1900, img: require(`../../assets/images/Veggie.png`), quantity: 1 },
  { key: 2, name: "Spicy fish sauce", price: 2300.99, img: require(`../../assets/images/sauce.png`), quantity: 1 },
];

export default function TabTwoScreen() {
  const [foods, setFoods] = useState(initialFoods);

  const updateQuantity = (key:number, quantity:number) => {
    setFoods(foods.map(food =>
      food.key === key ? { ...food, quantity: Math.max(1, quantity) } : food
    ));
  };

  return (
    <View className='h-screen bg-[#F5F5F8]'>
      <View className='mt-[60px] px-[50px] w-full flex flex-row relative'>
        <BackArrow />
        <View className='absolute w-screen justify-center items-center'>
          <Text className='text-[18px] font-bold'>Cart</Text>
        </View>
      </View>
      <View className='mt-[56px] w-full justify-center items-center'>
        <Swipe />
      </View>
      <View className='mt-[19px] justify-center items-center px-[50px]'>
        {
          foods.map(food => {
            const pan = useRef(new Animated.ValueXY()).current;

            const panResponder = useRef(
              PanResponder.create({
                onMoveShouldSetPanResponder: (evt, gestureState) => {
                  return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
                },
                onPanResponderMove: Animated.event(
                  [null, { dx: pan.x, dy: pan.y }],
                  { useNativeDriver: false }
                ),
                onPanResponderRelease: () => {
                  Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
                },
              })
            ).current;

            return (
              <Animated.View
                key={food.key}
                style={[{ transform: [{ translateX: pan.x }] }]}
                {...panResponder.panHandlers}
                className='w-full max-w-[315px] h-[102px] bg-[#FFFFFF] rounded-[20px] justify-start items-center flex-row relative mb-[17px]'
              >
                <Image className='rounded-full mx-[16px]' width={70} height={70} source={food.img} />
                <View>
                  <Text className='font-semibold text-[17px]'>{food.name}</Text>
                  <Text className='font-semibold text-[15px] text-[#FA4A0C]'>#{food.price.toLocaleString()}</Text>
                </View>
                <View className='w-[52px] h-[20px] bg-[#FA4A0C] rounded-[30px] absolute right-[24px] bottom-[18px] flex-row justify-between items-center'>
                  <TouchableOpacity className='px-2' onPress={() => updateQuantity(food.key, food.quantity - 1)}>
                    <Text className='text-white text-[15px]'>-</Text>
                  </TouchableOpacity>
                  <Text className='text-white text-[15px]'>{food.quantity}</Text>
                  <TouchableOpacity className='px-2' onPress={() => updateQuantity(food.key, food.quantity + 1)}>
                    <Text className='text-white text-[15px]'>+</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            );
          })
        }
      </View>

      <View className='absolute bottom-[41px] w-full justify-center items-center px-[50px]'>
        <TouchableOpacity className="bg-[#FA4A0C] w-full max-w-[314px] rounded-[30px] h-[70px] justify-center items-center" >
          <Text className="text-center text-[#F6F6F9] font-semibold text-[17px]">Complete Order</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor='#FA4A0C' barStyle='light-content' />
    </View>
  );
}
