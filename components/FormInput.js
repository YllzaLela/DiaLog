import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  ...rest
}) => (
    <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      value={value}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>

)

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 5,
    marginTop: 10,
  },
  iconStyle: {
    marginRight: 10
  }
})

export default FormInput 