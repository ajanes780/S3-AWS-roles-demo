// Get service clients module and commands using ES6 syntax.
import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js";
import {BUCKET_PARAMS} from "./constants.js";



// Create the Amazon S3 bucket.
export const run = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand({ Bucket: BUCKET_PARAMS.bucketName }));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.message);
  }
};
run();
