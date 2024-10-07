const RoomComponent = ({
  id,
  image,
  name,
  capacity,
  remainingTime,
  remainingSongs,
}) => {
  return (
    <div>
      <img src={image} alt={`${name} 이미지`} />
      <h3>{name}</h3>
      <p>수용 인원: {capacity}</p>
      <p>남은 시간: {remainingTime}</p>
      <p>남은 곡: {remainingSongs}</p>
    </div>
  );
};

export default RoomComponent;
