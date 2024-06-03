import {usePrivateInfiniteQuery} from '@orderly.network/hooks';
import {ScrollView, Text, View} from 'react-native';

export const generateKeyFun =
  (args: {status?: string; symbol?: string; side?: string; size?: number}) =>
  (pageIndex: number, previousPageData: any): string | null => {
    // reached the end
    if (previousPageData && !previousPageData.rows?.length) return null;

    const {status, symbol, side, size = 100} = args;

    const search = new URLSearchParams([
      ['size', size.toString()],
      ['page', `${pageIndex + 1}`],
      ['source_type', 'ALL'],
    ]);

    if (status) {
      search.set(`status`, status);
    }

    if (symbol) {
      search.set(`symbol`, symbol);
    }

    if (side) {
      search.set(`side`, side);
    }

    return `/v1/orders?${search.toString()}`;
  };

export const UsePrivateInfiniteQuery = () => {
  const {data} = usePrivateInfiniteQuery(generateKeyFun({}), {
    initialSize: 1,
    // revalidateFirstPage: false,
    // onError: (err) => {
    //   console.error("fetch failed::::", err);
    // },
    formatter: data => data,
    revalidateOnFocus: false,
  });

  return (
    <ScrollView>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </ScrollView>
  );
};
