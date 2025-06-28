import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertLeadSchema, type InsertLead } from "@shared/lead-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Rocket } from "lucide-react";

export default function LeadForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      segmento: "",
    },
  });

  const createLeadMutation = useMutation({
    mutationFn: async (lead: InsertLead) => {
      const response = await apiRequest("POST", "/api/leads", lead);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "Sucesso!",
          description: "Obrigado! Em breve entraremos em contato para agendar sua demonstração gratuita.",
        });
        
        form.reset();
        
        // Optional: Send to WhatsApp
        const { nome, empresa } = data.lead;
        const whatsappMessage = `Olá! Sou ${nome} da empresa ${empresa}. Gostaria de saber mais sobre os chatbots de IA e agendar uma demonstração.`;
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
        
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1000);
      }
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertLead) => {
    createLeadMutation.mutate(data);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 11) {
      return numbers.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (numbers.length >= 7) {
      return numbers.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (numbers.length >= 3) {
      return numbers.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (numbers.length >= 1) {
      return numbers.replace(/^(\d{0,2})/, '($1');
    }
    return value;
  };

  return (
    <div className="form-container rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Automatize seu Atendimento</h2>
        <p className="text-gray-600 mt-2">Receba uma demonstração personalizada gratuita</p>
      </div>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="nome">Nome Completo *</Label>
          <Input
            id="nome"
            {...form.register("nome")}
            placeholder="Seu nome completo"
            className="mt-2"
          />
          {form.formState.errors.nome && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.nome.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email">E-mail Corporativo *</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            placeholder="seu@empresa.com"
            className="mt-2"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="telefone">WhatsApp *</Label>
          <Input
            id="telefone"
            {...form.register("telefone")}
            placeholder="(11) 99999-9999"
            className="mt-2"
            onChange={(e) => {
              const formatted = formatPhone(e.target.value);
              form.setValue("telefone", formatted);
            }}
          />
          {form.formState.errors.telefone && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.telefone.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="empresa">Empresa *</Label>
          <Input
            id="empresa"
            {...form.register("empresa")}
            placeholder="Nome da sua empresa"
            className="mt-2"
          />
          {form.formState.errors.empresa && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.empresa.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="segmento">Segmento</Label>
          <Select onValueChange={(value) => form.setValue("segmento", value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Selecione seu segmento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="saude">Saúde</SelectItem>
              <SelectItem value="educacao">Educação</SelectItem>
              <SelectItem value="financeiro">Financeiro</SelectItem>
              <SelectItem value="imobiliario">Imobiliário</SelectItem>
              <SelectItem value="servicos">Serviços</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className="w-full hero-gradient text-white font-bold py-4 px-6 rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
          disabled={createLeadMutation.isPending}
        >
          <Rocket className="mr-2 h-4 w-4" />
          {createLeadMutation.isPending ? "Enviando..." : "Quero uma Demonstração Gratuita"}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          Ao enviar, você concorda em receber comunicações da nossa empresa.
        </p>
      </form>
    </div>
  );
}
