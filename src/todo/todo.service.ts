import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    const createData = await this.prisma.todo.create({
      data: createTodoDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }

  async findAll(pageSize: number, pageNumber: number) {
    const [todos, count] = await this.prisma.$transaction([
      this.prisma.todo.findMany({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy: {
          created_at: 'desc',
        },
      }),
      this.prisma.todo.count(),
    ]);
    return {
      statusCode: 200,
      data: todos,
      total: count,
    };
  }

  async findOne(id: string) {
    const todo = await this.prisma.todo.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: todo,
    };
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.prisma.todo.update({
      data: updateTodoDto,
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: todo,
    };
  }

  async remove(id: string) {
    const todo = await this.prisma.todo.delete({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: todo,
      message: `Success delete ${id}`,
    };
  }
}
