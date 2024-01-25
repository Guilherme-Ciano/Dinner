import { useState, ChangeEvent, FormEvent } from "react";

// Definindo a interface para o estado do formulário
export interface FormState {
  [key: string]: string;
}

// Definindo a interface para o retorno do hook
interface UseForm {
  values: FormState;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
}

// Função do hook useForm
export function useForm(initialState: FormState): UseForm {
  const [values, setValues] = useState<FormState>(initialState);

  // Função para manipular mudanças nos campos do formulário
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Adicione aqui a lógica de submissão, se necessário
    console.log("Formulário submetido:", values);
  };

  // Função para redefinir o estado do formulário
  const resetForm = () => {
    setValues(initialState);
  };

  // Retornando os valores e funções necessárias
  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
