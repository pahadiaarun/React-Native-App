import React, { useEffect, useRef, useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Animated, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Countdown } from 'react-native-countdown-component';


const Screen3 = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(15000);
  const countAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(countAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      setCount(40000);
    });
  }, [countAnimation]);

  const handleArrowPress = () => {
    navigation.navigate('Screen1');
  };

  countAnimation.addListener(({ value }) => {
    setCount(Math.floor(value * (40000 - 15000) + 15000));
  });

  return (
    <View style={styles.container}>
  <Image source={require('../Assets/award_bg.png')} style={styles.backgroundImage1} />
  <Image source={require('../Assets/main-heart.png')} style={styles.heartImage} />
  <Text style={styles.midText}>4 Friends Gave U Some Love</Text>
  <Image source={require('../Assets/girlClap.png')} style={styles.middleImage} />
  <Image source={require('../Assets/awardPlatform.png')} style={styles.bottomImage} />
  <Text style={styles.count}>{count}</Text>
  <View style={styles.animatedContainer}>
    <TouchableOpacity onPress={handleArrowPress} style={styles.arrowButton}>
      <Image source={require('../Assets/arrow.png')} style={styles.arrowImage} />
    </TouchableOpacity>
    <Image source={require('../Assets/msg1.png')} style={styles.msgImage} />
    <Text style={styles.msgText}>Congrats</Text>
  </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    position: 'absolute'
  },
  backgroundImage1: {
    height:'100%',
    width:'100%',
    resizeMode: 'stretch',
    zIndex: -5
  },
  middleImage: {
    flex:1,
    position: 'absolute',
    top: '66%',
    height: '40%',
    width: '30%',
    resizeMode: 'cover',
    transform: [{ translateY: -100 }],
    zIndex:-4,
  },
  bottomImage: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    resizeMode: 'cover',
    justifyContent:'flex-end',
    zIndex:-5
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
  },
  arrowImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: -200,
    left:200,
  },
  heartImage: {
    position: 'absolute',
    height: "17%",
    width: "50%",
    top: '35%',
    resizeMode: 'contain',
  },
  midText: {
    position: 'absolute',
    fontSize: 40,
    width:'100%',
    color: '#F9FF4B',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    top: '20%',
    textAlign: 'center',
  },
  count: {
    position:'absolute', 
    fontSize:30,
    fontWeight: 'bold',
    color:'#F9FF4B',
    textShadowColor: '#fff',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5,
    top:'42%'
  },
  msgImage: {
    height:100,
    width:150,
    top:50,
    left:100,
  },
  msgText: {
    position: 'absolute',
    fontSize: 20,
    width:'100%',
    color: 'black',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    top: '80%',
    left:100,
    textAlign: 'center',
  }
});

export default Screen3;
