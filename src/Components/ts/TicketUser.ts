import User from "./User";

export default class TicketUser extends User {
  ticket_creator?: boolean;
  constructor(user_id: number, full_name: string, user_email: string ) {
    super(user_id, full_name, user_email);
  }
}