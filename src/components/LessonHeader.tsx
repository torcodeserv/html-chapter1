import { BookOpen, Target, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const LessonHeader = () => {
  return (
    <header className="bg-gradient-hero text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BookOpen size={48} className="text-white/90" />
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Lección 1.1: ¿Qué es HTML?
            </h1>
            <p className="text-xl text-white/80 font-medium">
              Nivel: Principiante absoluto
            </p>
          </div>
        </div>
        
        <Card className="bg-white/10 border-white/20 text-white p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <Target className="text-secondary" size={24} />
            <h2 className="text-xl font-semibold">🎯 Objetivos de Aprendizaje</h2>
          </div>
          <p className="text-white/90 mb-4">Al finalizar esta lección podrás:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-secondary flex-shrink-0" size={18} />
              <span className="text-sm">Explicar qué es HTML y para qué sirve</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-secondary flex-shrink-0" size={18} />
              <span className="text-sm">Entender cómo funcionan las páginas web</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-secondary flex-shrink-0" size={18} />
              <span className="text-sm">Crear tu primer documento HTML</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-secondary flex-shrink-0" size={18} />
              <span className="text-sm">Visualizar tu primera página web</span>
            </div>
          </div>
        </Card>
      </div>
    </header>
  );
};

export default LessonHeader;