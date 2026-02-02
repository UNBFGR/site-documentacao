import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Image as ImageIcon,
  FileText
} from 'lucide-react';

const docContent: Record<string, {
  title: string;
  category: string;
  lastUpdate: string;
  sections: Array<{
    title: string;
    content: string[];
    type?: 'info' | 'warning' | 'success';
    image?: boolean;
    
  }>;

// -----------------> POWETRAIN <------------------------------
}> = {
  'powertrain/categoria1': {
    title: 'Powertrain motor?',
    category: 'Powertrain',
    lastUpdate: '30/01/2026',
    sections: [
      {
        title: 'Sobre',
        content: [
          'Aí escreve tipo sobre ta ligado eu sou só dev galera ainda to aprendendo de carro.',
        ]
        },
      {
        title: 'Restrição ou info importante',
        content: [
          'Conforme regulamento FSAE, se não seguir isso aqui nosso piloto MORRE GALERA ELE MORRE!!',
        ],
        type: 'info',
      },
      {
        title: 'Diagrama mapa mental foto não sei',
        content: [
          'Diagrama técnico e bem maneiro',
        ],
        image: true,
      },
      {
        title: 'Manutenção dia tal',
        content: [
          'Verificar se não vai explodir toda quarta feira.',
        ],
        type: 'warning',
      },
    ],
  },

  'powertrain/categoria2': {
    title: 'outra parte do powertrain',
    category: 'Powertrain',
    lastUpdate: '30/01/2026',
    sections: [
      {
        title: 'Sistema de sei la',
        content: ['Conteúdo maneiro sobre o sistema de sei la.'],
      },
      {
        title: 'Blah Blah',
        content: ['as parada aqui'],
      },
    ],
  },

  // -----------------> SUSPENSÃO <------------------------------

  'suspensao/categoria1': {
    title: 'Suspensãozona',
    category: 'Suspensão',
    lastUpdate: '30/01/2026',
    sections: [
      {
        title: 'Parâmetros Principais',
        content: [
          'Dados maneiros e ângulos e carros e suspensão.',
        ],
      },
      {
        title: 'Sustenido',
        content: [
          'Acho que a suspensão suspende então sustenido.',
        ],
      },
      {
        title: 'Diagrama lindo',
        content: [
          'Vista frontal e lateral da suspensão :) (deve ter isso né)',
        ],
        image: true,
      },
    ],
  },

// -----------------> AERODINÂMICA <------------------------------

  
  'aerodinamica/categoria1': {
    title: 'Aerodinâmica',
    category: 'Aerodinâmica',
    lastUpdate: '30/01/2026',
    sections: [
      {
        title: 'Qualquer título',
        content: ['Qualquer título'],
      },
      {
        title: 'Qualquer título',
        content: ['Qualquer coisa'],
      },
      {
        title: 'Qualquer título',
        content: ['Qualquer coisa'],
        image: true,
      },
    ],
  },

// -----------------> ESTRUTURAS <------------------------------

    'chassis/estrutura': {
    title: 'Chassi',
    category: 'Chassi',
    lastUpdate: '30/01/2026',
    sections: [
      {
        title: 'Qualquer título',
        content: ['Qualquer título'],
      },
      {
        title: 'Qualquer título',
        content: ['Qualquer coisa'],
      },
      {
        title: 'Qualquer título',
        content: ['Qualquer coisa'],
        image: true,
      },
    ],
  },

// -----------------> ELÉTRICA <------------------------------

  'eletrica/BMS': {
    title: 'Elétrica: Battery Management System ',
    category: 'Eletrica',
    lastUpdate: '02/02/2026',
    sections: [
      {
        title: 'Overview do circuito',
        content: [
          'O Battery Management System é baseado no módulo BQ79616EVM, capaz de monitorar, proteger, balancear e comunicar células de baterias de íon-lítio. ',
          'Ele mede com alta precisão as tensões individuais de até 16 células (máx. 80 V por módulo), realiza balanceamento passivo de carga e fornece mais ',
          'alguns dados importantes a mais, como por exemplo o State of Charge e State of Health, ambos autoexplicativos. ',
          'O sistema pode operar de forma empilhável (stack), permitindo a conexão em série de até 35 módulos para pacotes de baterias de alta tensão (até 2400 V). ',
          'Mas no nosso caso só serão utilizados 4 módulos em stack, capazes de monitorar e balancear seis sessões.',
        ],
      },
      {
        title: 'Regulamento sobre esse circuito',
        content: [
          'De acordo com o FSAE Rules 2026, temos essa regras que regem esse importante circuito. ',
        ],
      },
      {
        title: '',
        content: ['-> O BMS deve monitorar tensão e temperatura quando:',],
      },
      {
        title: '',
        content: [ 'a) o sistema de tração (Tractive System) estiver ativo;',],
      },
      {
        title: '',
        content: [ 'b) a bateria estiver conectada a um carregador.',],
      },
      {
        title: '',
        content: ['-> Deve haver isolamento galvânico entre módulos (module-to-module) conforme aprovado no documento ESF.',],
      },
      {
        title: '',
        content: ['-> O balanceamento de células não pode funcionar quando o circuito de desligamento (Shutdown Circuit) estiver aberto.',],
      },
      {
        title: '',
        content: ['-> O BMS deve detectar:',],
      },
      {
        title: '',
        content: ['a) tensão fora dos valores permitidos;',],
      },
      {
        title: '',
        content: ['b) corrente excessiva nos fios de medida de tensão ou interrupção desses fios;',],
      },
      {
        title: '',
        content: ['c) temperatura fora dos limites;',],
      },
      {
        title: '',
        content: ['d) medições de tensão ou temperatura faltantes ou interrompidas;',],
      },
      {
        title: '',
        content: ['e) falha interna do próprio BMS;',],
      },
      
    ],
  },

// -----------------> GESTÃO <------------------------------


    'gestao/categoria1': {
    title: 'Gestão',
    category: 'Gestão',
    lastUpdate: '30/01/2026',
    sections: [
      {
        title: 'Qualquer título',
        content: ['Qualquer título'],
      },
      {
        title: 'Qualquer título',
        content: ['Qualquer coisa'],
      },
      {
        title: 'Qualquer título',
        content: ['Qualquer coisa'],
        image: true,
      },
    ],
  },
};

