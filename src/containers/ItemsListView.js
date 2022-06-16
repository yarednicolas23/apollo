import React, { useState, useEffect,useContext } from 'react';

import { View,TouchableHighlight, FlatList, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Item from '../components/Item';
import { useAxios } from '../hooks/useAxios';
import AppContext  from "../context/AppContext";

const ItemsListView = ({navigation}) => {
  const [text, setText] = useState('');
	const {state,setState} = useContext(AppContext);
  const { response, error } = useAxios({
    method: 'get',
    url: '/search?q=apollo%2011',
    headers: {
      accept: '*/*',
    },
  });

  const filterdData = text
    ? state.items.filter(item => {
        const itemData = item.data[0].title.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    : state.items;
  useEffect(() => {
      if (response != null) { setState({items:response.collection.items}) }
  }, [response]);

  const renderItem = ({ item,index }) => {
    if ('links' in item) {
      return (
        <TouchableHighlight onPress={() => navigation.navigate('ItemDetail',{item:item})} underlayColor="white">
          <Item
            title={item.data[0].title}
            img={item.links[0].href}
            index={index}
          />
        </TouchableHighlight>
      );
    }
  };

  return (
    <View>
      <Searchbar  
        placeholder="Buscar"
        onChangeText={text => setText(text)}
        value={text}
      />
      <FlatList
        data={filterdData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default ItemsListView;
