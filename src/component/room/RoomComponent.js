const RoomComponent = (id,image,name,capacity) => {
  return (
    <div>
      <div></div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
        <img
          src={image}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <h2 className="">{capacity}명</h2>
        </div>
      </div>
    </div>
  );
};
export default RoomComponent;
