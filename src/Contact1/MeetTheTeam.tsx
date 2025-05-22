import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Member Name",
      designation: "Member Designation",
      social: {
        facebook: '#',
        instagram: "#",
        linkedIn: '#'
      },
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740'
    },
    {
      id: 2,
      name: "Member Name",
      designation: "Member Designation",
      social: {
        facebook: '#',
        instagram: "#",
        linkedIn: '#'
      },
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740'
    },
    {
      id: 3,
      name: "Member Name",
      designation: "Member Designation",
      social: {
        facebook: '#',
        instagram: "#",
        linkedIn: '#'
      },
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-10">
      <div className="text-center mb-12 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#F4A896]">Meet The Team</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Meet the talented individuals behind our success, driving innovation and excellence in every department.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="mx-auto mb-6 overflow-hidden rounded-[35px] w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-full h-full object-cover rounded-[35px]"
                loading="lazy"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F4A896] mb-2">{member.name}</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{member.designation}</p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              <a
                href={member.social.facebook}
                className="text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={`${member.name}'s Facebook`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href={member.social.instagram}
                className="text-pink-500 hover:text-pink-700 transition-colors"
                aria-label={`${member.name}'s Instagram`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href={member.social.linkedIn}
                className="text-blue-700 hover:text-blue-900 transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
