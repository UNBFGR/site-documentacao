import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Car } from 'lucide-react';
import logo from '@/assets/logo.jpg';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Pequeno delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 300));

    const success = login(username, password);
    
    if (success) {
      navigate('/docs');
    } else {
      setError('Usuário ou senha incorretos');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <Card className="w-full max-w-md relative z-10 border-2">
        <CardHeader className="text-center space-y-4">
          {/* Logo */}
          <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Logo FGR"
              className="w-full h-full object-contain" />
          </div>
          
          <div>
            <CardTitle className="text-3xl font-bold tracking-tight">Fórmula Gama Racing</CardTitle>
            <CardDescription className="text-base mt-2">
              Documentação Técnica da Equipe
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                type="text"
                placeholder="Digite o usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Acesso restrito aos membros da FGR
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
