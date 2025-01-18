import { createServer, Model } from "miragejs";

createServer({
  models: {
    bicycles: Model,
  },

  seeds(server) {
    // Mountain Bikes
    server.create("bicycle", {
      id: "1",
      name: "Mountain Explorer",
      price: 50,
      description: "A rugged bicycle designed for off-road adventures with a lightweight frame, suspension forks, and durable tires.",
      imageUrl: "https://example.com/mountain-explorer.png",
      type: "mountain",
    });
    server.create("bicycle", {
      id: "2",
      name: "Trail Blazer",
      price: 55,
      description: "Built for tackling tough trails, this bike offers advanced suspension and excellent durability.",
      imageUrl: "https://example.com/trail-blazer.png",
      type: "mountain",
    });
    server.create("bicycle", {
      id: "3",
      name: "Hill Conqueror",
      price: 60,
      description: "Designed for steep inclines, this mountain bike has enhanced grip and stability.",
      imageUrl: "https://example.com/hill-conqueror.png",
      type: "mountain",
    });
    server.create("bicycle", {
      id: "4",
      name: "Rock Hopper",
      price: 65,
      description: "Perfect for rocky terrains, with reinforced tires and a sturdy frame for long-lasting performance.",
      imageUrl: "https://example.com/rock-hopper.png",
      type: "mountain",
    });
    server.create("bicycle", {
      id: "5",
      name: "Adventure Seeker",
      price: 70,
      description: "This mountain bike is built for explorers who want a reliable companion for their adventures.",
      imageUrl: "https://example.com/adventure-seeker.png",
      type: "mountain",
    });

    // Road Bikes
    server.create("bicycle", {
      id: "6",
      name: "Road Champion",
      price: 60,
      description: "Built for speed and long-distance rides with a lightweight design and efficient tires.",
      imageUrl: "https://example.com/road-champion.png",
      type: "road",
    });
    server.create("bicycle", {
      id: "7",
      name: "Speedster Elite",
      price: 70,
      description: "A high-performance road bike designed for competitive cycling and endurance rides.",
      imageUrl: "https://example.com/speedster-elite.png",
      type: "road",
    });
    server.create("bicycle", {
      id: "8",
      name: "Endurance Racer",
      price: 65,
      description: "Offers a comfortable yet fast ride, perfect for long journeys on paved roads.",
      imageUrl: "https://example.com/endurance-racer.png",
      type: "road",
    });
    server.create("bicycle", {
      id: "9",
      name: "Urban Speed",
      price: 50,
      description: "A versatile road bike ideal for both commuting and leisure rides in urban settings.",
      imageUrl: "https://example.com/urban-speed.png",
      type: "road",
    });
    server.create("bicycle", {
      id: "10",
      name: "Cyclone Pro",
      price: 80,
      description: "High-quality road bike for advanced riders who prioritize speed and performance.",
      imageUrl: "https://example.com/cyclone-pro.png",
      type: "road",
    });

    // Electric Bikes
    server.create("bicycle", {
      id: "11",
      name: "Electric Adventurer",
      price: 70,
      description: "Pedal-assist technology makes this bike perfect for long rides or tackling steep hills.",
      imageUrl: "https://example.com/electric-adventurer.png",
      type: "electric",
    });
    server.create("bicycle", {
      id: "12",
      name: "Eco Rider",
      price: 75,
      description: "A sustainable and stylish e-bike designed for urban commuting with minimal effort.",
      imageUrl: "https://example.com/eco-rider.png",
      type: "electric",
    });
    server.create("bicycle", {
      id: "13",
      name: "Green Commuter",
      price: 80,
      description: "A modern electric bike with great battery life and sleek design for everyday use.",
      imageUrl: "https://example.com/green-commuter.png",
      type: "electric",
    });
    server.create("bicycle", {
      id: "14",
      name: "Power Pedaler",
      price: 90,
      description: "A powerful e-bike with advanced motor technology for both leisure and adventure.",
      imageUrl: "https://example.com/power-pedaler.png",
      type: "electric",
    });
    server.create("bicycle", {
      id: "15",
      name: "Volt Voyager",
      price: 85,
      description: "Combines technology and comfort, perfect for eco-conscious travelers.",
      imageUrl: "https://example.com/volt-voyager.png",
      type: "electric",
    });

    // Kids Bikes
    server.create("bicycle", {
      id: "16",
      name: "Junior Cruiser",
      price: 20,
      description: "A small, lightweight bike designed for kids learning to ride.",
      imageUrl: "https://example.com/junior-cruiser.png",
      type: "kids",
    });
    server.create("bicycle", {
      id: "17",
      name: "Trail Rider Kids",
      price: 25,
      description: "A sturdy kids' bike for little adventurers ready to hit the trails.",
      imageUrl: "https://example.com/trail-rider-kids.png",
      type: "kids",
    });
    server.create("bicycle", {
      id: "18",
      name: "Mini Explorer",
      price: 30,
      description: "Perfect for family outings, this bike offers safety and comfort for young riders.",
      imageUrl: "https://example.com/mini-explorer.png",
      type: "kids",
    });
    server.create("bicycle", {
      id: "19",
      name: "Speedy Junior",
      price: 22,
      description: "A fun, fast bike for kids who love to zip around the neighborhood.",
      imageUrl: "https://example.com/speedy-junior.png",
      type: "kids",
    });
    server.create("bicycle", {
      id: "20",
      name: "Tiny Trekker",
      price: 28,
      description: "A durable bike for adventurous kids, complete with training wheels.",
      imageUrl: "https://example.com/tiny-trekker.png",
      type: "kids",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false

    this.get("/bicycles", (schema, request) => {
      return schema.bicycles.all();
    });

    this.get("/bicycles/:id", (schema, request) => {
      const id = request.params.id;
      return schema.bicycles.find(id);
    });
  },
});
