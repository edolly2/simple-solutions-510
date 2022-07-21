import './App.css';

import HomePage from './_pages/HomePage';
import TopBar from './_components/TopBar';
import TopBarMid from './_components/TopBarMid';
import TopNav from './_components/TopNav';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <TopBarMid />
      <TopNav />
      <HomePage />
    </div>
  );
}

export default App;
