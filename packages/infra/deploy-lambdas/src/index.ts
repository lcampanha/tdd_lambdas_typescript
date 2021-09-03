import { App } from "@aws-cdk/core";
import { DeployLambdas } from "./deploy-lambdas";

const app = new App();

new DeployLambdas(app, "GetUsersLambdaLayer");
