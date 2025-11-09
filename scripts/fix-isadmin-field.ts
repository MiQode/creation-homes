// scripts/fix-isadmin-field.ts
import { PrismaClient } from '@prisma/client';
import { MongoClient } from 'mongodb';

const prisma = new PrismaClient();

async function fixIsAdminField() {
  try {
    console.log('🔄 Fixing isAdmin field in database...');

    const mongoUrl = process.env.DATABASE_URL;

    if (!mongoUrl) {
      throw new Error('DATABASE_URL not found in environment variables');
    }

    const client = new MongoClient(mongoUrl);
    await client.connect();

    const db = client.db();
    const usersCollection = db.collection('User');

    // Fix string "true" to boolean true
    const result1 = await usersCollection.updateMany(
      { isAdmin: 'true' },
      { $set: { isAdmin: true } }
    );

    console.log(
      `✅ Updated ${result1.modifiedCount} users with isAdmin: "true" to true`
    );

    // Fix string "false" to boolean false
    const result2 = await usersCollection.updateMany(
      { isAdmin: 'false' },
      { $set: { isAdmin: false } }
    );

    console.log(
      `✅ Updated ${result2.modifiedCount} users with isAdmin: "false" to false`
    );

    // Set null or missing isAdmin to false
    const result3 = await usersCollection.updateMany(
      { $or: [{ isAdmin: null }, { isAdmin: { $exists: false } }] },
      { $set: { isAdmin: false } }
    );

    console.log(
      `✅ Updated ${result3.modifiedCount} users with missing isAdmin to false`
    );

    await client.close();
    console.log('\n✅ Database fixed successfully!');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixIsAdminField();
