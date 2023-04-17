# Introduction 

React Native est une lib permettant de creer des application natives Android et iOS.

## Dev iOS

Normalement pour developper sur il faut posseder un ordinateur sous macOS et un terminal mobile sous iOS.

Plus d'infos sur : 

https://developer.apple.com/ios/

Le langage de programmation utilise est le Swift. (ou Objective-C)



## Dev Android 

Pour beneficier de l'experience native il faut installer Android Studio et un SDK android. On cree alors notre application avec le langage Java (ou Kotlin).

Plus d'infos sur: 

https://developer.android.com/studio



## React Native 

React Native est un framework cross-platform qui permet de produire des applications natives iOS et Android, le tout avec la syntaxe de la bibliotheque React : 
``` javascript
const App = props => {
    return <View>
        <Text>Hello</Text>
    </View>
}
```

### Principes de developpement: Le developpement mobile natif

Android studio : 

Virtual device manager : 

SDK manager : 

Code source -> compilation -> executable


### Principes de developpement: Les Core components

RN fournit un nombre de `core components` pre integres qui permettent de couvrir un large eventail de possibilites de developpement. Ils repondent aux besoins les plus courants de la plupart des applications mobiles les plus simples.

https://reactnative.dev/docs/components-and-apis


### Installation (Android)

Il exsite deux manieres de mettre en place son environnement dev: 

- Expo et Expo Go (debutant friendly)
- React native CLI

Expo est un ensemble d'outils construit autour de React Native, et est la methode la plus rapide
pour commencer a developper sans avoir a trop se soucier de la configuration du projet.


Pre requis : 
 - Node JS (Version LTS) installe sur la machine

Pour creer un projet avec expo il suffit de taper la commander suivante : 
``` bash 
npx create-expo-app AwesomeProject

cd AwesomeProject
npx expo start
```

Une fois l'installation terminee on obtient une application
RN dont la structure des fichiers et dossiers rappelle fortement un projet React.

Pour lancer l'application : 
 ``` 
 npm start
 ```

 qui utilise la lib Expo pour lancer notre application. 


#### Le composant View

C'est le composant de base pour la construction d'interface utilisateur mobile.
C'est un conteneur qui embarque nativements des fonctionnalites : 
 - Flex https://reactnative.dev/docs/flexbox
 - du style https://reactnative.dev/docs/style
 - des fonctionnnalites tactiles https://reactnative.dev/docs/handling-touches
 - des fonctionnalites d'accessibilite https://reactnative.dev/docs/accessibility

 Exemple : 
 ``` javascript
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
 ```