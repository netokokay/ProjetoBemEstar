import { Request, Response } from "express"


export class UserController {

    async create(req: Request, res: Response) {
        const { username, email, password, name, hierarchy, phone } = req.body
    }

}