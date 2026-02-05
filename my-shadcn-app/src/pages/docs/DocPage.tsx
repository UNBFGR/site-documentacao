import { useParams } from 'react-router-dom';
//import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import bmsDoc from './eletrica/bms.md?raw';
import bspdDoc from './eletrica/bspd.md?raw';
import appsbseDoc from './eletrica/APPS-BSE.md?raw';
import ppDoc from './eletrica/precharge-discharge.md?raw';
import powerdeliveryDoc from './eletrica/circuito-power-delivery.md?raw';

import { 
  //AlertTriangle, 
  //CheckCircle2, 
  //Info,
  //Image as ImageIcon,
  FileText
} from 'lucide-react';  

const docContent: Record<string, {
  title: string;
  category: string;
  lastUpdate: string;
  markdown: string;

// -----------------> POWETRAIN <------------------------------
}> = {
  'powertrain/categoria1': {
    title: 'Titulo',
    category: 'Powertrain',
    lastUpdate: '02/02/2026',
    markdown: bmsDoc,
  },

  'powertrain/categoria2': {
    title: 'Titulo',
    category: 'Powertrain',
    lastUpdate: '02/02/2026',
    markdown: bmsDoc,
  },

  // -----------------> SUSPENSÃO <------------------------------

  'suspensao/categoria1': {
    title: 'Titulo',
    category: 'Suspensão',
    lastUpdate: '02/02/2026',
    markdown: bmsDoc,
  },

  // -----------------> AERODINÂMICA <------------------------------

  'aerodinamica/categoria1': {
    title: 'Titulo',
    category: 'Aerodinâmica',
    lastUpdate: '02/02/2026',
    markdown: bmsDoc,
  },

  // -----------------> ESTRUTURAS <------------------------------

  'estruturas/categoria1': {
    title: 'Titulo',
    category: 'Estruturas',
    lastUpdate: '02/02/2026',
    markdown: bmsDoc,
  },

  // -----------------> ELÉTRICA <------------------------------

  'eletrica/BMS': {
    title: 'Elétrica: Battery Management System',
    category: 'Elétrica',
    lastUpdate: '02/02/2026',
    markdown: bmsDoc,
  },

  'eletrica/BSPD': {
    title: 'Elétrica: Brake System Plausibility Device',
    category: 'Elétrica',
    lastUpdate: '04/02/2026',
    markdown: bspdDoc,
  },
    'eletrica/Circuito-APPS-BSE': {
    title: 'Elétrica: Circuito-APPS-BSE',
    category: 'Elétrica',
    lastUpdate: '05/02/2026',
    markdown: appsbseDoc,
    },

    'eletrica/Precharge-Discharge': {
    title: 'Elétrica: Precharge-Discharge',
    category: 'Elétrica',
    lastUpdate: '05/02/2026',
    markdown: ppDoc,
    },

    'eletrica/Power-Delivery': {
    title: 'Elétrica: Circuito Power Delivery',
    category: 'Elétrica',
    lastUpdate: '05/02/2026',
    markdown: powerdeliveryDoc,
    },

  // -----------------> GESTÃO <------------------------------

  'gestao/categoria1': {
    title: 'Titulo',
    category: 'Gestão',
    lastUpdate: '02/02/2026',
    markdown: bmsDoc,
  },
};

export default function DocPage() {
  const { category, page } = useParams();
  const path = `${category}/${page}`;

  const doc =
    docContent[path] || {
      title: page || 'Documentação',
      category: category || 'Geral',
      lastUpdate: 'Em construção',
      markdown: `
## Conteúdo em desenvolvimento

Esta seção está sendo desenvolvida. Em breve, você encontrará aqui toda a documentação técnica necessária.

---

### Como contribuir

Para adicionar conteúdo a esta página, entre em contato com o responsável pela documentação da equipe.
      `,
    };

  return (
    <div className="max-w-4xl mx-auto px-2">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Badge variant="outline">{doc.category}</Badge>
          <span>•</span>
          <span>Atualizado em {doc.lastUpdate}</span>
        </div>
        <h1 className="text-3xl font-bold">{doc.title}</h1>
      </header>

      <Separator className="mb-6" />

      {/* Markdown Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {doc.markdown}
        </ReactMarkdown>
      </article>

      {/* Footer */}
      <footer className="mt-10 pt-6 border-t">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="w-4 h-4" />
          <span>Última atualização: {doc.lastUpdate}</span>
        </div>
      </footer>
    </div>
  );
}
