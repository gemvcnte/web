import { Card } from '@/components/ui/card'

export default function DashboardPage() {
  <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
    </div>
    <Card className="p-6">
      <div className="grid gap-2 text-sm md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-2">
          <div className="font-medium">Orders</div>
          <div className="ml-auto font-semibold">12</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="font-medium">Customers</div>
          <div className="ml-auto font-semibold">26</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="font-medium">Products</div>
          <div className="ml-auto font-semibold">8</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="font-medium">Revenue</div>
          <div className="ml-auto font-semibold">$2,500</div>
        </div>
      </div>
    </Card>
  </main>

}

