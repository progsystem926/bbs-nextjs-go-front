import { RecoilEnv, atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

type UserState = { userId: string } | null;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

const userState = atom<UserState>({
  key: 'userId',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const useUserState = () => {
  const [user, setUser] = useRecoilState<UserState>(userState);

  return { user, setUser };
};
