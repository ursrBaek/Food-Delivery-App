import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { db } from '../../../firebase';
import { ref, set } from 'firebase/database';

interface ILike {
  currentLikesState: boolean;
}

export interface ILikeSettingInfo {
  userId: string;
  currentLikesState: boolean;
  storeId: number;
}

const updateLikes = async (userId: string, storeId: number, state: boolean) => {
  await set(ref(db, `users/${userId}/likes/${storeId}`), state ? true : null);
};

export const setLikesApi = async (likeSettingInfo: ILikeSettingInfo) => {
  const { userId, storeId, currentLikesState } = likeSettingInfo;

  const newState = !currentLikesState;
  await updateLikes(userId, storeId, newState);
  return { currentLikesState: newState };
};

export default function useSetLikeMutation(): UseMutationResult<
  ILike,
  Error,
  ILikeSettingInfo,
  {
    previousLike: ILike | undefined;
  }
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: setLikesApi,
    onMutate: async (likeSettingInfo: ILikeSettingInfo) => {
      await queryClient.cancelQueries({ queryKey: ['isLike', likeSettingInfo.userId, likeSettingInfo.storeId] });

      const previousLike = queryClient.getQueryData<ILike>(['isLike', likeSettingInfo.userId, likeSettingInfo.storeId]);

      queryClient.setQueryData<ILike>(['isLike', likeSettingInfo.userId, likeSettingInfo.storeId], (old) => ({
        currentLikesState: !Boolean(likeSettingInfo.currentLikesState),
      }));
      return { previousLike };
    },
    onError: (err, likeSettingInfo, context) => {
      queryClient.setQueryData(['isLike', likeSettingInfo.userId, likeSettingInfo.storeId], context?.previousLike);
    },
    onSettled: (data, error, likeSettingInfo) => {
      queryClient.invalidateQueries({ queryKey: ['isLike', likeSettingInfo?.userId, likeSettingInfo.storeId] });
    },
  });
}
