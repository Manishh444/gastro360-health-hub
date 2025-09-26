import { MapPin, Phone } from "lucide-react";

const Header = () => {
  const locations = ["KONDAPUR", "MADINAGUDA", "KUKATPALLY", "MANIKONDA"];

  return (
    <header className="bg-background border-b border-border py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-medical-green" />
          <span>Karnataka, Bengaluru, India</span>
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {locations.map((location) => (
            <span key={location} className="text-sm text-muted-foreground font-medium">
              {location}
            </span>
          ))}
        </div> */}

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-medical-green" />
          <a
            href="tel:+919019374419"
            className="text-sm font-semibold text-medical-green hover:text-medical-green-dark transition-colors">
            9019374419
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;