import { useState } from 'react';
import Portal from './Portal';
import { Font, PDFViewer } from '@react-pdf/renderer';
import Resume from "./Resume";

Font.register({
  family: "TT Norms Pro",
  fonts: [
    {
      src: `../fonts/TT-Norms-Pro-Regular.ttf`,
    },
    {
      src: `../fonts/TT-Norms-Pro-Bold.ttf`,
      fontWeight: 700,
    },
    {
      src: `../fonts/TT-Norms-Pro-ExtraBold.ttf`,
      fontWeight: 800,
    },
  ],
});

const Modal = ({ data }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <a onClick={() => setOpen(!open)}
         style={{ cursor: 'pointer', display: 'flex', color: '#0d84c7', lineHeight: '36px' }}>
        <img src="https://res.cloudinary.com/maxigord/image/upload/v1663022175/pngegg_tpummp.png" alt="v"
             style={{ width: '36px', height: '36px' }}/>
        <h4 style={{ paddingLeft: '13px' }}>Resume</h4>
      </a>
      {open && (
        <Portal selector="#modal">
          <div className="backdrop">
            <div className="modal">
              <PDFViewer style={{ height: "100%", width: "100%" }} fileName="MaximHordiienko.pdf" >
                <Resume data={data}/>
              </PDFViewer>
              <button type="button" onClick={() => setOpen(false)} className="close">x</button>
            </div>
            <style jsx>{`
              :global(body) {
                overflow: hidden;
              }
              
              .backdrop {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.6);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
              }
              
              .modal {
                position: absolute;
                top: 10%;
                right: 10%;
                bottom: 10%;
                left: 10%;
              }
              
              .close {
                color: black;
                position: absolute;
                top: 20px;
                right: 25px;
              }
              
              .close:hover {
                color: palevioletred;
                border: 0.5px solid red;
                border-radius: 50%;
                height: 20px;
                width: 20px;
                line-height: 1px;
              }
            `}</style>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;