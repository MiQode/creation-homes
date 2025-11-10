import { PrismaClient } from '@prisma/client';
import * as readline from 'readline';

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function manageAdmin() {
  console.log('\n🔐 Admin Management Tool\n');

  const action = await question(
    'Choose action (1: Add admin, 2: Remove admin, 3: List admins): '
  );

  if (action === '1') {
    const email = await question('Enter email to make admin: ');
    try {
      const user = await prisma.user.update({
        where: { email },
        data: { isAdmin: true },
      });
      console.log(`✅ ${user.email} is now an admin!`);
    } catch (error) {
      console.error('❌ User not found or error occurred');
    }
  } else if (action === '2') {
    const email = await question('Enter email to remove admin: ');
    try {
      const user = await prisma.user.update({
        where: { email },
        data: { isAdmin: false },
      });
      console.log(`❌ Admin removed from ${user.email}`);
    } catch (error) {
      console.error('❌ User not found or error occurred');
    }
  } else if (action === '3') {
    const admins = await prisma.user.findMany({
      where: { isAdmin: true },
      select: { email: true, name: true, createdAt: true },
    });
    console.log(`\n👥 Current Admins (${admins.length}):\n`);
    admins.forEach((admin, index) => {
      console.log(`${index + 1}. ${admin.name} (${admin.email})`);
    });
  }

  rl.close();
  await prisma.$disconnect();
}

manageAdmin();
