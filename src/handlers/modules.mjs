import { getAllRecordNames, getRecordByName } from './common/AirtableService.mjs';
import { MODULE_TABLE } from './constants.mjs';

export const getModuleHandler = async (event) => {
  const name = event.pathParameters.name;
  return getRecordByName(MODULE_TABLE, name).then(
    (module) => {
      return {
        statusCode: 200,
        body: JSON.stringify(module)
      };
    }
  ).catch(_ => {
    return {
      statusCode: 404,
      body: "Not Found"
    };
  });
}

export const listModulesHandler = async (event) => {
  const modules = await getAllRecordNames(MODULE_TABLE);
  return {
    statusCode: 200,
    body: JSON.stringify(modules)
  };
} 