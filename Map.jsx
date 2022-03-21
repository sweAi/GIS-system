
import { useViewModel } from './viewModel'; 
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react";
const Map = () => {
    const {
         lng , lat , zoom , mapContainerRef

    } = useViewModel(); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} 
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;