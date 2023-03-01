import img1 from "../../public/img/product-2.jpg"
import img2 from "../../public/img/product-3.jpg"

const products = [
    {
        id:1,
        images:[
            {
                id:1,
                image:img1
            },
            {
                id:1,
                image:img2
            },
        ],
        name:"Colorful Stylish Shirt",
        slug:"Colorful_Stylish_Shirt",
        price:"$150.00",
        description:"Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. " +
            "Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. " +
            "Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        sizes:[
            {
                id:1,
                name:"XL"
            },
            {
                id:2,
                name:"S"
            },
            {
                id:3,
                name:"M"
            },
            {
                id:4,
                name:"L"
            },
            {
                id:5,
                name:"XL"
            }
        ],
        colors:[
            {
                id:1,
                name:"Black"
            },
            {
                id:2,
                name:"White"
            },
            {
                id:3,
                name:"Red"
            },
            {
                id:4,
                name:"Blue"
            },
            {
                id:5,
                name:"Green"
            }
        ],
        rating:[0, 1, 2, 3, 4],
        rating_average:4,
        reviews:[
            {
                id:1,
                rating:3,
                review:"Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. " +
                    "Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.",
                name:"John Doe",
                date:"01 Jan 2045"
            }
        ],
        extra:null
    },
    {
        id:2,
        images:[
            {
                id:1,
                image:img2
            },
            {
                id:1,
                image:img1
            },
        ],
        name:"Dresses",
        price:"$150.00",
        description:"Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. " +
            "Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. " +
            "Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        sizes:[
            {
                id:1,
                name:"XL"
            },
            {
                id:2,
                name:"S"
            },
            {
                id:3,
                name:"M"
            },
            {
                id:4,
                name:"L"
            },
            {
                id:5,
                name:"XL"
            }
        ],
        colors:[
            {
                id:1,
                name:"Black"
            },
            {
                id:2,
                name:"White"
            },
            {
                id:3,
                name:"Red"
            },
            {
                id:4,
                name:"Blue"
            },
            {
                id:5,
                name:"Green"
            }
        ],
        rating:4,
        reviews:[
            {
                id:1,
                rating:3,
                review:"Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. " +
                    "Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.",
                name:"John Doe",
                date:"01 Jan 2045"
            }
        ],
        extra:null
    },
]

export default products