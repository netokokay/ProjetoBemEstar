import { AppDataSource } from "../data-source";
import { Associate } from "../entities/associates";



export const associateRepository = AppDataSource.getRepository(Associate)