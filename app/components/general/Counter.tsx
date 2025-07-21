import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}
const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyle ="w-8 h-8 border flex items-center justify-center text-lg rounded-md cursor-pointer"
  return (
    <>
      <div className="flex items-center gap-2">
        <div onClick={decreaseFunc} className={buttonStyle}>
          -
        </div>
        <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
        <div onClick={increaseFunc} className={buttonStyle}>
          +
        </div>
      </div>
    </>
  );
};

export default Counter