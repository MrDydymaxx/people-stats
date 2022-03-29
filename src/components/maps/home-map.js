import React, { useMemo, useState } from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import { Link } from 'react-router-dom';
import CityPin from './pin';

const HomeMap = ({ users }) => {
  // A state that will open a popup when we click on a marker pin
  const [popupInfo, setPopupInfo] = useState(null);

  // Here we init the token that we create in mapbox web site (you need to subscribe it)
  const TOKEN = 'pk.eyJ1Ijoic2tpcHM5NCIsImEiOiJja3p4ZGd1MzcwMGhzMnZvM25kdmk3bzljIn0.inJ_pDVebgYSC1mGG22mQA';

  // We call the pins from pin.js to create our marker
  const pins = useMemo(
    () => users.map((item) => (
        <Marker
          key={item.login.username}
          longitude={item.location.coordinates.longitude}
          latitude={item.location.coordinates.latitude}
          anchor="bottom"
        >
          <CityPin size={20} onClick={() => setPopupInfo(item)} />
        </Marker>
    )),
    [users, setPopupInfo]
  );
  // Then we return the map with the markers if they exists
  return (
    <div id="map">
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 0
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        style={{ height: 500 }}
        mapboxAccessToken={TOKEN}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.location.coordinates.longitude)}
            latitude={Number(popupInfo.location.coordinates.latitude)}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.name.title} {popupInfo.name.first}{' '}
              {popupInfo.name.last}
              <br />
              {popupInfo.location.city}, {popupInfo.location.state}
              <br />
              <Link to={`/user/${popupInfo.login.username}`}>Show profile</Link>
            </div>
            <img width="100%" src={popupInfo.picture.large} alt="userPicture" />
          </Popup>
        )}
      </Map>
    </div>
  );
};
export default HomeMap;
