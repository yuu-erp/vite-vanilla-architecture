import { RepositoryBase } from 'src/core/domain-base/repositories/repository.base'
import { DappEntity } from '../entities/dapp.entity'

// Định nghĩa interface của DappRepository
export interface IDappRepository extends RepositoryBase<DappEntity> {}
