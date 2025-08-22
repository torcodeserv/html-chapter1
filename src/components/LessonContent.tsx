import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Palette, Zap, Code, Globe, FileText, Monitor, Download } from "lucide-react";

const LessonContent = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 space-y-8">
      
      {/* ¿Qué aprenderás? */}
      <Card className="p-8 bg-gradient-card shadow-card">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          📚 ¿Qué aprenderás?
        </h2>
        
        <div className="space-y-8">
          {/* Sección 1: ¿Qué es HTML? */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">1. ¿Qué es HTML?</h3>
            <div className="bg-accent/50 p-6 rounded-lg mb-4">
              <p className="text-lg font-medium text-primary mb-2">
                HTML significa <strong>HyperText Markup Language</strong> (Lenguaje de Marcado de Hipertexto).
              </p>
              <p className="text-muted-foreground">
                Piensa en HTML como el esqueleto de una página web:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-card text-center">
                <Building2 className="text-primary mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-primary">🏗️ Es la estructura</h4>
                <p className="text-sm text-muted-foreground">Define qué va en cada parte (títulos, párrafos, imágenes)</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-card text-center">
                <Code className="text-primary mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-primary">🏷️ Usa etiquetas</h4>
                <p className="text-sm text-muted-foreground">Son como etiquetas que le dicen al navegador "esto es un título"</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-card text-center">
                <FileText className="text-primary mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-primary">📄 Es solo texto</h4>
                <p className="text-sm text-muted-foreground">Un archivo HTML es simplemente texto con instrucciones especiales</p>
              </div>
            </div>
            
            <Card className="p-6 bg-gradient-secondary text-white">
              <h4 className="font-semibold mb-3 text-xl">🏠 Analogía simple: Si una casa fuera una página web:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Building2 className="mx-auto mb-2" size={28} />
                  <p><strong>HTML</strong> = La estructura (paredes, techo, puertas)</p>
                </div>
                <div className="text-center">
                  <Palette className="mx-auto mb-2" size={28} />
                  <p><strong>CSS</strong> = La decoración (colores, muebles)</p>
                </div>
                <div className="text-center">
                  <Zap className="mx-auto mb-2" size={28} />
                  <p><strong>JavaScript</strong> = La funcionalidad (electricidad, plomería)</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sección 2: ¿Cómo funcionan las páginas web? */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">2. ¿Cómo funcionan las páginas web?</h3>
            <p className="text-muted-foreground mb-4">El proceso es simple:</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-primary">
                <Badge variant="secondary" className="min-w-6 h-6 rounded-full text-xs">1</Badge>
                <span>Tú escribes código HTML en un archivo de texto</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-primary">
                <Badge variant="secondary" className="min-w-6 h-6 rounded-full text-xs">2</Badge>
                <span>Guardas el archivo con extensión <code className="bg-accent px-2 py-1 rounded">.html</code></span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-primary">
                <Badge variant="secondary" className="min-w-6 h-6 rounded-full text-xs">3</Badge>
                <span>Abres el archivo con un navegador (Chrome, Firefox, etc.)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-primary">
                <Badge variant="secondary" className="min-w-6 h-6 rounded-full text-xs">4</Badge>
                <span>El navegador lee el HTML y lo muestra como página web</span>
              </div>
            </div>
          </div>
          
          {/* ¿Qué son las etiquetas? */}
          <Card className="p-6 bg-accent/30">
            <h4 className="text-lg font-semibold text-primary mb-3">¿Qué son las etiquetas?</h4>
            <p className="text-muted-foreground mb-4">Las etiquetas son instrucciones que van entre símbolos &lt; &gt;:</p>
            
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-white p-3 rounded border">
                <code className="text-primary">&lt;h1&gt;</code> = "Esto es un título grande"
              </div>
              <div className="bg-white p-3 rounded border">
                <code className="text-primary">&lt;p&gt;</code> = "Esto es un párrafo"
              </div>
              <div className="bg-white p-3 rounded border">
                <code className="text-primary">&lt;/h1&gt;</code> = "Aquí termina el título" (etiqueta de cierre)
              </div>
            </div>
          </Card>
        </div>
      </Card>
      
      {/* Herramientas */}
      <Card className="p-8 bg-gradient-card shadow-card">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          🛠️ Herramientas que necesitas
        </h2>
        <p className="text-lg text-muted-foreground mb-6">¡Solo necesitas 2 cosas que ya tienes en tu computadora!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary" size={32} />
              <h3 className="text-xl font-semibold">Editor de texto:</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Windows:</strong> Bloc de notas</li>
              <li><strong>Mac:</strong> TextEdit</li>
              <li><strong>Alternativas mejores (opcional):</strong> VS Code, Sublime Text</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-secondary" size={32} />
              <h3 className="text-xl font-semibold">Navegador web:</h3>
            </div>
            <p className="text-muted-foreground">
              Chrome, Firefox, Safari, Edge (cualquiera funciona)
            </p>
          </div>
        </div>
        
        <Card className="mt-6 p-4 bg-primary/10 border-primary/20">
          <div className="flex items-center gap-3">
            <Download className="text-primary" size={24} />
            <div>
              <h4 className="font-semibold text-primary">Descargar Visual Studio Code</h4>
              <a 
                href="https://code.visualstudio.com/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover underline transition-colors"
              >
                https://code.visualstudio.com/download
              </a>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default LessonContent;