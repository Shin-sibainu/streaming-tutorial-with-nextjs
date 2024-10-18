/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchSalesData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ total: "+12,234", growth: "+19%" }), 3000)
  );

const SalesCard = async () => {
  const sales: any = await fetchSalesData();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sales</CardTitle>
        <svg
          className=" h-4 w-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="2" ry="2" width="20" x="2" y="2" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{sales.total}</div>
        <p className="text-xs text-muted-foreground">
          {sales.growth} from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
