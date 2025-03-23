// src/pages/UserDashboard/Account.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-hot-toast";

export const Account = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    birthDate: user?.birthDate || "",
    gender: user?.gender || "",
    phone: user?.phone || "",
    cep: user?.cep || "",
    address: user?.address || "",
    number: user?.number || "",
    neighborhood: user?.neighborhood || "",
    city: user?.city || "",
    state: user?.state || "",
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para buscar endereço com base no CEP
  const fetchAddressByCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        toast.error("CEP inválido ou não encontrado.");
        return;
      }
      setFormData({
        ...formData,
        address: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      });
    } catch (error) {
      toast.error("Erro ao buscar o CEP. Tente novamente.");
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validações básicas
    if (!formData.name.trim()) {
      toast.error("O campo Nome é obrigatório.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("O campo Telefone é obrigatório.");
      return;
    }
    if (!formData.birthDate.trim()) {
      toast.error("O campo Data de Nascimento é obrigatório.");
      return;
    }
    if (!formData.gender.trim()) {
      toast.error("O campo Gênero é obrigatório.");
      return;
    }
    if (!formData.cep.trim()) {
      toast.error("O campo CEP é obrigatório.");
      return;
    }
    if (!formData.address.trim()) {
      toast.error("O campo Endereço é obrigatório.");
      return;
    }
    if (!formData.neighborhood.trim()) {
      toast.error("O campo Bairro é obrigatório.");
      return;
    }
    if (!formData.city.trim()) {
      toast.error("O campo Cidade é obrigatório.");
      return;
    }
    if (!formData.state.trim()) {
      toast.error("O campo Estado é obrigatório.");
      return;
    }
  
    try {
      // Simulação de atualização no backend
      console.log("Dados enviados:", formData);
      updateUser(formData); // Atualiza o contexto do usuário
      toast.success("Perfil atualizado com sucesso!");
  
      // Redireciona para a página anterior (mesmo comportamento do botão "Cancelar")
      navigate(-1);
    } catch (error) {
      toast.error("Erro ao atualizar o perfil. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 py-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Editar Perfil</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome Completo */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Data de Nascimento */}
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Gênero */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gênero
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
              <option value="Não informar">Prefiro não informar</option>
            </select>
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefone/Celular
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(XX) XXXXX-XXXX"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* CEP */}
          <div>
            <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
              CEP
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={(e) => {
                  const cep = e.target.value.replace(/\D/g, "").slice(0, 8);
                  setFormData({ ...formData, cep });
                }}
                onBlur={() => fetchAddressByCep(formData.cep)}
                placeholder="XXXXX-XXX"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <Button
                type="button"
                onClick={() => fetchAddressByCep(formData.cep)}
                className="mt-1"
              >
                Buscar
              </Button>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Endereço
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Número Residencial */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Número Residencial
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number || ""}
              onChange={handleChange}
              placeholder="Ex.: 123"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Bairro */}
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700">
              Bairro
            </label>
            <input
              type="text"
              id="neighborhood"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Cidade */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Estado */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar Alterações</Button>
          </div>
        </form>
      </div>
    </div>
  );
};