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
      name: "stump jumper",
      model: "evo",
      year: "2022",
      build: "s works",
      brand: "specialized",
      category: "bikes",
      price: 7000,
      countInStock: 10,
      image: "/images/tallboy.png",
      description: "nice bike",
      slug: "1",
    },

    {
      name: "tallboy",
      model: "C",
      year: "2021",
      build: "R",
      brand: "Santa Cruz",
      category: "bikes",
      price: 5000,
      countInStock: 10,
      description: "nice bike",
      image: "/images/stump_jumper_evo_sworks.png",
      slug: "2",
    },
    {
      name: "stump jumper",
      model: "evo",
      year: "2020",
      build: "s works",
      brand: "specialized",
      category: "bikes",
      price: 10000,
      countInStock: 10,
      image: "/images/tallboy.png",
      slug: "3",
    },

    {
      name: "tallboy",
      model: "C",
      year: "2019",
      build: "R",
      brand: "Santa Cruz",
      category: "bikes",
      price: 1000,
      countInStock: 10,
      image: "/images/stump_jumper_evo_sworks.png",
      slug: "4",
    },
  ],
};

export default data;
