import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';
import { useState } from 'react';



function App() {
  const [dataPanels, setDataPanels] = useState([
    {
      id: 1,
      panelTitle: "Title 1",
      panelContent: "Social distance, quarntine Hand hygiene, cough, cleaning and laundry",
      panelClass: "accordionMain accordionDivFirstItem",
      inactiveClass: "BGfloralwhite"

    },
    {
      id: 2,
      panelTitle: "Title 2",
      panelContent: "Social distance, quarntine Hand hygiene, cough, cleaning and laundry",
      panelClass: "accordionMain accordionDivSecondItem",
      inactiveClass: "BGlightgoldenrodyellow"
    },
    {
      id: 3,
      panelTitle: "Title 23",
      panelContent: "Social distance, quarntine Hand hygiene, cough, cleaning and laundry",
      panelClass: "accordionMain accordionDivThirdItem",
      inactiveClass: "BGmistyrose"
    }
  ]);
  const [active, setActive] = useState(null);
  function handleClick(id) {
    active === id ? setActive(null) : setActive(id);
  }

  return (
    <div className="App">
      <div className='accordionDiv d-center flex-col'>
        <h3 className='d-center'>Simple Accordion Panel list App!</h3>
        {
          dataPanels.map((panel) => (
            <div key={panel.id} className={classNames(panel.panelClass , active == panel.id ? 'active' : panel.inactiveClass)}>
              <div className='accordionHeader'>
                <div className='iconPlus' onClick={() => handleClick(panel.id)}></div>
                <div className='d-center'>{panel.panelTitle}</div>
              </div>
              <div className='accordionContent'>{panel.panelContent}</div>
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default App;
