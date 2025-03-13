import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export const Exams = () => {
  const { user } = useAuth();
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Simulação de API
    setExams([
      {
        id: 1,
        name: "Exame de Sangue",
        date: "10/04/2024",
        result: "Normal",
      },
      {
        id: 2,
        name: "Raio-X Tórax",
        date: "12/04/2024",
        result: "Pendente",
      },
    ]);
  }, [user]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Resultados de Exames</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <FileText className="h-12 w-12 text-blue-600 mb-4" />
            <p className="text-lg font-medium">{exam.name}</p>
            <p className="text-gray-600">{exam.date}</p>
            <span
              className={`mt-2 px-3 py-1 rounded-full ${
                exam.result === "Normal"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {exam.result}
            </span>
            <Button variant="link" className="mt-4 p-0">
              Baixar PDF
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};