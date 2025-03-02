import React, { useCallback, useState } from 'react';
import Map from 'devextreme-react/map';
import SelectBox from 'devextreme-react/select-box';
import {
  mapTypes, mapProviders, mapTypeLabel, mapProviderLabel,
} from './data.js';

const apiKey = {
  azure: '6N8zuPkBsnfwniNAJkldM3cUgm3lXg3y9gkIKy59benICnnepK4DJQQJ99AIACYeBjFllM6LAAAgAZMPGFXE',
  bing: 'Aq3LKP2BOmzWY47TZoT1YdieypN_rB6RY9FqBfx-MDCKjvvWBbT68R51xwbL-AqC',
  google: 'AIzaSyBIw1-l1otL9v1bY-OR4p9w21l1VLu9L2k',
};
const App = () => {
  const [mapTypeValue, setMapTypeValue] = useState(mapTypes[0].key);
  const [mapProviderValue, setMapProviderValue] = useState(mapProviders[0].key);
  const onMapTypeChange = useCallback(
    (value) => {
      setMapTypeValue(value);
    },
    [setMapTypeValue],
  );
  const onMapProviderChange = useCallback(
    (value) => {
      setMapProviderValue(value);
    },
    [setMapProviderValue],
  );
  return (
    <div>
      <Map
        defaultCenter="40.7061, -73.9969"
        defaultZoom={14}
        height={400}
        width="100%"
        provider={mapProviderValue}
        type={mapTypeValue}
        apiKey={apiKey}
      ></Map>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Map Provider</span>
          <SelectBox
            value={mapProviderValue}
            onValueChange={onMapProviderChange}
            dataSource={mapProviders}
            inputAttr={mapProviderLabel}
            displayExpr="name"
            valueExpr="key"
          />
        </div>
        <div className="option">
          <span>Map Type</span>
          <SelectBox
            value={mapTypeValue}
            onValueChange={onMapTypeChange}
            dataSource={mapTypes}
            inputAttr={mapTypeLabel}
            displayExpr="name"
            valueExpr="key"
          />
        </div>
      </div>
    </div>
  );
};
export default App;
