import OrderDetails from "@/components/Orders";
import { useOrders } from "@/zustand/store";
import { StatusBar, View } from "react-native";


export default function HomeScreen() {

  const {orders} = useOrders()

  return (
    <View style={{ flex: 1 }}>
      <OrderDetails order={ orders }
      />
      <StatusBar backgroundColor='#FA4A0C' barStyle='light-content' />
    </View>
  );
}