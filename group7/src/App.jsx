import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default App;