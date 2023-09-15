import { AppDataSource } from "../data-source";
import { Coordinator } from "../entities/coordinators";




export const userRepository = AppDataSource.getRepository(Coordinator)