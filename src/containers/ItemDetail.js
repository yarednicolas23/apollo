import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Title, Paragraph,Button,Chip } from 'react-native-paper';

const ItemDetail = ({ route, navigation }) => {

  const { item } = route.params;
  const data = item.data[0]
  const img = item.links[0].href
  return(
    <View>
      <Card>
        <Card.Title title={item.data[0].title} />
        <Card.Cover source={{ uri: img }} />  
      </Card>
      <Card>
        <Card.Content>
          <Title>Descripción</Title>
          <Paragraph>{data.description}</Paragraph>
          <Title>Fecha de creación</Title>
          <Paragraph>{data.date_created}</Paragraph>
          <Title>Palabras Clave</Title>
          {data.keywords.map(keyword => {return (<Chip style={styles.item} mode="outlined">{keyword}</Chip>)})}
        </Card.Content>
        <Card.Actions>
          <Button icon="star" mode="contained">añadir a favoritos</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    marginVertical: 8
  }
});
export default ItemDetail;
