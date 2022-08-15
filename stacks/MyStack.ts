import { StackContext, ApiGatewayV1Api } from "@serverless-stack/resources";
import { EndpointType } from "aws-cdk-lib/aws-apigateway";

export function MyStack({ stack }: StackContext) {
  const api = new ApiGatewayV1Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
    cdk: {
      restApi: { endpointTypes: [EndpointType.PRIVATE] },
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
