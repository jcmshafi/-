export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-[#E7E7E3] p-4">
      <div className="h-32 md:h-40 w-full bg-muted rounded-md" />
      <div className="mt-3 h-4 w-3/4 bg-muted rounded" />
      <div className="mt-3 h-9 w-full bg-muted rounded-md" />
    </div>
  );
}