// Import required AWS SDK clients and commands for Node.js.
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js";
import {BUCKET_PARAMS} from "./constants.js"; // Helper function that creates an Amazon S3 service client module.


export const run = async () => {
  try {
    const data = await s3Client.send(new ListObjectsCommand( { Bucket: BUCKET_PARAMS.bucketName }));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();
