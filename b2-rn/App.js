import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './views/HomeView'
import SecondView from './views/SecondView';
import { Provider as PaperProvider } from 'react-native-paper';

// Navigation stack setup
const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Accueil' component={HomeView} options={{ title: 'Accueil' }} />
          <Stack.Screen name='Second' component={SecondView} options={{ title: 'Second' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

