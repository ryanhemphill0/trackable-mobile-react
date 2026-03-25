export interface Activity {
  id: string;
  type: 'Inbound Call' | 'Outbound Call' | 'Missed Call' | 'Voicemail';
  name: string;
  tag: string;
  tagType: string;
  time: string;
  date: string;
  hasAudio: boolean;
  duration?: string;
  phone?: string;
}

export const activitiesData: Activity[] = [
  { id: '1', type: 'Inbound Call', name: 'Laura Guffey', tag: 'Appt Rescheduled', tagType: 'scheduled', time: '4:07 PM', date: 'Today', hasAudio: true, duration: '01:28' },
  { id: '2', type: 'Missed Call', name: 'simpson linda', tag: 'Needs Action', tagType: 'needs-action', time: '9:04 AM', date: 'Today', hasAudio: true, duration: '00:16', phone: '(360) 480-9662' },
  { id: '3', type: 'Inbound Call', name: '+1 Contact', tag: 'Scheduled', tagType: 'closed-won', time: '6:00 PM', date: 'Jan 31', hasAudio: false },
  { id: '4', type: 'Outbound Call', name: 'Jennifer Martinez', tag: 'Closed Won', tagType: 'closed-won', time: '3:45 PM', date: 'Jan 31', hasAudio: false },
  { id: '5', type: 'Voicemail', name: 'Robert Smith', tag: 'New Lead', tagType: 'needs-action', time: '2:15 PM', date: 'Jan 30', hasAudio: true, duration: '00:45' },
  { id: '6', type: 'Inbound Call', name: 'Maria Garcia', tag: 'Scheduled', tagType: 'scheduled', time: '11:30 AM', date: 'Jan 30', hasAudio: true, duration: '02:10' }
];

export interface Task {
  id: string;
  title: string;
  meta: string;
  section: 'overdue' | 'today' | 'upcoming';
}

export const tasksData: Task[] = [
  { id: '1', title: 'Follow up with ross thomas', meta: 'Due: Jan 28 (4 days ago) · Unassigned', section: 'overdue' },
  { id: '2', title: 'Call back andrea', meta: 'Due: Jan 27 (5 days ago) · Ange', section: 'overdue' },
  { id: '3', title: 'Confirm appointment - Laura Guffey', meta: 'Feb 5 appt · Martha', section: 'today' },
  { id: '4', title: 'Return call - simpson linda', meta: 'Missed call this morning · Unassigned', section: 'today' },
  { id: '5', title: 'Review insurance docs', meta: 'New patient paperwork · Carla', section: 'today' },
  { id: '6', title: 'Follow up - new patient inquiry', meta: 'Due: Feb 2 · Carla', section: 'upcoming' },
  { id: '7', title: 'Send treatment plan - Mike Johnson', meta: 'Due: Feb 3 · Dr. Smith', section: 'upcoming' },
  { id: '8', title: 'Schedule hygiene recall', meta: 'Due: Feb 5 · Martha', section: 'upcoming' }
];
