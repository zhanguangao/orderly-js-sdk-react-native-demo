import {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useWS} from '@orderly.network/hooks';

const symbol = 'PERP_ETH_USDC';

export const WebSocketPublicTopic = () => {
  const ws = useWS();
  const [data, setData] = useState();

  useEffect(() => {
    const unsubscribe = ws.subscribe(
      {
        id: `${symbol}@trade`,
        event: 'subscribe',
        topic: `${symbol}@trade`,
        ts: Date.now(),
      },
      {
        onMessage: (data: any) => {
          setData(data);
          console.log(`${symbol}@trade`, data);
        },
      },
    );
    return () => {
      // Unsubscribes when the component unloads
      unsubscribe?.();
    };
  }, []);

  return <Text>{JSON.stringify(data, null, 2)}</Text>;
};
