import { useState } from "react";
import img1 from "../pics/1 (1).jpg"
import img2 from "../pics/1 (2).jpg"
import img3 from "../pics/1 (3).jpg"
import img4 from "../pics/1 (4).jpg"
import img5 from "../pics/1 (5).jpg"
import img6 from "../pics/1 (6).jpg"

import { faker } from '@faker-js/faker';

export const MenuData = [
    {
        image: faker.image.avatar,
        articleName: "asd",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
        rating: 3,
        name: "Sam"
    },
    {
        image: faker.image.avatar,
        articleName: "def",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
        rating: 4,
        name: "Sam"
    },
    {
        image: img3,
        articleName: "qwe",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
        rating: 5,
        name: "Sam"
    },
    {
        image: img4,
        articleName: "asd",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
        rating: 3,
        name: "Sam"
    },
    {
        image: img5,
        articleName: "def",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
        rating: 4,
        name: "Sam"
    },
    {
        image: img6,
        articleName: "qwe",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
        rating: 5,
        name: "Sam"
    }
]
