import { PrismaClient } from '@prisma/client';

export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get client(): PrismaClient {
    return this.prisma;
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
