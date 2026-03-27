import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  return (
    <div className="container">
      <header className="header"><Header /></header>
      <aside className="sidebar"><Sidebar /></aside>
      <main className="content"><Cards /></main>
      <footer className="footer">© 2026 Group 7 Dashboard</footer>
    </div>
  );
}

export default App;