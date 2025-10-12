import { CreateMeaningData, ListNamesData, UpdateUserDisplayNameData, UpdateUserDisplayNameVariables, DeleteOriginData, DeleteOriginVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateMeaning(options?: useDataConnectMutationOptions<CreateMeaningData, FirebaseError, void>): UseDataConnectMutationResult<CreateMeaningData, undefined>;
export function useCreateMeaning(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMeaningData, FirebaseError, void>): UseDataConnectMutationResult<CreateMeaningData, undefined>;

export function useListNames(options?: useDataConnectQueryOptions<ListNamesData>): UseDataConnectQueryResult<ListNamesData, undefined>;
export function useListNames(dc: DataConnect, options?: useDataConnectQueryOptions<ListNamesData>): UseDataConnectQueryResult<ListNamesData, undefined>;

export function useUpdateUserDisplayName(options?: useDataConnectMutationOptions<UpdateUserDisplayNameData, FirebaseError, UpdateUserDisplayNameVariables>): UseDataConnectMutationResult<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
export function useUpdateUserDisplayName(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserDisplayNameData, FirebaseError, UpdateUserDisplayNameVariables>): UseDataConnectMutationResult<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

export function useDeleteOrigin(options?: useDataConnectMutationOptions<DeleteOriginData, FirebaseError, DeleteOriginVariables>): UseDataConnectMutationResult<DeleteOriginData, DeleteOriginVariables>;
export function useDeleteOrigin(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteOriginData, FirebaseError, DeleteOriginVariables>): UseDataConnectMutationResult<DeleteOriginData, DeleteOriginVariables>;
