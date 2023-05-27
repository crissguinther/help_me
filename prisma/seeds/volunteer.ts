import { PrismaClient } from "@prisma/client";
import { Logger } from "../../src/lib/Logger";
import { LoggerMessageTypeEnum } from "../../src/enum/LoggerMessageTypeEnum";
import bcryptjs from "bcryptjs";

const client = new PrismaClient();
async function main() {
    const password = bcryptjs.hashSync("123456", 10);
    const DefaultVolunteer = await client.volunteer.create({
        data: {
            cpf: "99999999999",
            email: "default@email.com",
            password: password,            
        },
    })
}

main()
    .then(async () => {
        await client.$disconnect();
    })
    .catch(async (error) => {
        Logger.log(LoggerMessageTypeEnum.error, error);
        await client.$disconnect();
        process.exit(1);
    });
