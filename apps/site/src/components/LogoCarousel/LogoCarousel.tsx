import Image from "next/image";

export function LogoCarousel() {
  // Company logos with Unsplash images
  const companies = [
    {
      name: "Santander",
      logo: "https://images.unsplash.com/photo-1611244806613-9ed41977ad15?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Barclays",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Deutsche Bank",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Citibank",
      logo: "https://images.unsplash.com/photo-1565373679149-37db1e7bc1e1?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "JPMorgan",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "UBS",
      logo: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Credit Suisse",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "HSBC",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Goldman Sachs",
      logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Morgan Stanley",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Wells Fargo",
      logo: "https://images.unsplash.com/photo-1565373679149-37db1e7bc1e1?w=200&h=80&fit=crop&auto=format&q=80",
    },
    {
      name: "Bank of America",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=80&fit=crop&auto=format&q=80",
    },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="w-full bg-gray-50 py-12 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex logo-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ minWidth: "200px", height: "80px" }}
            >
              <div className="relative w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={160}
                  height={60}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
