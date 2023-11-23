import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1700745388174 implements MigrationInterface {
    name = 'NewMigrations1700745388174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quizes" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "isActive" boolean NOT NULL DEFAULT '1', CONSTRAINT "PK_2c6a29e4f537875fdef1f2e5881" PRIMARY KEY ("id")); COMMENT ON COLUMN "quizes"."id" IS 'The quiz unique identifier'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "quizes"`);
    }

}
