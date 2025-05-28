import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <p className="text-gray-700 mb-8">
        Our dedicated team is ready to assist you with any inquiries or support needs. 
        Reach out through any of the channels below.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-tech-blue text-white p-3 rounded-lg mr-4">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Phone</h3>
            <p className="text-gray-700 mb-1">Mobile: +91-9492430198</p>
            <p className="text-gray-700">Telephone: 040-5868174</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-tech-blue text-white p-3 rounded-lg mr-4">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-gray-700">sales@sridattaelectronics.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-tech-blue text-white p-3 rounded-lg mr-4">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Registered Address</h3>
            <p className="text-gray-700 mb-1">SRI DATTA ELECTRONICS PVT LTD</p>
            <p className="text-gray-700 mb-1">F. NO: 201, CHAITANYA CHAMBERS</p>
            <p className="text-gray-700 mb-1">SAI NAGAR, CHAITANYAPURI</p>
            <p className="text-gray-700">HYDERABAD-500060 (TS)</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-tech-blue text-white p-3 rounded-lg mr-4">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Business Hours</h3>
            <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
            <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM (IST)</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;