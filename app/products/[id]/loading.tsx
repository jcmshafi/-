export default function Loading() {
  return (
    <section className="max-w-7xl py-8 animate-pulse">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
          <div className="bg-gray-200 h-[500px] rounded-3xl" />
          <div className="bg-gray-200 h-[500px] rounded-3xl" />
        </div>

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 w-24 rounded" />
          <div className="h-10 bg-gray-200 w-64 rounded" />
          <div className="h-6 bg-gray-200 w-32 rounded" />
          <div className="h-12 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </section>
  );
}