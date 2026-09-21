"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Search, SlidersHorizontal, Sparkles, Filter, ChevronDown } from "lucide-react";

export default function ProductCatalog({ onEnquireProduct }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(16);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === "All" || product.category === selectedCategory;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          (product.tags && product.tags.some((t) => t.toLowerCase().includes(query)));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "featured") {
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
        if (sortBy === "az") {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "za") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Complete Equipment & Furniture Range</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1C38] tracking-tight">
              Explore Our Laboratory Catalog
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Engineered modular workstations, certified fume containment hoods, safety storage units, and cleanroom air systems.
            </p>
          </div>

          <div className="text-xs font-bold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 self-start md:self-auto shadow-xs">
            Showing <span className="text-blue-600 font-extrabold">{displayedProducts.length}</span> of {filteredProducts.length} products
          </div>
        </div>

        {/* Search & Sort Controls Toolbar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product name, category, or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(16);
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-xs font-medium text-slate-500 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="az">Name: A to Z</option>
              <option value="za">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(16);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-[#0A1C38] text-white shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
                onEnquire={(p) => onEnquireProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 my-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#0A1C38] mb-2">No matching laboratory products found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any products matching "{searchQuery}". Try selecting a different category or resetting your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2.5 bg-[#0A1C38] text-white text-xs font-bold rounded-full hover:bg-blue-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 16)}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0A1C38] border border-slate-300 font-bold px-8 py-3.5 rounded-full text-xs transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Load More Products ({filteredProducts.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        )}

        {/* Quick View Modal */}
        {quickViewProduct && (
          <ProductModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onEnquire={(p) => {
              setQuickViewProduct(null);
              onEnquireProduct(p);
            }}
          />
        )}

      </div>
    </section>
  );
}
