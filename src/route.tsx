import {
  UseAccount,
  UseQuery,
  UsePrivateQuery,
  UseMutation,
  UsePrivateInfiniteQuery,
  WebSocketPublicTopic,
  WebSocketPrivateTopic,
  UseChains,
  UseOrderbookStream,
  UseMarketsStream,
  UseMarketTradeStream,
  UseDeposit,
  UseWithdraw,
} from './Hooks';

export type THooks = {
  title?: string;
  name: string;
  component: any;
};

export const routes: THooks[] = [
  {name: 'useAccount', component: UseAccount},
  {name: 'useQuery', component: UseQuery},
  {name: 'usePrivateQuery', component: UsePrivateQuery},
  {name: 'useMutation', component: UseMutation},
  {name: 'UsePrivateInfiniteQuery', component: UsePrivateInfiniteQuery},
  {name: 'WebSocket PublicTopic', component: WebSocketPublicTopic},
  {name: 'WebSocket PrivateTopic', component: WebSocketPrivateTopic},
  {name: 'useChains', component: UseChains},
  {name: 'useOrderbookStream', component: UseOrderbookStream},
  {name: 'useMarketsStream', component: UseMarketsStream},
  {name: 'useMarketTradeStream', component: UseMarketTradeStream},
  {name: 'UseDeposit', component: UseDeposit},
  {name: 'UseWithdraw', component: UseWithdraw},
];
