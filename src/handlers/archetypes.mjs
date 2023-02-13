import { ARCHETYPE_MAP } from './common/archetypes.mjs'

export const getArchetypeHandler = async (event) => {
  const name = event.pathParameters.name;

  if (name in ARCHETYPE_MAP) {
    return {
      statusCode: 200,
      body: JSON.stringify(ARCHETYPE_MAP[name])
    };
  } else {
    return {
      statusCode: 404,
      body: "Not Found"
    };
  }
}

export const listArchetypesHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(Object.keys(ARCHETYPE_MAP))
  };
} 