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
            price: "500.00",
            description:
                "A rugged bicycle specifically designed for off-road adventures," +
                "the Mountain Explorer combines durability with lightweight efficiency." +
                "Equipped with a robust frame, it ensures stability even on uneven terrains." +
                "Suspension forks absorb shocks effectively, making rides on rocky trails smooth and comfortable." +
                "Its durable tires provide exceptional traction, preventing slips and enhancing safety during adventurous rides." +
                "Whether you're navigating through dense forest paths or climbing steep slopes, this bike is engineered to keep up with your explorations." +
                "The Mountain Explorer is an excellent choice for those who seek a reliable, versatile, and high-performing off-road companion.",
            imageUrl: mountain1,
            type: "mountain",
        });
        server.create("bicycle", {
            id: "2",
            name: "Trail Blazer",
            price: "550.00",
            description:
                "The Trail Blazer is built for cyclists who love tackling tough terrains," +
                "featuring advanced suspension for a smoother ride over obstacles and roots." +
                "Its rugged frame is designed to endure challenging conditions with ease." +
                "With grippy tires that provide outstanding traction, it ensures stability on muddy or uneven paths." +
                "The ergonomic design promotes comfort, whether you're riding uphill or cruising downhill." +
                "Offering a balance of durability and high performance, the Trail Blazer is perfect for those who crave thrilling off-road adventures." +
                "This bike is the ideal partner for tackling trails and exploring the great outdoors.",
            imageUrl: mountain2,
            type: "mountain",
        });
        server.create("bicycle", {
            id: "3",
            name: "Hill Conqueror",
            price: "450.00",
            description:
                "Designed for steep inclines and rugged paths," +
                "the Hill Conqueror offers enhanced grip and stability on challenging terrains." +
                "Equipped with specialized tires, it provides excellent traction to keep you in control." +
                "The lightweight frame allows for efficient climbs, while the advanced gearing system reduces strain." +
                "Reinforced construction ensures long-lasting performance even in demanding conditions." +
                "The Hill Conqueror is a top choice for adventurers looking to tackle hills and explore difficult trails." +
                "Its thoughtful design empowers riders to conquer new heights with confidence and ease.",
            imageUrl: mountain3,
            type: "mountain",
        });
        server.create("bicycle", {
            id: "4",
            name: "Rock Hopper",
            price: "600.00",
            description:
                "The Rock Hopper is built to thrive on rocky terrains," +
                "featuring a sturdy frame designed to handle impacts with ease." +
                "Reinforced tires resist punctures and wear, providing dependable performance over tough trails." +
                "With precise handling and a reliable suspension system, it ensures smooth rides on uneven ground." +
                "The bike’s robust design is perfect for riders seeking durability and control on challenging paths." +
                "Whether you're hopping over rocks or navigating rugged landscapes, the Rock Hopper delivers unmatched reliability." +
                "This bike is an excellent choice for those who love off-road adventures and tough terrains.",
            imageUrl: mountain4,
            type: "mountain",
        });
        server.create("bicycle", {
            id: "5",
            name: "Adventure Seeker",
            price: "350.00",
            description:
                "For thrill-seekers and adventurers, the Adventure Seeker is the perfect companion," +
                "built with a resilient frame to endure harsh outdoor conditions." +
                "The suspension system reduces vibrations, ensuring a smooth and comfortable ride on bumpy trails." +
                "High-traction tires provide excellent grip, making it suitable for various terrains." +
                "The lightweight construction enhances maneuverability, while its durable components ensure lasting performance." +
                "Whether you're exploring forests, mountains, or winding paths, the Adventure Seeker excels in every setting." +
                "This bike is tailored for explorers who demand reliability and performance in all their adventures.",
            imageUrl: mountain5,
            type: "mountain",
        });

        // Road Bikes
        server.create("bicycle", {
            id: "6",
            name: "Road Champion",
            price: "250.00",
            description:
                "Designed for speed and endurance," +
                "the Road Champion features a lightweight frame for efficient long-distance cycling." +
                "Its aerodynamic design reduces drag, allowing riders to maintain higher speeds with less effort." +
                "The high-pressure tires offer a smooth and fast ride on paved roads." +
                "Optimized for comfort during extended rides, its geometry supports a relaxed yet performance-oriented position." +
                "The Road Champion is a perfect choice for serious cyclists aiming to excel in speed and endurance." +
                "With its combination of efficiency and performance, this bike stands out on any road.",
            imageUrl: road1,
            type: "road",
        });
        server.create("bicycle", {
            id: "7",
            name: "Speedster Elite",
            price: "375.00",
            description:
                "The Speedster Elite is a high-performance road bike built for competitive cycling," +
                "featuring a lightweight frame and aerodynamic design for maximum speed." +
                "Its advanced gearing system enables smooth transitions, maintaining momentum during sprints and climbs." +
                "The bike's high-quality tires minimize rolling resistance, ensuring a fast and efficient ride." +
                "Ergonomic handlebars and a comfortable saddle provide a superior riding experience, even on long journeys." +
                "The Speedster Elite is ideal for riders looking to push their limits in races or endurance challenges." +
                "With its precision engineering and top-tier components, this bike is made to deliver excellence.",
            imageUrl: road2,
            type: "road",
        });
        server.create("bicycle", {
            id: "8",
            name: "Endurance Racer",
            price: "425.00",
            description:
                "The Endurance Racer is tailored for cyclists seeking comfort without sacrificing speed," +
                "featuring a lightweight frame that minimizes fatigue during long rides." +
                "Its durable construction ensures reliability on extended journeys, with puncture-resistant tires for added peace of mind." +
                "The frame geometry supports a relaxed riding position, reducing strain on the body." +
                "Designed for paved roads, it offers a smooth and stable experience on varying surfaces." +
                "The Endurance Racer is the perfect companion for those aiming to cover long distances comfortably." +
                "With its balance of performance and comfort, it’s a top choice for endurance enthusiasts.",
            imageUrl: road3,
            type: "road",
        });
        server.create("bicycle", {
            id: "9",
            name: "Urban Speed",
            price: "375.00",
            description:
                "The Urban Speed is a versatile road bike crafted for city living," +
                "featuring a sleek and lightweight frame for quick maneuverability in urban environments." +
                "Its wide gearing range makes it suitable for both leisurely rides and faster commutes." +
                "Durable tires ensure a smooth experience on city streets, handling uneven surfaces with ease." +
                "The bike’s comfortable saddle and ergonomic handlebars enhance the rider's overall experience." +
                "The Urban Speed is ideal for those who value functionality and style in their daily transportation." +
                "It’s a practical and reliable choice for navigating the urban jungle.",
            imageUrl: road4,
            type: "road",
        });
        server.create("bicycle", {
            id: "10",
            name: "Cyclone Pro",
            price: "400.00",
            description:
                "The Cyclone Pro is a premium road bike engineered for advanced riders," +
                "offering exceptional speed and precision for competitive performance." +
                "Its lightweight and aerodynamic frame maximizes efficiency on straightaways and climbs." +
                "Equipped with high-pressure tires, it delivers minimal rolling resistance for smooth, fast rides." +
                "Precision components ensure reliable performance, even during intense cycling sessions." +
                "The Cyclone Pro is the ultimate choice for those who prioritize speed, control, and quality." +
                "Whether you're racing or training, this bike will help you achieve your goals.",
            imageUrl: road5,
            type: "road",
        });

        // Electric Bikes
        server.create("bicycle", {
            id: "11",
            name: "Electric Adventurer",
            price: "250.00",
            description:
                "The Electric Adventurer blends technology with practicality," +
                "featuring a powerful pedal-assist motor for effortless long rides and steep climbs." +
                "The sturdy frame ensures reliability on a variety of terrains, while its advanced suspension absorbs shocks for a smooth ride." +
                "Its high-capacity battery offers impressive range, allowing riders to explore further with confidence." +
                "User-friendly controls and a comfortable design make it suitable for all levels of experience." +
                "The Electric Adventurer is a great choice for eco-conscious riders who value both convenience and performance." +
                "With its innovative features, it’s designed to make cycling more enjoyable and accessible.",
            imageUrl: electric1,
            type: "electric",
        });
        server.create("bicycle", {
            id: "12",
            name: "Eco Rider",
            price: "400.00",
            description:
                "The Eco Rider is a stylish and sustainable electric bike designed for urban commuting," +
                "featuring a sleek frame that blends form with function." +
                "The efficient motor and long-lasting battery reduce the effort needed for daily rides." +
                "Intuitive controls make it easy to use, while the lightweight design enhances portability." +
                "The bike’s ergonomic features ensure comfort, even during extended trips around the city." +
                "The Eco Rider is perfect for riders seeking an eco-friendly alternative for daily transportation." +
                "Combining practicality with modern aesthetics, it’s a standout choice for urban cyclists.",
            imageUrl: electric2,
            type: "electric",
        });
        server.create("bicycle", {
            id: "13",
            name: "Green Commuter",
            price: "500.00",
            description:
                "The Green Commuter is a modern e-bike that prioritizes style and efficiency," +
                "featuring a powerful motor for seamless urban travel." +
                "Its lightweight construction and advanced battery technology provide a smooth and extended ride." +
                "The bike is designed with comfort and sustainability in mind, offering a reliable solution for daily commuting." +
                "With its sleek design and user-friendly features, it’s a great choice for riders of all levels." +
                "The Green Commuter makes cycling enjoyable, while promoting an environmentally friendly lifestyle." +
                "This e-bike is perfect for those who want a practical yet stylish mode of transport.",
            imageUrl: electric3,
            type: "electric",
        });
        server.create("bicycle", {
            id: "14",
            name: "Power Pedaler",
            price: "350.00",
            description:
                "The Power Pedaler is a high-performance electric bike built for both adventure and leisure," +
                "featuring a robust motor for impressive speed and torque on challenging terrains." +
                "The sturdy frame and advanced suspension system ensure stability and comfort, even on rough trails." +
                "A long-lasting battery allows for extended rides, while the intuitive controls enhance user convenience." +
                "The Power Pedaler is perfect for riders who want a versatile and powerful e-bike for various scenarios." +
                "Whether you’re exploring off-road paths or cruising around town, this bike delivers excellence." +
                "It’s a premium choice for cyclists who value both functionality and performance.",
            imageUrl: electric4,
            type: "electric",
        });
        server.create("bicycle", {
            id: "15",
            name: "Volt Voyager",
            price: "300.00",
            description:
                "The Volt Voyager is a premium electric bike that combines innovation with rider comfort," +
                "featuring a cutting-edge motor and high-capacity battery for extended journeys." +
                "Its sleek design is both stylish and functional, appealing to modern, eco-conscious travelers." +
                "The ergonomic frame and user-friendly controls ensure a comfortable and effortless ride." +
                "Built with durability in mind, the Volt Voyager is perfect for daily commutes and leisure rides alike." +
                "This e-bike is an ideal choice for those seeking a reliable, efficient, and stylish way to travel." +
                "It offers a seamless blend of technology, performance, and sustainability.",
            imageUrl: electric5,
            type: "electric",
        });

        // Kids Bikes
        server.create("bicycle", {
            id: "16",
            name: "Junior Cruiser",
            price: "45.00",
            description: "The Junior Cruiser is a beginner-friendly bike designed for young riders," +
                "featuring a lightweight frame for easy handling and maneuverability." +
                "Its child-focused design includes a comfortable saddle and easy-grip handlebars for added safety." +
                "Durable tires provide stability, helping kids build confidence as they learn to ride." +
                "The Junior Cruiser is an excellent way to introduce children to the joys of cycling." +
                "With its fun design and practical features, it’s perfect for young learners taking their first rides." +
                "Parents can trust this bike to provide a safe and enjoyable experience for their kids.",
            imageUrl: kids1,
            type: "kids",
        });
        server.create("bicycle", {
            id: "17",
            name: "Trail Rider Kids",
            price: "55,00",
            description: "The Trail Rider Kids is a sturdy and reliable bike for adventurous young cyclists," +
                "featuring a strong frame designed to handle rough paths and trails." +
                "Its grippy tires provide excellent traction, ensuring stability and safety during outdoor adventures." +
                "The bike’s child-friendly design focuses on comfort and ease of use, making it ideal for beginners and experienced kids alike." +
                "Trail Rider Kids encourages exploration and outdoor activity, building confidence in young riders." +
                "It’s the perfect bike for kids eager to discover new trails and enjoy nature." +
                "Parents will appreciate its durability and safety-focused features.",
            imageUrl: kids2,
            type: "kids",
        });
        server.create("bicycle", {
            id: "18",
            name: "Mini Explorer",
            price: "75.00",
            description:
                "The Mini Explorer is a perfect bike for family outings," +
                "designed with young riders' safety and comfort in mind." +
                "Its sturdy yet lightweight frame provides excellent stability, helping kids feel confident on their adventures." +
                "Soft grips and a well-padded saddle ensure a comfortable ride, even on longer journeys." +
                "The durable tires offer reliable traction on a variety of surfaces, making it versatile for different terrains." +
                "The Mini Explorer inspires kids to enjoy outdoor exploration while building their cycling skills." +
                "Parents can trust this bike to provide a safe and enjoyable experience for their children.",
            imageUrl: kids3,
            type: "kids",
        });
        server.create("bicycle", {
            id: "19",
            name: "Speedy Junior",
            price: "65.00",
            description:
                "The Speedy Junior is a fun and fast bike tailored for energetic kids," +
                "featuring a lightweight frame that’s easy to handle for zipping around the neighborhood." +
                "Its sporty design includes durable tires and a responsive braking system for added safety." +
                "Comfortable handlebars and a supportive saddle ensure kids enjoy every ride." +
                "The Speedy Junior is built to keep up with active young riders who love the thrill of cycling." +
                "This bike is perfect for fostering confidence and independence in children while they have fun." +
                "Parents will appreciate its durability and focus on safety.",
            imageUrl: kids4,
            type: "kids",
        });
        server.create("bicycle", {
            id: "20",
            name: "Tiny Trekker",
            price: "50.00",
            description:
                "The Tiny Trekker is a durable bike designed for adventurous young riders," +
                "featuring a sturdy frame that can withstand the challenges of outdoor play." +
                "It includes training wheels to help beginners develop balance and confidence as they learn." +
                "The bike’s wide tires offer excellent stability, ensuring a safe and steady ride on different surfaces." +
                "Ergonomic handlebars and a comfortable saddle make it easy for kids to ride for extended periods." +
                "The Tiny Trekker encourages kids to embrace the excitement of cycling while building essential skills." +
                "Parents can rely on its safety-focused design and robust construction for peace of mind.",
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
