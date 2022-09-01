import Apply from './components/Apply'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RoadmapsMain from './components/Roadmap/RoadmapsMain'
import RoadmapsSearch from './components/Roadmap/RoadmapsSearch'

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <RoadmapsSearch />
      <RoadmapsMain />
      <Apply />
      <Footer />
    </div>
  )
}

export default App
