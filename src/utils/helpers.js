export const generateRoomId = () => {
  return Math.random().toString(36).substring(2, 9).toUpperCase();
};

export const formatTime = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};