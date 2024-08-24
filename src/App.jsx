import { useState } from 'react'
import WidgetCard from './components/WidgetCard'
import Dashboard from './components/Dashboard';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CSPM from './pages/cspm'
import CWPP from './pages/cwpp'
import Image from './pages/image'
import Ticket from './pages/ticket'


function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setOpen] = useState(false);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const [selectedPage, setSelectedPage] = useState(null);

  const renderPage = () => {
    switch(selectedPage) {
      case 'CSPM':
        return <CSPM />;
      case 'CWPP':
        return <CWPP />;
      case 'Image':
        return <Image/>;
      case 'Ticket':
        return <Ticket />;
      default:
        return null;
    }
  };
  return (
    <>
    <div>
      <div className='text-xl top-0 m-10 font-bold justify-between flex'>CNAPP Dashboard 
        <button onClick={() => setState({ isPaneOpen: true })}>Add Widget</button>
      </div>
      {/* <WidgetCard /> */}
      
      <Dashboard />
      <SlidingPane
        className=""
        width='30vw'
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Add Widget"
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <div className='flex flex-col'>
          Personalise your dashboard by adding the following widget
          <div className='h-10 w-full flex justify-evenly my-2'>
          <button onClick={() => setSelectedPage('CSPM')}>CSPM</button>
            <button onClick={() => setSelectedPage('CWPP')}>CWPP</button>
            <button onClick={() => setSelectedPage('Image')}>Image</button>
            <button onClick={() => setSelectedPage('Ticket')}>Ticket</button>
          </div>
          <div className='mt-2 border-t-2 pt-2'>
          {renderPage()}
          </div>
        </div>
        <br />
        <div className='absolute bottom-0 mb-2 end-0 mr-10'>
          
        </div>
      </SlidingPane>
      
    </div>
    </>
  )
}

export default App
