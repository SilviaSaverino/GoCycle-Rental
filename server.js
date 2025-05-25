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

import gallery1 from "./src/assets/img/gallery/gallery1.png";
import gallery2 from "./src/assets/img/gallery/gallery2.png";
import gallery3 from "./src/assets/img/gallery/gallery3.png";
import gallery4 from "./src/assets/img/gallery/gallery4.png";
import gallery5 from "./src/assets/img/gallery/gallery5.png";
import gallery6 from "./src/assets/img/gallery/gallery6.png";
import gallery7 from "./src/assets/img/gallery/gallery7.png";
import gallery8 from "./src/assets/img/gallery/gallery8.png";
import gallery9 from "./src/assets/img/gallery/gallery9.png";
import gallery10 from "./src/assets/img/gallery/gallery10.png";



createServer({
    models: {
        bicycles: Model,
        galleries: Model,
    },

    seeds(server) {
        // Mountain Bikes
        server.create("bicycle", {
            id: "1",
            name: "Mountain Explorer",
            available: true,
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
            type: "Mountain",
            specifications: {
                frameset: {
                    frame: "Tarmac SL7 FACT 9r Carbon",
                    fork: "FACT Carbon, 12x100mm thru-axle, flat-mount disc"
                },
                wheels: {
                    rims: "DT R470 Disc",
                    tyres: "Turbo Pro, 700x26"
                },
                drivetrain: {
                    crankset: "Shimano 105, 12-speed",
                    shifters: "Shimano 105 Di2 R7170, 12-speed",
                    frontDerailleur: "Shimano 105 Di2, Braze-on",
                    rearDerailleur: "Shimano 105 Di2",
                    chain: "Shimano SLX M7100, 12-speed w/ quick link",
                    cassette: "Shimano 105, 12-speed, 11-34t",
                    bottomBracket: "Shimano Threaded BSA BB"
                },
                components: {
                    handlebar: "Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp",
                    stem: "Tarmac integrated stem, 6-degree",
                    grips: "Supacaz Super Sticky Kush",
                    brakes: "Shimano 105, Hydraulic disc",
                    saddle: "Body Geometry Power Sport, steel rails",
                    seatpost: "2021 Tarmac Carbon seat post, FACT Carbon, 20mm offset",
                    seatBinder: "Tarmac integrated wedge"
                }
            },
            geometry: {
                frame: "Tarmac SL7 FACT 9r Carbon",
                fork: "FACT Carbon, 12x100mm thru-axle, flat-mount disc",
                shifters: "Shimano 105 Di2 R7170, 12-speed",
                rearDerailleur: "Shimano 105 Di2",
                frontDerailleur: "Shimano 105 Di2, Braze-on",
                chainset: "Shimano 105, 12-speed",
                bottomBracket: "Shimano Threaded BSA BB",
                chain: "Shimano SLX M7100, 12-speed w/ quick link",
                tyres: "Turbo Pro, 700x26",
                brakes: "Shimano 105, Hydraulic disc"
            }
        });
        server.create("bicycle", {
            id: "2",
            name: "Trail Blazer",
            available: false,
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
            type: "Mountain",
            specifications: {
                frameset: {
                    frame: "Aluminum, Fully Suspended Frame",
                    fork: "RockShox Recon RL 120mm Travel"
                },
                wheels: {
                    rims: "WTB ST i29 TCS 2.0",
                    tyres: "Maxxis Minion DHF 27.5x2.3"
                },
                drivetrain: {
                    crankset: "SRAM NX Eagle 12-speed",
                    shifters: "SRAM NX Eagle Trigger",
                    frontDerailleur: "None",
                    rearDerailleur: "SRAM NX Eagle 12-speed",
                    chain: "SRAM NX Eagle",
                    cassette: "SRAM PG-1230 11-50t",
                    bottomBracket: "SRAM DUB BSA30"
                },
                components: {
                    handlebar: "Race Face Atlas Riser 780mm",
                    stem: "Race Face Aeffect 50mm",
                    grips: "ODI Ruffian Lock-On",
                    brakes: "Shimano MT400 Hydraulic Disc Brakes",
                    saddle: "WTB Volt Race Saddle",
                    seatpost: "Race Face Aeffect Dropper 150mm",
                    seatBinder: "Race Face Cinch System"
                }
            },
            geometry: {
                frame: "Aluminum, Fully Suspended Frame",
                fork: "RockShox Recon RL 120mm Travel",
                shifters: "SRAM NX Eagle Trigger",
                rearDerailleur: "SRAM NX Eagle 12-speed",
                frontDerailleur: "None",
                chainset: "SRAM NX Eagle 12-speed",
                bottomBracket: "SRAM DUB BSA30",
                chain: "SRAM NX Eagle",
                tyres: "Maxxis Minion DHF 27.5x2.3",
                brakes: "Shimano MT400 Hydraulic Disc Brakes"
            }
        });
        server.create("bicycle", {
            id: "3",
            name: "Hill Conqueror",
            available: true,
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
            type: "Mountain",
            specifications: {
                frameset: {
                    frame: "Aluminum 6061, Lightweight Frame",
                    fork: "RockShox Judy 100mm Travel"
                },
                wheels: {
                    rims: "DT Swiss XR 1501 Spline One",
                    tyres: "Maxxis Ardent 27.5x2.4"
                },
                drivetrain: {
                    crankset: "Shimano Deore XT 12-speed",
                    shifters: "Shimano Deore XT SLX 12-speed",
                    frontDerailleur: "Shimano Deore XT",
                    rearDerailleur: "Shimano Deore XT",
                    chain: "Shimano Deore XT",
                    cassette: "Shimano Deore XT 10-51t",
                    bottomBracket: "Shimano PressFit 30"
                },
                components: {
                    handlebar: "FSA SL-K Carbon Riser 740mm",
                    stem: "FSA OS-99 60mm",
                    grips: "Lizard Skins Lock-On Grips",
                    brakes: "Magura MT5 Hydraulic Disc",
                    saddle: "WTB Volt Saddle",
                    seatpost: "RockShox Reverb Stealth Dropper",
                    seatBinder: "FSA K-Force"
                }
            },
            geometry: {
                frame: "Aluminum 6061, Lightweight Frame",
                fork: "RockShox Judy 100mm Travel",
                shifters: "Shimano Deore XT SLX 12-speed",
                rearDerailleur: "Shimano Deore XT",
                frontDerailleur: "Shimano Deore XT",
                chainset: "Shimano Deore XT 12-speed",
                bottomBracket: "Shimano PressFit 30",
                chain: "Shimano Deore XT",
                tyres: "Maxxis Ardent 27.5x2.4",
                brakes: "Magura MT5 Hydraulic Disc"
            }
        });
        server.create("bicycle", {
            id: "4",
            name: "Rock Hopper",
            available: true,
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
            type: "Mountain",
            specifications: {
                frameset: {
                    frame: "Steel, Reinforced for Tough Terrain",
                    fork: "Marzocchi Bomber Z2 120mm Travel"
                },
                wheels: {
                    rims: "Stan's NoTubes Arch S1",
                    tyres: "Kenda Nevegal 27.5x2.6"
                },
                drivetrain: {
                    crankset: "SRAM GX Eagle 12-speed",
                    shifters: "SRAM GX Eagle Trigger",
                    frontDerailleur: "None",
                    rearDerailleur: "SRAM GX Eagle",
                    chain: "SRAM GX Eagle",
                    cassette: "SRAM XG-1275 10-50t",
                    bottomBracket: "SRAM GXP"
                },
                components: {
                    handlebar: "Race Face Atlas 35mm Riser",
                    stem: "Race Face Turbine 35mm",
                    grips: "Ergon GA2 Fat Grips",
                    brakes: "Shimano XT M8020 4-Piston",
                    saddle: "WTB Silverado Ti",
                    seatpost: "Race Face Aeffect Dropper",
                    seatBinder: "Race Face Cinch System"
                }
            },
            geometry: {
                frame: "Steel, Reinforced for Tough Terrain",
                fork: "Marzocchi Bomber Z2 120mm Travel",
                shifters: "SRAM GX Eagle Trigger",
                rearDerailleur: "SRAM GX Eagle",
                frontDerailleur: "None",
                chainset: "SRAM GX Eagle 12-speed",
                bottomBracket: "SRAM GXP",
                chain: "SRAM GX Eagle",
                tyres: "Kenda Nevegal 27.5x2.6",
                brakes: "Shimano XT M8020 4-Piston"
            }
        });
        server.create("bicycle", {
            id: "5",
            name: "Adventure Seeker",
            available: false,
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
            type: "Mountain",
            specifications: {
                frameset: {
                    frame: "Aluminum Alloy Frame",
                    fork: "RockShox Tora 80mm Travel"
                },
                wheels: {
                    rims: "Sun Ringle Charger Pro 26",
                    tyres: "Schwalbe Nobby Nic 26x2.25"
                },
                drivetrain: {
                    crankset: "Shimano Alivio 9-speed",
                    shifters: "Shimano Alivio SL-M4000",
                    frontDerailleur: "Shimano Alivio",
                    rearDerailleur: "Shimano Alivio",
                    chain: "Shimano HG-53",
                    cassette: "Shimano CS-HG400 11-34t",
                    bottomBracket: "Shimano BB-UN26"
                },
                components: {
                    handlebar: "FSA V-Drive 660mm",
                    stem: "Kalloy 90mm",
                    grips: "Bontrager XR Enduro Grips",
                    brakes: "Tektro M285 Hydraulic Disc",
                    saddle: "Bontrager Arvada",
                    seatpost: "Bontrager Elite 31.6mm",
                    seatBinder: "Bontrager Alloy"
                }
            },
            geometry: {
                frame: "Aluminum Alloy Frame",
                fork: "RockShox Tora 80mm Travel",
                shifters: "Shimano Alivio SL-M4000",
                rearDerailleur: "Shimano Alivio",
                frontDerailleur: "Shimano Alivio",
                chainset: "Shimano Alivio 9-speed",
                bottomBracket: "Shimano BB-UN26",
                chain: "Shimano HG-53",
                tyres: "Schwalbe Nobby Nic 26x2.25",
                brakes: "Tektro M285 Hydraulic Disc"
            }
        });

        // Road Bikes
        server.create("bicycle", {
            id: "6",
            name: "Road Champion",
            available: true,
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
            type: "Road",
            specifications: {
                frameset: {
                    frame: "Aluminum Frame, Lightweight",
                    fork: "Carbon Fork for Vibration Dampening"
                },
                wheels: {
                    rims: "Fulcrum Racing 5",
                    tyres: "Continental Grand Prix 700x25"
                },
                drivetrain: {
                    crankset: "Shimano 105 11-speed",
                    shifters: "Shimano 105 R7000",
                    frontDerailleur: "Shimano 105 R7000",
                    rearDerailleur: "Shimano 105 R7000",
                    chain: "Shimano HG601",
                    cassette: "Shimano 105 R7000 11-32t",
                    bottomBracket: "Shimano HollowTech II"
                },
                components: {
                    handlebar: "FSA Omega Compact",
                    stem: "FSA OS-168 90mm",
                    grips: "Fizik Superlight",
                    brakes: "Shimano 105 R7000 Caliper",
                    saddle: "Fizik Aliante R5",
                    seatpost: "FSA SL-K Carbon",
                    seatBinder: "FSA Alloy"
                }
            },
            geometry: {
                frame: "Aluminum Frame, Lightweight",
                fork: "Carbon Fork for Vibration Dampening",
                shifters: "Shimano 105 R7000",
                rearDerailleur: "Shimano 105 R7000",
                frontDerailleur: "Shimano 105 R7000",
                chainset: "Shimano 105 11-speed",
                bottomBracket: "Shimano HollowTech II",
                chain: "Shimano HG601",
                tyres: "Continental Grand Prix 700x25",
                brakes: "Shimano 105 R7000 Caliper"
            }
        });
        server.create("bicycle", {
            id: "7",
            name: "Speedster Elite",
            available: false,
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
            type: "Road",
            specifications: {
                frameset: {
                    frame: "Carbon Fiber Frame, Aerodynamic Design",
                    fork: "Carbon Fiber Fork"
                },
                wheels: {
                    rims: "DT Swiss R 500",
                    tyres: "Michelin Pro4 700x23"
                },
                drivetrain: {
                    crankset: "Shimano Ultegra 11-speed",
                    shifters: "Shimano Ultegra R8000",
                    frontDerailleur: "Shimano Ultegra",
                    rearDerailleur: "Shimano Ultegra",
                    chain: "Shimano Ultegra",
                    cassette: "Shimano Ultegra 11-28t",
                    bottomBracket: "Shimano PressFit"
                },
                components: {
                    handlebar: "FSA K-Force Compact",
                    stem: "FSA SL-K 100mm",
                    grips: "Lizard Skins DSP 2.5mm",
                    brakes: "Shimano Ultegra R8000 Caliper",
                    saddle: "Fizik Antares R5",
                    seatpost: "FSA SL-K Carbon",
                    seatBinder: "FSA K-Force"
                }
            },
            geometry: {
                frame: "Carbon Fiber Frame, Aerodynamic Design",
                fork: "Carbon Fiber Fork",
                shifters: "Shimano Ultegra R8000",
                rearDerailleur: "Shimano Ultegra",
                frontDerailleur: "Shimano Ultegra",
                chainset: "Shimano Ultegra 11-speed",
                bottomBracket: "Shimano PressFit",
                chain: "Shimano Ultegra",
                tyres: "Michelin Pro4 700x23",
                brakes: "Shimano Ultegra R8000 Caliper"
            }
        });
        server.create("bicycle", {
            id: "8",
            name: "Endurance Racer",
            available: true,
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
            type: "Road",
            specifications: {
                "frameset": {
                    "frame": "Endurance-Optimized Carbon Frame, Comfort Geometry",
                    "fork": "Full Carbon Fork, Vibration Dampening"
                },
                "wheels": {
                    "rims": "DT Swiss E 1800",
                    "tyres": "Continental Grand Prix 5000 700x28c"
                },
                "drivetrain": {
                    "crankset": "Shimano 105 R7000 50/34T",
                    "shifters": "Shimano 105 R7000",
                    "frontDerailleur": "Shimano 105 R7000",
                    "rearDerailleur": "Shimano 105 R7000",
                    "chain": "Shimano HG601",
                    "cassette": "Shimano 105 R7000 11-30T",
                    "bottomBracket": "Shimano PressFit"
                },
                "components": {
                    "handlebar": "FSA Omega Compact",
                    "stem": "FSA Energy 100mm",
                    "grips": "Lizard Skins DSP 2.5mm",
                    "brakes": "Shimano 105 R7000 Hydraulic Disc",
                    "saddle": "Fizik Tempo Argo R5",
                    "seatpost": "Carbon Seatpost",
                    "seatBinder": "Integrated Clamp"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });
        server.create("bicycle", {
            id: "9",
            name: "Urban Speed",
            available: true,
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
            type: "Road",
            specifications: {
                "frameset": {
                    "frame": "Lightweight Aluminum City Frame",
                    "fork": "Carbon Fork for Urban Comfort"
                },
                "wheels": {
                    "rims": "AlexRims AT470",
                    "tyres": "Schwalbe Marathon 700x32c"
                },
                "drivetrain": {
                    "crankset": "Shimano Sora 48/34T",
                    "shifters": "Shimano Sora R3000",
                    "frontDerailleur": "Shimano Sora R3000",
                    "rearDerailleur": "Shimano Sora R3000",
                    "chain": "KMC X9",
                    "cassette": "Shimano HG400 11-32T",
                    "bottomBracket": "Shimano Hollowtech II"
                },
                "components": {
                    "handlebar": "Ergon Urban Flat Bar",
                    "stem": "Adjustable Alloy Stem",
                    "grips": "Ergon GP1",
                    "brakes": "Tektro Hydraulic Disc",
                    "saddle": "Brooks Cambium C17",
                    "seatpost": "Alloy Seatpost",
                    "seatBinder": "Quick-Release Clamp"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });
        server.create("bicycle", {
            id: "10",
            name: "Cyclone Pro",
            available: false,
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
            type: "Road",
            specifications: {
                "frameset": {
                    "frame": "Aerodynamic Carbon Race Frame",
                    "fork": "Full Carbon Aero Fork"
                },
                "wheels": {
                    "rims": "Zipp 303S Carbon",
                    "tyres": "Pirelli P Zero Race 700x25c"
                },
                "drivetrain": {
                    "crankset": "Shimano Ultegra R8100 52/36T",
                    "shifters": "Shimano Ultegra Di2 R8170",
                    "frontDerailleur": "Shimano Ultegra Di2",
                    "rearDerailleur": "Shimano Ultegra Di2",
                    "chain": "Shimano HG701",
                    "cassette": "Shimano Ultegra 11-30T",
                    "bottomBracket": "Shimano PressFit"
                },
                "components": {
                    "handlebar": "Zipp SL-70 Aero",
                    "stem": "Zipp Service Course SL",
                    "grips": "Supacaz Super Sticky Kush",
                    "brakes": "Shimano Ultegra R8170 Hydraulic Disc",
                    "saddle": "Fizik Antares R1",
                    "seatpost": "Aero Carbon Seatpost",
                    "seatBinder": "Hidden Aero Clamp"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });

        // Electric Bikes
        server.create("bicycle", {
            id: "11",
            name: "Electric Adventurer",
            available: false,
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
            type: "Electric",
            specifications: {
                "frameset": {
                    "frame": "Aluminum E-Bike Frame with Integrated Battery",
                    "fork": "Suspension Fork with Lockout"
                },
                "wheels": {
                    "rims": "WTB ST i23",
                    "tyres": "Schwalbe Smart Sam 700x45c"
                },
                "drivetrain": {
                    "crankset": "Shimano Steps FC-E6100",
                    "shifters": "Shimano Deore M5100",
                    "frontDerailleur": "N/A",
                    "rearDerailleur": "Shimano Deore M5100",
                    "chain": "Shimano E8000",
                    "cassette": "Shimano Deore 11-42T",
                    "bottomBracket": "Integrated Motor System"
                },
                "components": {
                    "handlebar": "Ergon Comfort Bar",
                    "stem": "Adjustable Alloy Stem",
                    "grips": "Ergon GP2",
                    "brakes": "Shimano MT200 Hydraulic Disc",
                    "saddle": "Selle Royal eZone",
                    "seatpost": "Alloy Suspension Seatpost",
                    "seatBinder": "Quick-Release Clamp"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });
        server.create("bicycle", {
            id: "12",
            name: "Eco Rider",
            available: true,
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
            type: "Electric",
            specifications: {
                "frameset": {
                    "frame": "Urban Aluminum E-Bike Frame",
                    "fork": "Carbon Fork for Lightweight Handling"
                },
                "wheels": {
                    "rims": "AlexRims ETRTO 622",
                    "tyres": "Continental Contact Plus 700x35c"
                },
                "drivetrain": {
                    "crankset": "Shimano Steps FC-E5000",
                    "shifters": "Shimano Nexus Revo",
                    "frontDerailleur": "N/A",
                    "rearDerailleur": "Shimano Nexus 8-Speed Internal Hub",
                    "chain": "KMC E10 Turbo",
                    "cassette": "Shimano Nexus 20T",
                    "bottomBracket": "Integrated Motor System"
                },
                "components": {
                    "handlebar": "Flat Urban Handlebar",
                    "stem": "Adjustable Alloy Stem",
                    "grips": "Ergon Comfort Grips",
                    "brakes": "Tektro Hydraulic Disc",
                    "saddle": "Brooks Cambium C17",
                    "seatpost": "Alloy Seatpost",
                    "seatBinder": "Quick-Release Clamp"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });
        server.create("bicycle", {
            id: "13",
            name: "Green Commuter",
            available: false,
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
            type: "Electric",
            specifications: {
                "frameset": {
                    "frame": "Aluminum Kids Bike Frame",
                    "fork": "Steel Rigid Fork"
                },
                "wheels": {
                    "rims": "Double-Walled Alloy Rims",
                    "tyres": "Kenda Small Block Eight 20x2.0"
                },
                "drivetrain": {
                    "crankset": "Single-Speed 32T",
                    "shifters": "N/A",
                    "frontDerailleur": "N/A",
                    "rearDerailleur": "N/A",
                    "chain": "KMC Z410",
                    "cassette": "18T Freewheel",
                    "bottomBracket": "Sealed Cartridge"
                },
                "components": {
                    "handlebar": "Kids-Size Riser Bar",
                    "stem": "Short Alloy Stem",
                    "grips": "Soft Rubber Grips",
                    "brakes": "V-Brakes",
                    "saddle": "Junior Comfort Saddle",
                    "seatpost": "Steel Seatpost",
                    "seatBinder": "Quick-Release Clamp"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });
        server.create("bicycle", {
            id: "14",
            name: "Power Pedaler",
            available: true,
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
            type: "Electric",
            specifications: {
                "frameset": {
                    "frame": "Aluminum alloy frame with reinforced structure for durability",
                    "fork": "Suspension fork with lockout for smoother rides on rough terrain"
                },
                "wheels": {
                    "rims": "Double-wall aluminum rims for added strength",
                    "tyres": "All-terrain tires with puncture resistance"
                },
                "drivetrain": {
                    "motor": "750W brushless hub motor for high torque performance",
                    "battery": "Lithium-ion 48V, 14Ah battery with extended range",
                    "shifters": "Shimano 7-speed trigger shifter",
                    "chain": "Heavy-duty e-bike chain",
                    "cassette": "Shimano 7-speed freewheel",
                    "bottomBracket": "Sealed cartridge bottom bracket"
                },
                "components": {
                    "handlebar": "Ergonomic riser handlebar for improved control",
                    "stem": "Adjustable alloy stem for customizable riding position",
                    "grips": "Shock-absorbing rubber grips for comfort",
                    "brakes": "Hydraulic disc brakes for reliable stopping power",
                    "saddle": "Gel-padded saddle for long-ride comfort",
                    "seatpost": "Alloy seatpost with quick-release adjustment",
                    "seatBinder": "Quick-release seat binder"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });
        server.create("bicycle", {
            id: "15",
            name: "Volt Voyager",
            available: true,
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
            type: "Electric",
            specifications: {
                "frameset": {
                    "frame": "Lightweight aluminum frame with integrated battery housing",
                    "fork": "Carbon-blended fork for a smooth, vibration-free ride"
                },
                "wheels": {
                    "rims": "Aero-profile aluminum rims for improved efficiency",
                    "tyres": "700x38c puncture-resistant tires for urban commuting"
                },
                "drivetrain": {
                    "motor": "500W rear hub motor for efficient speed control",
                    "battery": "Lithium-ion 36V, 12Ah battery with up to 50-mile range",
                    "shifters": "Shimano 8-speed rapid-fire shifters",
                    "chain": "Anti-rust e-bike chain",
                    "cassette": "Shimano 11-34T, 8-speed",
                    "bottomBracket": "Sealed cartridge bottom bracket"
                },
                "components": {
                    "handlebar": "Flat ergonomic handlebar with integrated controls",
                    "stem": "Adjustable stem for a customizable riding position",
                    "grips": "Soft-touch grips for improved comfort",
                    "brakes": "Hydraulic disc brakes with 180mm rotors",
                    "saddle": "Memory foam saddle for enhanced rider comfort",
                    "seatpost": "Suspension seatpost for shock absorption",
                    "seatBinder": "Quick-release seat binder"
                }
            },
            geometry: {
                frame: "ALX8 6066/6061-T6 DOUBLE-BUTTED ALUMINIUM",
                fork: "SR SUNTOUR SF19 XCE28 DS 27.5 100 mm",
                shifters: "Shimano ST-EF41",
                rearDerailleur: "Shimano RD-TY300",
                frontDerailleur: "Shimano FD-TZ500 DM6",
                chainset: "Prowheel TA-CQ68 42 / 34 / 24 170 mm",
                bottomBracket: "68mm/122.5mm",
                chain: "KMC HV-500",
                tyres: "Deli 27.5 x 2.1",
                brakes: "Alhonga V-Brake"
            }
        });

        // Kids Bikes
        server.create("bicycle", {
            id: "16",
            name: "Junior Cruiser",
            available: false,
            price: "45.00",
            description: "The Junior Cruiser is a beginner-friendly bike designed for young riders," +
                "featuring a lightweight frame for easy handling and maneuverability." +
                "Its child-focused design includes a comfortable saddle and easy-grip handlebars for added safety." +
                "Durable tires provide stability, helping kids build confidence as they learn to ride." +
                "The Junior Cruiser is an excellent way to introduce children to the joys of cycling." +
                "With its fun design and practical features, it’s perfect for young learners taking their first rides." +
                "Parents can trust this bike to provide a safe and enjoyable experience for their kids.",
            imageUrl: kids1,
            type: "Kids",
            specifications: {
                "frameset": {
                    "frame": "Lightweight steel frame for easy handling",
                    "fork": "Rigid fork for improved control"
                },
                "wheels": {
                    "rims": "20-inch aluminum rims for durability",
                    "tyres": "Puncture-resistant kid-friendly tires"
                },
                "drivetrain": {
                    "crankset": "Single-speed drivetrain for simple riding",
                    "chain": "Rust-resistant steel chain",
                    "bottomBracket": "Sealed cartridge bottom bracket"
                },
                "components": {
                    "handlebar": "High-rise handlebar for comfortable upright position",
                    "stem": "Fixed alloy stem for stability",
                    "grips": "Soft rubber grips for easy handling",
                    "brakes": "Coaster brakes with hand brake for added safety",
                    "saddle": "Kid-sized saddle with extra padding",
                    "seatpost": "Adjustable seatpost with quick release",
                    "seatBinder": "Quick-release seat binder"
                }
            },
            geometry: {
                frame: "Steel",
                fork: "Steel",
                shifters: "N/A",
                rearDerailleur: "N/A",
                frontDerailleur: "N/A",
                chainset: "Steel 40T",
                bottomBracket: "N/A",
                chain: "KMC Z51",
                tyres: "Deli 16 x 2.0",
                brakes: "V-Brake"
            }
        });
        server.create("bicycle", {
            id: "17",
            name: "Trail Rider Kids",
            available: true,
            price: "55,00",
            description: "The Trail Rider Kids is a sturdy and reliable bike for adventurous young cyclists," +
                "featuring a strong frame designed to handle rough paths and trails." +
                "Its grippy tires provide excellent traction, ensuring stability and safety during outdoor adventures." +
                "The bike’s child-friendly design focuses on comfort and ease of use, making it ideal for beginners and experienced kids alike." +
                "Trail Rider Kids encourages exploration and outdoor activity, building confidence in young riders." +
                "It’s the perfect bike for kids eager to discover new trails and enjoy nature." +
                "Parents will appreciate its durability and safety-focused features.",
            imageUrl: kids2,
            type: "Kids",
            specifications: {
                "frameset": {
                    "frame": "Durable steel frame built for rugged use",
                    "fork": "Front suspension fork for shock absorption"
                },
                "wheels": {
                    "rims": "24-inch alloy rims for increased strength",
                    "tyres": "Knobby tires for extra grip on trails"
                },
                "drivetrain": {
                    "crankset": "3-speed drivetrain for varied terrain",
                    "shifters": "Shimano grip shifter for easy gear changes",
                    "chain": "Heavy-duty steel chain",
                    "cassette": "14-28T freewheel",
                    "bottomBracket": "Sealed cartridge bottom bracket"
                },
                "components": {
                    "handlebar": "Flat handlebar for stable control",
                    "stem": "Forged alloy stem for durability",
                    "grips": "Soft, slip-resistant grips",
                    "brakes": "V-brakes for strong stopping power",
                    "saddle": "Kid-specific padded saddle",
                    "seatpost": "Adjustable seatpost",
                    "seatBinder": "Quick-release seat binder"
                }
            },
            geometry: {
                frame: "Steel",
                fork: "Steel",
                shifters: "N/A",
                rearDerailleur: "N/A",
                frontDerailleur: "N/A",
                chainset: "Steel 40T",
                bottomBracket: "N/A",
                chain: "KMC Z51",
                tyres: "Deli 20 x 2.1",
                brakes: "V-Brake"
            }
        });
        server.create("bicycle", {
            id: "18",
            name: "Mini Explorer",
            available: false,
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
            type: "Kids",
            specifications: {
                "frameset": {
                    "frame": "Aluminum frame for a lightweight ride",
                    "fork": "Rigid fork for better control"
                },
                "wheels": {
                    "rims": "18-inch alloy rims for durability",
                    "tyres": "Semi-slick tires for a balance of speed and grip"
                },
                "drivetrain": {
                    "crankset": "Single-speed drivetrain for ease of use",
                    "chain": "Rust-proof chain",
                    "bottomBracket": "Cartridge bottom bracket"
                },
                "components": {
                    "handlebar": "Rise handlebar for an upright riding position",
                    "stem": "Alloy stem for stability",
                    "grips": "Cushioned grips for comfort",
                    "brakes": "Coaster brake with additional hand brake",
                    "saddle": "Soft padded saddle for comfort",
                    "seatpost": "Adjustable alloy seatpost",
                    "seatBinder": "Quick-release seat binder"
                }
            },
            geometry: {
                frame: "Aluminum frame for a lightweight ride",
                fork: "Rigid fork for better control",
                shifters: "N/A",
                rearDerailleur: "N/A",
                frontDerailleur: "N/A",
                chainset: "Single-speed drivetrain for ease of use",
                bottomBracket: "Cartridge bottom bracket",
                chain: "Rust-proof chain",
                tyres: "Semi-slick tires for a balance of speed and grip",
                brakes: "Coaster brake with additional hand brake"
            }
        });
        server.create("bicycle", {
            id: "19",
            name: "Speedy Junior",
            available: true,
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
            type: "Kids",
            specifications: {
                "frameset": {
                    "frame": "Lightweight aluminum frame with sport geometry",
                    "fork": "Rigid fork for better speed control"
                },
                "wheels": {
                    "rims": "20-inch alloy rims for durability",
                    "tyres": "Smooth-rolling tires for high speed"
                },
                "drivetrain": {
                    "crankset": "Single-speed drivetrain for easy handling",
                    "chain": "Durable steel chain",
                    "bottomBracket": "Sealed cartridge bottom bracket"
                },
                "components": {
                    "handlebar": "Flat handlebar for improved maneuverability",
                    "stem": "Forged alloy stem for added strength",
                    "grips": "Non-slip ergonomic grips",
                    "brakes": "V-brakes for reliable stopping",
                    "saddle": "Slim-profile racing saddle",
                    "seatpost": "Adjustable seatpost",
                    "seatBinder": "Quick-release seat binder"
                }
            },
            geometry: {
                frame: "Lightweight aluminum frame with sport geometry",
                fork: "Rigid fork for better speed control",
                shifters: "N/A",
                rearDerailleur: "N/A",
                frontDerailleur: "N/A",
                chainset: "Single-speed drivetrain for easy handling",
                bottomBracket: "Sealed cartridge bottom bracket",
                chain: "Durable steel chain",
                tyres: "Smooth-rolling tires for high speed",
                brakes: "V-brakes for reliable stopping"
            }
        });
        server.create("bicycle", {
            id: "20",
            name: "Tiny Trekker",
            available: true,
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
            type: "Kids",
            specifications: {
                "frameset": {
                    "frame": "Reinforced steel frame for durability",
                    "fork": "Rigid fork with extra stability"
                },
                "wheels": {
                    "rims": "16-inch alloy rims for lightweight handling",
                    "tyres": "Extra-wide tires for enhanced balance"
                },
                "drivetrain": {
                    "crankset": "Single-speed drivetrain with protected chain guard",
                    "chain": "Heavy-duty chain with anti-slip coating",
                    "bottomBracket": "Maintenance-free bottom bracket"
                },
                "components": {
                    "handlebar": "Wide handlebars for easy control",
                    "stem": "Fixed alloy stem",
                    "grips": "Soft, cushioned grips",
                    "brakes": "Coaster brake with additional front hand brake",
                    "saddle": "Extra-cushioned saddle for a comfortable ride",
                    "seatpost": "Adjustable alloy seatpost",
                    "seatBinder": "Quick-release seat binder",
                    "extras": "Removable training wheels for balance learning"
                }
            },
            geometry: {
                frame: "Reinforced steel frame for durability",
                fork: "Rigid fork with extra stability",
                shifters: "N/A",
                rearDerailleur: "N/A",
                frontDerailleur: "N/A",
                chainset: "Single-speed drivetrain with protected chain guard",
                bottomBracket: "Maintenance-free bottom bracket",
                chain: "Heavy-duty chain with anti-slip coating",
                tyres: "Extra-wide tires for enhanced balance",
                brakes: "Coaster brake with additional front hand brake"
            }
        });

        //Gallery
        server.create("gallery", {
            id: "1",
            imageUrl: gallery1,
            name: "gallery image 1",
        });
        server.create("gallery", {
            id: "2",
            imageUrl: gallery2,
            name: "gallery image 2",
        });
        server.create("gallery", {
            id: "3",
            imageUrl: gallery3,
            name: "gallery image 3",
        });
        server.create("gallery", {
            id: "4",
            imageUrl: gallery4,
            name: "gallery image 4",
        });
        server.create("gallery", {
            id: "5",
            imageUrl: gallery5,
            name: "gallery image 5",
        });
        server.create("gallery", {
            id: "6",
            imageUrl: gallery6,
            name: "gallery image 6",
        });
        server.create("gallery", {
            id: "7",
            imageUrl: gallery7,
            name: "gallery image 7",
        });
        server.create("gallery", {
            id: "8",
            imageUrl: gallery8,
            name: "gallery image 8",
        });
        server.create("gallery", {
            id: "9",
            imageUrl: gallery9,
            name: "gallery image 9",
        });
        server.create("gallery", {
            id: "10",
            imageUrl: gallery10,
            name: "gallery image 10",
        });
    },

    routes() {
        // Bikes
        this.namespace = "api";
        this.logging = false

        this.get("/bicycles", (schema, request) => {
          //  return new Response(400, {}, {error: "Error fetching data"})
            return schema.bicycles.all();
        });

        this.get("/bicycles/:id", (schema, request) => {
            const id = request.params.id;
            return schema.bicycles.find(id);
        });

        // Gallery
        this.get("/galleries", (schema, request) => {
            //  return new Response(400, {}, {error: "Error fetching data"})
            return schema.galleries.all();
        });

        this.get("/galleries/:id", (schema, request) => {
            const id = request.params.id;
            return schema.galleries.find(id);
        });


    },

});
