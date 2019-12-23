import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const ShimmerEffect = props => {
  const [shimmer, shimmerStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      shimmerStatus(true);
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ShimmerPlaceholder
        style={{width: '80%', height: '50%'}}
        autoRun={true}
        visible={shimmer}>
        <Image source={require('../Assets/Images/profile_pic.jpg')} />
      </ShimmerPlaceholder>
      <View>
        <ShimmerPlaceholder
          style={{width: '80%', height: '50%', marginTop: 10}}
          autoRun={true}
          visible={shimmer}>
          <Text>Hello world</Text>
        </ShimmerPlaceholder>
      </View>
    </View>
  );
};
export default ShimmerEffect;
