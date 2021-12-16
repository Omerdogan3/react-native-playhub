import AsyncStorage from '@react-native-async-storage/async-storage';


export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem('@' + key, value)
  } catch (e) {
    // saving error
  }
}

export const getData = async (key) => {
  try {
    const val = await AsyncStorage.getItem('@' + key)
    return val
  } catch (e) {
    // saving error
  }
}
