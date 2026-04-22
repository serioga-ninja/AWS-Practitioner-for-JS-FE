#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StaticWebsiteStack } from "../lib/aws-practitioner-for-js-fe-stack";

const app = new cdk.App();

const stackName =
  app.node.tryGetContext("stackName") ??
  process.env.CDK_STACK_NAME ??
  "MyStoreAppStack";

const region =
  app.node.tryGetContext("region") ??
  process.env.CDK_DEFAULT_REGION ??
  process.env.AWS_REGION ??
  "eu-central-1";

new StaticWebsiteStack(app, stackName, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region,
  },
});
