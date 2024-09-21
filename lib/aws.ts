// lib/aws.ts

import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
});

export async function uploadFileToS3(file: Buffer, fileName: string, mimeType: string): Promise<string> {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileName,
    Body: file,
    ContentType: mimeType,
  };

  const data = await s3.upload(params).promise();
  return data.Location;
}
