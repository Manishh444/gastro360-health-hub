import React from "react";
import { Card } from "@/components/ui/card";
import { doctors } from "@/data/doctorData";

const DoctorProfile = () => {
  return (
    <div className="space-y-16">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Doctor Image */}
          <div className="flex-shrink-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="rounded-lg shadow-lg w-72 h-80 object-cover"
            />
          </div>

          {/* Doctor Details */}
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-foreground mb-2">
              {doctor.name}
            </h3>

            <p className="text-medical-green font-medium mb-4">
              {doctor.title}
            </p>

            {doctor.shortDescription && (
              <p
                className="text-muted-foreground mb-4 font-medium"
                style={{
                  textShadow: "1px 1px 2px rgba(0, 255, 200, 0.3)",
                }}>
                {doctor.shortDescription}
              </p>
            )}

            {doctor.bio && (
              <p className="text-muted-foreground leading-relaxed mb-6">
                {doctor.bio}
              </p>
            )}

            {doctor.expertise?.length > 0 && (
              <div className="space-y-2 mb-6">
                <h4 className="text-lg font-semibold text-foreground">
                  Areas of Expertise
                </h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {doctor.expertise.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {doctor.quote && (
              <Card className="p-6 bg-medical-green/10 border border-border rounded-lg">
                <p className="italic text-muted-foreground text-sm">
                  “{doctor.quote}”
                </p>
              </Card>
            )}

            <div className="mt-8 space-y-1">
              {doctor.location && (
                <p className="text-sm text-muted-foreground">
                  📍 {doctor.location}
                </p>
              )}
              {doctor.email && (
                <p className="text-sm text-muted-foreground">
                  ✉️ {doctor.email}
                </p>
              )}
              {doctor.phone && (
                <p className="text-sm text-muted-foreground">
                  📞 {doctor.phone}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorProfile;
