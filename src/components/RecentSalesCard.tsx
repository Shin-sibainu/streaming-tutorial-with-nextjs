import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Sale = {
  name: string;
  email: string;
  amount: string;
};

type SalesData = {
  recentSales: Sale[];
  totalSales: number;
};

const fetchRecentSalesData = (): Promise<SalesData> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          recentSales: [
            {
              name: "Alice Johnson",
              email: "alice@example.com",
              amount: "$300",
            },
            { name: "Bob Smith", email: "bob@example.com", amount: "$250" },
            {
              name: "Charlie Brown",
              email: "charlie@example.com",
              amount: "$450",
            },
            { name: "Diana Ross", email: "diana@example.com", amount: "$550" },
            {
              name: "Edward Norton",
              email: "edward@example.com",
              amount: "$400",
            },
          ],
          totalSales: 265,
        }),
      4000
    )
  );

const RecentSalesCard = async () => {
  const salesData = await fetchRecentSalesData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.recentSales.map((sale, index) => (
              <TableRow key={index}>
                <TableCell>{sale.name}</TableCell>
                <TableCell>{sale.email}</TableCell>
                <TableCell>{sale.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentSalesCard;
