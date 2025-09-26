import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Upload } from "lucide-react";

export function DataManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Data Management</CardTitle>
        <CardDescription>
          Import or export your transaction data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Export Data</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Download your transaction history as a CSV file for your records or external analysis.
          </p>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
        <div>
          <h3 className="font-medium mb-2">Import Data</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Import transaction data from a standard CSV file from your bank to pre-populate your expense log.
          </p>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import CSV
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
