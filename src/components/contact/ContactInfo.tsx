
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
            <p className="text-gray-700 mb-1">Main: +1 (234) 567-890</p>
            <p className="text-gray-700">Support: +1 (234) 567-891</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-tech-blue text-white p-3 rounded-lg mr-4">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-gray-700 mb-1">General: info@electrotech.com</p>
            <p className="text-gray-700">Support: support@electrotech.com</p>
            <p className="text-gray-700">Sales: sales@electrotech.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-tech-blue text-white p-3 rounded-lg mr-4">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Headquarters</h3>
            <p className="text-gray-700 mb-1">123 Tech Boulevard</p>
            <p className="text-gray-700">Innovation District</p>
            <p className="text-gray-700">Silicon Valley, CA 94103</p>
            <p className="text-gray-700">United States</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-tech-blue text-white p-3 rounded-lg mr-4">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Business Hours</h3>
            <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
            <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM (PST)</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-tech-blue text-white p-2 rounded-full hover:bg-tech-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="bg-tech-blue text-white p-2 rounded-full hover:bg-tech-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" className="bg-tech-blue text-white p-2 rounded-full hover:bg-tech-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" className="bg-tech-blue text-white p-2 rounded-full hover:bg-tech-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
