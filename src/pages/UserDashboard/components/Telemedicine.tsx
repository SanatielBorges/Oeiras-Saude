import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export const Telemedicine = () => {
  const { user } = useAuth();
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    // Simulação de API
    setConsultations([
      {
        id: 1,
        doctor: "Dr. Pedro Oliveira",
        specialty: "Dermatologia",
        time: "14:00 - 14:30",
        status: "Disponível",
      },
      {
        id: 2,
        doctor: "Dra. Marina Costa",
        specialty: "Psicologia",
        time: "16:00 - 16:45",
        status: "Ocupado",
      },
    ]);
  }, [user]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Telemedicina</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {consultations.map((consult) => (
          <div
            key={consult.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <Video className="h-12 w-12 text-blue-600 mb-4" />
            <p className="text-lg font-medium">{consult.doctor}</p>
            <p className="text-gray-600">{consult.specialty}</p>
            <p className="text-sm text-gray-500">{consult.time}</p>
            <Button
              variant={consult.status === "Disponível" ? "default" : "destructive"}
              className="mt-4"
            >
              {consult.status === "Disponível"
                ? "Iniciar Consulta"
                : "Indisponível"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};