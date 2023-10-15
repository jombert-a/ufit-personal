// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   const admin = await prisma.user.create({
//     data: {
//       name: 'Developer Admin',
//       login: 'admin',
//       password: 'superadmin',
//     }
//   })

//   console.log(`Created admin with id: ${admin.id}`)
//   console.log(`Seeding finished.`)
// }
// 
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
