import RoomComponent from "./RoomComponent";

const RoomListComponent = () => {
  const roomImages = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300/1",
      name: "민트방",
      capacity: "2명",
      remainingTime: "30:00",
      remainingSongs: "",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x300/2",
      name: "초코방",
      capacity: "3명",
      remainingTime: "",
      remainingSongs: "3",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x300/3",
      name: "온돌방",
      capacity: "3명",
      remainingTime: "",
      remainingSongs: "3",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">방 리스트</h2>
      {roomImages.map((room) => (
        <RoomComponent
          key={room.id}
          image={room.image}
          name={room.name}
          capacity={room.capacity}
          remainingTime={room.remainingTime}
          remainingSongs={room.remainingSongs}
        />
      ))}
    </div>
  );
};

export default RoomListComponent;
