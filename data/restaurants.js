const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const restaurantImages = [
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg",
  "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
  "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=",
  "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
  "https://images.indianexpress.com/2023/12/food.jpg",
  "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  "https://www.usatoday.com/gcdn/presto/2022/08/19/USAT/f2871962-4672-46f8-b5a2-b54a670307b4-GettyImages-1149135424.jpg?crop=2021,1137,x0,y170&width=660&height=371&format=pjpg&auto=webp",
  "https://neat-food.com/cdn/shop/files/neat_emmapharaoh_19march24_12.jpg?v=1712845654&width=4498",
  "https://t4.ftcdn.net/jpg/02/86/17/89/360_F_286178925_8zk89O9uC5JJVPvqhvBMUpaRxp8AFXzD.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShabDoELZQPJu5Is-ao15RIw10H7xvy_dozA&s",
  "https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/4:3/w_4095,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg",
  "https://www.ourvadodara.com/wp-content/uploads/2018/12/The-Cook-Vadodara.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxa7JfqO3EaPKyw7DOlOFIADBQ8Y-FP7MfLw&s",
  "https://assets.vogue.com/photos/63d169f727f1d528635b4287/16:9/w_3631,h_2042,c_limit/GettyImages-1292563627.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSap65OzGUxZSUGF_BeLzgEnk00A678hnY3uQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxIWr4Z6iG3LA_Gu-kuUYccnjgiO9qEwH6w&s",
  "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2023-10/BeFunky-collage%20%2849%29_11zon.jpg",
  "https://images.news18.com/ibnlive/uploads/2022/12/untitled-design-13-11-16720303694x3.jpg?impolicy=website&width=640&height=480",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvb6iKAXy88xuP_KpklnEI-YavqwERw6liQ&s",
  "https://i0.wp.com/billypenn.com/wp-content/uploads/2022/09/ammasindianrestaurant-dosa-food.jpg?fit=1200%2C800&ssl=1",
];

const cuisines = [
  "Italian",
  "Japanese",
  "Mexican",
  "Indian",
  "American",
  "Vietnamese",
  "BBQ",
  "Seafood",
  "Vegetarian",
  "Bakery",
  "Dessert",
  "Coffee",
  "Chinese",
  "Fusion",
  "Asian",
  "Brunch",
  "Mediterranean",
  "Middle Eastern",
  "Korean",
  "Thai",
  "African",
  "Russian",
  "Caribbean",
  "Southern",
  "Tex-Mex",
];

const restaurantNames = [
  "The Food Place",
  "Sushi World",
  "Taco Haven",
  "Curry Palace",
  "Burger Joint",
  "Pasta House",
  "Pho Corner",
  "BBQ Shack",
  "Deli Delights",
  "Seafood Grill",
  "Vegetarian Bistro",
  "Bakery Bliss",
  "Ice Cream Parlor",
  "Coffee Haven",
  "Dim Sum House",
  "Pizzeria Paradise",
  "Steakhouse Supreme",
  "Fusion Feast",
  "Noodle House",
  "Brunch Cafe",
  "Tandoori Nights",
  "Gourmet Burger Bar",
  "Taste of Italy",
  "Sushi Delight",
  "Taco Fiesta",
  "Curry Express",
  "The Burger Spot",
  "Pasta & Co.",
  "Pho Heaven",
  "BBQ Paradise",
  "Deli Express",
  "The Seafood House",
  "Vegan Eats",
  "The Sweet Tooth",
  "The Coffee Shop",
  "Dim Sum Delights",
  "Pizza Perfection",
  "The Grill House",
  "Fusion Kitchen",
  "Noodle Bar",
  "Brunch Time",
  "Tandoori Grill",
  "The Gourmet Kitchen",
];

const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const getRandomContactInfo = () => {
  const areaCode = getRandomInt(100, 999);
  const number1 = getRandomInt(100, 999);
  const number2 = getRandomInt(1000, 9999);
  return `${areaCode}-${number1}-${number2}`;
};

const generateRestaurants = (count) => {
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const name = getRandomElement(restaurantNames);
    const location = `${getRandomInt(1, 999)} ${getRandomElement([
      "Main St",
      "Elm St",
      "Oak St",
      "Pine St",
      "Maple St",
      "Cedar St",
      "Birch St",
      "Walnut St",
      "Cherry St",
    ])}, Anytown`;

    return {
      id,
      name,
      description: `This is a great place for ${name.toLowerCase()} lovers.`,
      location,
      cuisineType: getRandomElement(cuisines),
      contactInfo: getRandomContactInfo(),
      image: getRandomElement(restaurantImages),
    };
  });
};

const restaurants = generateRestaurants(100);

module.exports = restaurants;
