import { BehaviorSubject } from 'rxjs';

class NotificationsService {
  constructor() {
    this.notificationSubject = new BehaviorSubject(null);
    this.notification$ = this.notificationSubject.asObservable();
  }

  show(messages, type = 'success') {
    this.notificationSubject.next({ messages, type });
  }
}

const notificationsService = new NotificationsService();
export default notificationsService;
