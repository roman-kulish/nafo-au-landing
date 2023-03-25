# NAFO Onboarding Page

## Makefile

```shell
Usage: make <target>
  install     Install Node modules.
  dev         Run development environment.
  build       Build frontend
  deploy      Deploy stack to AWS.
  sync        Sync local assets with S3 bucket.
  help        Show this help.
```

## Deployment

This project is deployed into S3 bucket, configured as a static website. Requests are proxied to the bucket via CloudFlare CDN.

To deploy:

- Bootstrap CDK project: `cdk bootstrap`, this is one off command.
- Create bucket, roles etc: `make deploy`.
- To sync assets with the bucket: `make sync`.

Configure CloudFlare, enjoy! 😁