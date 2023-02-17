import { getAllRecordNames, getRecordByName } from './common/AirtableService.mjs';
import { ARCHETYPE_TABLE } from './constants.mjs';

export const getArchetypeHandler = async (event) => {
  const name = event.pathParameters.name;
  return getRecordByName(ARCHETYPE_TABLE, name).then(
    (archetype) => {
      return {
        statusCode: 200,
        body: JSON.stringify(archetype)
      };
    }
  ).catch(_ => {
    return {
      statusCode: 404,
      body: "Not Found"
    };
  });
}

export const listArchetypesHandler = async (event) => {
  const archetypes = await getAllRecordNames(ARCHETYPE_TABLE);
  return {
    statusCode: 200,
    body: JSON.stringify(archetypes)
  };
} 