import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TouchableWithoutFeedback} from 'react-native';
import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';


const quotes = [
  "Everything is impermanent",
  "Change is the only constant",
  "This too shall pass",
  "Embrace the moment",
  "Life is a series of changes",
  "Nothing lasts forever",
  "The only thing certain is uncertainty",
  "Let go of what you cannot control",
  "Change is the essence of life",
  "Accept the flow of life",
];

export default function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [quote]);


  
  function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }


  return (
    <TouchableWithoutFeedback onPress={() => setQuote(getRandomQuote())}>
      <View style={styles.container}>
        <Animated.Text style={[styles.quote, { opacity: fadeAnim }]}>
        {quote}
        </Animated.Text>

        <StatusBar style="auto" />
      </View>
      </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 20,
    color: '#333',

  }
});
