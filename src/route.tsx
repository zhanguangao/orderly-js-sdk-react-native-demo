import {
  UseAccount,
  UseQuery,
  UsePrivateQuery,
  UseMutation,
  UsePrivateInfiniteQuery,
  WebSocketPublicTopic,
  WebSocketPrivateTopic,
} from './Hooks';

export type THooks = {
  title?: string;
  name: string;
  component: any;
};

export const routes: THooks[] = [
  // {title: 'Orderly SDK', name: 'OrderlySDK', component: RouteButtons},
  // {title: 'Wallet connect', name: 'WalletConnect', component: WalletConnect},
  {name: 'useAccount', component: UseAccount},
  {name: 'useQuery', component: UseQuery},
  {name: 'usePrivateQuery', component: UsePrivateQuery},
  {name: 'useMutation', component: UseMutation},
  {name: 'UsePrivateInfiniteQuery', component: UsePrivateInfiniteQuery},
  {name: 'WebSocket PublicTopic', component: WebSocketPublicTopic},
  {name: 'WebSocket PrivateTopic', component: WebSocketPrivateTopic},
];
