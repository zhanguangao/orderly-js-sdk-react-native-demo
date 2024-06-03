import {UseAccount, UseQuery} from './Hooks';

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
];
