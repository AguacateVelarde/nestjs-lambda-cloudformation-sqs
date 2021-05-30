<p align="center" style="flex-direction: row; display: flex; justify-content: center; align-items:center">
  <img src="https://nestjs.com/img/logo_text.svg" width="220" alt="Nest Logo" />

 <img src="./statics-github/lambda.png" width="120" height="120" alt="Nest Logo" />
</p>

  <p align="center">A simple boilerplate <a href="http://nodejs.org" target="_blank">Node.js</a>  and Nestjs to use as aws lambda with SQS. </p>
    <p align="center">

## Description

This project have a simple code to run a [nestjs standalone](https://docs.nestjs.com/application-context) like a cloud function or lambda, using a cloudformation service to create all resources in [nest-lambda.cfn.yaml](nest-lambda.cfn.yaml)

## Dependencies

To use this project you need install the aws cli, and signin on your aws account, for more information you can learn how [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

## Installation

To install all, use

```bash
$ make
```

this command create a bucket, and prepare your cloudformation file, build your proyect, create a zip and upload all to your cloud.

Only prepare to deploy :

```bash
$ make -B build
```

Only deploy :

```bash
$ make -B deploy
```

Only create a bucket :

```bash
$ make -B create-bucket
```

## Running the app

```bash

# running your app locally
$ npm run start:dev

```

## Test

```bash
# unit tests (only works the unit testign suite)
$ npm run test

```

Buen viaje!!
This poject was created with ❤️
