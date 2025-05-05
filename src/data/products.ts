export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

export const categories = [
  { id: 1, name: "Electronics", image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Clothing", image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, name: "Home & Kitchen", image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Books", image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 5, name: "Beauty", image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal clear sound with these noise-cancelling wireless headphones.",
    price: 3999,
    rating: 4.5,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch Series 6",
    description: "Track your fitness, stay connected, and more with this advanced smartwatch.",
    price: 33999,
    rating: 4.8,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Casual Cotton T-Shirt",
    description: "Comfortable and stylish cotton t-shirt perfect for everyday wear.",
    price: 999,
    rating: 4.2,
    image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg",
    category: "Clothing"
  },
  {
    id: 4,
    name: "Designer Denim Jeans",
    description: "Premium quality denim jeans with a modern fit and stylish detailing.",
    price: 1499,
    rating: 4.3,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Clothing"
  },
  {
    id: 5,
    name: "Non-Stick Cookware Set",
    description: "Complete 10-piece non-stick cookware set for all your cooking needs.",
    price: 2999,
    rating: 4.6,
    image: "https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home & Kitchen"
  },
  {
    id: 6,
    name: "Automatic Coffee Maker",
    description: "Programmable coffee maker with built-in grinder for the perfect brew.",
    price: 1299,
    rating: 4.7,
    image: "https://images.pexels.com/photos/2036768/pexels-photo-2036768.jpeg",
    category: "Home & Kitchen"
  },
  {
    id: 7,
    name: "Bestselling Fiction Novel",
    description: "The latest bestseller that everyone is talking about.",
    price: 1899,
    rating: 4.4,
    image: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Books"
  },
  {
    id: 8,
    name: "Self-Help Book Collection",
    description: "Set of 3 bestselling self-improvement books to help you reach your potential.",
    price: 450,
    rating: 4.9,
    image: "https://images.pexels.com/photos/3747508/pexels-photo-3747508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Books"
  },
  {
    id: 9,
    name: "Luxury Skincare Set",
    description: "Complete premium skincare routine with cleanser, toner, serum, and moisturizer.",
    price: 1999,
    rating: 4.8,
    image: "https://images.pexels.com/photos/3762878/pexels-photo-3762878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beauty"
  },
  {
    id: 10,
    name: "Professional Makeup Palette",
    description: "24-color eyeshadow palette with matte and shimmer finishes for all occasions.",
    price: 4999,
    rating: 4.6,
    image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beauty"
  },
  {
    id: 11,
    name: "4K Ultra HD Smart TV",
    description: "55-inch 4K smart TV with built-in streaming apps and voice control.",
    price: 59999,
    rating: 4.7,
    image: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    id: 12,
    name: "Winter Jacket",
    description: "Insulated parka with faux fur hood and water-resistant exterior.",
    price: 1999,
    rating: 4.5,
    image: "https://images.pexels.com/photos/21656902/pexels-photo-21656902/free-photo-of-portrait-of-man-in-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Clothing"
  },
  {
    id: 13,
    name: "Premium Knife Set",
    description: "Professional-grade 5-piece knife set with storage block.",
    price: 299,
    rating: 4.8,
    image: "https://images.pexels.com/photos/952366/pexels-photo-952366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home & Kitchen"
  },
  {
    id: 14,
    name: "Classic Literature Collection",
    description: "Set of 5 beautifully bound classic novels for your collection.",
    price: 3999,
    rating: 4.6,
    image: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Books"
  },
  {
    id: 15,
    name: "Natural Hair Care Bundle",
    description: "Complete set of organic shampoo, conditioner, and hair mask.",
    price: 1499,
    rating: 4.4,
    image: "https://images.pexels.com/photos/28752005/pexels-photo-28752005/free-photo-of-organic-hair-dye-tubes-with-eco-friendly-packaging.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beauty"
  }
];