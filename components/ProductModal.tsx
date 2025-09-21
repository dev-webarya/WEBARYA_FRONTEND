"use client";

import DynamicModal from "./DynamicModal";
import { generateTabs } from "./TabsGenerator";

type Product = {
  name: string;
  features: string[];
};

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  category: {
    shortDescription: string | string[];
    longDescription: string;
    products: Product[];
  };
};

export default function ProductModal({ isOpen, onClose, category }: ProductModalProps) {
  return (
    <DynamicModal
      isOpen={isOpen}
      onClose={onClose}
      header="Product Details"
      tabs={generateTabs(category)}
    />
  );
}
