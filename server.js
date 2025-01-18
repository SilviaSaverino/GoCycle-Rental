import { createServer, Model } from "miragejs";
import mountain1 from "./src/assets/img/bikes/mountain1.png";
import mountain2 from "./src/assets/img/bikes/mountain2.png";
import mountain3 from "./src/assets/img/bikes/mountain3.png";
import mountain4 from "./src/assets/img/bikes/mountain4.png";
import mountain5 from "./src/assets/img/bikes/mountain5.png";
import road1 from "./src/assets/img/bikes/road1.png";
import road2 from "./src/assets/img/bikes/road2.png";
import road3 from "./src/assets/img/bikes/road3.png";
import road4 from "./src/assets/img/bikes/road4.png";
import road5 from "./src/assets/img/bikes/road5.png";
import electric1 from "./src/assets/img/bikes/electric1.png";
import electric2 from "./src/assets/img/bikes/electric2.png";
import electric3 from "./src/assets/img/bikes/electric3.png";
import electric4 from "./src/assets/img/bikes/electric4.png";
import electric5 from "./src/assets/img/bikes/electric5.png";
import kids1 from "./src/assets/img/bikes/kids1.png";
import kids2 from "./src/assets/img/bikes/kids2.png";
import kids3 from "./src/assets/img/bikes/kids3.png";
import kids4 from "./src/assets/img/bikes/kids4.png";
import kids5 from "./src/assets/img/bikes/kids5.png";



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
    imageUrl: mountain1,
      type: "mountain",
    });
    server.create("bicycle", {
      id: "2",
      name: "Trail Blazer",
      price: 55,
      description: "Built for tackling tough trails, this bike offers advanced suspension and excellent durability.",
      imageUrl: mountain2,
      type: "mountain",
    });
    server.create("bicycle", {
      id: "3",
      name: "Hill Conqueror",
      price: 60,
      description: "Designed for steep inclines, this mountain bike has enhanced grip and stability.",
      imageUrl: mountain3,
      type: "mountain",
    });
    server.create("bicycle", {
      id: "4",
      name: "Rock Hopper",
      price: 65,
      description: "Perfect for rocky terrains, with reinforced tires and a sturdy frame for long-lasting performance.",
      imageUrl: mountain4,
      type: "mountain",
    });
    server.create("bicycle", {
      id: "5",
      name: "Adventure Seeker",
      price: 70,
      description: "This mountain bike is built for explorers who want a reliable companion for their adventures.",
      imageUrl: mountain5,
      type: "mountain",
    });

    // Road Bikes
    server.create("bicycle", {
      id: "6",
      name: "Road Champion",
      price: 60,
      description: "Built for speed and long-distance rides with a lightweight design and efficient tires.",
      imageUrl: road1,
      type: "road",
    });
    server.create("bicycle", {
      id: "7",
      name: "Speedster Elite",
      price: 70,
      description: "A high-performance road bike designed for competitive cycling and endurance rides.",
      imageUrl: road2,
      type: "road",
    });
    server.create("bicycle", {
      id: "8",
      name: "Endurance Racer",
      price: 65,
      description: "Offers a comfortable yet fast ride, perfect for long journeys on paved roads.",
      imageUrl: road3,
      type: "road",
    });
    server.create("bicycle", {
      id: "9",
      name: "Urban Speed",
      price: 50,
      description: "A versatile road bike ideal for both commuting and leisure rides in urban settings.",
      imageUrl: road4,
      type: "road",
    });
    server.create("bicycle", {
      id: "10",
      name: "Cyclone Pro",
      price: 80,
      description: "High-quality road bike for advanced riders who prioritize speed and performance.",
      imageUrl: road5,
      type: "road",
    });

    // Electric Bikes
    server.create("bicycle", {
      id: "11",
      name: "Electric Adventurer",
      price: 70,
      description: "Pedal-assist technology makes this bike perfect for long rides or tackling steep hills.",
      imageUrl: electric1,
      type: "electric",
    });
    server.create("bicycle", {
      id: "12",
      name: "Eco Rider",
      price: 75,
      description: "A sustainable and stylish e-bike designed for urban commuting with minimal effort.",
      imageUrl: electric2,
      type: "electric",
    });
    server.create("bicycle", {
      id: "13",
      name: "Green Commuter",
      price: 80,
      description: "A modern electric bike with great battery life and sleek design for everyday use.",
      imageUrl: electric3,
      type: "electric",
    });
    server.create("bicycle", {
      id: "14",
      name: "Power Pedaler",
      price: 90,
      description: "A powerful e-bike with advanced motor technology for both leisure and adventure.",
      imageUrl: electric4,
      type: "electric",
    });
    server.create("bicycle", {
      id: "15",
      name: "Volt Voyager",
      price: 85,
      description: "Combines technology and comfort, perfect for eco-conscious travelers.",
      imageUrl: electric5,
      type: "electric",
    });

    // Kids Bikes
    server.create("bicycle", {
      id: "16",
      name: "Junior Cruiser",
      price: 20,
      description: "A small, lightweight bike designed for kids learning to ride.",
      imageUrl: kids1,
      type: "kids",
    });
    server.create("bicycle", {
      id: "17",
      name: "Trail Rider Kids",
      price: 25,
      description: "A sturdy kids' bike for little adventurers ready to hit the trails.",
      imageUrl: kids2,
      type: "kids",
    });
    server.create("bicycle", {
      id: "18",
      name: "Mini Explorer",
      price: 30,
      description: "Perfect for family outings, this bike offers safety and comfort for young riders.",
      imageUrl: kids3,
      type: "kids",
    });
    server.create("bicycle", {
      id: "19",
      name: "Speedy Junior",
      price: 22,
      description: "A fun, fast bike for kids who love to zip around the neighborhood.",
      imageUrl: kids4,
      type: "kids",
    });
    server.create("bicycle", {
      id: "20",
      name: "Tiny Trekker",
      price: 28,
      description: "A durable bike for adventurous kids, complete with training wheels.",
      imageUrl: kids5,
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
