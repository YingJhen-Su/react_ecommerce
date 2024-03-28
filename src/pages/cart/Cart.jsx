import { useSelector } from "react-redux";
import { cartSelector } from "../../app/cartSlice";
import { widthSelector } from "../../app/widthSlice";
import numeral from "numeral";
import NoItems from "./NoItems";
import MobileCartItems from "./MobileCartItems";
import CartItems from "./CartItems";
import "../../scss/pages/cart.scss";

const Cart = () => {
    const cart = useSelector(cartSelector);
    const width = useSelector(widthSelector);

    const itemsQty = Object.keys(cart).length;
    const totalCost = Object.values(cart).reduce((sum, item) => {
        const cost = numeral(item.price).multiply(item.quantity).value();
        return numeral(sum).add(cost).value();
    }, 0);

    const cartItem =
        itemsQty === 0 ? (
            <NoItems />
        ) : width >= 768 ? (
            <CartItems total={totalCost} />
        ) : (
            <MobileCartItems total={totalCost} />
        );

    return (
        <>
            <h2 className="page-title">Shopping Cart</h2>
            <p className="fs-5 mb-2">
                {itemsQty === 1 ? itemsQty + " Item" : itemsQty + " Items"}
            </p>

            {cartItem}
        </>
    );
};

export default Cart;
