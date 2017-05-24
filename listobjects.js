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

// Make a bucket called europetrip.
/*minioClient.makeBucket('asiatrip', 'us-east-1', function(err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully in "us-east-1".')

    // Using fPutObject API upload your file to the bucket europetrip.
    minioClient.fPutObject('europetrip', 'sat-practice-test-7.zip', file, 'application/octet-stream', function(err, etag) {
      if (err) return console.log(err)
      console.log('File uploaded successfully.')
    });
});
*/

minioClient.bucketExists('asiatrip', function(err) {
  if (err) {
     if (err.code == 'NoSuchBucket') return console.log("bucket does not exist.")
     return console.log(err)
  }
  // if err is null it indicates that the bucket exists.
  console.log('Bucket exists.')
})

// List buckets - shows my bucket.

minioClient.listBuckets(function(err, buckets) {
  if (err) return console.log(err)
  console.log('buckets :', buckets)
})

console.log ("list objects in the bucket" );

var stream = minioClient.listObjects('rajasthantrip','', true)
stream.on('data', function(obj) { console.log(obj) } )
stream.on('error', function(err) { console.log(err) } )


