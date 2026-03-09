import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

export function DocsLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b flex items-center px-4 bg-background sticky top-0 z-10">
            <SidebarTrigger className="mr-4" />
            <span className="text-sm text-muted-foreground">
              Documentação FGR - Fórmula SAE
            </span>
          </header>

          {/* Content */}
          <div className="flex-1 p-6 lg:p-8 overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
