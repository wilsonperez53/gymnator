import React from 'react';
//import React in our code.
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import { useEffect } from 'react';

const RoutineScreen: React.FC = () => {
  
    const getDataUsingSimpleGetCall = () => {
        console.log(JSON.stringify("Start......."));
        axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        )
        .then(function (response) {
          // handle success
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
          console.log('Finally called');
        });
     
        /*axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            // handle success
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
            console.log('Finally called');
          });*/
      };
    
      const getDataUsingAsyncAwaitGetCall = async () => {
        console.log(JSON.stringify("F2 getDataUsingAsyncAwaitGetCall"));
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/1',
          );
          console.log(JSON.stringify(response.data));
        } catch (error) {
          // handle error
          console.log(error.message);
        }
      };
    
      const postDataUsingSimplePostCall = () => {
        axios
          .post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
          .then(function (response) {
            // handle success
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            console.log(error.message);
          });
      };
    
      const multipleRequestsInSingleCall = () => {
        axios
          .all([
            axios
              .get('https://jsonplaceholder.typicode.com/posts/1')
              .then(function (response) {
                // handle success
                console.log('Post 1 : ' + JSON.stringify(response.data));
              }),
            axios
              .get('https://jsonplaceholder.typicode.com/posts/2')
              .then(function (response) {
                // handle success
                console.log('Post 2 : ' + JSON.stringify(response.data));
              }),
          ])
          .then(
            axios.spread(function (acct, perms) {
              // Both requests are now complete
              console.log('Both requests are now complete');
            }),
          );
      };
    
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>
            Dia de la semana
          </Text>
          {/*Running GET Request*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text>Lunes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text>Martes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text>Miercoles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text>Jueves</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text>Viernes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text>Sabado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text>Domingo</Text>
          </TouchableOpacity>
    
         
    
          <Text style={{textAlign: 'center', marginTop: 18}}>
            Logged as: Wilson Perez
          </Text>
        </View>
      );
  /*return (
    <View>
      <Text>Rutina de Ejercicio</Text>
    </View>
  );*/
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      padding: 16,
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '100%',
      marginTop: 16,
    },
  });

export default RoutineScreen;