import Sidebar from "@/components/Sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
