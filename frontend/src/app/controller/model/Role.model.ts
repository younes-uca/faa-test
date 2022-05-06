import { Permission } from "./Permission.model";

export class Role {
    public authority: string;
    public id: string;
    public permissions: Permission[];
    constructor() {
        this.authority = "ROLE_ANONYMOUS";
    }
}
