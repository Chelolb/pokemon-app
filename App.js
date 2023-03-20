import {Provider} from "react-redux"
import store from './store';
import Main from './src/navigations/Main'
import 'react-native-gesture-handler';


export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
      );
}

