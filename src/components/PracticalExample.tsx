import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Eye, Code2, Monitor, Save, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PracticalExample = () => {
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState(false);

  const htmlCode = `<!DOCTYPE html>
<html>
<head>
    <title>Mi Primera Página</title>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
    <p>Esta es mi primera página web.</p>
    <p>¡HTML es genial!</p>
</body>
</html>`;

  const copyCode = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopiedCode(true);
    toast({
      title: "¡Código copiado!",
      description: "El código HTML ha sido copiado al portapapeles",
    });
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <Card className="p-8 bg-gradient-card shadow-elegant">
        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
          👨‍💻 Ejemplo Práctico: Tu Primera Página Web
        </h2>
        
        {/* Paso 1 */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">Paso 1</Badge>
              <h3 className="text-xl font-semibold">Crear el archivo HTML (2 minutos)</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-white border-l-4 border-primary">
                <h4 className="font-semibold text-primary mb-2">🪟 En Windows:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Descargar Visual Studio Code</li>
                  <li>• Abre el Bloc de notas o VS Code</li>
                  <li>• Guarda el archivo</li>
                </ul>
              </Card>
              
              <Card className="p-4 bg-white border-l-4 border-secondary">
                <h4 className="font-semibold text-secondary mb-2">🍎 En Mac:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Abre TextEdit o VS Code</li>
                  <li>• Escribe el mismo código</li>
                </ul>
              </Card>
            </div>
          </div>
          
          {/* Código HTML */}
          <Card className="p-6 bg-gray-900 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code2 size={20} />
                <span className="font-medium">Escribe exactamente este código:</span>
              </div>
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={copyCode}
                className="gap-2"
              >
                {copiedCode ? "¡Copiado!" : <><Copy size={16} /> Copiar</>}
              </Button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400">{htmlCode}</code>
            </pre>
          </Card>
          
          {/* Paso 2 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-secondary text-secondary-foreground">Paso 2</Badge>
              <h3 className="text-xl font-semibold">Guardar correctamente</h3>
            </div>
            
            <Card className="p-6 bg-warning/10 border-warning/30">
              <div className="flex items-center gap-3 mb-3">
                <Save className="text-warning" size={24} />
                <span className="font-bold text-warning text-lg">¡MUY IMPORTANTE!</span>
              </div>
              <p className="text-lg">
                Guardar archivo como: <code className="bg-white px-3 py-1 rounded text-primary font-mono">index.html</code>
              </p>
            </Card>
          </div>
          
          {/* Paso 3 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-success text-success-foreground">Paso 3</Badge>
              <h3 className="text-xl font-semibold">Abrir en el navegador (1 minuto)</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <ArrowRight className="text-primary flex-shrink-0" size={20} />
                <span>Ve a tu Escritorio</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <ArrowRight className="text-primary flex-shrink-0" size={20} />
                <span>Busca el archivo <code>index.html</code></span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <ArrowRight className="text-primary flex-shrink-0" size={20} />
                <span>Haz doble clic sobre él</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30">
                <Eye className="text-success flex-shrink-0" size={20} />
                <span className="font-medium">¡Se abrirá en tu navegador por defecto!</span>
              </div>
            </div>
          </div>
          
          {/* Resultado esperado */}
          <Card className="p-6 bg-gradient-primary text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🎉 ¿Qué deberías ver?
            </h3>
            <p className="mb-4">Si todo salió bien, en tu navegador deberías ver:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">En la pestaña del navegador:</h4>
                <div className="bg-white/20 p-2 rounded text-center font-mono text-sm">
                  "Mi Primera Página"
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">En la página:</h4>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">¡Hola Mundo!</div>
                  <div className="text-sm">Esta es mi primera página web.</div>
                  <div className="text-sm">¡HTML es genial!</div>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-white/80 text-sm">
              * El título "¡Hola Mundo!" se verá más grande que los párrafos.
            </p>
          </Card>
          
          {/* Entendiendo el código */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              🔍 Entendiendo el código
            </h3>
            <p className="text-muted-foreground mb-4">Vamos línea por línea:</p>
            
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-start gap-4 p-3 bg-accent/30 rounded">
                <code className="text-primary min-w-fit">&lt;!DOCTYPE html&gt;</code>
                <span className="text-muted-foreground">← Le dice al navegador "esto es HTML5"</span>
              </div>
              <div className="flex items-start gap-4 p-3 bg-accent/30 rounded">
                <code className="text-primary min-w-fit">&lt;html&gt;</code>
                <span className="text-muted-foreground">← Inicia el documento HTML</span>
              </div>
              <div className="flex items-start gap-4 p-3 bg-accent/30 rounded">
                <code className="text-primary min-w-fit">&lt;head&gt;</code>
                <span className="text-muted-foreground">← Información sobre la página (no visible)</span>
              </div>
              <div className="flex items-start gap-4 p-3 bg-accent/30 rounded">
                <code className="text-primary min-w-fit">&lt;title&gt;Mi Primera Página&lt;/title&gt;</code>
                <span className="text-muted-foreground">← Lo que aparece en la pestaña</span>
              </div>
              <div className="flex items-start gap-4 p-3 bg-accent/30 rounded">
                <code className="text-primary min-w-fit">&lt;body&gt;</code>
                <span className="text-muted-foreground">← Aquí va todo lo visible de la página</span>
              </div>
              <div className="flex items-start gap-4 p-3 bg-accent/30 rounded">
                <code className="text-primary min-w-fit">&lt;h1&gt;¡Hola Mundo!&lt;/h1&gt;</code>
                <span className="text-muted-foreground">← Título grande (Heading 1)</span>
              </div>
              <div className="flex items-start gap-4 p-3 bg-accent/30 rounded">
                <code className="text-primary min-w-fit">&lt;p&gt;Esta es mi primera...&lt;/p&gt;</code>
                <span className="text-muted-foreground">← Párrafo 1</span>
              </div>
            </div>
            
            <Card className="mt-6 p-4 bg-primary/5 border-primary/20">
              <h4 className="font-semibold text-primary mb-2">📝 Puntos clave:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cada etiqueta que abre &lt;etiqueta&gt; debe cerrar &lt;/etiqueta&gt;</li>
                <li>• &lt;head&gt; = información oculta</li>
                <li>• &lt;body&gt; = contenido visible</li>
                <li>• &lt;h1&gt; = título principal</li>
                <li>• &lt;p&gt; = párrafo</li>
              </ul>
            </Card>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default PracticalExample;