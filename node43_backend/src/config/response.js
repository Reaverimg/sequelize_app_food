export const responseData = (data, message, status, response) => {
  response.json({
    statusCode: status,
    message,
    content: data,
    date: new Date(),
  });
};
