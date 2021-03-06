# React Native Playhub Plugin
React native plugin in order to implement playhub.

### Requirements

Before starting, please install libraries below.
- ```axios ```
- ```react-native-device-info ```
- ```@react-native-firebase/dynamic-links ```
- ```@react-native-community/async-storage```
- ```crypto-js```

### Installation
```bash
yarn add @omerdogan3/react-native-playhub
```

### Usage

Call initialize function on first open.
```bash
import {initialize} from  '@omerdogan3/react-native-playhub';

useEffect(()=> {
	initialize();
}, [])
```

Send event functions in app.
```bash
import {highScore, readChapter, levelUp, scanBarcode} from  '@omerdogan3/react-native-playhub';

highScore(100)
readChapter(10)
levelUp(5)
scanBarcode(10)
```
