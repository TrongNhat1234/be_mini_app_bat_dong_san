import { MigrationInterface, QueryRunner } from "typeorm";

export class initDb1718472519512 implements MigrationInterface {
    name = 'initDb1718472519512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`email\` varchar(255) NOT NULL,
                \`user_name\` varchar(255) NULL,
                \`password\` varchar(255) NOT NULL,
                \`name\` varchar(255) NULL,
                \`position_id\` int NULL,
                \`role\` enum ('admin', 'user') NOT NULL DEFAULT 'user',
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Provinces\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`slug\` varchar(255) NULL,
                \`type\` varchar(255) NULL,
                \`name_with_type\` varchar(255) NULL,
                \`code\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Companies\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`code\` varchar(255) NULL,
                \`name\` varchar(255) NULL,
                \`address\` varchar(255) NULL,
                \`interest_rate\` float NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`CustomerLikes\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`real_estate_id\` int NULL,
                \`customer_id\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Customers\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`phone_number\` varchar(255) NULL,
                \`email\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Developers\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`code\` varchar(255) NULL,
                \`name\` varchar(255) NULL,
                \`address\` varchar(255) NULL,
                \`website\` varchar(255) NULL,
                \`descrpition\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Positions\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`code\` varchar(255) NULL,
                \`décription\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Districts\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`slug\` varchar(255) NULL,
                \`type\` varchar(255) NULL,
                \`name_with_type\` varchar(255) NULL,
                \`code\` varchar(255) NULL,
                \`parent_code\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`ProjectImages\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`project_id\` int NULL,
                \`type\` varchar(255) NULL,
                \`link\` varchar(255) NULL,
                \`filename\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Projects\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`code\` varchar(255) NULL,
                \`project_scale\` varchar(255) NULL,
                \`start_year\` int NULL,
                \`handover_year\` int NULL,
                \`type_ownership\` varchar(255) NULL,
                \`building_density\` float NULL,
                \`developer_id\` int NULL,
                \`user_id\` int NULL,
                \`area\` float NULL,
                \`overview\` varchar(255) NULL,
                \`model_house\` varchar(255) NULL,
                \`design\` varchar(255) NULL,
                \`floor_plan\` varchar(255) NULL,
                \`utilities\` varchar(255) NULL,
                \`location\` varchar(255) NULL,
                \`province_id\` int NULL,
                \`district_id\` int NULL,
                \`ward_id\` int NULL,
                \`detailed_address\` varchar(255) NULL,
                \`apartment_size\` float NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`RealEstateImages\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`real_estate_id\` int NULL,
                \`type\` varchar(255) NULL,
                \`link\` varchar(255) NULL,
                \`filename\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`RealEstateTypes\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`code\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`RealEstates\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`code\` varchar(255) NULL,
                \`total_price\` double NULL,
                \`price_per_meter\` double NULL,
                \`status\` varchar(255) NULL,
                \`direction\` varchar(255) NULL,
                \`overview\` varchar(255) NULL,
                \`utilities\` varchar(255) NULL,
                \`location\` varchar(255) NULL,
                \`model_house\` varchar(255) NULL,
                \`design\` varchar(255) NULL,
                \`floor_plan\` varchar(255) NULL,
                \`number_bathrooms\` int NULL,
                \`number_bedrooms\` int NULL,
                \`type_ownership\` varchar(255) NULL,
                \`area\` float NULL,
                \`developer_id\` int NULL,
                \`user_id\` int NULL,
                \`province_id\` int NULL,
                \`district_id\` int NULL,
                \`ward_id\` int NULL,
                \`detailed_address\` varchar(255) NULL,
                \`transaction_type\` varchar(255) NULL,
                \`rental_type\` varchar(255) NULL,
                \`rental_price\` double NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`ScheduleAppointments\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`customer_id\` int NULL,
                \`real_estate_id\` int NULL,
                \`mail\` varchar(255) NULL,
                \`phone\` varchar(255) NULL,
                \`contact_date\` datetime NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`Wards\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`created_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`modified_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_date\` timestamp(6) NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`created_by\` int NULL,
                \`modified_by\` int NULL,
                \`deleted_by\` int NULL,
                \`name\` varchar(255) NULL,
                \`slug\` varchar(255) NULL,
                \`type\` varchar(255) NULL,
                \`name_with_type\` varchar(255) NULL,
                \`code\` varchar(255) NULL,
                \`parent_code\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`Wards\`
        `);
        await queryRunner.query(`
            DROP TABLE \`ScheduleAppointments\`
        `);
        await queryRunner.query(`
            DROP TABLE \`RealEstates\`
        `);
        await queryRunner.query(`
            DROP TABLE \`RealEstateTypes\`
        `);
        await queryRunner.query(`
            DROP TABLE \`RealEstateImages\`
        `);
        await queryRunner.query(`
            DROP TABLE \`Projects\`
        `);
        await queryRunner.query(`
            DROP TABLE \`ProjectImages\`
        `);
        await queryRunner.query(`
            DROP TABLE \`Districts\`
        `);
        await queryRunner.query(`
            DROP TABLE \`Positions\`
        `);
        await queryRunner.query(`
            DROP TABLE \`Developers\`
        `);
        await queryRunner.query(`
            DROP TABLE \`Customers\`
        `);
        await queryRunner.query(`
            DROP TABLE \`CustomerLikes\`
        `);
        await queryRunner.query(`
            DROP TABLE \`Companies\`
        `);
        await queryRunner.query(`
            DROP TABLE \`Provinces\`
        `);
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
    }

}
