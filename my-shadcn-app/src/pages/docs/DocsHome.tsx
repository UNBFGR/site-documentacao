import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Car, 
  Cog, 
  Zap, 
  Wind, 
  Gauge, 
  Users,
  FileText,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Powertrain',
    description: 'Sei lá as parada do powertrain',
    icon: Cog,
    href: '/docs/powertrain/categoria1',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Suspensão',
    description: 'Suspensores?',
    icon: Gauge,
    href: '/docs/suspensao/categoria1',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Aerodinâmica',
    description: 'Asa avião aerodinâmica',
    icon: Wind,
    href: '/docs/aerodinamica/categoria1',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Chassis',
    description: 'Estrutura, e estruturas e estruturas',
    icon: Car,
    href: '/docs/chassis/estrutura',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Elétrica',
    description: 'Highvoltage e lowvoltage hihih nao sei',
    icon: Zap,
    href: '/docs/eletrica/categoria1',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Gestão',
    description: 'Processos e departamentos e o que convém',
    icon: Users,
    href: '/docs/gestao/categoria1',
    color: 'bg-muted text-muted-foreground',
  },
  {
    title: 'Outros',
    description: 'O que precisar',
    icon: Users,
    href: '/docs/outros/outros',
    color: 'bg-muted text-muted-foreground',
  },
];

export default function DocsHome() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Documentação FGR</h1>
            <p className="text-muted-foreground">Fórmula SAE - Manual Técnico da Equipe</p>
          </div>
        </div>
        
        <div className="bg-accent/50 border rounded-lg p-4 mt-4">
          <p className="text-sm text-muted-foreground">
            Bem-vindo à documentação técnica da FGR! Aqui você encontra todos os 
            procedimentos, especificações e informações necessárias para o desenvolvimento 
            do nosso protótipo e organização dos processos.
          </p>
        </div>
      </div>

      {/* Quick access cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.title} to={section.href}>
            <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
              <CardHeader className="pb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${section.color} mb-2`}>
                  <section.icon className="w-5 h-5" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  {section.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
