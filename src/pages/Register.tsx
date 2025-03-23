import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react"; // Importação correta do ícone
import toast from "react-hot-toast";

export const Register = () => {
  const navigate = useNavigate();

  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    birthDate: "",
    gender: "",
    phone: "",
    cep: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  // Função para validar senhas fortes
  const isStrongPassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

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

  // Função para validar o CPF
  const validateCPF = (cpf: string): boolean => {
    if (!cpf) return false;

    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, "");

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais (ex.: "111.111.111-11")
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Validação dos dígitos verificadores
    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
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
    if (!formData.password.trim() || !isStrongPassword(formData.password)) {
      toast.error(
        "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais."
      );
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }
    if (!validateCPF(formData.cpf)) {
      toast.error("Por favor, insira um CPF válido.");
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
    if (!formData.number.trim()) {
      toast.error("O campo Número Residencial é obrigatório.");
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
      // Simulação de envio para o backend
      console.log("Dados enviados:", formData);
      toast.success("Cadastro realizado com sucesso!");

      // Redireciona para a página inicial ou de login
      navigate("/login");
    } catch (error) {
      toast.error("Erro ao realizar o cadastro. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Portal de Saúde
            </span>
          </Link>
        </nav>
      </header>

      {/* Formulário de Cadastro */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 pb-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Crie sua conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Já tem uma conta?{" "}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Entre aqui
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              {/* Nome Completo */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Endereço de e-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Endereço de e-mail"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Senha */}
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Senha"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2 flex items-center justify-center"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Confirmar Senha */}
              <div className="relative">
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirmar Senha
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirmar Senha"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2 flex items-center justify-center"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* CPF */}
              <div>
                <label htmlFor="cpf" className="sr-only">
                  CPF
                </label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  required
                  value={formData.cpf}
                  onChange={(e) => {
                    const cpf = e.target.value.replace(/\D/g, "").slice(0, 11);
                    setFormData({ ...formData, cpf });
                  }}
                  placeholder="CPF (apenas números)"
                  maxLength={11}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Data de Nascimento */}
              <div>
                <label htmlFor="birthDate" className="sr-only">
                  Data de Nascimento
                </label>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Gênero */}
              <div>
                <label htmlFor="gender" className="sr-only">
                  Gênero
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
                <label htmlFor="phone" className="sr-only">
                  Telefone/Celular
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* CEP */}
              <div>
                <label htmlFor="cep" className="sr-only">
                  CEP
                </label>
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  required
                  value={formData.cep}
                  onChange={(e) => {
                    const cep = e.target.value.replace(/\D/g, "").slice(0, 8);
                    setFormData({ ...formData, cep });
                  }}
                  onBlur={() => fetchAddressByCep(formData.cep)}
                  placeholder="XXXXX-XXX"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Endereço */}
              <div>
                <label htmlFor="address" className="sr-only">
                  Endereço
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Rua Exemplo"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Número Residencial */}
              <div>
                <label htmlFor="number" className="sr-only">
                  Número Residencial
                </label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Ex.: 123"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Bairro */}
              <div>
                <label htmlFor="neighborhood" className="sr-only">
                  Bairro
                </label>
                <input
                  id="neighborhood"
                  name="neighborhood"
                  type="text"
                  required
                  value={formData.neighborhood}
                  onChange={handleChange}
                  placeholder="Bairro Exemplo"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Cidade */}
              <div>
                <label htmlFor="city" className="sr-only">
                  Cidade
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Cidade Exemplo"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Estado */}
              <div>
                <label htmlFor="state" className="sr-only">
                  Estado
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Estado Exemplo"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            {/* Botão de Envio */}
            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4"
              >
                Criar conta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};