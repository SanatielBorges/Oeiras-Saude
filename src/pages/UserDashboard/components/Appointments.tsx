import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export const Appointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Simulação de API
    setAppointments([
      {
        id: 1,
        date: "15/04/2024",
        doctor: "Dra. Ana Silva",
        specialty: "Cardiologia",
        status: "Agendado",
      },
      {
        id: 2,
        date: "20/04/2024",
        doctor: "Dr. Carlos Santos",
        specialty: "Pediatria",
        status: "Cancelado",
      },
    ]);
  }, [user]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Agendamentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <Calendar className="h-12 w-12 text-blue-600 mb-4" />
            <p className="text-lg font-medium">{appt.date}</p>
            <p className="text-gray-600">{appt.doctor}</p>
            <p className="text-sm text-gray-500">{appt.specialty}</p>
            <span
              className={`mt-2 px-3 py-1 rounded-full ${
                appt.status === "Agendado"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {appt.status}
            </span>
            <Button variant="secondary" className="mt-4">
              Ver Detalhes
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};