import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const currentUser = this.usersRepository.findById(user_id);

    if (!currentUser) {
      throw new Error("User does not exist");
    }

    // TODO: add restriction in case is admin
    // if (currentUser) {
    //   throw new Error("User already exists");
    // }

    return this.usersRepository.turnAdmin({ user_id });
  }
}

export { TurnUserAdminUseCase };
