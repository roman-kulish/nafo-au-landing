import * as cdk from 'aws-cdk-lib';
import {CfnOutput, RemovalPolicy} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {AnyPrincipal, Effect, PolicyStatement} from "aws-cdk-lib/aws-iam";
import {Bucket, BucketAccessControl} from "aws-cdk-lib/aws-s3";
import {BucketDeployment, Source} from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";

export class InfraStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new Bucket(this, 'Bucket', {
            bucketName: 'nafo.ukrainians.org.au',
            removalPolicy: RemovalPolicy.DESTROY,
            accessControl: BucketAccessControl.PRIVATE,
            publicReadAccess: true,
            versioned: false,
            websiteIndexDocument: 'index.html',
        });

        bucket.addToResourcePolicy(new PolicyStatement({
            actions: [
                's3:GetObject'
            ],
            effect: Effect.ALLOW,
            principals: [
                new AnyPrincipal(),
            ],
            resources: [
                bucket.arnForObjects('*'),
            ],
        }));

        new CfnOutput(this, "BucketDomain", {
            value: bucket.bucketWebsiteDomainName,
        });
    }
}
