import { useLocation, useNavigate } from 'react-router-dom';
import {
  Car,
  Cog,
  Zap,
  Wind,
  Gauge,
  Wrench,
  Users,
  FileText,
  BookOpen,
  Settings,
  LogOut,
  ChevronDown,
  Home,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const navigationItems = [
  {
    title: 'Início',
    url: '/docs',
    icon: Home,
  },
];

const technicalSections = [
  {
    title: 'Powertrain',
    icon: Cog,
    items: [
      { title: 'Motor', url: '/docs/powertrain/motor' },
      { title: 'Transmissão', url: '/docs/powertrain/transmissao' },
      { title: 'Escape', url: '/docs/powertrain/escape' },
    ],
  },
  {
    title: 'Suspensão',
    icon: Gauge,
    items: [
      { title: 'Geometria', url: '/docs/suspensao/geometria' },
      { title: 'Amortecedores', url: '/docs/suspensao/amortecedores' },
      { title: 'Direção', url: '/docs/suspensao/direcao' },
    ],
  },
  {
    title: 'Aerodinâmica',
    icon: Wind,
    items: [
      { title: 'Asas', url: '/docs/aerodinamica/asas' },
      { title: 'Difusor', url: '/docs/aerodinamica/difusor' },
      { title: 'Simulações CFD', url: '/docs/aerodinamica/cfd' },
    ],
  },
  {
    title: 'Chassis',
    icon: Car,
    items: [
      { title: 'Estrutura', url: '/docs/chassis/estrutura' },
      { title: 'Segurança', url: '/docs/chassis/seguranca' },
      { title: 'Ergonomia', url: '/docs/chassis/ergonomia' },
    ],
  },
  {
    title: 'Elétrica',
    icon: Zap,
    items: [
      { title: 'ECU', url: '/docs/eletrica/ecu' },
      { title: 'Sensores', url: '/docs/eletrica/sensores' },
      { title: 'Fiação', url: '/docs/eletrica/fiacao' },
    ],
  },
];

const managementSections = [
  {
    title: 'Gestão',
    icon: Users,
    items: [
      { title: 'Organograma', url: '/docs/gestao/organograma' },
      { title: 'Cronograma', url: '/docs/gestao/cronograma' },
      { title: 'Processos', url: '/docs/gestao/processos' },
    ],
  },
  {
    title: 'Procedimentos',
    icon: FileText,
    items: [
      { title: 'Manutenção', url: '/docs/procedimentos/manutencao' },
      { title: 'Testes', url: '/docs/procedimentos/testes' },
      { title: 'Segurança', url: '/docs/procedimentos/seguranca' },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (url: string) => location.pathname === url;
  const isGroupActive = (items: { url: string }[]) => 
    items.some(item => location.pathname === item.url);

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground">FGR</h1>
            <p className="text-xs text-sidebar-foreground/60">Fórmula SAE</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-thin">
        {/* Main navigation */}
        <SidebarGroup>
          <SidebarMenu>
            {navigationItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.url)}
                >
                  <a href={item.url}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Technical documentation */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Wrench className="w-3 h-3" />
            Documentação Técnica
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {technicalSections.map((section) => (
                <Collapsible
                  key={section.title}
                  defaultOpen={isGroupActive(section.items)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <section.icon className="w-4 h-4" />
                        <span>{section.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {section.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isActive(item.url)}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Management documentation */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <BookOpen className="w-3 h-3" />
            Gestão da Equipe
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementSections.map((section) => (
                <Collapsible
                  key={section.title}
                  defaultOpen={isGroupActive(section.items)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <section.icon className="w-4 h-4" />
                        <span>{section.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {section.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isActive(item.url)}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sair
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
