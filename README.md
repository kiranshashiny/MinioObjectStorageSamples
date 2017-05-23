# MinioObjectStorageSamples


### Minio is an Object storage server in the cloud to store files/repos/images and other objects 

The URL is https://www.minio.io/

This platform lets you upload any kind of Repo/photos/images/files/zipfiles from local workstations. This platform implements Amazon's S3 APIs 

Their APIs let you create a bucket in the Minio Cloud to store the objects, List the contents, View buckets, delete and other capabilities.

Here I have sample JavaScript Client code to Createbuckets, List objects, List buckets, Delete buckets etc all based on the Amazon S3 APIs.

The Object storage server Installation, documentation, configuration can be viewed at https://docs.minio.io/

Interesting links :
    Github : https://github.com/minio/minio

    Documentation : https://docs.minio.io/

<img width="882" alt="screen shot 2017-05-22 at 4 16 34 pm" src="https://cloud.githubusercontent.com/assets/14288989/26304728/1da3e626-3f0a-11e7-85e1-e09485736fd5.png">

Output when trying to create a new bucket and add a zip file ( or my object ) 

Notice that it complains that the bucket already exists.

<img width="845" alt="screen shot 2017-05-22 at 4 22 15 pm" src="https://cloud.githubusercontent.com/assets/14288989/26304962/f9e65f7e-3f0a-11e7-9b3f-5d19888b703e.png">





Other methods of installing the Minio Client Utilities.
 s3cmd or awscli

Install s3cmd from https://sourceforge.net/projects/s3tools/files/s3cmd/

To create a new bucket

    ./s3cmd mb s3://mybucket

    Bucket 's3://newbucket/' created


If bucket has already been created

    ./s3cmd mb s3://mybucket
    ERROR: S3 error: 409 (BucketAlreadyOwnedByYou): Your previous request to create the named bucket succeeded and you already own it.


To list bucket 
    s3cmd ls
    
To copy a file to new bucket 
    s3cmd put newfile s3://newbucket


        shashikiran:~ shashikiran$ s3cmd put newfile.old s3://testbucket
        WARNING: Module python-magic is not available. Guessing MIME types based on file extensions.
        upload: 'newfile.old' -> 's3://testbucket/newfile.old'  [1 of 1]
         3185 of 3185   100% in    1s     3.09 kB/s  done


To retrieve the file back into my local repo

        shashikiran:~ shashikiran$ s3cmd get s3://testbucket/newfile.old
        download: 's3://testbucket/newfile.old' -> './newfile.old'  [1 of 1]
         3185 of 3185   100% in    1s     3.00 kB/s  done
