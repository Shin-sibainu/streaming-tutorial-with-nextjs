/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchRevenueData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ total: "$45,231.89", growth: "+20.1%" }), 1000)
  );

const RevenueCard = async () => {
  const revenue: any = await fetchRevenueData();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
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
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{revenue.total}</div>
        <p className="text-xs text-muted-foreground">
          {revenue.growth} from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default RevenueCard;
