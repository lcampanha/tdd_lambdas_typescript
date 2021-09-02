import { GetUserUC } from '@lambdas_tdd/uc-get-user';

export class GetUserHandler {
    private readonly getUserUC: GetUserUC;

    public constructor(getUserUC: GetUserUC) {
        this.getUserUC = getUserUC;
    }

    public eventHandler(): void {
        console.log('Handler..');
        this.getUserUC.getUser();
    }
}