// src/data/products.js
// Local product data using your own images

import CowDogToy from '../assets/images/Cow_dog_toy.png';
import BlackChewBall from '../assets/images/dog_toy_black.png';
import TacticalHarness from '../assets/images/harness.png';
import VestHarness from '../assets/images/harness2.png';
import NylonLeash from '../assets/images/pet_leash_black.png';
import BlueRopeLeash from '../assets/images/pet-leash_blue.png';
import GrayRopeLeash from '../assets/images/pet-leash.png';
import Bowls from '../assets/images/Bowls.png';
import DogBed from '../assets/images/dog_bed.png';
import FluffyDogBed from '../assets/images/fluffy_dog_bed.png';
import HarnessBrown from '../assets/images/Harness_brown.png';
import NailGrinder from '../assets/images/Nail_Grinder_Grooming.png';
import ScissorsGrooming from '../assets/images/scissors_grroming.png';
import StrippedDogBed from '../assets/images/stripped_dog_bed.png';
import TowelGrooming from '../assets/images/towel_grooming.png';

const products = [
  {
    id: 1,
    title: "Cow Plush Dog Toy",
    image: CowDogToy,
    price: 350,
    oldPrice: 450,
    rating: 5,
    discount: 22,
    category: "Toys",
    description: "A super soft and cuddly cow-shaped plush toy perfect for dogs who love to snuggle and chew. Made with durable corduroy fabric with a squeaker inside."
  },
  {
    id: 2,
    title: "Black Rubber Chew Ball",
    image: BlackChewBall,
    price: 280,
    oldPrice: 350,
    rating: 4,
    discount: 20,
    category: "Toys",
    description: "An ultra-durable rubber chew ball designed for aggressive chewers. Features a segmented design for easy gripping and can be stuffed with treats."
  },
  {
    id: 3,
    title: "Tactical Dog Harness",
    image: TacticalHarness,
    price: 1200,
    oldPrice: 1500,
    rating: 5,
    discount: 20,
    category: "Harnesses",
    description: "A lightweight yet sturdy tactical harness with quick-release buckles and padded handle. Fully adjustable straps for a secure and comfortable fit."
  },
  {
    id: 4,
    title: "Heavy Duty Vest Harness",
    image: VestHarness,
    price: 1500,
    oldPrice: 1900,
    rating: 4,
    discount: 21,
    category: "Harnesses",
    description: "A heavy-duty vest-style harness with wide padded chest plate for maximum comfort on long walks. Features reflective strips for night safety."
  },
  {
    id: 5,
    title: "Premium Nylon Dog Leash",
    image: NylonLeash,
    price: 450,
    oldPrice: 550,
    rating: 5,
    discount: 18,
    category: "Leashes",
    description: "A strong and durable nylon dog leash with heavy-duty stainless steel snap hook. Features a padded handle and traffic control loop for added safety."
  },
  {
    id: 6,
    title: "Rope Dog Leash Blue",
    image: BlueRopeLeash,
    price: 320,
    oldPrice: 400,
    rating: 4,
    discount: 20,
    category: "Leashes",
    description: "A vibrant blue braided rope leash with leather accents and a sturdy clasp. Lightweight yet strong, perfect for daily walks."
  },
  {
    id: 7,
    title: "Braided Rope Dog Leash",
    image: GrayRopeLeash,
    price: 380,
    oldPrice: 480,
    rating: 5,
    discount: 21,
    category: "Leashes",
    description: "A premium gray braided rope leash with genuine leather connectors and a polished stainless steel clasp. Built to last for years of adventures."
  },
  {
    id: 8,
    title: "Terrazzo Pet Bowl Set",
    image: Bowls,
    price: 850,
    oldPrice: 1100,
    rating: 5,
    discount: 23,
    category: "Feeding",
    description: "An elegant terrazzo ceramic bowl set with a custom leather placemat. Comes with two bowls — perfect for food and water. Stylish enough for any home."
  },
  {
    id: 9,
    title: "Cozy Knit Dog Bed",
    image: DogBed,
    price: 1800,
    oldPrice: 2200,
    rating: 5,
    discount: 18,
    category: "Beds",
    description: "A plush square dog bed made from premium boucle knit fabric. Features a raised bolster border for head support and a non-slip base. Machine washable."
  },
  {
    id: 10,
    title: "Corduroy Lounger Dog Bed",
    image: FluffyDogBed,
    price: 2200,
    oldPrice: 2800,
    rating: 4,
    discount: 21,
    category: "Beds",
    description: "A luxurious corduroy lounger bed with a built-in pillow backrest. Made with ultra-soft suede interior lining for maximum comfort. Available in taupe."
  },
  {
    id: 11,
    title: "Herringbone Step-In Harness",
    image: HarnessBrown,
    price: 980,
    oldPrice: 1200,
    rating: 5,
    discount: 18,
    category: "Harnesses",
    description: "A stylish step-in harness crafted from premium herringbone fabric with soft interior lining. Easy to put on and take off — perfect for small to medium dogs."
  },
  {
    id: 12,
    title: "Electric Dog Nail Grinder",
    image: NailGrinder,
    price: 750,
    oldPrice: 950,
    rating: 5,
    discount: 21,
    category: "Grooming",
    description: "A quiet low-vibration electric nail grinder with 7500 RPM motor, 3-hour runtime, and USB charging. Stress-free nail care for your pet at home."
  },
  {
    id: 13,
    title: "Professional Grooming Scissors Set",
    image: ScissorsGrooming,
    price: 1100,
    oldPrice: 1400,
    rating: 4,
    discount: 21,
    category: "Grooming",
    description: "A professional-grade stainless steel scissors set in a premium zipper case. Includes straight and curved blades for precise trimming and styling."
  },
  {
    id: 14,
    title: "Striped Canvas Dog Bed",
    image: StrippedDogBed,
    price: 1950,
    oldPrice: 2400,
    rating: 5,
    discount: 19,
    category: "Beds",
    description: "A nautical-inspired striped canvas dog bed with a personalized leather patch. Durable, washable, and stylish enough to complement any interior."
  },
  {
    id: 15,
    title: "Microfiber Pet Drying Towel",
    image: TowelGrooming,
    price: 420,
    oldPrice: 550,
    rating: 4,
    discount: 24,
    category: "Grooming",
    description: "An ultra-absorbent dual-layer microfiber towel designed for drying pets after baths or walks. Quick-drying, hypoallergenic, and gentle on fur."
  },
];

export default products;