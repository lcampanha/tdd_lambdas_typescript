
import { APIGatewayEvent, Context } from 'aws-lambda';
import { GetUserHandler } from './handler';
import { GetUserUC } from '@lambdas_tdd/uc-get-user';

const handler = async(event: APIGatewayEvent, context: Context) => {

    const getUserUC = new GetUserUC();
    const getUserHandler = new GetUserHandler(getUserUC);

    const result = getUserHandler.eventHandler();



    return { status: 200};
}

handler(null,null);