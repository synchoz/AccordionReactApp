import React, { useState } from 'react';
import data from './data.js';
import classNames from 'classnames';
import './style.css';


export default function Accordion() {
    const [active, setActive] = useState(null);
    const [isMultiSelect, setIsMultiSelect] = useState(false);
    const [activeArr, setActiveArr] = useState([]);

    function handleClick(id) {
        if (isMultiSelect) {
            let cpyMultiple = [...activeArr];
            setActive(null);
            cpyMultiple.indexOf(id) > -1 ? cpyMultiple.splice(cpyMultiple.indexOf(id), 1) : cpyMultiple.push(id);
            setActiveArr(cpyMultiple);
        } else {
            setActiveArr([]);
            active === id ? setActive(null) : setActive(id);
        }
    }

    return (
        <div className='accordionDiv d-center flex-col'>
            <h3 className='d-center'>Simple Accordion Panel list App!</h3>
            <button onClick={() => (setIsMultiSelect(!isMultiSelect))}>{isMultiSelect ? 'Set Single Select' : 'Set Multi Select'}</button>
            {
                data.map((panel) => (
                    <div key={panel.id} className={classNames(
                                                                panel.panelClass, 
                                                                active == panel.id || isMultiSelect && activeArr.indexOf(panel.id) > -1 ? 'active' 
                                                                                                                                        : panel.inactiveClass)}>
                        <div className='accordionHeader'>
                            <div className='iconPlus' onClick={() => handleClick(panel.id)}></div>
                            <div className='d-center'>{panel.panelTitle}</div>
                        </div>
                        <div className='accordionContent'>{panel.panelContent}</div>
                    </div>
                ))
            }
        </div>
    )
}