import { Card } from 'flowbite-react';
import RatingStar from './RatingStar';

function ProductComponent() {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc="https://i.pinimg.com/564x/23/33/6a/23336a0018bb18218d2cae0abd2f3de1.jpg"
        >
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
            </a>
            <RatingStar/>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    );
};


export default ProductComponent;


