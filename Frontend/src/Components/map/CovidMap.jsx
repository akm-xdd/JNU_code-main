import React from 'react';
// import { MapContainer, TileLayer, Marker, GeoJSON} from 'react-leaflet';
import { MapContainer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
import statesIndia from './Data/statesIndia.json';
import LegendItems from './Entities/LegendItems';

class CovidMap extends React.Component {
    state = {}

    componentDidMount() {
        // console.log(myData)
        // console.log(statesIndia.features)
        this.setState({ mapStates: statesIndia.features });
    }

    statesStyle = {
        fillColor: '#5f4a78',
        fillOpacity: '1',
        color: "#ecdefc",
        weight: '2',
    };



    ChangeStatesColor = (event) => {
        event.target.setStyle({
            fillColor:"#ecdefc",
            color:'#e84a5f',
            fillOpacity:'1',
        });

    };

    OnEachState = (states, layer) => {
        const StatesName = states.properties.st_nm;
        const confirmed = states.properties.Confirmed;
        // console.log(StatesName);
        console.log(confirmed)
        const confirmedText = states.properties.confirmedText;
        // console.log(confirmedText);
        // layer.on({ mouseover: layer.bindPopup(`${StatesName} ${confirmedText}`) })

        const legendItem = LegendItems.find(item => item.isFor(states.properties.Confirmed));
        const fillColor = legendItem ? legendItem.color : '#dac5e3';

        layer.setStyle({
            fillColor: fillColor,
            fillOpacity: 1,
            color: '#ecdefc',
            weight: 2,
        });


        // layer.on('mouseover', function () {
        //     layer.bindPopup(`${StatesName}: ${confirmedText}`).openPopup();
        //   });
        //   layer.on({
        //     click: this.ChangeStatesColor,
        //     mouseover: function () {
        //       layer.bindPopup(`${StatesName}: ${confirmedText}`).openPopup();
        //     }
        //   });
        // layer.bindPopup({mouseover:(`${StatesName}: ${confirmedText}`)});
        // layer.options.fillOpacity = Math.random();
        // layer.on({
        //     click :this.ChangeStatesColor

        // });
        // layer.on({mouseover:
        //     this.ChangeStatesColor
        // });

        // layer.options.fillColor = states.properties.color;
        // layer.options.fillColor = this.getStateColor(confirmed);



         // chatGPT 
         layer.setStyle({
            fillColor: fillColor,
            fillOpacity: 1,
            color: '#7867a2',
            weight: 2,
          });
        
          layer.on({
            click: (event) => {
              // Revert previously clicked layer color if exists
              if (this.clickedLayer) {
                this.clickedLayer.setStyle({
                  fillColor: this.clickedLayerFillColor,
                  color: '#7867a2',
                  fillOpacity: 1,
                });
              }
        
              // Change the color of the clicked layer
              this.clickedLayer = event.target;
              this.clickedLayerFillColor = this.clickedLayer.options.fillColor;
              this.clickedLayer.setStyle({
                fillColor: '#7867a2',
                color: '#7867a2',
                fillOpacity: 1,
              });
            },
            mouseover: function () {
              layer.bindPopup(`${StatesName}: ${confirmedText}`).openPopup();
            },
          });


    };

    // getStateColor = (confirmed) => {
    //     const legendItem = LegendItems.find(item => item.isFor(confirmed));
    //     return legendItem ? legendItem.color : 'gray';
    //   };



   

      
    render() {
        return (
            <MapContainer
                style={{ height: '60vh' }}
                zoom={4}
                center={[20.5937, 78.9629]}
            >
                <GeoJSON style={this.statesStyle} data={statesIndia.features} onEachFeature={this.OnEachState} />


            </MapContainer>

        )
    }
};

export default CovidMap;