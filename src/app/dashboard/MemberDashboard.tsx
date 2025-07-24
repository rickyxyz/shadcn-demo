import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table-member";
import { IconExclamationCircleFilled } from "@tabler/icons-react";

const data = [
  {
    name: "Landing Page Redesign",
    date: "2025-07-22",
    id: 1,
    header:
      "P1326 Decarbonisation of mining operations through the implementation of oil-hydrogen dualizing systems",
    type: "Uncategorized",
    status: "Under Management",
    target: "18",
    limit: "5",
    reviewer: "Eddie Lake",
  },
  {
    name: "Mobile App UI",
    date: "2025-07-18",
    id: 2,
    header: "P1359A Coarse Particle Flotation and HydroFloat",
    type: "Uncategorized",
    status: "Done",
    target: "29",
    limit: "24",
    reviewer: "Eddie Lake",
  },
  {
    name: "Brand Kit",
    date: "2025-07-15",
    id: 3,
    header: "P1354 Integrated Digital Modelling of Mineral Processing Circuit",
    type: "Research",
    status: "Done",
    target: "10",
    limit: "13",
    reviewer: "Eddie Lake",
  },
];

const pendingInvoices = [
  {
    id: "INV-00123",
    amount: "$1,200",
    dueDate: "2025-07-28",
    status: "Pending",
  },
  { id: "INV-00118", amount: "$560", dueDate: "2025-07-25", status: "Pending" },
];

const newsList = [
  { title: "Company Achieves Milestone of 1M Users", date: "2025-07-20" },
  { title: "New Partnership with Acme Corp", date: "2025-07-19" },
  { title: "Team Offsite Scheduled for August", date: "2025-07-17" },
];

export default function MemberDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-2 col-span-4 lg:px-6">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Unpaid Invoices This Month</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $1,760.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">Due in 2 days</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            {pendingInvoices.map((invoice, i) => (
              <div key={i} className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-medium">{invoice.id}</div>
                  <div className="text-sm text-muted-foreground">
                    Due: {invoice.dueDate}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{invoice.amount}</div>
                  <Badge
                    variant="outline"
                    className="text-muted-foreground px-1.5"
                  >
                    <IconExclamationCircleFilled className="fill-yellow-500 dark:fill-yellow-400" />
                    {invoice.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Recent News</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {newsList.map((news, i) => (
              <div key={i}>
                <div className="font-medium">{news.title}</div>
                <div className="text-sm text-muted-foreground">{news.date}</div>
                {i !== newsList.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 xl:col-span-3 pl-6">
        <DataTable data={data} />
      </div>
    </div>
  );
}
