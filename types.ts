// -----------------------------
// SERVICE TYPES
// -----------------------------

// Basic Service (used in ServiceCard)
export type Service = {
  id: number | string
  title: string
  description: string
  category?: string
  imageUrl?: string
}

type MasterProductPortfolio = {
  [categoryName: string]: {
    imageUrl: string
    shortDescription: string[]
    longDescription: string
    products: {
      name: string
      features: string[]
    }[]
  }
}

// Full Service (used in ServicesPageClient with pricing, delivery, etc.)
export type DetailedService = {
  id: string
  category: string
  title: string
  longDescription: string
  shortDescription: string[]   // <-- changed from string to string[]
  pricing: number
  delivery: number
  technologies: string[]
  products: {
    name: string
    features: string[]
  }[]
}

// -----------------------------
// PRODUCT TYPES
// -----------------------------

// Each product inside a category
export type ProductItem = {
  name: string
  features: string[]
}

// Category wrapper
export type ProductCategory = {
  imageUrl: string
  shortDescription: string
  longDescription: string
  products: ProductItem[]
}

// Simple Product (like ServiceCard style)
export type Product = {
  id: number | string
  title: string
  description: string
  category?: string
  imageUrl?: string
}

// Master Portfolio (for product-data.json)
// export type MasterProductPortfolio = {
//   [key: string]: ProductCategory
// }

// -----------------------------
// DEMO REQUEST TYPES
// -----------------------------

export type DemoScheduleRequest = {
  name: string
  email: string
  phone: string
  interest: string
  preferredDateTime: string
}
