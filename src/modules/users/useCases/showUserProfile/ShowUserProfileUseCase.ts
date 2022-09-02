import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const currentUser = this.usersRepository.findById(user_id);

    if (!currentUser) {
      throw new Error("User does not exist");
    }

    return currentUser;
  }
}

export { ShowUserProfileUseCase };
