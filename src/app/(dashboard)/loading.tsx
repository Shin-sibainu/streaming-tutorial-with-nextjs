import CardSkeleton from "@/components/CardSkeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="h-9 w-[200px] bg-gray-200 rounded mb-8"></div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <div className="mt-8">
        <CardSkeleton height="300px" />
      </div>
    </div>
  );
}
