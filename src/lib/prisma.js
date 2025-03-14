const { PrismaClient } = require("@prisma/client");

let prisma;
if (process.env.APP_MODE === "production"){
    prisma = new PrismaClient()
}else{
    if(!global.prisma){
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma;