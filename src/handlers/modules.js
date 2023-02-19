import MODULE_MAP from './common/modules.js';

export const getModuleHandler = async (event) => {
  const name = event.pathParameters.name;

  if (name in MODULE_MAP) {
    return {
      statusCode: 200,
      body: JSON.stringify(MODULE_MAP[name]),
    };
  } else {
    return {
      statusCode: 404,
      body: {},
    };
  }
};

export const listModulesHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(Object.keys(MODULE_MAP)),
  };
};
