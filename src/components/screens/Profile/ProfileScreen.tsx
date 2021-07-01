import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  AppState,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import ModalSelector from 'react-native-modal-selector';
// import RNPickerSelect, { defaultStyles } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import i18n from 'i18n-js';
import {useNavigation} from '@react-navigation/native';
/*
import {
  setLanguageRequest,
  signOutRequest,
  fetchSettingsRequest,
  savePendingHealthStatusRequest,
} from '../actions';

import Logo from '../../../assets/images/logo_aldeas.svg';
import Register from '../../../assets/images/menu_registro.svg';
import Center from '../../../assets/images/menu_centro.svg';
import Directory from '../../../assets/images/menu_directorio.svg';
import ConditionIcon from '../../../assets/images/menu_condicion.svg';
import Workplace from '../../../assets/images/wp.svg';
import Data from '../../../assets/images/menu_mis_datos.svg';
/*
import Language from '../assets/images/menu_idioma.svg';
import Footer from '../components/Footer';*/
//import moment from 'moment';
import { useMemo } from 'react';
import { useCallback } from 'react';
import BrandedButton from '../../molecules/BrandedButton';

const languageOptions = [
  {
    label: 'Espanol',
    key: 'es',
  },
  {
    label: 'Ingles',
    key: 'en',
  },
];

/*
const LanguagePicker = ({ language, setLanguage, languages }) => {
  const pickerRef = useRef();
  const placeholder = {
    label: 'Escoja un lenguaje...',
    value: null,
    color: '#9EA0A4',
  };
  return (
    <TouchableOpacity style={styles.borderButton}>
      <View style={styles.buttonBackground}>
        <Language />
      </View>
      <View style={styles.borderButtonText}>
        <RNPickerSelect
          placeholder={placeholder}
          items={languages}
          onValueChange={value => {
            // this.setState({
            //   favSport1: value,
            // });
            setLanguage(value);
          }}
          style={pickerSelectStyles}
          // style={styles.borderButton}
          value={language}
          useNativeAndroidPickerStyle={false}
          ref={pickerRef}
        />
        
      </View>
    </TouchableOpacity>
  );
};*/

const Button = ({ background, text, backgroundColor, onPress }) => (
  <TouchableOpacity
   
    onPress={onPress}
  >
    <View>
      {background}
    </View>
    <View
     
    >
      {/* <Text style={small ? styles.smallButtonText : styles.buttonText}> */}
      {/* {text || <Text></Text>} */}
      {typeof text === 'string' ? <Text>{text}</Text> : text}
      {/* </Text> */}
    </View>
  </TouchableOpacity>
);

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleLoginButton = () => {
    navigation.navigate('Login');
  };
//const ProfileScreen = ({ navigation }) => {
 // const appState = useRef(AppState.currentState);
  // const [appStateVisible, setAppStateVisible] = useState(appState.current);
 // const dispatch = useDispatch();
  //const signOut = () => dispatch(signOutRequest());

  return (
    <View style={styles.menu}>
      <Text>Test</Text>
      <BrandedButton
          color="primary"
          text="Salir"
          onPress={handleLoginButton}
        />
       
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    alignItems: 'center',
    paddingTop: '10%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 0,
    width: '60%',
    // maxHeight: 80,
    height: '10%',
    alignSelf: 'center',
    // marginBottom: 10,
  },
  content: {
    width: '80%',
    // width: '100%',
    // alignItems: 'center',
    flex: 1,
    maxHeight: '98%',
    justifyContent: 'center',
  },
  smallButtons: {
    height: '18%',
    maxHeight: 110,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    maxWidth: 360,
    height: Platform.OS === 'ios' ? '18%' : '14%',
    maxHeight: 110,
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius: 5,
  },
  smallButton: {
    width: '100%',
    maxWidth: 330,
    height: '100%',
    justifyContent: 'center',
    marginTop: '6%',
    borderRadius: 5,
    flex: 1,
  },
  borderButton: {
    width: '100%',
    maxWidth: 170,
    height: 36,
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  smallButtonBackground: {
    position: 'absolute',
    top: 0,
    width: '80%',
    height: '100%',
    borderRadius: 5,
  },
  buttonTextContainer: {
    maxWidth: 150,
    marginLeft: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 18 : 14,
  },
  borderButtonText: {
    color: '#000',
    textAlign: 'center',
    paddingLeft: 10,
  },
  smallButtonTextContainer: {
    marginLeft: 55,
    paddingRight: 10,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  sbt: {
    color: '#fff',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  marginRight: {
    marginRight: 10,
  },
  dataPolicy: {
    marginTop: 30,
    alignSelf: 'center',
  },
  lastEntry: {
    marginTop: 5,
    color: '#A8A8A8',
    alignSelf: 'center',
    fontSize: 12,
  },
  languagePicker: {
    paddingLeft: 30,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  buttonTextBold: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 18 : 14,
  },
  smallButtonTextBold: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
  footer: {
    width: '100%',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginLeft: 20,
    fontSize: 14,
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderWidth: 0,
    // borderColor: 'gray',
    borderRadius: 4,
    color: '#000',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginLeft: 20,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 0,
    // borderColor: 'purple',
    borderRadius: 8,
    color: '#000',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
/*
const ProfileScreen: React.FC = () => {
  return (
    <View>
      <Text>Perfil</Text>
    </View>
  );
};*/

export default ProfileScreen;