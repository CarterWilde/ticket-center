import User from "./User";
import IUpdates from "./IUpdates";

export default interface TicketComment extends IUpdates {
  id: number;
  accepted_answer: boolean;
  user: User;
  message: string;
  top_comment: boolean;
  vote_count: number;
  upvoting_user_ids: number[];
  downvoting_user_ids: number[];
}