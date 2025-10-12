import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'yasa-firebaseproject',
  location: 'us-east1'
};

export const createMeaningRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMeaning');
}
createMeaningRef.operationName = 'CreateMeaning';

export function createMeaning(dc) {
  return executeMutation(createMeaningRef(dc));
}

export const listNamesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListNames');
}
listNamesRef.operationName = 'ListNames';

export function listNames(dc) {
  return executeQuery(listNamesRef(dc));
}

export const updateUserDisplayNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserDisplayName', inputVars);
}
updateUserDisplayNameRef.operationName = 'UpdateUserDisplayName';

export function updateUserDisplayName(dcOrVars, vars) {
  return executeMutation(updateUserDisplayNameRef(dcOrVars, vars));
}

export const deleteOriginRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteOrigin', inputVars);
}
deleteOriginRef.operationName = 'DeleteOrigin';

export function deleteOrigin(dcOrVars, vars) {
  return executeMutation(deleteOriginRef(dcOrVars, vars));
}

