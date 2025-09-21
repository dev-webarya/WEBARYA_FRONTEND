import type { ProductCategory } from "@/types"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductCard({ categoryKey, category }: { categoryKey: string; category: ProductCategory }) {
  return (
    <Card className="rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 group hover:shadow-lg hover:border-blue-500 cursor-pointer">
      <CardHeader className="flex flex-col items-center">
        <div className="h-32 w-full max-w-xs rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src={category.imageUrl}
            alt={categoryKey}
            width={400}
            height={200}
            className="object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <CardTitle className="text-xl font-semibold text-center mt-2">{categoryKey}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 text-sm text-gray-700">
        <p className="text-gray-500">{category.shortDescription}</p>
      </CardContent>
    </Card>
  )
}
