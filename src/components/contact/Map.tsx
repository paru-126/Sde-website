
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface MapProps {
  center?: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    title: string;
  }>;
}

const Map = ({ 
  center = [-122.1697, 37.4275], // Silicon Valley coordinates
  zoom = 11,
  markers = [
    { position: [-122.1697, 37.4275], title: "ElectroTech HQ" }
  ] 
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>("");
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  // Initialize map when token is available
  useEffect(() => {
    if (!mapToken || !mapContainer.current || map.current) return;
    
    mapboxgl.accessToken = mapToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      "top-right"
    );

    // Add markers
    markers.forEach(marker => {
      const markerElement = document.createElement('div');
      markerElement.className = 'flex items-center justify-center';
      markerElement.innerHTML = `
        <div class="text-tech-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
      `;

      new mapboxgl.Marker(markerElement)
        .setLngLat(marker.position)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3 class="font-bold">${marker.title}</h3>`
          )
        )
        .addTo(map.current);
    });

    map.current.on("load", () => {
      setIsMapLoaded(true);
    });

    return () => {
      map.current?.remove();
    };
  }, [mapToken, center, zoom, markers]);

  const handleSetToken = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById("mapbox-token") as HTMLInputElement;
    setMapToken(input.value);
  };

  if (!mapToken) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-4">Mapbox Token Required</h3>
        <p className="text-gray-600 mb-4">
          To display the interactive map, please enter your Mapbox public token below.
          You can get one from <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-tech-blue hover:underline">mapbox.com</a>.
        </p>
        <form onSubmit={handleSetToken} className="flex flex-col gap-4">
          <input
            id="mapbox-token"
            type="text"
            placeholder="Enter your Mapbox public token"
            className="p-2 border rounded-md w-full"
            required
          />
          <Button type="submit">Load Map</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p>Loading map...</p>
        </div>
      )}
    </div>
  );
};

export default Map;
