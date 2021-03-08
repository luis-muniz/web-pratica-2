import { EntityRepository, Repository } from 'typeorm';
import Food from '../models/Food';

@EntityRepository(Food)
class FoodsRepository extends Repository<Food> {}

export default FoodsRepository;
