import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateMeaningData {
  meaning_insert: Meaning_Key;
}

export interface DeleteOriginData {
  origin_delete?: Origin_Key | null;
}

export interface DeleteOriginVariables {
  id: UUIDString;
}

export interface FavoriteName_Key {
  userId: UUIDString;
  nameId: UUIDString;
  __typename?: 'FavoriteName_Key';
}

export interface ListNamesData {
  names: ({
    id: UUIDString;
    name: string;
  } & Name_Key)[];
}

export interface Meaning_Key {
  id: UUIDString;
  __typename?: 'Meaning_Key';
}

export interface Name_Key {
  id: UUIDString;
  __typename?: 'Name_Key';
}

export interface Origin_Key {
  id: UUIDString;
  __typename?: 'Origin_Key';
}

export interface UpdateUserDisplayNameData {
  user_update?: User_Key | null;
}

export interface UpdateUserDisplayNameVariables {
  id: UUIDString;
  displayName: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateMeaningRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateMeaningData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateMeaningData, undefined>;
  operationName: string;
}
export const createMeaningRef: CreateMeaningRef;

export function createMeaning(): MutationPromise<CreateMeaningData, undefined>;
export function createMeaning(dc: DataConnect): MutationPromise<CreateMeaningData, undefined>;

interface ListNamesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListNamesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListNamesData, undefined>;
  operationName: string;
}
export const listNamesRef: ListNamesRef;

export function listNames(): QueryPromise<ListNamesData, undefined>;
export function listNames(dc: DataConnect): QueryPromise<ListNamesData, undefined>;

interface UpdateUserDisplayNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
  operationName: string;
}
export const updateUserDisplayNameRef: UpdateUserDisplayNameRef;

export function updateUserDisplayName(vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
export function updateUserDisplayName(dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

interface DeleteOriginRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOriginVariables): MutationRef<DeleteOriginData, DeleteOriginVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteOriginVariables): MutationRef<DeleteOriginData, DeleteOriginVariables>;
  operationName: string;
}
export const deleteOriginRef: DeleteOriginRef;

export function deleteOrigin(vars: DeleteOriginVariables): MutationPromise<DeleteOriginData, DeleteOriginVariables>;
export function deleteOrigin(dc: DataConnect, vars: DeleteOriginVariables): MutationPromise<DeleteOriginData, DeleteOriginVariables>;

