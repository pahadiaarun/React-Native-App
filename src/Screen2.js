import React, { useEffect, useState, useCallback  } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Animated, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  const [animation] = useState(new Animated.Value(0));
  const startAnimation = useCallback(() => {
  Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  }).start();
}, [animation]);

  useEffect(() => {
    startAnimation();
    const timeout = setTimeout(() => {
      navigation.navigate('Screen3');
    }, 20000);

    return () => clearTimeout(timeout);
  }, [navigation, startAnimation]);
  

  const handleArrowPress = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
        startAnimation();
    });
  };

  const imageTranslateX = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [400, 0, -400],
  });

  return (
    <View style={styles.container}>
    <Image source={require('../Assets/award_bg.png')} style={styles.backgroundImage1} />
    <Image source={require('../Assets/main-heart.png')} style={styles.heartImage} />
    <Text style={styles.score}>15000</Text>
      <Image source={require('../Assets/girlClap.png')} style={styles.middleImage} />
      <Image source={require('../Assets/awardPlatform.png')} style={styles.bottomImage} />
      <View style={styles.animatedContainer}>
      <Animated.View style={[styles.contentContainer, { transform: [{ translateX: imageTranslateX }] }]}>
        <View style={styles.imageContainer}>
          <Image source={require('../Assets/avtar2.png')} style={styles.userProfile} />
          <View style={styles.textContainer}>
        <Text style={styles.text1}>D-Lister</Text>
        <Text style={styles.text2}>Sally</Text>
      </View>
        </View>
      </Animated.View>
      <TouchableOpacity onPress={handleArrowPress} style={styles.arrowButton}>
        <Image source={require('../Assets/arrow.png')} style={styles.arrowImage} />
      </TouchableOpacity>
    </View>
      <Text style={styles.midText}>Gave U Some Love</Text>
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
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: -250,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    top: '70%',
    height: '35%',
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
  userProfile: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 50,
    borderColor: '#F9FF4B',
    borderWidth: 5,
    marginRight: 10,
  },
  text1: {
    fontSize: 40,
    color: '#00FF00',
  },
  text2: {
    fontSize: 20,
    color: '#00FF00',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
  },
  arrowImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: -100,
    left:200,
  },
  heartImage: {
    position: 'absolute',
    height: "17%",
    width: "50%",
    marginBottom: 40,
    marginRight: 5,
    resizeMode: 'contain',
  },
  midText: {
    position:'absolute',
    fontSize:30, 
    color:'#F9FF4B',
    textShadowColor: '#fff',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5,
    top: '35%'
  },
  score: {
    position:'absolute', 
    fontSize:30,
    color:'#F9FF4B',
    textShadowColor: '#fff',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5,
    top:'47%'
  },
});

export default Screen2;
