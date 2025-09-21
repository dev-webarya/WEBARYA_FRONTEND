"use client";

import React from "react";
import { TabContent } from "./DynamicModal";

type Product = {
  name: string;
  features: string[];
};

export function generateTabs(data: {
  shortDescription: string | string[];
  longDescription: string;
  products: Product[];
}): TabContent[] {
  return [
    {
      title: "Overview",
      content: Array.isArray(data.shortDescription)
        ? <ul className="list-disc ml-5 space-y-1">{data.shortDescription.map((d, i) => <li key={i}>{d}</li>)}</ul>
        : <p>{data.shortDescription}</p>,
    },
    {
      title: "Details",
      content: <p className="text-gray-600">{data.longDescription}</p>,
    },
    {
      title: "Products",
      content: <div className="space-y-4">{data.products.map((p, idx) => (
        <div key={idx} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          <h4 className="font-semibold">{p.name}</h4>
          <ul className="list-disc ml-5 mt-2 text-gray-600">{p.features.map((f, fIdx) => <li key={fIdx}>{f}</li>)}</ul>
        </div>
      ))}</div>,
    },
  ];
}
