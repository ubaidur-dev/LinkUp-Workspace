import { useEffect } from 'react';
import { socket, connectSocket, disconnectSocket } from '../services/socket';

export const useSocket = () => {
  useEffect(() => {
    connectSocket();

    socket.on('connect', () => {
      console.log('Connected to LinkUp Server:', socket.id);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  return socket;
};