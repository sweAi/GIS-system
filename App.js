   

import Map from './Map';
import {  Routes,  Route} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header';

function App() {
  return (
    <div>
      
      <Routes>
         <Route path="/*" element={<Map/>}/>
      </Routes>
    </div>
  );
}

export default App;