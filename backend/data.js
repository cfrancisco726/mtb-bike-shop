import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Carlo",
      email: "cfrancisco26@yahoo.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Karen",
      email: "karen@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "SB130",
      year: "2022",
      build: "C2 GX Eagle Mountain Bike",
      brand: "YETI CYCLES",
      category: "bikes",
      price: 6500,
      countInStock: 10,
      image: "/images/yeti_sb130.jpeg",
      description:
        "When we're unsure where the ride will take us, we hop on our SB130 knowing we can take on everything from 8-hour cross-country rides to black diamond downhill trails. This mid-travel 29er simply does everything well and might be our top choice if we could only own a single mountain bike.",
      slug: "1",
    },

    {
      name: "SB115",
      year: "2022",
      build: "Turq T1 XT Mountain Bike",
      brand: "YETI CYCLES",
      category: "bikes",
      price: 7500,
      countInStock: 10,
      image: "/images/yeti_sb115.jpeg",
      description:
        "When we're putting in long rides for multiple days in a row, the SB115 is a perfect companion for putting in the miles.",
      slug: "2",
    },

    {
      name: "Ripmo",
      year: "2020",
      build: "AF GX Eagle Air Mountain Bike",
      brand: "IBIS",
      category: "bikes",
      price: 4557,
      countInStock: 10,
      image: "/images/ibis_ripmo.jpeg",
      slug: "3",
    },
    {
      name: "Nomad",
      year: "2022",
      build: "Carbon C S Mountain Bike",
      brand: "SANTA CRUZ BICYCLES",
      category: "bikes",
      price: 6249,
      countInStock: 10,
      description:
        "Going on adventures to unknown lands lends itself to the Santa Cruz Nomad Carbon C S Mountain Bike. Lending itself to the namesake of those who look to new adventure, the 170mm travel Nomad is built for going well past our comfort zones.",
      image: "/images/santa_cruz_nomad.jpeg",
      slug: "4",
    },

    {
      name: "5010",
      year: "2022",
      build: "Carbon R Mountain Bike",
      brand: "SANTA CRUZ BICYCLES",
      category: "bikes",
      price: 4799,
      countInStock: 10,
      description:
        "There are few other bikes that bring as much peppiness to the mountain bike scene as the Santa Cruz 5010.",
      image: "/images/santa_cruz_5010_yellow.jpeg",
      slug: "5",
    },

    {
      name: "Tallboy",
      year: "2022",
      build: "Carbon C S Mountain Bike",
      brand: "SANTA CRUZ BICYCLES",
      category: "bikes",
      price: 5699,
      countInStock: 10,
      description:
        "Santa Cruz like to think of the Tallboy as a gravity rider's XC bike, and that resonates with us because this short-travel trail bike punches well above its weight class and absolutes shreds on technical terrain.",
      image: "/images/santa_cruz_tallboy.jpeg",
      slug: "6",
    },

    {
      name: "",
      year: "2019",
      build: "Carbon R Mountain Bike",
      brand: "SANTA CRUZ BICYCLES",
      category: "bikes",
      price: 4799,
      countInStock: 10,
      image: "/images/santa_cruz_5010_yellow.jpeg",
      slug: "6",
    },
  ],
};

export default data;
