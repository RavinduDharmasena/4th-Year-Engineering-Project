import React from 'react';
import Viewer from './components/Viewer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faTrashAlt,faEdit, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faTimes)
  return (
    <Viewer/>
  );
}

export default App;
