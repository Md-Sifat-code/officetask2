import { FaChartLine, FaBullhorn, FaHandshake, FaUsers, FaFileSignature } from 'react-icons/fa';

const steps = [
  {
    icon: <FaChartLine className="text-2xl text-yellow-500" />,
    title: 'Comparative Market Analysis (CMA)',
    description: `We will research and provide you with the latest transaction report of sales, within the same building, street and community. As well as comparable properties that are currently for sale in today’s market – A transparent and efficient property valuation.`,
  },
  {
    icon: <FaBullhorn className="text-2xl text-orange-500" />,
    title: 'Branding | Marketing',
    description: `Our creative team will produce a full marketing campaign, including a full video/photo shoot and create expert online branding. We will also showcase your property on our company websites, digital platforms and property portals, to ensure that it reaches a wide audience, so you end up getting the best price possible.`,
  },
  {
    icon: <FaUsers className="text-2xl text-pink-500" />,
    title: 'Viewings | Meetings',
    description: `We will discuss and plan the best strategy for viewing your property. Whether it’s an open house over a weekend, or a viewing at sunset, we will arrange the best and most convenient times to view with potential buyers.`,
  },
  {
    icon: <FaHandshake className="text-2xl text-green-500" />,
    title: 'Price Negotiations | closing Deal',
    description: `All offers from the buyer will be discussed with the seller, and put forward respectfully and professionally. Our main goal is to make sure both parties are happy with the price and ready to proceed with the sale.`,
  },
  {
    icon: <FaFileSignature className="text-2xl text-yellow-600" />,
    title: 'Property Sale | Transfer ownership',
    description: `We have a very experienced property conveyance team, who are dedicated to both parties and can ensure a smooth and secure transaction for both buyer and seller.`,
  },
];

const SellingProcess = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F4A896] mb-4">Our Expert Selling Process</h2>
      <p className=" max-w-3xl mx-auto mb-2 text-[#358597]">
        All property owners who choose to work with Prime Location Properties get full transparency over the selling process. Our dedicated team of experts will advise, guide and fully take care of the whole process of the sale.
      </p>
      <p className="text-[#358597] max-w-3xl mx-auto mb-12">
        We will conduct the following steps below from start to finish:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 bg-[#EBF3F5] rounded-2xl borde`}
          >
       <div className='flex flex-col justify-center items-center'>
             <div className="flex items-start gap-3 mb-3">
              <div>{step.icon}</div>
              <h3 className="font-semibold text-sm md:text-base">{step.title}</h3>
            </div>
            <p className="text-sm text-[#358597] leading-relaxed text-left">{step.description}</p>
       </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellingProcess;
