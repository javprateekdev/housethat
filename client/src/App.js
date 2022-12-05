
import './App.css';
import Page from './Page';
import Header from './Header'
import View from './View';
import { Provider } from 'react-redux';
import store from './store/store';
import Footer from './Footer';

function App() {
  return (

    <div>
      <Provider store={store}>
      <Header/>
  <h3 style={{marginTop:'80px',textAlign:'center',letterSpacing:'2px',fontSize:'20px',color:'#081834'}}>PROPERTY COMPARISION TOOL</h3>
  <Page/>
  <View/>
  <Footer />
   </Provider>

    </div>
  );
}

export default App;
