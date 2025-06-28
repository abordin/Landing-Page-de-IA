import { z } from "zod";

// Esquema de validação para formulário de lead, sem dependências externas
export const insertLeadSchema = z.object({
  nome: z.string().min(2, "Nome deve conter ao menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone deve conter ao menos 10 dígitos"),
  empresa: z.string().min(2, "Empresa deve conter ao menos 2 caracteres"),
  segmento: z.string().optional(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
