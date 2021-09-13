import cupcakes from './cupcakes-690040_1280.jpg';
import redWine from './red-wine-2443699_1280.jpg';
import roastPork from './roast-pork-6599690_1280.jpg';
import salad from './salad-5904093_1280.jpg';
import vegetableJuice from './vegetable-juices-1725835_1280.jpg';
import fruits from './fruit-4551315_1280.jpg';
import salmonTeriyaki from './food-712665_1280.jpg';
import sushi from './food-3581341_1280.jpg';

export const items =
{
    "starter":
    {
        "name": "Entree",
        "value":
            [
                {
                    "title": "Sushi",
                    "img":
                    {
                        "src": sushi,
                        "alt": "Sushi plateau"
                    },
                    "description": "Exquisite asortiment of different kinds of sushi",
                    "price": "8 W$"
                },
                {
                    "title": "Salad",
                    "img":
                    {
                        "src": salad,
                        "alt": "Salad bowl"
                    },
                    "description": "Delicious and healthy salad",
                    "price": "7 W$"
                }
            ]
    },
    "meal":
    {
        "name": "Main dish",
        "value":
            [
                {
                    "title": "Teriyaki Salmon",
                    "img":
                    {
                        "src": salmonTeriyaki,
                        "alt": "Salmon teriyaki"
                    },
                    "description": "The Asian salmon turns out flaky, juicy and absolutely delicious with the homemade teriyaki sauce.",
                    "price": "17 W$"
                },
                {
                    "title": "Roast Pork",
                    "img":
                    {
                        "src": roastPork,
                        "alt": "Roast pork"
                    },
                    "description": "This classic roast pork recipe with lots of delicious crackling is great for Sunday lunch with the family.",
                    "price": "16 W$"
                }
            ]
    },
    "drink":
    {
        "name": "Beverages",
        "value":
            [
                {
                    "title": "Red wine",
                    "img":
                    {
                        "src": redWine,
                        "alt": "red wine"
                    },
                    "description": "Excellent with any meal",
                    "price": "10 W$"
                },
                {
                    "title": "Vegetable Juice",
                    "img":
                    {
                        "src": vegetableJuice,
                        "alt": "Vegetable juice"
                    },
                    "description": "Delicious and healthy juice",
                    "price": "7 W$"
                }
            ]
    },
    "dessert":
    {
        "name": "Dessert",
        "value":
            [
                {
                    "title": "Fruits salad",
                    "img":
                    {
                        "src": fruits,
                        "alt": "Fruits salad"
                    },
                    "description": "Delicious and healthy salad of fruits",
                    "price": "9 W$"
                },
                {
                    "title": "Cupcakes",
                    "img":
                    {
                        "src": cupcakes,
                        "alt": "Cupcakes"
                    },
                    "description": "What better way to end a meal than with our cupcakes",
                    "price": "7.5 W$"
                }
            ]
    }
};