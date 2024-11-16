import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {
    return (
      <Image
        style={{ width: 100, height: 25 }}
        source={require('../../assets/logo/logo-white-2.png')}
      />
    );
  }

  export default LogoTitle;