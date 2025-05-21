
import {  FaLinkedin,FaFacebook, FaInstagram } from "react-icons/fa";

const MeetTheTeam = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "Member Name", 
      designation: "Member Designation",
      social: {
        facebook:'#',
        instagram: "#",
        linkedIn:'#'
      },
      image:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740'
    },
    { 
      id: 2, 
      name: "Member Name", 
      designation: "Member Designation",
      social: {
       facebook:'#',
        instagram: "#",
        linkedIn:'#'
      },
      image:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740'
    },
    { 
      id: 3, 
      name: "Member Name", 
      designation: "Member Designation",
      social: {
        facebook:'#',
        instagram: "#",
        linkedIn:'#'
      },
      image:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-[#F4A896]">Meet The Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the talented individuals behind our success, driving innovation and excellence in every department.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="mx-auto mb-4 flex items-center justify-center overflow-hidden">
            <img src={member.image} alt="" className="w-[300px] h-[250px] rounded-[35px]" />
            </div>
            <h2 className="text-xl font-semibold text-[#F4A896] mb-1">{member.name}</h2>
            <p className="text-gray-600 mb-3">{member.designation}</p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-3">
              <a 
                href={member.social.facebook} 
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href={member.social.instagram} 
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href={member.social.linkedIn} 
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;