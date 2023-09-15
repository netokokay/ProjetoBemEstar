import { AppDataSource } from "../data-source";
import { Student } from "../entities/students";



export const userRepository = AppDataSource.getRepository(Student)