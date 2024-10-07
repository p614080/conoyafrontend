import RoomComponent from "./RoomComponent";

const RoomListComponent = ({id}) => {
  const roomImages = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300/1",
      name: "민트방",
      capacity:"2명",
    },
    {
      id: 1,
      image: "https://via.placeholder.com/400x300/1",
      name: "초코방",
      capacity: "3명",
    },
    {
      id: 1,
      image: "https://via.placeholder.com/400x300/1",
      name: "온돌방",
      capacity: "3명",
    },
  ];
 
  return (
    <div>
      <p>방 리스트 컴포넌트</p>
      {roomImages.map((room) => (
        <RoomComponent
          key={room.id}
          image={room.image}
          name={room.name}
          capacity={room.capacity}
        />
      ))}
    </div>
  );
};
export default RoomListComponent;
