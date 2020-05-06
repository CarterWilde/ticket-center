export default class User {
  user_id: number;
  full_name: string;
  user_email: string;

  constructor(user_id: number, full_name: string, user_email: string) {
    this.user_id = user_id;
    this.full_name = full_name;
    this.user_email = user_email;
  }
}