// src/pages/UserDashboard/Appointments.tsx
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

export const Appointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [filter, setFilter] = useState("Agendado");
  const [formData, setFormData] = useState({
    specialty: "",
    doctor: "",
    date: "",
    time: "",
  });

  // Lista de médicos e suas especialidades
  const doctorsList = [
    {
      name: "Dra. Ana Silva",
      specialty: "Cardiologia",
      availableDates: ["2024-04-15", "2024-04-16"],
      availableTimes: ["09:00", "14:00", "16:00"],
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Pediatria",
      availableDates: ["2024-04-17", "2024-04-18"],
      availableTimes: ["10:00", "15:00"],
    },
    {
      name: "Dra. Maria Oliveira",
      specialty: "Ortopedia",
      availableDates: ["2024-04-19", "2024-04-20"],
      availableTimes: ["08:00", "13:00", "17:00"],
    },
  ];

  // Estado para armazenar os horários disponíveis do médico selecionado
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Função para formatar a data de 'yyyy-mm-dd' para 'dd/mm/yyyy'
  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // Carregar agendamentos simulados
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Simulação de dados de agendamentos
        const mockAppointments = [
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
        ];
        setAppointments(mockAppointments);
        setFilteredAppointments(mockAppointments.filter((appt) => appt.status === filter));
      } catch (error) {
        console.error("Erro ao carregar agendamentos:", error);
        toast.error("Erro ao carregar agendamentos.");
      }
    };

    fetchAppointments();
  }, [user]);

  // Função para lidar com mudanças no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "specialty") {
      setFormData({ ...formData, specialty: value, doctor: "", date: "", time: "" });
      setAvailableTimes([]);
    } else if (name === "doctor") {
      const selectedDoctor = doctorsList.find((doc) => doc.name === value);
      if (selectedDoctor) {
        setFormData({ ...formData, doctor: value });
        setAvailableTimes(selectedDoctor.availableTimes);
      }
    } else if (name === "date") {
      const selectedDoctor = doctorsList.find((doc) => doc.name === formData.doctor);
      if (selectedDoctor && !selectedDoctor.availableDates.includes(value)) {
        toast.error("Data indisponível para este médico.");
        return;
      }
      setFormData({ ...formData, date: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Função para salvar o novo agendamento
  const handleSaveAppointment = () => {
    if (!formData.date || !formData.time || !formData.doctor || !formData.specialty) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    // Adiciona o novo agendamento à lista geral
    const newId = appointments.length + 1;
    const newAppointment = {
      id: newId,
      date: formatDate(formData.date),
      time: formData.time,
      doctor: formData.doctor,
      specialty: formData.specialty,
      status: "Agendado",
    };
    setAppointments([...appointments, newAppointment]);

    // Atualiza a lista filtrada apenas se o filtro for "Agendados"
    if (filter === "Agendado") {
      setFilteredAppointments([...filteredAppointments, newAppointment]);
    }

    toast.success("Consulta agendada com sucesso!");

    // Limpa o formulário
    setFormData({ specialty: "", doctor: "", date: "", time: "" });
    setAvailableTimes([]);
  };

  // Função para filtrar agendamentos
  const handleFilterChange = (status: string) => {
    setFilter(status);
    setFilteredAppointments(appointments.filter((appt) => appt.status === status));
  };

  // Função para cancelar um agendamento
  const handleCancelAppointment = (id: number) => {
    const updatedAppointments = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: "Cancelado" } : appt
    );
    setAppointments(updatedAppointments);
    setFilteredAppointments(updatedAppointments.filter((appt) => appt.status === filter));
    toast.success("Consulta cancelada com sucesso!");
  };

  // Função para remarcar um agendamento (placeholder)
  const handleRescheduleAppointment = (id: number) => {
    toast("Funcionalidade de remarcação ainda não implementada.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Cabeçalho Simplificado */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/user-dashboard" className="flex items-center">
          <Stethoscope className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Portal de Saúde</span>
        </Link>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Meus Agendamentos</h2>

        {/* Formulário de Agendamento */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
          <h3 className="text-lg font-medium mb-4 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-blue-600 mr-2" />
            Agendar Nova Consulta
          </h3>
          <div className="space-y-4">
            {/* Especialidade */}
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                Especialidade
              </label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Selecione uma especialidade</option>
                {Array.from(new Set(doctorsList.map((doc) => doc.specialty))).map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Médico */}
            <div>
              <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
                Médico
              </label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                disabled={!formData.specialty}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Selecione um médico</option>
                {doctorsList
                  .filter((doc) => doc.specialty === formData.specialty)
                  .map((doctor) => (
                    <option key={doctor.name} value={doctor.name}>
                      {doctor.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Data */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Data
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={doctorsList.find((doc) => doc.name === formData.doctor)?.availableDates[0]}
                max={doctorsList.find((doc) => doc.name === formData.doctor)?.availableDates.slice(-1)[0]}
                disabled={!formData.doctor}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Horário */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Horário
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                disabled={!formData.date}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Selecione um horário</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Botão para Salvar */}
            <Button onClick={handleSaveAppointment} className="w-full md:w-auto px-6 py-2">
              Agendar Consulta
            </Button>
          </div>
        </div>

        {/* Botões de Filtro */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            variant={filter === "Agendado" ? "default" : "outline"}
            onClick={() => handleFilterChange("Agendado")}
          >
            Agendados
          </Button>
          <Button
            variant={filter === "Cancelado" ? "default" : "outline"}
            onClick={() => handleFilterChange("Cancelado")}
          >
            Cancelados
          </Button>
          <Button
            variant={filter === "Concluído" ? "default" : "outline"}
            onClick={() => handleFilterChange("Concluído")}
          >
            Concluídos
          </Button>
        </div>

        {/* Lista de Agendamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appt) => (
              <div
                key={appt.id}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                {/* Nome do Médico */}
                <p className="text-lg font-medium">{appt.doctor}</p>

                {/* Especialidade */}
                <p className="text-sm text-gray-600">{appt.specialty}</p>

                {/* Data */}
                <p className="text-gray-600">{appt.date}</p>

                {/* Status */}
                <span
                  className={`mt-2 px-3 py-1 rounded-full ${
                    appt.status === "Agendado"
                      ? "bg-green-200 text-green-800"
                      : appt.status === "Cancelado"
                      ? "bg-red-200 text-red-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {appt.status}
                </span>

                {/* Botões de Ação */}
                <div className="flex space-x-2 mt-4">
                  {/* Botão Cancelar (Apenas para Agendados) */}
                  {appt.status === "Agendado" && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleCancelAppointment(appt.id)}
                    >
                      Cancelar
                    </Button>
                  )}

                  {/* Botão Remarcar */}
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleRescheduleAppointment(appt.id)}
                  >
                    Remarcar
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Nenhum agendamento encontrado.</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Portal de Saúde. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};