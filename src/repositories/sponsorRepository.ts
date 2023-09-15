import { AppDataSource } from "../data-source";
import { Sponsor } from "../entities/sponsors";



export const userRepository = AppDataSource.getRepository(Sponsor)