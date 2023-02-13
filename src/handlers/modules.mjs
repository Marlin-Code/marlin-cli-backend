import { MODULE_MAP } from './common/modules.mjs'

export const getModuleHandler = async (event) => {
  const name = event.pathParameters.name;

  if (name in MODULE_MAP) {
    return {
      statusCode: 200,
      body: JSON.stringify(MODULE_MAP[name])
    };
  } else {
    return {
      statusCode: 404,
      body: {},
    };
  }
}

export const listModulesHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(Object.keys(MODULE_MAP))
  };
} 