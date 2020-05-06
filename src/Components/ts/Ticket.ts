import TicketUser from "./TicketUser";
import IUpdates from "./IUpdates";
import TicketComment from "./TicketComment";

export const enum Status {
  Pending = 'pending',
  Resolved = 'resolved'
}
/**
 * I made a choiec to deviate from the API
 * The API duplicates the user in the root object
 * with the assigned_users, the assigned_users
 * are Users however instead they have an addition of
 * a boolean ticket_creator.In addition, I have decied
 * to not include ticket_assignment, ticket_escalation,
 * ticket_activities, rating, rating_comment, and support_chat_room. 
 * I kept chat_room_id since I felt I could confidently assume it was,
 * and it based off the naming convetion. 
 * Example: user_id in user is an int.
 */
export default interface Ticket extends IUpdates{
  id: number;
  assigned_users: Array<TicketUser>;
  chat_room_id?: number;
  content: string;
  guide_url: string;
  org_id?: number;
  status: Status;
  title: string;
  view_count: number;
  comments: Array<TicketComment>;
}