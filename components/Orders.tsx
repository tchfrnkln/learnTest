import { View, Text, Image, StyleSheet } from 'react-native';

const OrderDetails = ({ order }:{order:any}) => {
  const { delivery, deliveryRequestTime, pickupTime } = order;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{delivery.description}</Text>
      {delivery.images.length > 0 && (
        <Image
          source={{ uri: delivery.images[0] }} // Assuming the first image is the main image
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Text style={styles.time}>Delivery Request Time: {deliveryRequestTime}</Text>
      <Text style={styles.time}>Pickup Time: {pickupTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  description: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default OrderDetails;
