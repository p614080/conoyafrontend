import RoomComponent from "./RoomComponent";

const RoomListComponent = ({ rooms }) => {
  if (!rooms || rooms.length === 0) {
    return <div>현재 방 정보가 없습니다.</div>; // 방 정보가 없을 경우
  }

  return (
    <div>
      <div className="border-2 mt-3 border-customLilac">
        {rooms.map((room) => (
          <RoomComponent
            key={room.roomId}
            image={room.imageUrl} // 방 이미지 URL
            name={`방 ${room.roomNumber}`} // 방 이름
            capacity={`${room.roomSize}명`} // 방 크기
            remainingTime={room.paymentTime || "정보 없음"} // 남은 시간
            remainingSongs={room.paymentCoin || "정보 없음"} // 남은 노래 수
          />
        ))}
      </div>
    </div>
  );
};

export default RoomListComponent;
