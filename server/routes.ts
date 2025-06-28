import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create lead endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedLead = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedLead);
      res.json({ success: true, lead });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Dados inválidos", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get all leads endpoint (for admin purposes)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json({ success: true, leads });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Erro interno do servidor" 
      });
    }
  });

  // Get lead by ID endpoint
  app.get("/api/leads/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const lead = await storage.getLeadById(id);
      
      if (!lead) {
        res.status(404).json({ 
          success: false, 
          error: "Lead não encontrado" 
        });
        return;
      }
      
      res.json({ success: true, lead });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Erro interno do servidor" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
