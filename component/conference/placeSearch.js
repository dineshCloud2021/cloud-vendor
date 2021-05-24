import React from 'react';
import {View,StyleSheet} from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export default function App() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={3}
            autoFocus={false}
            returnKeyType={'search'}
            keyboardAppearance = {'light'}
            listViewDisplayed="auto"
            fetchDetails={true}
            renderDescription={row => row.description}
            onPress={(data, details = null) => {
              console.log(data, details)
            }}

            getDefaultValue={() => ''}
            
            query={{
              key: 'AIzaSyCqv6vEDRGA2bWo9DwPTj54p4maCLDgXOw',
              language: 'en',
              types: 'establishment'
            }}

            styles={{
                textInputContainer: {
                  width: '100%',
                },
                description: {
                  fontWeight: "bold"
                },
                predefinedPlacesDescription: {
                  color: "#1faadb"
                },...styles.input}}

                currentLocation={true}
                currentLocationLabel="Current Location"
                nearbyPlacesAPI="GooglePlacesSearch"

                GoogleReverseGeocodingQuery={{

                }}

                GooglePlacesSearchQuery={{
                  rankby:'distance',
                  //type: ''
                }}

                GooglePlacesDetailsQuery={{
                  fields: 'formatted_address',
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                //predefinedPlaces={[]}

                debounce={200}
                
          />

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:"#e6e6e6"
  }
});