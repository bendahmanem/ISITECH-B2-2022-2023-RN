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
    <View style={{styles.container}}>

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


## Rappel CSS : Flex 
Doc: https://developer.mozilla.org/fr/docs/Web/CSS/flex

## Design en React Native

### Flex




### Style

### Height Width

Il est courant d'attribuer des hauteurs et largeurs fixes en 
pixel en developpement web. En React Native ces valeurs 
sont **sans unites**, et representent des `density independant pixels`: 

``` javascript
import React from 'react';
import {View} from 'react-native';

const FixedDimensionsBasics = () => {
  return (
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      >
      </View>
  )}
```


On peut utiliser des valeurs en % d'une valeur fixe, il faut s'assurer alors que le composant parent dispose d'une hauteur ou largeur fixe afin que le calcul du pourcentage dispose d'une valeur de reference


### Images en RN
https://reactnative.dev/docs/images
// TODO: fill this part 





## Gerer les evenements en RN

(cf code)

## Gerer la navigation entre les ecrans 

De maniere generale une application mobile est rarement constitue
d'un seul ecran, RN met a disposition React native navigation , qui fournit une solution tres simple pour la mise en place de la navigation in app.

Pour l'ajouter a votre projet RN: 

``` bash
npm install @react-navigation/native @react-navigation/native-stack
```

Si vous utilisez expo, installez des dependances supplementaires avec la commande suivante : 
``` bash
npx expo install react-native-screens react-native-safe-area-context
```

On fournit les fonctionnalites de react-navigation/native en `wrappant` toute 
notre application avec la balise `NavigationContainer` : 
``` jsx
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
};

export default App;
```


## Chercher et installer uen bibliotheque de composant RN

### React Native Paper


## Usage du systeme de fichier

Expo met a disposition une lib qui permet d'effectuer les operations relatives a la gestion 
du  systeme de fichier de l'appareil mobile. 


inserez une image ici 


Pour l'installer : 
``` bash
npx expo install expo-file-system
```