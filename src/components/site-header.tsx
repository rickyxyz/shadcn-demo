import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

type AdminDashboardState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

interface SiteHeaderProps {
  adminDashboardState: AdminDashboardState;
}

export function SiteHeader({ adminDashboardState }: SiteHeaderProps) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex"
            onClick={() => {
              adminDashboardState[1]((p) => !p);
            }}
          >
            {adminDashboardState[0]
              ? "Switch To Member's Dashboard"
              : "Switch To Admin's Dashboard"}
          </Button>
        </div>
      </div>
    </header>
  );
}
