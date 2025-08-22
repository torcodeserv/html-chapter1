import LessonHeader from "@/components/LessonHeader";
import LessonContent from "@/components/LessonContent";
import PracticalExample from "@/components/PracticalExample";
import Quiz from "@/components/Quiz";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with objectives */}
      <LessonHeader />
      
      {/* Main lesson content */}
      <LessonContent />
      
      {/* Practical example */}
      <PracticalExample />
      
      {/* Quiz section */}
      <Quiz />
      
      {/* Footer */}
      <footer className="bg-gradient-primary text-white py-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-white/80">
            ¡Continúa aprendiendo! Este es solo el comienzo de tu viaje en el desarrollo web.
          </p>
          <p className="text-sm text-white/60 mt-2">
            Curso Interactivo de HTML - Lección 1.1
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
