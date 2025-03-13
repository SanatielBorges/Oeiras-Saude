// src/components/ui/ChangePasswordModal.tsx
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const ChangePasswordModal = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1: E-mail, 2: Código, 3: Senha
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Para visualizar a senha
  const modalRef = useRef(null);

  // Fecha o modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Validação de senha forte
  const isStrongPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleNextStep = async () => {
    if (step === 1) {
      if (!email.trim() || !email.includes('@')) {
        toast.error('Por favor, insira um e-mail válido.');
        return;
      }
      toast.success('Código enviado!');
      setStep(2);
    } else if (step === 2) {
      if (code.length !== 6) {
        toast.error('O código inserido é inválido. Tente novamente.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!isStrongPassword(newPassword)) {
        toast.error(
          'A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.'
        );
        return;
      }
      if (newPassword !== confirmPassword) {
        toast.error('As senhas não coincidem. Por favor, tente novamente.');
        return;
      }
      toast.success('Senha alterada com sucesso!');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Alterar Senha</h2>

        {/* Etapa 1: E-mail */}
        {step === 1 && (
          <>
            <p className="mb-4">Insira o e-mail associado à sua conta.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handleNextStep}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Enviar Código
            </button>
          </>
        )}

        {/* Etapa 2: Código */}
        {step === 2 && (
          <>
            <p className="mb-4">Insira o código de 6 dígitos enviado para o e-mail fornecido.</p>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código de 6 dígitos"
              maxLength={6}
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handleNextStep}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Verificar Código
            </button>
          </>
        )}

        {/* Etapa 3: Alterar Senha */}
        {step === 3 && (
          <>
            <p className="mb-4">Insira sua nova senha.</p>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nova senha"
                className="w-full p-2 border rounded mb-4 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 flex items-center justify-center"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar nova senha"
                className="w-full p-2 border rounded mb-4 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 flex items-center justify-center"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <button
              onClick={handleNextStep}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Salvar
            </button>
          </>
        )}
      </div>
    </div>
  );
};