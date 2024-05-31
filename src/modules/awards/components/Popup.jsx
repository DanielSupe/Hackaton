import React, { ReactNode } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from 'prop-types';

const Popup = ({ isOpen, onClose, children }) => {
    return (
        isOpen ? (
            <div className="fixed shadow-2xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[70vw] h-[75vh] flex justify-center items-center  z-[1202] overflow-y-auto overflow-x-hidden rounded-lg bg-white dark:bg-darkBG">
                <div className="h-full w-full flex flex-col">
                    <div className=' relative top-0 left-0 w-full h-[40px] bg-gray-800'/>

                    <button onClick={() => onClose()} className="absolute top-2 right-2 text-black dark:text-white hover:scale-150 transition-all">
                        <span className=''><ClearIcon/></span>
                    </button>
                    
                    {children}
                </div>
            </div>
        ) : null
    );
}

Popup.propTypes = {
    onClose: PropTypes.func.isRequired,
    children:PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired
  };



export default Popup;