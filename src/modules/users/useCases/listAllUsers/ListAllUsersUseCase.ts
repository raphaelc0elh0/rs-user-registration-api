import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const currentRequestingUser = this.usersRepository.findById(user_id);

    if (!currentRequestingUser.admin) {
      throw new Error("Forbidden request");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
