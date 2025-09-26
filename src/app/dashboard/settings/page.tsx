import { DataManagement } from "@/components/settings/data-management";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application settings and data.</p>
      </div>
      <DataManagement />
    </div>
  );
}
