import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeFill from "../../assets/svg/navfillHome.svg" 
import Heart from "../../assets/svg/navHeart.svg" 
import Avatar from "../../assets/svg/navAvatar.svg" 
import Re from "../../assets/svg/navRe.svg" 

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle:{backgroundColor:"white"},
        headerShown: false,
        tabBarShowLabel:false,
      }} initialRouteName='index'>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <HomeFill width={24} height={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: () => (
            <Heart width={24} height={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: 'Explore',
          tabBarIcon: () => (
          <Avatar width={24} height={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="round"
        options={{
          title: 'Explore',
          tabBarIcon: () => (
          <Re width={26} height={26} fill={"gray"}/>
          ),
        }}
      />
    </Tabs>
  );
}
