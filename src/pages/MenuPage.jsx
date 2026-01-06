import "../styles/menu.css";

const menuSections = [
  {
    title: "Petit Déjeuner",
    items: [
      {
        id: 1,
        name: "Breakfast Love",
        description:
          "Fresh eggs, grilled bread, butter, honey and seasonal fruits.",
        price: "45 MAD",
        image: "/products/images/breakfast.jpg",
      },
      {
        id: 5,
        name: "Healthy Start",
        description:
          "Greek yogurt with granola, honey, and mixed berries.",
        price: "50 MAD",
        image: "/products/images/healthy.jpg",
      },
      {
        id: 6,
        name: "Omelette Deluxe",
        description:
          "Three-egg omelette with cheese, mushrooms, tomatoes, and spinach.",
        price: "55 MAD",
        image: "/products/images/omelette.jpg",
      },
      {
        id: 19,
        name: "Morning Pancakes",
        description:
          "Stack of fluffy pancakes served with maple syrup and fresh fruits.",
        price: "40 MAD",
        image: "/products/images/pancakes.jpg",
        
      },
      {
        id: 20,
        name: "Avocado Toast",
        description:
          "Toasted bread topped with mashed avocado, cherry tomatoes, and a sprinkle of chili flakes.",
        price: "50 MAD",
        image: "/products/images/avocado-toast.jpg",
      },
      {
        id: 21,
        name: "Fruit Bowl",
        description:
          "A refreshing mix of seasonal fruits served with a dollop of yogurt.",
        price: "35 MAD",
        image: "/products/images/fruit_bowl.jpg",
      },
      {
        id: 22,
        name: "Breakfast Burrito",
        description:
          "Flour tortilla filled with scrambled eggs, cheese, beans, and salsa.",
        price: "60 MAD",
        image: "/products/images/burrito.jpg",
      },
      {
        id: 23,
        name: "French Toast",
        description:
          "Slices of bread soaked in egg mixture, fried to golden brown, and served with powdered sugar and syrup.",
        price: "45 MAD",
        image: "/products/images/french-toast.jpg",
      }

    ],
  },
  {
    title: "Entrées",
    items: [
      {
        id: 2,
        name: "Seafood Starter",
        description:
          "Shrimps sautéed with garlic, lemon zest and fresh herbs.",
        price: "60 MAD",
        image: "/products/images/starter.jpg",
      },
      {
        id: 7,
        name: "Bruschetta Classica",
        description:
          "Grilled bread topped with fresh tomatoes, basil, garlic, and olive oil.",
        price: "35 MAD",
        image: "/products/images/bruschetta.jpg",
      },
      {
        id: 8,
        name: "Caesar Salad",
        description:
          "Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
        price: "50 MAD",
        image: "/products/images/caesar.jpg",
      },
      {
        id: 9,
        name: "Soup of the Day",
        description:  
          "A delicious homemade soup made with fresh seasonal ingredients.",
        price: "40 MAD",
        image: "/products/images/soup.jpg",
      },
      {
        id: 24,
        name: "Caprese Salad",
        description:  
          "Fresh mozzarella, tomatoes, basil, and a drizzle of balsamic glaze.",
        price: "55 MAD",
        image: "/products/images/caprese.jpg",
      },
      {
        id: 25,
        name: "Stuffed Mushrooms",
        description:  
          "Mushroom caps filled with a savory mixture of cheese, herbs, and breadcrumbs.",
        price: "45 MAD",
        image: "/products/images/mushrooms.jpg",
      },
      {
        id: 26,
        name: "Garlic Shrimp",
        description:
          "Shrimps sautéed in garlic butter sauce, served with crusty bread.",
        price: "70 MAD",
        image: "/products/images/garlic_shrimp.jpg",
      },
      {
        id: 27,
        name: "Greek Salad",
        description:
          "A mix of cucumbers, tomatoes, olives, feta cheese, and red onions, dressed with olive oil and oregano.",
        price: "50 MAD",
        image: "/products/images/greek_salad.jpg",
      }
    ],
  },
  {
    title: "Plats",
    items: [
      {
        id: 3,
        name: "Beef Steak Surf & Turf",
        description:
          "Grilled beef medallion and jumbo shrimps, creamy thyme sauce and green beans.",
        price: "120 MAD",
        image: "/products/images/steak.jpg",
      },
      {
        id: 10,
        name: "Grilled Salmon",
        description:
          "Fresh salmon fillet grilled to perfection, served with lemon butter sauce and asparagus.",
        price: "110 MAD",
        image: "/products/images/salmon.jpg",
      },
      {
        id: 11,
        name: "Chicken Parmesan",
        description:
          "Breaded chicken breast topped with marinara sauce and melted cheese, served with spaghetti.",
        price: "95 MAD",
        image: "/products/images/chicken.jpg",
      },
      {
        id: 12,
        name: "Vegetarian Pasta",
        description:
          "Penne pasta tossed with seasonal vegetables, garlic, olive oil, and fresh herbs.",
        price: "85 MAD",
        image: "/products/images/pasta.jpg",
      },
      {
        id: 13,
        name: "Lamb Chops",
        description:
          "Grilled lamb chops marinated with rosemary and garlic, served with mashed potatoes.",
        price: "130 MAD",
        image: "/products/images/lamb.jpg",
      },
      {
        id: 28,
        name: "Beef Burger",
        description:
          "Juicy beef patty with lettuce, tomato, cheese, and special sauce, served with fries.",
        price: "75 MAD",
        image: "/products/images/burger-classic.jpg",
      },
      {
        id: 29,
        name: "Margherita Pizza",
        description:
          "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        price: "70 MAD",
        image: "/products/images/pizza-margherita.jpg",
      },
      {
        id: 30,
        name: "Grilled Chicken",
        description:
          "Herb-marinated grilled chicken breast served with steamed vegetables and rice.",
        price: "80 MAD",
        image: "/products/images/grilled_chicken.jpg",
      },
      {
        id: 31,
        name: "Vegetable Stir-Fry",
        description:
          "A colorful mix of stir-fried vegetables in a savory sauce, served with jasmine rice.",
        price: "70 MAD",
        image: "/products/images/vegetable_stirfry.jpg",
      },
      {        id: 32,
        name: "Fish and Chips",
        description:
          "Crispy battered fish served with golden fries and tartar sauce.",
        price: "85 MAD",
        image: "/products/images/fish_and_chips.jpg",
      },
      {
        id: 33,
        name: "Spaghetti Bolognese",
        description:
          "Classic Italian pasta dish with rich meat sauce and parmesan cheese.",
        price: "90 MAD",
        image: "/products/images/spaghetti_bolognese.jpg",
      },
      {
        id: 34,
        name: "Cauliflower Steak",
        description:
          "Thick-cut cauliflower steak grilled and served with chimichurri sauce and quinoa salad.",
        price: "75 MAD",
        image: "/products/images/cauliflower_steak.jpg",
      }
    ],
  },
  {
    title: "Desserts & Boissons",
    items: [
      {
        id: 4,
        name: "Chocolate Love",
        description:
          "Warm chocolate cake served with vanilla ice cream.",
        price: "40 MAD",
        image: "/products/images/dessert.jpg",
      },
      {
        id: 14,
        name: "Tiramisu",
        description:
          "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
        price: "45 MAD",
        image: "/products/images/tiramisu.jpg",
      },
      {
        id: 15,
        name: "Fresh Lemonade",
        description:
          "Refreshing homemade lemonade with a hint of mint.",
        price: "20 MAD",
        image: "/products/images/lemonade.jpg",
      },
      {
        id: 16,
        name: "Espresso",
        description:
          "Strong and rich Italian coffee served in a small cup.",
        price: "15 MAD",
        image: "/products/images/espresso.jpg",
      },
      {
        id: 17,
        name: "Fruit Smoothie",
        description:
          "Blend of fresh seasonal fruits for a healthy treat.",
        price: "30 MAD",
        image: "/products/images/smoothie.jpg",
      },
      {
        id: 18,
        name: "Cheesecake",
        description:  
          "Creamy cheesecake with a graham cracker crust and strawberry topping.",
        price: "50 MAD",
        image: "/products/images/cheesecake.jpg",
      }
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="menu-page">

      {/* HERO */}
      <div className="menu-hero">
        <div className="menu-hero-overlay">
          <h1>Nos repas sont faits avec amour</h1>
          <p>
            Chaque plat est préparé avec passion, des ingrédients soigneusement
            sélectionnés et une attention particulière aux détails.
          </p>
        </div>
      </div>

      {/* SECTIONS */}
      {menuSections.map((section, index) => (
        <div key={index} className="menu-section">

          <div className="menu-section-title">
            <span>{section.title}</span>
          </div>

          <div className="menu-list">
            {section.items.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
