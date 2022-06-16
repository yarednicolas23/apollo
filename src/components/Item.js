import React from 'react';
import { StyleSheet } from 'react-native';

import { Card, Title, Button } from 'react-native-paper';

const Item = ({ title, img ,index}) => (
  <Card style={styles.item} mode="outlined">
    <Card.Content>
      <Title>{title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: img }} />
    <Card.Actions>
      <Button icon="star" mode="contained">añadir a favoritos</Button>
    </Card.Actions>
  </Card>
);
const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16
  }
});
export default Item;
