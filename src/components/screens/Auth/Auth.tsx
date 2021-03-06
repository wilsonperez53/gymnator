import React from 'react';
import {StyleSheet} from 'react-native';
import styled from '@emotion/native';
import BrandedButton from '../../molecules/BrandedButton';
import BlueBackground from '../../atoms/BlueBackground';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native' ; 

const AuthScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLoginButton = () => {
    navigation.navigate('Login');
  };

  const handleSigninButton = () => {
    navigation.navigate('Signin');
  };
 /**/
  return (
    <Container>
     
      <BlueBackground height="20%" round /> 
     
      <ButtonContainer>
        <Image source={require('../../../assets/images/logo.png')} style={{ width: 200, height: 320 }}/>
         <BrandedButton
          color="secondary"
          text="Iniciar sesión"
          onPress={handleLoginButton}
        />
        <BrandedButton
          color="primary"
          text="Inscribirse"
          onPress={handleSigninButton}
        />
       
      </ButtonContainer>
    </Container>
  );
};

// Estilos con emotion/styled-components
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ButtonContainer = styled.View`
  height: 40%;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

// Estilos con Stylesheet nativo
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   blueBackground: {
//     height: '60%',
//     width: '100%',
//     backgroundColor: '#0055b8',
//     borderBottomRightRadius: 80,
//   },
// });

export default AuthScreen;
