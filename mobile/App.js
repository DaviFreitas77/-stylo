import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();

import SignUp from './src/pages/SignUp';
export default function MyStack (){

  

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SignUp'  component={SignUp} options={{headerShown:true,
        headerTitle:'',
        
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}