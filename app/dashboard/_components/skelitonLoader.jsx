import { Skeleton } from "@/components/ui/skeleton"

const SkeletonLoader = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            <Skeleton className="h-[200px] rounded-md col-span-1" />
            <Skeleton className="h-[200px] rounded-md col-span-1" />
            <Skeleton className="h-[200px] rounded-md col-span-1" />
            <Skeleton className="h-[200px] rounded-md col-span-1" />
            <Skeleton className="h-[200px] rounded-md col-span-1" />
            <Skeleton className="h-[200px] rounded-md col-span-1" />
            <Skeleton className="h-[200px] rounded-md col-span-1" />
            <Skeleton className="h-[200px] rounded-md col-span-1" />
        </div>
    );
};

export default SkeletonLoader;