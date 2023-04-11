import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Auth from './pages/auth/Auth';
import Profile from './pages/profile/Profile'

function App() {
  return (
    <div className="App">
      <Header/>
        <Auth/>
      <Footer/>
      <Profile/>
    </div>
  );
}

export default App;
