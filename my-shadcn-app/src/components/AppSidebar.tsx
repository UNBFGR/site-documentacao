import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';
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
      { title: 'Categoria1', url: '/docs/powertrain/categoria1' },
      { title: 'Categoria2', url: '/docs/powertrain/categoria2' },
      { title: 'Categoria3', url: '/docs/powertrain/categoria3' },
    ],
  },
  {
    title: 'Suspensão',
    icon: Gauge,
    items: [
      { title: 'Categoria1', url: '/docs/suspensao/categoria1' },
      { title: 'Categoria2', url: '/docs/suspensao/categoria2' },
      { title: 'Categoria3', url: '/docs/suspensao/categoria3' },
    ],
  },
  {
    title: 'Aerodinâmica',
    icon: Wind,
    items: [
      { title: 'Categoria1', url: '/docs/aerodinamica/categoria1' },
      { title: 'Categoria2', url: '/docs/aerodinamica/categoria2' },
      { title: 'Categoria3', url: '/docs/aerodinamica/categoria3' },
    ],
  },
  {
    title: 'Chassis',
    icon: Car,
    items: [
      { title: 'Estrutura', url: '/docs/chassis/estrutura' },
      { title: 'Categoria2', url: '/docs/chassis/categoria2' },
      { title: 'Categoria3', url: '/docs/chassis/categoria3' },
    ],
  },
  {
    title: 'Elétrica',
    icon: Zap,
    items: [
      { title: 'BMS', url: '/docs/eletrica/BMS' },
      { title: 'BSPD', url: '/docs/eletrica/BSPD' },
      { title: 'Circuito APPS-BSE', url: '/docs/eletrica/Circuito-APPS-BSE' },
      { title: 'Precharge-Discharge', url: '/docs/eletrica/Precharge-Discharge' },
      { title: 'Power-Delivery', url: '/docs/eletrica/Power-Delivery' },
      { title: 'Circuito Shutdown', url: '/docs/eletrica/Circuito-Shutdown' },
      { title: 'Sistema de Telemetria', url: '/docs/eletrica/Proposta-Sistema-Telemetria' },
      { title: 'RTDS', url: '/docs/eletrica/RTDS' },
    ],
  },
];

const managementSections = [
  {
    title: 'Gestão',
    icon: Users,
    items: [
      { title: 'Categoria1', url: '/docs/gestao/categoria1' },
      { title: 'Categoria2', url: '/docs/gestao/categoria2' },
      { title: 'Categoria3', url: '/docs/gestao/categoria3' },
    ],
  },
  {
    title: 'Procedimentos',
    icon: FileText,
    items: [
      { title: 'Categoria1', url: '/docs/procedimentos/categoria1' },
      { title: 'Categoria2', url: '/docs/procedimentos/categoria2' },
      { title: 'Categoria3', url: '/docs/procedimentos/categoria3' },
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
            <img
              src={logo}
              alt="Logo FGR"
              className="w-full h-full object-contain" />
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
                  <Link to={item.url}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
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
                              <Link to={item.url}>{item.title}</Link>
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
                              <Link to={item.url}>{item.title}</Link>
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
