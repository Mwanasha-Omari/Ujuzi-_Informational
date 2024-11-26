import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { SiCanvas } from 'react-icons/si';
import { FaChartPie } from 'react-icons/fa';
import { MdPhonelink } from 'react-icons/md';
interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => (
  <div className="bg-white p-6 rounded-lg border-2 border-primary-amber w-full h-full">
    <div className="flex items-center justify-center mb-6">
      <Icon className="text-black w-16 h-16 mr-4" />
      <h3 className="text-2xl sm:text-3xl font-bold text-primary-blue">
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </h3>
    </div>
    <div className="text-center">
      <p className="text-black font-poppins text-lg leading-relaxed"
         dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);
const OurServices: React.FC = () => {
  const services = [
    {
      title: "GET VALID<br />RESOURCES",
      description: "Teachers get available <br />resources on valid platforms.",
      icon: ChartBarIcon
    },
    {
      title: "PROFESSIONAL<br />DEVELOPMENT",
      description: "With a focus on professional <br /> growth and talent development, we <br />empower our users to expand their<br /> competencies.",
      icon: SiCanvas
    },
    {
      title: "EASY<br />ALLOCATION OF<br />TEACHERS",
      description: "KICD get to easily allocate <br />teachers to trainers per region<br /> making it easy to manage the<br />division of teachers.",
      icon: FaChartPie
    },
    {
      title: "USER FRIENDLY<br />INTERFACE",
      description: "Optimized design for various<br /> devices and internet connectivity<br />levels",
      icon: MdPhonelink
    },
  ];
  return (
    <div className="bg-gray-100 py-16 mt-72" id="services">
      <div className="container mx-auto px-4">
        <h3 className="font-bold text-black text-center mb-40 text-4xl lg:text-5xl mt-20">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurServices;