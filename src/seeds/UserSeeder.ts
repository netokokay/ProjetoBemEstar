import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { User } from "../entities/users";
import bcrypt from "bcrypt";

export class UserSeeder implements Seeder {
    async run(DataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const userRepository = DataSource.getRepository(User)

        const userData = {
            username: 'usuarioteste',
            email: 'usuarioteste@gmail.com',
            password: await bcrypt.hash('senhausuarioteste', 10),
            name: 'Usuario Fulano Teste',
            hierarchy: 'admin',
            phone: '12345678',
            isActive: true,
        }

        const userExists = await userRepository.findOneBy({ email: userData.email })

        if (!userExists) {
            const newUser = userRepository.create(userData)
            await userRepository.save(newUser)
        }
    }
}