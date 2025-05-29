/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Instruction from './src/example';
import Comp from './src/component'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */

  // <View style={backgroundStyle}>
  //   <Comp />
  //   <Instruction backgroundStyle={backgroundStyle} isDarkMode={isDarkMode} />
  // </View>
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name={"Instructions"} options={{title: 'Instructs'}} children={() => (<Instruction backgroundStyle={backgroundStyle} isDarkMode={isDarkMode} />)} />
        <Stack.Screen name={"Test"} component={Comp} options={{title: 'Test'}} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" options={{title: 'Instructions'}} children={() => (<Instruction backgroundStyle={backgroundStyle} isDarkMode={isDarkMode} />)} />
        <Tab.Screen name="Test" component={Comp} options={{title: 'Test'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
