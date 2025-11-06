import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { checkLs } from "../Utilities/LocalStorage/LSProductList"
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Chart = () => {

    const [cartList, setCartList] = useState([]);

    const allProduct = useLoaderData();
    const allProducts = allProduct.products;

    useEffect(() => {
        const cartInStored = checkLs();
        const cartInStoredInt = cartInStored.map(id => id);

        const cartList = allProducts.filter(cart => cartInStoredInt.includes(cart.product_id))
        setCartList(cartList);
    }, []);

    let data = [];
    const formatted = cartList.map(p => ({
      name: p.product_title,
      uv: p.rating,
      pv: p.price,
    }));
    data.push(formatted);

    return (
        <div>
            <BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data[0]}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                <ReferenceLine y={0} stroke="#000" />
                <Brush dataKey="name" height={30} stroke="#8884d8" />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Chart;