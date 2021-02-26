const { getUser } = require('../shared/user-utils');
const { QueueServiceClient } = require('@azure/storage-queue');
var uuid = require('uuid');

module.exports = async function (context, req) {
   const user = getUser(req);
   const queueName = 'vanilla-preorder';
   const queueServiceClient = QueueServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
   const queueClient = queueServiceClient.getQueueClient(queueName);
   queueClient.createIfNotExists();
   const data = JSON.parse(req.rawBody);
   data.Id = uuid.v4();
   data.User = user.userDetails;
   data.Date = new Date().toISOString();
   data.Status = "New";
   data.DriverId = null;
   data.FullAddress = user.address;
   data.LastPosition = null;

   var response = await queueClient.sendMessage(JSON.stringify(data));
   context.res.status(response.status);
   context.res.end(data);
};
