import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => ID)
  id: string;

  @Field()
  body: string;

  @Field(() => ID)
  authorId: string;
}
