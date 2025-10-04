import {
  TbBuilding,
  TbUserCheck,
  TbHome2,
  TbRuler2,
  TbMapPin,
  TbPresentation,
} from "react-icons/tb";
import {
  RiBuilding4Line,
  RiUserStarLine,
  RiHome8Line,
  RiRulerLine,
  RiMapPin2Line,
  RiPresentationLine,
} from "react-icons/ri";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineHome,
  HiOutlineScale,
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { LuSparkles } from "react-icons/lu";
import { MdVerified } from "react-icons/md";

const RERAStatsSection = () => {
  const stats = [
    {
      icon: <TbBuilding className="text-3xl" />,
      value: "3,500",
      label: "Project Registration",
      description: "Verified real estate projects",
      color: {
        primary: "from-amber-600 to-yellow-500",
        bg: "bg-amber-50",
        text: "text-amber-700",
        glow: "shadow-amber-500/20",
      },
    },
    {
      icon: <RiUserStarLine className="text-3xl" />,
      value: "11,000",
      label: "Agent Registration",
      description: "Certified real estate agents",
      color: {
        primary: "from-yellow-600 to-orange-500",
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        glow: "shadow-yellow-500/20",
      },
    },
    {
      icon: <HiOutlineHome className="text-3xl" />,
      value: "105,000",
      label: "Unit Registered",
      description: "Individual property units",
      color: {
        primary: "from-orange-600 to-amber-500",
        bg: "bg-orange-50",
        text: "text-orange-700",
        glow: "shadow-orange-500/20",
      },
    },

    {
      icon: <HiOutlineLocationMarker className="text-3xl" />,
      value: "120",
      label: "Cities Covered",
      description: "Pan-India presence",
      color: {
        primary: "from-yellow-500 to-amber-400",
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        glow: "shadow-yellow-500/20",
      },
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Yellow Theme Background */}

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
 

          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              <span className="block">Transforming Indian</span>
              <span className="block bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent relative">
                Real Estate Landscape
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Comprehensive numbers showcasing RERA's nationwide impact on
              transparency, accountability, and consumer protection in the real
              estate sector.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap- mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              {/* Glassmorphic Card with Yellow Theme */}
              <div
                className={` flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 bg-white/60 `}
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color.primary} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Stats Content */}
                <div className="space-y-4 text-center">
                  {/* Main Number */}
                  <div className="space-y-2">
                    <div
                      className={`text-4xl font-semibold bg-gradient-to-r ${stat.color.primary} bg-clip-text text-transparent flex items-center justify-center gap-1 mx-auto`}
                    >
                      {stat.value} +
                      {stat.suffix && (
                        <span className="text-lg font-bold text-gray-700">
                          {/* {stat.suffix} */}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-center text-gray-900">
                      {stat.label}
                    </h3>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RERAStatsSection;
