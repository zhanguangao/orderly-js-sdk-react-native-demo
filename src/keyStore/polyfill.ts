import 'react-native-get-random-values';
import {sha512} from '@noble/hashes/sha512';
import * as ed from '@noble/ed25519';

ed.etc.sha512Sync = (...m) => sha512(ed.etc.concatBytes(...m));
ed.etc.sha512Async = (...m) => Promise.resolve(ed.etc.sha512Sync(...m));
