import './App.css';
import Header from './components/Header';
import MainTodo from './components/MainTodo';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App h-[100vh] text-white'>
      <Header />
      <div className='flex pt-[4.4%]'>
        <SideBar />
        <MainTodo />
      </div>
    </div>
  );
}

export default App;
