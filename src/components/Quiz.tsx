import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, User, FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Quiz = () => {
  const { toast } = useToast();
  const [studentName, setStudentName] = useState("");
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "¿Qué significa HTML?",
      options: [
        "HyperText Markup Language",
        "High Tech Modern Language", 
        "Home Tool Markup Language",
        "HyperText Media Language"
      ],
      correctAnswer: 0,
      explanation: "HTML significa HyperText Markup Language (Lenguaje de Marcado de Hipertexto)"
    },
    {
      id: 2,
      question: "¿Cuál es la función principal de HTML?",
      options: [
        "Darle estilo a las páginas web",
        "Crear la estructura de las páginas web",
        "Agregar interactividad a las páginas",
        "Conectar con bases de datos"
      ],
      correctAnswer: 1,
      explanation: "HTML se encarga de crear la estructura básica de las páginas web, como el esqueleto de una casa"
    },
    {
      id: 3,
      question: "¿Cómo se cierran las etiquetas HTML?",
      options: [
        "Con el símbolo #",
        "Con paréntesis ()",
        "Con la misma etiqueta pero agregando /",
        "No se cierran"
      ],
      correctAnswer: 2,
      explanation: "Las etiquetas HTML se cierran agregando una barra diagonal (/) antes del nombre de la etiqueta: </etiqueta>"
    },
    {
      id: 4,
      question: "¿Qué extensión debe tener un archivo HTML?",
      options: [
        ".txt",
        ".html",
        ".web",
        ".doc"
      ],
      correctAnswer: 1,
      explanation: "Los archivos HTML deben guardarse con la extensión .html para que el navegador los reconozca correctamente"
    },
    {
      id: 5,
      question: "¿Qué etiqueta se usa para crear un título principal?",
      options: [
        "<title>",
        "<header>",
        "<h1>",
        "<main>"
      ],
      correctAnswer: 2,
      explanation: "La etiqueta <h1> se usa para crear títulos principales en el contenido visible de la página"
    },
    {
      id: 6,
      question: "¿Dónde va la información que NO se muestra en la página?",
      options: [
        "En <body>",
        "En <html>",
        "En <head>",
        "En <footer>"
      ],
      correctAnswer: 2,
      explanation: "La sección <head> contiene información sobre la página que no se muestra directamente, como el título de la pestaña"
    },
    {
      id: 7,
      question: "¿Qué etiqueta se usa para párrafos?",
      options: [
        "<p>",
        "<paragraph>",
        "<text>",
        "<par>"
      ],
      correctAnswer: 0,
      explanation: "La etiqueta <p> (de 'paragraph') se usa para crear párrafos de texto"
    },
    {
      id: 8,
      question: "En la analogía de la casa, ¿qué representa HTML?",
      options: [
        "La decoración",
        "La electricidad",
        "La estructura (paredes, techo)",
        "Los muebles"
      ],
      correctAnswer: 2,
      explanation: "HTML representa la estructura básica, como las paredes y el techo de una casa"
    }
  ];

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    if (!studentName.trim()) {
      toast({
        title: "¡Falta tu nombre!",
        description: "Por favor ingresa tu nombre antes de calificar",
        variant: "destructive"
      });
      return;
    }

    let correct = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });

    setScore(correct);
    setShowResults(true);
    
    toast({
      title: "¡Cuestionario calificado!",
      description: `Obtuviste ${correct} de ${questions.length} respuestas correctas`,
    });
  };

  const isPassed = () => score >= 6; // 75% para aprobar

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Título del documento
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Cuestionario HTML - Lección 1.1", 20, 30);
    
    // Información del estudiante
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(`Estudiante: ${studentName}`, 20, 50);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 60);
    doc.text(`Puntuación: ${score}/${questions.length} (${Math.round((score/questions.length)*100)}%)`, 20, 70);
    
    // Estado (Aprobado/Reprobado)
    const status = isPassed() ? "APROBADO ✓" : "REPROBADO ✗";
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    if (isPassed()) {
      doc.setTextColor(0, 128, 0); // Verde
    } else {
      doc.setTextColor(255, 0, 0); // Rojo
    }
    doc.text(status, 20, 85);
    
    // Resetear color a negro
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    
    // Preguntas y respuestas
    let yPosition = 105;
    
    questions.forEach((question, index) => {
      // Verificar si necesitamos nueva página
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      }
      
      // Pregunta
      doc.setFont("helvetica", "bold");
      doc.text(`${index + 1}. ${question.question}`, 20, yPosition);
      yPosition += 10;
      
      // Respuesta del estudiante
      const studentAnswerIndex = answers[question.id];
      const studentAnswer = question.options[studentAnswerIndex] || "Sin respuesta";
      const isCorrect = studentAnswerIndex === question.correctAnswer;
      
      doc.setFont("helvetica", "normal");
      doc.text(`Tu respuesta: ${studentAnswer}`, 25, yPosition);
      yPosition += 8;
      
      // Respuesta correcta
      doc.text(`Respuesta correcta: ${question.options[question.correctAnswer]}`, 25, yPosition);
      yPosition += 8;
      
      // Estado de la respuesta
      doc.setFont("helvetica", "bold");
      if (isCorrect) {
        doc.setTextColor(0, 128, 0);
        doc.text("✓ CORRECTA", 25, yPosition);
      } else {
        doc.setTextColor(255, 0, 0);
        doc.text("✗ INCORRECTA", 25, yPosition);
      }
      doc.setTextColor(0, 0, 0);
      
      yPosition += 15;
    });
    
    // Guardar el PDF
    doc.save(`Cuestionario_HTML_${studentName.replace(/\s+/g, '_')}.pdf`);
    
    toast({
      title: "¡PDF generado!",
      description: "Tu cuestionario ha sido descargado como PDF",
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <Card className="p-8 bg-gradient-card shadow-quiz">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            📝 Cuestionario de Evaluación
          </h2>
          <p className="text-lg text-muted-foreground">
            Pon a prueba tus conocimientos sobre HTML
          </p>
        </div>

        {/* Formulario de nombre */}
        {!showResults && (
          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <User className="text-primary" size={24} />
              <Label htmlFor="name" className="text-lg font-semibold text-primary">
                Ingresa tu nombre:
              </Label>
            </div>
            <Input
              id="name"
              placeholder="Tu nombre completo"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="text-lg"
            />
          </Card>
        )}

        {/* Preguntas */}
        <div className="space-y-6 mb-8">
          {questions.map((question, index) => (
            <Card key={question.id} className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Badge className="bg-primary text-primary-foreground min-w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground flex-1">
                  {question.question}
                </h3>
              </div>

              <div className="space-y-3 ml-11">
                {question.options.map((option, optionIndex) => (
                  <label 
                    key={optionIndex}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:bg-accent/50 ${
                      answers[question.id] === optionIndex 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border'
                    } ${showResults ? 'cursor-default' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={optionIndex}
                      checked={answers[question.id] === optionIndex}
                      onChange={() => !showResults && handleAnswerChange(question.id, optionIndex)}
                      disabled={showResults}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[question.id] === optionIndex 
                        ? 'border-primary bg-primary' 
                        : 'border-gray-300'
                    }`}>
                      {answers[question.id] === optionIndex && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className={`flex-1 ${
                      showResults 
                        ? optionIndex === question.correctAnswer 
                          ? 'text-success font-semibold' 
                          : answers[question.id] === optionIndex && optionIndex !== question.correctAnswer
                            ? 'text-destructive' 
                            : 'text-muted-foreground'
                        : 'text-foreground'
                    }`}>
                      {option}
                    </span>
                    {showResults && optionIndex === question.correctAnswer && (
                      <CheckCircle className="text-success" size={20} />
                    )}
                    {showResults && answers[question.id] === optionIndex && optionIndex !== question.correctAnswer && (
                      <XCircle className="text-destructive" size={20} />
                    )}
                  </label>
                ))}
              </div>

              {/* Mostrar explicación después de calificar */}
              {showResults && (
                <div className="mt-4 ml-11 p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Explicación:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!showResults ? (
            <Button 
              onClick={calculateScore}
              size="lg"
              className="bg-gradient-primary hover:opacity-90"
              disabled={Object.keys(answers).length !== questions.length || !studentName.trim()}
            >
              Calificar Cuestionario
            </Button>
          ) : (
            <>
              <Button 
                onClick={generatePDF}
                size="lg"
                className="bg-gradient-secondary hover:opacity-90 gap-2"
              >
                <FileDown size={20} />
                Descargar PDF
              </Button>
              <Button 
                onClick={() => {
                  setShowResults(false);
                  setAnswers({});
                  setScore(0);
                }}
                size="lg"
                variant="outline"
              >
                Intentar de nuevo
              </Button>
            </>
          )}
        </div>

        {/* Resultados */}
        {showResults && (
          <Card className={`mt-8 p-6 text-center ${
            isPassed() 
              ? 'bg-success/10 border-success/30' 
              : 'bg-destructive/10 border-destructive/30'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              {isPassed() ? (
                <CheckCircle className="text-success" size={32} />
              ) : (
                <XCircle className="text-destructive" size={32} />
              )}
              <h3 className={`text-2xl font-bold ${
                isPassed() ? 'text-success' : 'text-destructive'
              }`}>
                {isPassed() ? '¡FELICITACIONES!' : 'SIGUE PRACTICANDO'}
              </h3>
            </div>
            
            <p className="text-lg mb-4">
              Obtuviste <strong>{score}</strong> de <strong>{questions.length}</strong> respuestas correctas
              <br />
              <span className="text-xl font-semibold">
                {Math.round((score/questions.length)*100)}%
              </span>
            </p>
            
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg ${
              isPassed() 
                ? 'bg-success text-success-foreground' 
                : 'bg-destructive text-destructive-foreground'
            }`}>
              {isPassed() ? '✅ APROBADO' : '❌ REPROBADO'}
            </div>
            
            <p className="text-muted-foreground mt-4">
              {isPassed() 
                ? '¡Excelente trabajo! Has demostrado que comprendes los conceptos básicos de HTML.'
                : 'Necesitas al menos 75% (6 respuestas correctas) para aprobar. ¡Sigue estudiando!'
              }
            </p>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default Quiz;