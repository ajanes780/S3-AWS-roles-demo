
// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js";
import {BUCKET_PARAMS} from "./constants.js"; // Helper function that creates an Amazon S3 service client module.

// Set the parameters.
export const bucketParams = {
  Bucket: BUCKET_PARAMS.bucketName,
  // Specify the name of the new object. For example, 'index.html'.
  // To create a directory for the object, use '/'. For example, 'myApp/package.json'.
  Key: "index.html",
  // Content of the new object.
  Body: "<h1>Hello World!</h1>",
};

// Create and upload the object to the S3 bucket.
export const run = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(
      `Successfully uploaded object: ${bucketParams.Bucket}/${bucketParams.Key}`
    );
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
}
run();

