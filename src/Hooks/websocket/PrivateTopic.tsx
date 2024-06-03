import {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useWS} from '@orderly.network/hooks';

export const WebSocketPrivateTopic = () => {
  const ws = useWS();
  const [data, setData] = useState();

  useEffect(() => {
    const unsubscribe = ws.privateSubscribe(
      {
        id: 'executionreport',
        event: 'subscribe',
        topic: 'executionreport',
        ts: Date.now(),
      },
      {
        onMessage: data => {
          // TODO: 没有交易，所以这里没有数据
          setData(data);
          console.log('executionreport', data);
        },
      },
    );
    () => {
      // Unsubscribes when the component unloads
      unsubscribe?.();
    };
  }, []);

  return <Text>{JSON.stringify(data, null, 2)}</Text>;
};
