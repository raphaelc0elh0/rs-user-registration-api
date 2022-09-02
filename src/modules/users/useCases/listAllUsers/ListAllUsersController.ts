import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (user_id instanceof Array) {
      return response
        .status(400)
        .json({ error: "Request only accepts one user_id" });
    }

    let users: User[] = [];

    try {
      users = this.listAllUsersUseCase.execute({ user_id });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
