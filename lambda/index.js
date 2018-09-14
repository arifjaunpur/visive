exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World";
  console.log('event.queryStringParameters ', event.queryStringParameters)
  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
