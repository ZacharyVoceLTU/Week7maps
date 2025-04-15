import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, {Circle, Marker, PROVIDER_DEFAULT} from 'react-native-maps';

export default function App() {
  const RADIUS = 200;

  const markers = [
    {coordinate: {
      latitude: -37.721077,
      longitude: 145.047977,
    },
    title: "Agora",
    description: "My Coffee",
    },
    {
      coordinate: {
        latitude: -37.721407,
        longitude: 145.046530,
      },
      title: "Beth Gleeson Building",
      description: "My Home away from home",
    },
  ];

  const renderMarkers = () => {
    return markers.map((markers, index) => (
      <Marker
        key = {index}
        coordinate = {markers.coordinate}
        title = {markers.title}
        description = {markers.description}
      />
    ));
    };

  return (
    <MapView
      provider = {PROVIDER_DEFAULT}
      style = {styles.map}
      initialRegion = {{
        latitude: -37.721,
        longitude: 145.046,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      >
      {(renderMarkers())}

      <Circle center = {{
        latitude: -37.721407,
        longitude: 145.046530,        
      }} radius = {RADIUS}>
      </Circle>

      </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
});
