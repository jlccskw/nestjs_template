import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateUserDto} from './dto/create-user.dto';
import {User} from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.age = createUserDto.age;
        return this.usersRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: number) {
        const user=await this.usersRepository.findOneBy({id: id})
        if (!user) {
            throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return user
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.softDelete(id);
    }
}
