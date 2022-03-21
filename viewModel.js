import  { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

 
export const useViewModel = (props) => {
  const mapContainerRef = useRef(null);


  const [lng, setLng] = useState(46.6351);
  const [lat, setLat] = useState(24.7412);
  const [zoom, setZoom] = useState(1);
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,

    });
    // Create default markers
    // geoJson.features.map((feature) =>
    //   new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    // );
  
    const Sa = new mapboxgl.Marker()
.setLngLat([46.6361, 24.7423])
.addTo(map)


Sa.getElement().addEventListener('click',   event => {
    setZoom(map.getZoom().toFixed(5));
    axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
     iso2: "SA" 
   }).then((response)=>{
     console.log(response.data.data.name)
     console.log()
     new mapboxgl.Popup({ closeOnClick: false })
     .setLngLat([47, 24.9])
     .setHTML(response.data.data.name + ' '+ response.data.data.iso2 )
     .addTo(map);
     
   })
 }
  );
 
// Create a default Marker, colored black, rotated 45 degrees.
const Us = new mapboxgl.Marker()
.setLngLat([-95.500000, 38.500000])
.addTo(map);

Us.getElement().addEventListener('click',   event => {
  axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
    iso2: "US" 
  }).then((response)=>{
    console.log(response.data.data.name)
    console.log()
    new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat([-95.500000, 38.500000])
    .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
    .addTo(map);
    
  })
}
 );

 const Ca = new mapboxgl.Marker()
.setLngLat([-110.5521, 55.608166])
.addTo(map);

Ca.getElement().addEventListener('click',   event => {
  axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
    iso2: "CA" 
  }).then((response)=>{
    console.log(response.data.data.name)
    console.log()
    new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat([-110.5521, 55.608166])
    .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
    .addTo(map);
    
  })
}
 );

 const Mx = new mapboxgl.Marker()
 .setLngLat([-102.5521, 25.608166])
 .addTo(map);
 
 Mx.getElement().addEventListener('click',   event => {
   axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
     iso2: "MX" 
   }).then((response)=>{
     console.log(response.data.data.name)
     console.log()
     new mapboxgl.Popup({ closeOnClick: false })
     .setLngLat([-102.5521, 25.608166])
     .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
     .addTo(map);
     
   })
 }
  );
  const Gb = new mapboxgl.Marker()
  .setLngLat([-2, 52.608166])
  .addTo(map);
  
  Gb.getElement().addEventListener('click',   event => {
    axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
      iso2: "GB" 
    }).then((response)=>{
      console.log(response.data.data.name)
      console.log()
      new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([-2, 52.608166])
      .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
      .addTo(map);
      
    })
  }
   );
   const Ie = new mapboxgl.Marker()
  .setLngLat([-8.009, 52.908166])
  .addTo(map);
  
  Ie.getElement().addEventListener('click',   event => {
    axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
      iso2: "Ie" 
    }).then((response)=>{
      console.log(response.data.data.name)
      console.log()
      new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([-8.009, 52.908166])
      .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
      .addTo(map);
      
    })
  }
   );

   const Se = new mapboxgl.Marker()
   .setLngLat([17.9, 64.4])
   .addTo(map);
   
   Se.getElement().addEventListener('click',   event => {
     axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
       iso2: "SE" 
     }).then((response)=>{
       console.log(response.data.data.name)
       console.log()
       new mapboxgl.Popup({ closeOnClick: false })
       .setLngLat([17.9, 64.4])
       .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
       .addTo(map);
       
     })
   }
    );
    const Au = new mapboxgl.Marker()
    .setLngLat([134.7, -24.15])
    .addTo(map);
    
    Au.getElement().addEventListener('click',   event => {
      axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
        iso2: "AU" 
      }).then((response)=>{
        console.log(response.data.data.name)
        console.log()
        new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([134.7, -24.15])
        .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
        .addTo(map);
        
      })
    }
     );

     const Eg = new mapboxgl.Marker()
     .setLngLat([29.4,26.4])
     .addTo(map);
     
     Eg.getElement().addEventListener('click',   event => {
       axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
         iso2: "EG" 
       }).then((response)=>{
         console.log(response.data.data.name)
         console.log()
         new mapboxgl.Popup({ closeOnClick: false })
         .setLngLat([29.4,26.4])
         .setHTML(response.data.data.name+ ' ' + response.data.data.iso2 )
         .addTo(map);
         
       })
     }
      );


   

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // marker1.on('click', function(e) {
    //     console.log('clicked');
    //     // Here you can access e.features[0] which is the feature cliked
    //     // With that you can do whatever you want with your feature
    // });
    // Clean up on unmount
    return () => map.remove();
  }, []);
  return {
    lng,lat ,zoom , mapContainerRef

  }
}