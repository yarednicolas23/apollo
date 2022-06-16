import * as React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constants from 'expo-constants';

import {
  Provider as PaperProvider,
} from 'react-native-paper';

import AppContext from './context/AppContext'
import ItemsListView from './containers/ItemsListView';
import ItemDetail from './containers/ItemDetail';
import useInitialState from './hooks/useInitialState'

const Stack = createNativeStackNavigator();

export default function App() {
	const initialState = useInitialState();
  return (
		<AppContext.Provider value={initialState}>
      <SafeAreaView  style={[styles.container]}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={ItemsListView}
                options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
              />
              <Stack.Screen name="ItemDetail" component={ItemDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
		</AppContext.Provider>
  );
}
function LogoTitle() {
  return (
    <Image source={{uri:'https://api.nasa.gov/assets/footer/img/favicon-192.png'}} style={{width:50, height: 50 }}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
