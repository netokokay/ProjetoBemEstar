import { AppDataSource } from "../data-source";
import { Volunteer } from "../entities/volunteers";



export const userRepository = AppDataSource.getRepository(Volunteer)