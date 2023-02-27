// Import required AWS SDK clients and commands for Node.js.
import {GetObjectCommand} from "@aws-sdk/client-s3";
import {s3Client} from "./libs/s3Client.js";
import {BUCKET_PARAMS} from "./constants.js"; // Helper function that creates an Amazon S3 service client module.

export const bucketParams = {
    Bucket: BUCKET_PARAMS.bucketName,
    Key: "main.html",
};

export const run = async () => {
    try {
        // Get the object from the Amazon S3 bucket. It is returned as a ReadableStream.
        let data = await s3Client.send(new GetObjectCommand(bucketParams));
        // Convert the ReadableStream to a string.
        data = await data.Body.transformToString()
        console.log("Success", data);
        return data // For unit tests

    } catch (err) {
        console.log("Error", err);
    }
};

run();
