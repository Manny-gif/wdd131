# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListNames*](#listnames)
- [**Mutations**](#mutations)
  - [*CreateMeaning*](#createmeaning)
  - [*UpdateUserDisplayName*](#updateuserdisplayname)
  - [*DeleteOrigin*](#deleteorigin)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListNames
You can execute the `ListNames` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listNames(): QueryPromise<ListNamesData, undefined>;

interface ListNamesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListNamesData, undefined>;
}
export const listNamesRef: ListNamesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listNames(dc: DataConnect): QueryPromise<ListNamesData, undefined>;

interface ListNamesRef {
  ...
  (dc: DataConnect): QueryRef<ListNamesData, undefined>;
}
export const listNamesRef: ListNamesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listNamesRef:
```typescript
const name = listNamesRef.operationName;
console.log(name);
```

### Variables
The `ListNames` query has no variables.
### Return Type
Recall that executing the `ListNames` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListNamesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListNamesData {
  names: ({
    id: UUIDString;
    name: string;
  } & Name_Key)[];
}
```
### Using `ListNames`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listNames } from '@dataconnect/generated';


// Call the `listNames()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listNames();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listNames(dataConnect);

console.log(data.names);

// Or, you can use the `Promise` API.
listNames().then((response) => {
  const data = response.data;
  console.log(data.names);
});
```

### Using `ListNames`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listNamesRef } from '@dataconnect/generated';


// Call the `listNamesRef()` function to get a reference to the query.
const ref = listNamesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listNamesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.names);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.names);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateMeaning
You can execute the `CreateMeaning` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMeaning(): MutationPromise<CreateMeaningData, undefined>;

interface CreateMeaningRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateMeaningData, undefined>;
}
export const createMeaningRef: CreateMeaningRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMeaning(dc: DataConnect): MutationPromise<CreateMeaningData, undefined>;

interface CreateMeaningRef {
  ...
  (dc: DataConnect): MutationRef<CreateMeaningData, undefined>;
}
export const createMeaningRef: CreateMeaningRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMeaningRef:
```typescript
const name = createMeaningRef.operationName;
console.log(name);
```

### Variables
The `CreateMeaning` mutation has no variables.
### Return Type
Recall that executing the `CreateMeaning` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMeaningData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMeaningData {
  meaning_insert: Meaning_Key;
}
```
### Using `CreateMeaning`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMeaning } from '@dataconnect/generated';


// Call the `createMeaning()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMeaning();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMeaning(dataConnect);

console.log(data.meaning_insert);

// Or, you can use the `Promise` API.
createMeaning().then((response) => {
  const data = response.data;
  console.log(data.meaning_insert);
});
```

### Using `CreateMeaning`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMeaningRef } from '@dataconnect/generated';


// Call the `createMeaningRef()` function to get a reference to the mutation.
const ref = createMeaningRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMeaningRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.meaning_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.meaning_insert);
});
```

## UpdateUserDisplayName
You can execute the `UpdateUserDisplayName` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserDisplayName(vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

interface UpdateUserDisplayNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
}
export const updateUserDisplayNameRef: UpdateUserDisplayNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserDisplayName(dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

interface UpdateUserDisplayNameRef {
  ...
  (dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
}
export const updateUserDisplayNameRef: UpdateUserDisplayNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserDisplayNameRef:
```typescript
const name = updateUserDisplayNameRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserDisplayName` mutation requires an argument of type `UpdateUserDisplayNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserDisplayNameVariables {
  id: UUIDString;
  displayName: string;
}
```
### Return Type
Recall that executing the `UpdateUserDisplayName` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserDisplayNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserDisplayNameData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserDisplayName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserDisplayName, UpdateUserDisplayNameVariables } from '@dataconnect/generated';

// The `UpdateUserDisplayName` mutation requires an argument of type `UpdateUserDisplayNameVariables`:
const updateUserDisplayNameVars: UpdateUserDisplayNameVariables = {
  id: ..., 
  displayName: ..., 
};

// Call the `updateUserDisplayName()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserDisplayName(updateUserDisplayNameVars);
// Variables can be defined inline as well.
const { data } = await updateUserDisplayName({ id: ..., displayName: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserDisplayName(dataConnect, updateUserDisplayNameVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserDisplayName(updateUserDisplayNameVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserDisplayName`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserDisplayNameRef, UpdateUserDisplayNameVariables } from '@dataconnect/generated';

// The `UpdateUserDisplayName` mutation requires an argument of type `UpdateUserDisplayNameVariables`:
const updateUserDisplayNameVars: UpdateUserDisplayNameVariables = {
  id: ..., 
  displayName: ..., 
};

// Call the `updateUserDisplayNameRef()` function to get a reference to the mutation.
const ref = updateUserDisplayNameRef(updateUserDisplayNameVars);
// Variables can be defined inline as well.
const ref = updateUserDisplayNameRef({ id: ..., displayName: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserDisplayNameRef(dataConnect, updateUserDisplayNameVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteOrigin
You can execute the `DeleteOrigin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteOrigin(vars: DeleteOriginVariables): MutationPromise<DeleteOriginData, DeleteOriginVariables>;

interface DeleteOriginRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOriginVariables): MutationRef<DeleteOriginData, DeleteOriginVariables>;
}
export const deleteOriginRef: DeleteOriginRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteOrigin(dc: DataConnect, vars: DeleteOriginVariables): MutationPromise<DeleteOriginData, DeleteOriginVariables>;

interface DeleteOriginRef {
  ...
  (dc: DataConnect, vars: DeleteOriginVariables): MutationRef<DeleteOriginData, DeleteOriginVariables>;
}
export const deleteOriginRef: DeleteOriginRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteOriginRef:
```typescript
const name = deleteOriginRef.operationName;
console.log(name);
```

### Variables
The `DeleteOrigin` mutation requires an argument of type `DeleteOriginVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteOriginVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteOrigin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteOriginData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteOriginData {
  origin_delete?: Origin_Key | null;
}
```
### Using `DeleteOrigin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteOrigin, DeleteOriginVariables } from '@dataconnect/generated';

// The `DeleteOrigin` mutation requires an argument of type `DeleteOriginVariables`:
const deleteOriginVars: DeleteOriginVariables = {
  id: ..., 
};

// Call the `deleteOrigin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteOrigin(deleteOriginVars);
// Variables can be defined inline as well.
const { data } = await deleteOrigin({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteOrigin(dataConnect, deleteOriginVars);

console.log(data.origin_delete);

// Or, you can use the `Promise` API.
deleteOrigin(deleteOriginVars).then((response) => {
  const data = response.data;
  console.log(data.origin_delete);
});
```

### Using `DeleteOrigin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteOriginRef, DeleteOriginVariables } from '@dataconnect/generated';

// The `DeleteOrigin` mutation requires an argument of type `DeleteOriginVariables`:
const deleteOriginVars: DeleteOriginVariables = {
  id: ..., 
};

// Call the `deleteOriginRef()` function to get a reference to the mutation.
const ref = deleteOriginRef(deleteOriginVars);
// Variables can be defined inline as well.
const ref = deleteOriginRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteOriginRef(dataConnect, deleteOriginVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.origin_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.origin_delete);
});
```

