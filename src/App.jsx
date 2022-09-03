import './App.css'
import Header from './components/Footer'
import Banner from './components/banner'
import Cards from './components/cards'
import Outdoor from './components/Outdoor'
import Finally from './components/Finaly-footer'
import CardTest from './components/Card-text'
import Slogan from './components/slogan'

function App() {

  return (
    <div className="App">
        <Banner />
        <Slogan/>
        <Cards />
        <Outdoor />
        <CardTest />
        <Header />
        <Finally />
        
    </div>
  )
}

export default App
