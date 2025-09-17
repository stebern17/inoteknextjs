import { TabItem, Tabs, createTheme } from "flowbite-react";

const MainTabTheme = createTheme({
  TabItem: {
    default: "w-full bg-blue-700",
  },
});

const products = [
  {
    name: "EX Series 1820",
    categories: ["Simple", "Designer", "Wood", "Stone", "Tile/Brick"],
  },
  {
    name: "EX Series 3030",
    categories: ["Simple", "Designer", "Wood", "Stone", "Tile/Brick"],
  },
  {
    name: "EX Series 3030 New",
    categories: ["Simple", "Designer", "Wood", "Stone", "Tile/Brick"],
  },
];

// Dummy katalog (seharusnya dari API/DB)
const catalogData = [
  {
    product: "EX Series 1820",
    category: "Simple",
    images: ["https://picsum.photos/200", "https://picsum.photos/200"],
  },
  {
    product: "EX Series 1820",
    category: "Wood",
    images: ["https://picsum.photos/200"],
  },
  {
    product: "EX Series 3030",
    category: "Stone",
    images: ["https://picsum.photos/200"],
  },
  {
    product: "EX Series 3030 New",
    category: "Tile/Brick",
    images: ["https://picsum.photos/200", "https://picsum.photos/200"],
  },
];

export default function ProductCatalog() {
  return (
    <section className="px-40 py-6 lg:min-h-screen">
      <Tabs
        aria-label="Tabs with underline"
        theme={MainTabTheme}
        className="justify-evenly"
      >
        {products.map((prod) => (
          <TabItem key={prod.name} title={prod.name}>
            {/* Nested Tabs untuk kategori */}
            <Tabs
              aria-label={`${prod.name} categories`}
              variant="underline"
              className="justify-evenly"
            >
              {prod.categories.map((cat) => (
                <TabItem key={cat} title={cat}>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {catalogData
                      .filter(
                        (item) =>
                          item.product === prod.name && item.category === cat
                      )
                      .flatMap((item) => item.images)
                      .map((img, idx) => (
                        <div
                          key={idx}
                          className="p-2 border rounded-xl shadow-sm hover:shadow-md transition"
                        >
                          <img
                            src={img}
                            alt={`${cat}-${idx}`}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                      ))}
                  </div>
                </TabItem>
              ))}
            </Tabs>
          </TabItem>
        ))}
      </Tabs>
    </section>
  );
}
