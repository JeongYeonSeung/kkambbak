import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// 이렇게 기본 엔터티를 만들어서 상속해서 사용하면 편리하다.
export class CommonBigPKEntity {
  // Auto Increment가 걸린 PK 만드는 컬럼
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  // 생성일자를 적용해주는 컬럼
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  // update 쿼리 날릴 때, 자동으로 수정일자를 넣어줌
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date | null;

  // soft delete를 위한 컬럼
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date | null;
}
