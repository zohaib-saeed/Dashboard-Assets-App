import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ lat, lng }) => {
  const mapRef = useRef(null);
  const loader = new Loader({
    apiKey: "AlzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8",
    version: "weekly",
  });

  useEffect(() => {
    loader.load().then(() => {
      mapRef.current = new google.maps.Map(document.getElementById("map"), {
        center: { lat, lng },
        zoom: 15,
      });
      new google.maps.Marker({
        position: { lat, lng },
        map: mapRef.current,
        title: "Your location",
      });
    });
  }, []);

  return <div id="map" style={{ height: "400px", width: "400px" }}></div>;
};

export default GoogleMap;
