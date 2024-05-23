import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import BackArrow from "../../assets/svg/backarrow.svg";
import Card from "../../assets/svg/card.svg";
import Bank from "../../assets/svg/bank.svg";

export default function TabTwoScreen() {

  return (
    <View className='h-screen bg-[#F5F5F8] relative'>
      <View className='mt-[60px] px-[50px] w-full flex flex-row relative'>
        <BackArrow />
        <View className='absolute w-screen justify-center items-center'>
          <Text className='text-[18px] font-bold'>Checkout</Text>
        </View>
      </View>
      <View className='mt-[40px] px-[50px]'>
        <Text className='font-semibold text-[34px]'>Payment</Text>
        <View className='mt-[48px]'>
          <Text className='font-semibold text-[17px]'>Payment method</Text>
          <View className='mt-[20px] w-full max-w-[315px] bg-[#FFFFFF] rounded-[20px] p-[20px]'>
            <TouchableOpacity className='w-[262px] h-[55px] justify-start items-center flex-row'>
              <View className='w-[15px] h-[15px] rounded-full border-[1px] border-[#FA4A0C] justify-center items-center mr-[15px]'>
                <View className='w-[7px] h-[7px] bg-[#FA4A0C] rounded-full'></View>
              </View>
              <View className='border-b-[.5px] w-[70%] flex-row pb-[10px]'>
                <View className='w-[40px] h-[40px] rounded-[10px] bg-[#F47B0A] justify-center items-center mr-[11px]'>
                  <Card/>
                </View>
                <Text className='text-[17px] font-medium'>Card</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='w-[262px] h-[55px] justify-start items-center flex-row'>
              <View className='w-[15px] h-[15px] rounded-full border-[1px] border-[#9F9F9F] justify-center items-center mr-[15px]'>
                {/* <View className='w-[7px] h-[7px] bg-[#FA4A0C] rounded-full'></View> */}
              </View>
              <View className='w-[40px] h-[40px] rounded-[10px] bg-[#EB4796] justify-center items-center mr-[11px]'>
                <Bank/>
              </View>
              <Text className='text-[17px] font-medium'>Bank account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='mt-[19px]'>
          <Text className='font-semibold text-[17px]'>Delivery method.</Text>
          <View className='mt-[20px] w-full max-w-[315px] bg-[#FFFFFF] rounded-[20px] p-[20px]'>
            <TouchableOpacity className='w-[262px] h-[45px] justify-start items-center flex-row'>
              <View className='w-[15px] h-[15px] rounded-full border-[1px] border-[#FA4A0C] justify-center items-center mr-[15px]'>
                <View className='w-[7px] h-[7px] bg-[#FA4A0C] rounded-full'></View>
              </View>
              <View className='border-b-[.5px] w-[70%] flex-row pb-[10px]'>
                <Text className='text-[17px]'>Door delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='w-[262px] h-[45px] justify-start items-center flex-row'>
              <View className='w-[15px] h-[15px] rounded-full border-[1px] border-[#9F9F9F] justify-center items-center mr-[15px]'>
              </View>
              <Text className='text-[17px]'>Pick up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='mt-[38px] w-full max-w-[315px] flex-row justify-between items-center'>
          <Text className='font-semibold text-[22px]'>Total</Text>
          <Text className='font-semibold text-[22px]'>23,000</Text>
        </View>
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
