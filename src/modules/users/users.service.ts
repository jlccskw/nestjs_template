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
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        return this.usersRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(username: string) {
        const user=await this.usersRepository.findOneBy({username: username})
        if (!user) {
            throw new HttpException(`User ${username} not found`, HttpStatus.NOT_FOUND);
        }
        return user
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.softDelete(id);
    }
}
