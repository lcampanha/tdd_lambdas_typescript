import { Code, Function, LayerVersion, Runtime } from "@aws-cdk/aws-lambda";
import { Construct, Stack, StackProps } from "@aws-cdk/core";

export class DeployLambdas extends Stack  {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        console.log('Deploying Get User lambda stack..');

        const dependenciesLayer = new LayerVersion(this, "GetUsersDependenciesLayer", {
            code: Code.fromAsset('lambda-layer'),            
            compatibleRuntimes: [Runtime.NODEJS_14_X]
          });

          console.log('dependenciesLayer', dependenciesLayer);

        new Function(this, "GetUser", {
            code: Code.fromAsset("../../lambdas/get-user/dist"),
            functionName: "GetUser",
            handler: "app.handler",
            layers: [dependenciesLayer],
            runtime: Runtime.NODEJS_14_X
        });

        console.log('Function end');
        
    }
}
