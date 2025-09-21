"use client";

import DynamicModal from "./DynamicModal";
import { generateTabs } from "./TabsGenerator";

type Product = {
  name: string;
  features: string[];
};

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service: {
    shortDescription: string | string[];
    longDescription: string;
    products: Product[];
  };
};

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  return (
    <DynamicModal
      isOpen={isOpen}
      onClose={onClose}
      header="Service Details"
      tabs={generateTabs(service)}
    />
  );
}
