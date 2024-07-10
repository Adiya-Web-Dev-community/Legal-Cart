import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Main/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Property from '../screens/Main/Property';
import Documents from '../screens/Main/Documents';
import Startup from '../screens/Main/Startup';
import Challan from '../screens/Main/Challan';
import Blogs from '../screens/Main/Blogs';
import AskLawyer from '../screens/Main/AskLawyer';
import Login from '../screens/Login/Login';
import {scale, verticalScale} from '../utils/scalling';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../theme/colors';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MaterialIcons name="menu" size={28} color={Colors.black} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image
              source={require('../assets/image/myLegal.jpeg')}
              style={{
                height: verticalScale(40),
                width: scale(150),
                marginHorizontal: scale(20),
                resizeMode: 'contain',
                marginTop: verticalScale(3),
              }}
            />
          ),
          headerRight: () => (
            <View style={styles.rightHeader}>
              <TouchableOpacity>
                <MaterialIcons
                  name="support-agent"
                  size={25}
                  color={Colors.black}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="user" size={25} color={Colors.black} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons
                  name="shopping-cart"
                  size={25}
                  color={Colors.black}
                />
              </TouchableOpacity>
            </View>
          ),
          title: null,
        })}>
        <Stack.Screen name="DrawerComponent" component={DrawerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerComponent({navigation}) {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{title: 'Talk To Lawyer'}}
      />
      <Drawer.Screen name="Property" component={Property} />
      <Drawer.Screen name="Documents" component={Documents} />
      <Drawer.Screen name="Startup" component={Startup} />
      <Drawer.Screen name="Challan" component={Challan} />
      <Drawer.Screen name="Blogs" component={Blogs} />
      <Drawer.Screen
        name="AskLawyer"
        component={AskLawyer}
        options={{title: 'Ask Lawyer'}}
      />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  rightHeader: {
    flexDirection: 'row',
    width: scale(110),
    justifyContent: 'space-between',
  },
});
