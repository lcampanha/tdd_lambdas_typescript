import { Code, Function, LayerVersion, Runtime } from "@aws-cdk/aws-lambda";
import { Construct, Stack, StackProps } from "@aws-cdk/core";

export class DeployLambdas extends Stack  {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        console.log('Deploying Get User lambda stack..');

        new Function(this, "GetUser", {
            code: Code.fromAsset("../../lambdas/get-user/dist"),
            functionName: "GetUser",
            handler: "app.handler",
            runtime: Runtime.NODEJS_14_X
        });

        console.log('Function end');
        
    }
}
