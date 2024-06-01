import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeFill from "../../assets/svg/navfillHome.svg" 
import Heart from "../../assets/svg/navHeart.svg" 
import Avatar from "../../assets/svg/navAvatar.svg" 
import Re from "../../assets/svg/navRe.svg" 
import { Platform, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle:{backgroundColor:"#F2F2F2"},
        headerShown: false,
        tabBarShowLabel:false,
      }} initialRouteName='index'>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <HomeFill style={styles.shadowBox} width={24} height={24}/>
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


const styles = StyleSheet.create({
  shadowBox: {
    paddingBottom:5,
    ...Platform.select({
      ios: {
        shadowColor: 'orange',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        shadowColor:"orange",
        elevation: 5,
      },
    }),
  },
});