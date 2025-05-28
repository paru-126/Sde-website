import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-1 text-center">
      <div className="flex flex-col items-center justify-center h-[500px]">
        <div className="bg-tech-blue text-white p-4 rounded-full mb-4">
          <MapPin size={48} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Visit Our Location</h3>
        <div className="text-gray-700 text-center max-w-md">
          <p className="mb-2 font-medium">SRI DATTA ELECTRONICS PVT LTD</p>
          <p className="mb-1">F. NO: 201, CHAITANYA CHAMBERS</p>
          <p className="mb-1">SAI NAGAR, CHAITANYAPURI</p>
          <p className="mb-4">HYDERABAD-500060 (TS)</p>
          
          <a 
            href="https://maps.google.com/?q=Chaitanyapuri,+Hyderabad,+Telangana+500060"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-tech-blue text-white rounded-lg hover:bg-tech-accent transition-colors"
          >
            <MapPin size={20} className="mr-2" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;