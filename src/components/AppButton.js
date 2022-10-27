/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, useTheme } from 'react-native-paper';

const AppButton = ({
  mode,
  loading,
  disabled,
  buttonColor,
  textColor,
  icon,
  theme,
  contentStyle,
  labelStyle,
  style,
  onPress,
  children,
  ...rest
}) => {
  //
  const appTheme = useTheme();
  //
  return (
    <Button
      mode={mode}
      loading={loading}
      disabled={disabled}
      buttonColor={buttonColor}
      textColor={textColor}
      icon={icon}
      uppercase={false}
      theme={{ roundness: 2, ...theme }}
      contentStyle={{ height: 52, ...contentStyle }}
      labelStyle={{
        ...appTheme.fonts.labelLarge,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
        labelStyle,
      }}
      style={style}
      onPress={onPress}
      {...rest}>
      {children}
    </Button>
  );
};

AppButton.defaultProps = {
  mode: 'contained',
  onPress: () => {},
};

export default AppButton;
