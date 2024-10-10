import RoomComponent from "./RoomComponent";

const RoomListComponent = ({ rooms }) => {
  if (!rooms || rooms.length === 0) {
    return <div>현재 방 정보가 없습니다.</div>; // 방 정보가 없을 경우
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">방 리스트</h2>
      {rooms.map((room) => (
        <RoomComponent
          key={room.roomId}
          image={room.imageUrl} // 방 이미지 URL
          name={`방 ${room.roomNumber}`} // 방 이름
          capacity={`${room.roomSize}명`} // 방 크기
          remainingTime={room.remainingTime || "정보 없음"} // 남은 시간
          remainingSongs={room.remainingSongs || "정보 없음"} // 남은 노래 수
        />
      ))}
    </div>
  );
};

export default RoomListComponent;
