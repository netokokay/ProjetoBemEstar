import { AppDataSource } from "../data-source";
import { Family } from "../entities/families";




export const userRepository = AppDataSource.getRepository(Family)