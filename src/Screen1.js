import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


const Screen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen2');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../Assets/award_bg.png')} style={styles.backgroundImage1} />
      <Image source={require('../Assets/castingLogo.png')} style={styles.castImage} />
      <View style={styles.countdownContainer}>
        <CountdownCircleTimer
          isPlaying
          duration={3}
          colors
          strokeWidth={0}
          size={150}
        >
          {({ remainingTime }) => <Text style= {styles.timeText}>4:52:0{remainingTime}</Text>}
        </CountdownCircleTimer>
      </View>
      <Text style={[styles.neon,{shadowColor: 'cyan'}]}>Casting Call!</Text>
      <Text style={styles.midText}>The Results R In!</Text>
      <Image source={require('../Assets/girlClap.png')} style={styles.middleImage} />
      <Image source={require('../Assets/awardPlatform.png')} style={styles.bottomImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  midText: {
    position:'absolute', 
    fontSize:30, 
    color:'yellow',
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
  castImage: {
    flex: 1,
    position: 'absolute',
    height: 120,
    width: 100,
    top: '20%'
  },
  neon: {
    position: 'absolute',
    top: '32%',
    left: 100,
    fontSize: 30,
    color: '#ff00ff',
    transform: [{ rotate: '-15deg' }],
    textShadowColor: '#fff',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5,
  },
  countdownContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-15deg' }],
  },
  timeText: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default Screen1;
