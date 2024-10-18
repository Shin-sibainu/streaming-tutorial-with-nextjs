/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchSubscriptionData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ total: "+2350", growth: "+180.1%" }), 2000)
  );

const SubscriptionCard = async () => {
  const subscription: any = await fetchSubscriptionData();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{subscription.total}</div>
        <p className="text-xs text-muted-foreground">
          {subscription.growth} from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
