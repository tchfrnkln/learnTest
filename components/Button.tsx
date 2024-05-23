import { Text, TouchableOpacity } from 'react-native'

interface Buttons {
    text: string | any;
    press?: () => void;
  }
  
export const Btn = (props: Buttons) => {
    return (
        <TouchableOpacity
        onPress={props.press}
        className="bg-[#FA4A0C] w-full max-w-[314px] rounded-lg h-[70px]"
        >
        <Text className="text-center text-[#F6F6F9] font-semibold text-[17px]">{props.text}</Text>
        </TouchableOpacity>
    );
};
  