import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import BackArrow from "../../assets/svg/backarrow.svg";
import Card from "../../assets/svg/card.svg";
import Bank from "../../assets/svg/bank.svg";
import { Paystack } from "react-native-paystack-webview";
import { useEffect, useState } from 'react';
import { PAYSTACK_API_KEY } from '@/constants/Utils';
import { createTransaction, generateOrder, getOrders, handleSignInUser} from '@/api/transaction.request';

export default function TabTwoScreen() {

  const [pay, setPay] = useState(false)

  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWY4Yzg0NGI5MWY1YzdiZmY0OWY1OSIsImlhdCI6MTcxNzI2OTgyOCwiZXhwIjoxNzE3NTY5ODI4fQ.3p9YrWoT_rtf9P_JsyYwbAxqztg8SOQaY7OuH6ZnJvs"

  useEffect(() => {
    // handleSignInUser("hushjoezzybad@gmail.com", "TestOut1@")
    // var order = {
    //   deliveryId: "6638c7cee44a6277e2a3f9b8",
    //   transactionId: "665b75ef80e526b9a65c6d82",
    //   agentId: "661fa79c184d5841e93df625",
    //   deliveryRequestTime: "2024-02-05 10:00 AM",
    //   deliveryAcceptanceTime: "2024-03-25 10:00 AM",
    //   pickupTime: "2024-03-26 2:00 PM",
    //   orderStatus: "picked",
    //   "delivery.agentEarnings":100
    // };
  }, [])
  
  
  
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
              <View className='w-[70%] flex-row justify-start items-center'>
                <View className='w-[40px] h-[40px] rounded-[10px] bg-[#F47B0A] justify-center items-center mr-[11px]'>
                  <Card/>
                </View>
                <Text className='text-[17px] font-[400]'>Card</Text>
              </View>
            </TouchableOpacity>
            <View className='py-[5px] w-full justify-end items-end'>
              <View className='border-b-[.25px] w-[90%]'></View>
            </View>
            <TouchableOpacity className='w-[262px] h-[55px] justify-start items-center flex-row'>
              <View className='w-[15px] h-[15px] rounded-full border-[1px] border-[#9F9F9F] justify-center items-center mr-[15px]'>
                {/* <View className='w-[7px] h-[7px] bg-[#FA4A0C] rounded-full'></View> */}
              </View>
              <View className='w-[40px] h-[40px] rounded-[10px] bg-[#EB4796] justify-center items-center mr-[11px]'>
                <Bank/>
              </View>
              <Text className='text-[17px] font-[400]'>Bank account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='mt-[19px]'>
          <Text className='font-semibold text-[17px]'>Delivery method.</Text>
          <View className='mt-[20px] w-full max-w-[315px] bg-[#FFFFFF] rounded-[20px] p-[20px]'>
            <TouchableOpacity className='w-[262px] h-[45px] flex-row justify-start items-center'>
              <View className='w-[15px] h-[15px] rounded-full border-[1px] border-[#FA4A0C] justify-center items-center mr-[15px]'>
                <View className='w-[7px] h-[7px] bg-[#FA4A0C] rounded-full'></View>
              </View>
              <View className='w-[70%] flex-row'>
                <Text className='text-[17px] font-[400]'>Door delivery</Text>
              </View>
            </TouchableOpacity>
            <View className='py-[5px] w-full justify-end items-end'>
              <View className='border-b-[.25px] w-[90%]'></View>
            </View>
            <TouchableOpacity className='w-[262px] h-[45px] justify-start items-center flex-row'>
              <View className='w-[15px] h-[15px] rounded-full border-[1px] border-[#9F9F9F] justify-center items-center mr-[15px]'>
              </View>
              <Text className='text-[17px] font-[400]'>Pick up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='mt-[38px] w-full max-w-[315px] flex-row justify-between items-center'>
          <Text className='font-semibold text-[22px]'>Total</Text>
          <Text className='font-[700] text-[22px]'>23,000</Text>
        </View>
      </View>
      <View className='absolute bottom-[51px] w-full justify-center items-center px-[50px]'>
        <TouchableOpacity className="bg-[#FA4A0C] w-full max-w-[314px] rounded-[30px] h-[70px] justify-center items-center" onPress={() => setPay(true)}>
          <Text className="text-center text-[#F6F6F9] font-semibold text-[17px]">Proceed to payment</Text>
        </TouchableOpacity>
      </View>
      {pay && (
        <Paystack
          paystackKey={`${PAYSTACK_API_KEY}`}
          amount={5000}
          billingEmail={"tchfrnkln@gmail.com"}
          phone={"08153244501"}
          activityIndicatorColor="orange"
          onCancel={(e) => {
            setPay(false)
            console.log("canceled", e);
          }}
          autoStart={pay}
          onSuccess={(res) => {
            setPay(false)
            console.log("response", res);
            const data = res.data?.transactionRef;
            var payload = {
              "transaction": data.transaction,
              "trxRef": data.reference,
              "transactionStatus": "completed",
              "transactionType": "credit",
              "amount": 5000*100,
              "revenueAmount": 4250*100,
            }
            
            createTransaction(payload, accessToken)
          }}
        />
      )}
      <StatusBar backgroundColor='#FA4A0C' barStyle='light-content' />
    </View>
  );
}
