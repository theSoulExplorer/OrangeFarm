import './App.css';
import Lostdeals from './components/Lostdeals';
import Navigation from './components/Navigation';
import Quarter from './components/Quarter';
import Revenues from './components/Revenues';

function App() {
  return (
    
  
  <div class="grid grid-cols-8 grid-rows-10 gap-3 h-screen w-screen bg-gray-200 p-4 parent">
      <Navigation />
      <Revenues />
      <Lostdeals />
      <Quarter />
      <div class="col-span-3 row-span-5 col-start-3 row-start-4 bg-white rounded-md"></div>
      <div class="col-span-3 row-span-3 col-start-6 row-start-4 bg-white rounded-md"></div>
      <div class="row-span-2 col-start-6 row-start-7 bg-white rounded-md"></div>
      <div class="row-span-2 col-start-7 row-start-7 bg-white rounded-md"></div>
      <div class="row-span-2 col-start-8 row-start-7 bg-white rounded-md"></div>
      <div class="col-span-2 row-span-2 col-start-3 row-start-9 bg-white rounded-md"></div>
      <div class="col-span-2 row-span-2 col-start-5 row-start-9 bg-white rounded-md"></div>
      <div class="col-span-2 row-span-2 col-start-7 row-start-9 bg-white rounded-md"></div>
  </div>
      
    
  );
}

export default App;
