import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ProductType {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  imageUrl?: string;
  imagePath?: string;
}

const CATEGORIES = [
  { id: 'all', name: '전체' },
  { id: 'joyful_jam', name: '인생꿀잼' },
  { id: 'wise', name: '와이즈' },
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') ?? 'all';
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const storage = getStorage();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const col = collection(db, 'products');
      const snap = await getDocs(col);

      const base: ProductType[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<ProductType, 'id'>),
      }));

      const withUrls = await Promise.all(
        base.map(async (prod) => {
          try {
            const url = await getDownloadURL(ref(storage, prod.imagePath));
            return { ...prod, imageUrl: url };
          } catch {
            return prod;
          }
        })
      );

      setProducts(withUrls);
    } catch (e) {
      console.error('Error fetching products:', e);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const list = useMemo(() => {
    if (category === 'all') return products;
    return products.filter((p) => p.categoryId === category);
  }, [category, products]);

  const setCategory = (next: string) => {
    if (next === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: next });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 my-12 md:my-20 text-brown">
      <h1 className="text-6xl text-brown">Products</h1>

      {/* 카테고리 버튼 */}
      <div className="flex gap-2 my-8">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`px-4 py-2 rounded-md border transition-colors ${
              category === c.id
                ? 'bg-brown text-white border-brown'
                : 'bg-white text-brown border-gray-300 hover:bg-brown hover:text-white'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* 로딩 상태 스켈레톤 */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center border rounded-lg shadow-md overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-brown/70" />
              <div className="p-4 w-full space-y-2">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 제품 리스트 */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {list.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center border rounded-lg shadow-md overflow-hidden"
            >
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-48 p-4"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-48 bg-brown flex items-center justify-center text-white font-bold">
                  IMAGE
                </div>
              )}
              <div className="p-4 flex flex-col gap-2 text-center">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-700">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* 빈 리스트 */}
      {!loading && list.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          해당 카테고리의 상품이 없습니다.
        </p>
      )}
    </div>
  );
};

export default ProductsPage;
