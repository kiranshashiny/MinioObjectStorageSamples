/*#
# This Minio Client lets you create a Bucket in the us-east-1 region.
# and then successfully upload a zip file. 
# A sample zip file is uploaded as shown.
# Can be run only once.
# If this is run over again -then you will encounter an error that the bucket is already installed.
#
# Reference : https://docs.minio.io/docs/javascript-client-api-reference
# */
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

    // Using putObject.
    var buffer = "Hello World"

    minioClient.putObject('rajasthantrip', '{[temperature:31; humidity:45]}', buffer, function(err, etag) {
      if (err) return console.log(err)
      console.log('String uploaded successfully.')
    });
