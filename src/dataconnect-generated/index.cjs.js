const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'yasa-firebaseproject',
  location: 'us-east1'
};
exports.connectorConfig = connectorConfig;

const createMeaningRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMeaning');
}
createMeaningRef.operationName = 'CreateMeaning';
exports.createMeaningRef = createMeaningRef;

exports.createMeaning = function createMeaning(dc) {
  return executeMutation(createMeaningRef(dc));
};

const listNamesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListNames');
}
listNamesRef.operationName = 'ListNames';
exports.listNamesRef = listNamesRef;

exports.listNames = function listNames(dc) {
  return executeQuery(listNamesRef(dc));
};

const updateUserDisplayNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserDisplayName', inputVars);
}
updateUserDisplayNameRef.operationName = 'UpdateUserDisplayName';
exports.updateUserDisplayNameRef = updateUserDisplayNameRef;

exports.updateUserDisplayName = function updateUserDisplayName(dcOrVars, vars) {
  return executeMutation(updateUserDisplayNameRef(dcOrVars, vars));
};

const deleteOriginRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteOrigin', inputVars);
}
deleteOriginRef.operationName = 'DeleteOrigin';
exports.deleteOriginRef = deleteOriginRef;

exports.deleteOrigin = function deleteOrigin(dcOrVars, vars) {
  return executeMutation(deleteOriginRef(dcOrVars, vars));
};
