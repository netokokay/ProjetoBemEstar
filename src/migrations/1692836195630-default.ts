import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692836195630 implements MigrationInterface {
    name = 'Default1692836195630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "coordinators" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "adress" character varying NOT NULL, "phone" character varying, "instagram" character varying, "birthday" TIMESTAMP DEFAULT now(), "rg" character varying, "cpf" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f4d48f1f19c8f06b0bbcf395ee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "associates" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "adress" character varying NOT NULL, "phone" character varying, "instagram" character varying, "birthday" TIMESTAMP DEFAULT now(), "rg" character varying, "cpf" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_63bee9673682e211433a8b40ed0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "families" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "phone" integer NOT NULL, "requestDate" TIMESTAMP NOT NULL DEFAULT now(), "deliveryDate" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying, "need" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_70414ac0c8f45664cf71324b9bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sponsors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpjORcpf" character varying NOT NULL, "name" character varying NOT NULL, "instanceof" character varying NOT NULL, "phone" character varying, "birthday" TIMESTAMP DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6d1114fe7e65855154351b66bfc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "uuuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL DEFAULT now(), "address" character varying NOT NULL, "phone" integer NOT NULL, "school" character varying NOT NULL, "observation" character varying, "isActive" boolean NOT NULL DEFAULT true, "fathersName" character varying, "mothersName" character varying NOT NULL, "rg" integer, "cpf" integer, "parentsPhone" integer, "bloodType" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "volunteers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "adress" character varying NOT NULL, "phone" character varying, "instagram" character varying, "birthday" TIMESTAMP DEFAULT now(), "rg" character varying, "cpf" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f4e65e37cf47256e3f580ecee62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "uuuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "hierarchy" character varying NOT NULL, "phone" character varying, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "volunteers"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "sponsors"`);
        await queryRunner.query(`DROP TABLE "families"`);
        await queryRunner.query(`DROP TABLE "associates"`);
        await queryRunner.query(`DROP TABLE "coordinators"`);
    }

}
