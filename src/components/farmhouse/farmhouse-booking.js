export default function FarmhouseBooking() {
  const packages = [
    {
      title: "Day Picnic Package",
      duration: "8 Hours Experience",
      maxGuests: "Up to 25 People",
      features: [
        "Pool access for all guests",
        "Mango plantation tour",
        "BBQ setup included",
        "Basic sound system",
        "Parking facility",
        "Security guard",
        "Garden area access"
      ],
      color: "green"
    },
    {
      title: "Overnight Experience",
      duration: "24 Hours Stay",
      maxGuests: "Up to 25 People",
      features: [
        "All day package features",
        "Cottage accommodation",
        "Breakfast included",
        "Bonfire arrangement",
        "Lake view access",
        "Evening snacks",
        "Photography spots",
        "Nature walks"
      ],
      popular: true,
      color: "blue"
    },
    {
      title: "Corporate Retreat",
      duration: "2-3 Days Package",
      maxGuests: "Up to 50 People",
      features: [
        "Extended accommodation",
        "Meeting spaces",
        "Team building activities",
        "All meals included",
        "Professional setup",
        "Wi-Fi connectivity",
        "Event coordination",
        "Transportation assistance"
      ],
      color: "amber"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: "from-green-500 to-emerald-600",
        border: "border-green-200 hover:border-green-400",
        badge: "bg-green-100 text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      },
      blue: {
        bg: "from-blue-500 to-cyan-600",
        border: "border-blue-200 hover:border-blue-400",
        badge: "bg-blue-100 text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      amber: {
        bg: "from-amber-500 to-orange-600",
        border: "border-amber-200 hover:border-amber-400",
        badge: "bg-amber-100 text-amber-600",
        button: "bg-amber-600 hover:bg-amber-700"
      }
    }
    return colors[color] || colors.green
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-stone-50 to-green-50/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#ad8b3a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#ad8b3a]/10 text-[#ad8b3a] px-6 py-3 rounded-full text-sm font-medium mb-6">
            🏡 Experience Packages
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">
            Farmhouse <span className="text-[#ad8b3a] relative">
              Experiences
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ad8b3a]/0 via-[#ad8b3a] to-[#ad8b3a]/0 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted experiences designed for different occasions and group sizes. Contact us for personalized pricing and availability.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const colors = getColorClasses(pkg.color)
            return (
              <div
                key={index}
                className={`relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border-2 ${colors.border} transform hover:-translate-y-2 ${
                  pkg.popular ? 'scale-105 ring-4 ring-blue-200/50' : ''
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🌟 Most Popular
                    </div>
                  </div>
                )}                {/* Header */}
                <div className={`bg-gradient-to-r ${colors.bg} text-white p-8 text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="text-sm opacity-90 mb-2">{pkg.duration}</div>
                  <div className="text-lg font-semibold mb-2">Contact for Pricing</div>
                  <div className="text-sm opacity-90">{pkg.maxGuests}</div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-stone-600 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>                  {/* Contact Button */}
                  <a
                    href={`mailto:Contact@apoorvaroyale.com?subject=${encodeURIComponent(`${pkg.title} Inquiry`)}&body=${encodeURIComponent(`Hi, I'm interested in the ${pkg.title} for my group. Please send me more details about availability, pricing and customization options.`)}`}
                    className={`w-full ${colors.button} text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-center block`}
                  >
                    Contact for Details
                  </a>
                </div>
              </div>
            )
          })}
        </div>        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#ad8b3a] to-yellow-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience Our Farmhouse?</h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Contact us for custom packages, pricing details, special events, or any questions about our farmhouse amenities. 
              We'll create the perfect experience for your group!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">              {/* Email Contact */}
              <a
                href="mailto:Contact@apoorvaroyale.com?subject=Farmhouse Inquiry&body=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20farmhouse%20packages.%20Please%20send%20me%20details%20about%20availability%20and%20pricing."
                className="group bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-[#ad8b3a] rounded-2xl p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="font-semibold text-lg">Email Us</span>
                </div>
                <p className="text-sm opacity-80 group-hover:opacity-100">Contact@apoorvaroyale.com</p>
              </a>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20your%20farmhouse.%20Could%20you%20please%20share%20the%20availability%20and%20rates%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-green-500 hover:text-white rounded-2xl p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="font-semibold text-lg">WhatsApp</span>
                </div>
                <p className="text-sm opacity-80 group-hover:opacity-100">+91 96688 21100</p>
              </a>
            </div>            {/* Additional Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-bold text-lg mb-3">📋 Contact Information</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Pricing:</strong> Contact for custom rates
                </div>
                <div>
                  <strong>Advance Booking:</strong> Recommended
                </div>
                <div>
                  <strong>Group Discounts:</strong> Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
