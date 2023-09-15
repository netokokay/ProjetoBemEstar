import { AppDataSource } from "../data-source";
import { User } from "../entities/users";


export const userRepository = AppDataSource.getRepository(User)