import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Clima = () => {
    return ( 
        <>
        </>
    );
};

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 20,
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: 'bold',
  },
  temperatura: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperaturas: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Clima;
