#
# This Minio Client lets you create a Bucket in the us-east-1 region.
# and then successfully upload a zip file. 
# A sample zip file is uploaded as shown.
# Can be run only once.
# If this is run over again -then you will encounter an error that the bucket is already installed.
#
# Reference : https://docs.minio.io/docs/javascript-client-api-reference
#
var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: 'play.minio.io',
    port: 9000,
    secure: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
});

// File that needs to be uploaded.
var file = 'sat-practice-test-7.zip'

// Make a bucket 
minioClient.makeBucket('asiatrip', 'us-east-1', function(err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully in "us-east-1".')

    // Using fPutObject API upload your file to the bucket 
    minioClient.fPutObject('asiatrip', 'sat-practice-test-7.zip', file, 'application/octet-stream', function(err, etag) {
      if (err) return console.log(err)
      console.log('File uploaded successfully.')
    });
});

