import { Bell, ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import RevenueCard from "@/components/RevenueCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import SalesCard from "@/components/SalesCard";
import RecentSalesCard from "@/components/RecentSalesCard";
import { Suspense } from "react";
import CardSkeleton from "@/components/CardSkeleton";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <input
            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="flex items-center">
          <Button className="mr-4" size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center" variant="ghost">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    alt="User avatar"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                John Doe
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            Dashboard
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample Widgets */}
            <Suspense fallback={<CardSkeleton />}>
              <RevenueCard />
            </Suspense>
            <Suspense fallback={<CardSkeleton />}>
              <SubscriptionCard />
            </Suspense>
            <Suspense fallback={<CardSkeleton />}>
              <SalesCard />
            </Suspense>
          </div>

          <div className="mt-8">
            <Suspense fallback={<CardSkeleton />}>
              <RecentSalesCard />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