// -----------------> DEFAULT <------------------------------

const defaultContent = {
  title: 'Documentação',
  category: 'Geral',
  lastUpdate: 'Em construção',
  sections: [
    {
      title: 'Conteúdo em Desenvolvimento',
      content: 'Esta seção está sendo desenvolvida. Em breve, você encontrará aqui toda a documentação técnica necessária.',
      type: 'info' as const,
    },
    {
      title: 'Como Contribuir',
      content: 'Para adicionar conteúdo a esta página, entre em contato com o responsável pela documentação da equipe.',
    },
  ],
};

export default function DocPage() {
  const { category, page } = useParams();
  const path = `${category}/${page}`;
  const doc = docContent[path] || { ...defaultContent, title: page || 'Página', category: category || 'Geral' };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Badge variant="outline">{doc.category}</Badge>
          <span>•</span>
          <span>Atualizado em {doc.lastUpdate}</span>
        </div>
        <h1 className="text-3xl font-bold capitalize">{doc.title}</h1>
      </div>

      <Separator className="mb-6" />

      {/* Content sections */}
      <div className="space-y-6">
        {doc.sections.map((section, index) => (
          <div key={index}>
            {section.type ? (
              <Card className={`
                ${section.type === 'info' ? 'border-primary/50 bg-primary/5' : ''}
                ${section.type === 'warning' ? 'border-yellow-500/50 bg-yellow-500/5' : ''}
                ${section.type === 'success' ? 'border-green-500/50 bg-green-500/5' : ''}
              `}>
                <CardContent className="pt-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {section.type === 'info' && <Info className="w-5 h-5 text-primary" />}
                      {section.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                      {section.type === 'success' && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : section.image ? (
              <div>
                <h3 className="font-semibold mb-3">{section.title}</h3>
                <div className="border rounded-lg bg-muted/30 p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground text-center">{section.content}</p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    [Adicione imagens técnicas aqui]
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="w-4 h-4" />
          <span>Última atualização: {doc.lastUpdate}</span>
        </div>
      </div>
    </div>
  );
}
