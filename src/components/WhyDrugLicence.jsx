import { FiShield, FiUsers, FiTrendingUp, FiCheck, FiGlobe, FiAward } from "react-icons/fi";
import { BiSafety, BiGroup, BiTrendingUp } from "react-icons/bi";
import { MdHealthAndSafety, MdVerified, MdGavel } from "react-icons/md";

const WhyDrugLicence = () => {
  const benefits = [
    {
      icon: <MdGavel className="text-3xl text-blue-500" />,
      title: "Legal Compliance",
      description: "Operate your pharmaceutical business legally under Indian regulations and avoid penalties or shutdowns.",
      stats: "100% Legal Protection"
    },
    {
      icon: <FiShield className="text-3xl text-blue-500" />,
      title: "Quality Assurance", 
      description: "Ensure your products meet GMP standards and safety protocols, building consumer confidence.",
      stats: "Guaranteed Quality"
    },
    {
      icon: <MdHealthAndSafety className="text-3xl text-blue-500" />,
      title: "Public Health Protection",
      description: "Prevent counterfeit and substandard medicines from entering the market, safeguarding public health.",
      stats: "Consumer Safety First"
    },
    {
      icon: <FiTrendingUp className="text-3xl text-blue-500" />,
      title: "Business Growth",
      description: "Access government tenders, hospital contracts, and expand to new markets with licensed operations.",
      stats: "Unlimited Growth Potential"
    },
    {
      icon: <MdVerified className="text-3xl text-blue-500" />,
      title: "Enhanced Credibility",
      description: "Build trust with customers, suppliers, and healthcare providers through regulatory compliance.",
      stats: "Trusted by Healthcare"
    },
    {
      icon: <FiGlobe className="text-3xl text-blue-500" />,
      title: "International Standards",
      description: "Meet WHO guidelines and international quality standards for global pharmaceutical trade.",
      stats: "Global Recognition"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
           

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Why You Need a</span>
              <span className="block text-blue-500 relative">
                Drug Licence
               </span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A drug licence is not just a regulatory requirement—it's your gateway to legitimate pharmaceutical business operations, 
              consumer trust, and sustainable growth in the healthcare industry.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-100/60 hover:border-blue-200 transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  <FiCheck className="text-xs" />
                  <span>{benefit.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Statistics Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                The Impact of Drug Licensing
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Understanding the critical role of pharmaceutical regulation in India's healthcare ecosystem
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">₹1.8L</div>
                <div className="text-blue-100 text-sm">Crore Market Size</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">3000+</div>
                <div className="text-blue-100 text-sm">Licensed Companies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">98%</div>
                <div className="text-blue-100 text-sm">Quality Compliance</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm">Regulatory Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
};

export default WhyDrugLicence;
