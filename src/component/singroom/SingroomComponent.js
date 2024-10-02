const SingroomComponent = ({ image, name, price, address }) => {
  return (
    <div>
      <div>
      </div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-green-600 font-semibold">{price}</p>
          <p className="text-gray-600">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default SingroomComponent; // 이 이름이 SingroomListComponent의 import와 일치해야 함
