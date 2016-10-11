import { User } from '../model/user.model';

export class UserService {
    
    getAll(): User[] {
        return [ new User('admin', 'admin'), new User('JohnWick', 'imabadass'), new User('ChuckNorris', 'numero1'), new User('VanDamme', 'musclesfrombrussels')]
    }

}