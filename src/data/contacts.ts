export interface Contact {
  id: string;
  initial: string;
  name: string;
  age: number | null;
  lifecycle: string;
  leadStatus: string;
  channel: string;
  phone: string;
  tag: string | null;
  tagType: string | null;
}

export const contactsDB: Record<string, Contact> = {
  'simpson-linda': { id: 'simpson-linda', initial: 'S', name: 'Simpson Linda', age: 34, lifecycle: 'Lead', leadStatus: 'Needs Action', channel: 'Digital Marketing', phone: '(360) 480-9662', tag: 'Missed Call', tagType: 'blue' },
  'apple-valley': { id: 'apple-valley', initial: 'A', name: 'Apple Valley Dental', age: null, lifecycle: 'Qualified Lead', leadStatus: 'In Progress', channel: 'Referral', phone: '(555) 123-4567', tag: 'Appt Not Scheduled', tagType: 'needs-action' },
  'laura-guffey': { id: 'laura-guffey', initial: 'L', name: 'Laura Guffey', age: 28, lifecycle: 'Patient', leadStatus: 'Scheduled', channel: 'Website', phone: '(360) 880-5661', tag: null, tagType: null },
  'ross-thomas': { id: 'ross-thomas', initial: 'R', name: 'Ross Thomas', age: 45, lifecycle: 'Lead', leadStatus: 'Needs Action', channel: 'Google Ads', phone: '(555) 234-5678', tag: 'New Form', tagType: 'blue' },
  'andrea-martinez': { id: 'andrea-martinez', initial: 'A', name: 'Andrea Martinez', age: 31, lifecycle: 'New Patient Scheduled', leadStatus: 'Scheduled', channel: 'Facebook', phone: '(555) 345-6789', tag: 'Broken Appointment', tagType: 'needs-action' },
  'mike-johnson': { id: 'mike-johnson', initial: 'M', name: 'Mike Johnson', age: 52, lifecycle: 'Patient', leadStatus: 'Closed Won', channel: 'Referral', phone: '(555) 456-7890', tag: null, tagType: null },
  'jennifer-wilson': { id: 'jennifer-wilson', initial: 'J', name: 'Jennifer Wilson', age: 38, lifecycle: 'Patient', leadStatus: 'Closed Won', channel: 'Website', phone: '(555) 567-8901', tag: null, tagType: null },
  'david-chen': { id: 'david-chen', initial: 'D', name: 'David Chen', age: 29, lifecycle: 'Lead', leadStatus: 'In Progress', channel: 'Google Ads', phone: '(555) 678-9012', tag: null, tagType: null },
  'sarah-brown': { id: 'sarah-brown', initial: 'S', name: 'Sarah Brown', age: 41, lifecycle: 'Qualified Lead', leadStatus: 'In Progress', channel: 'Digital Marketing', phone: '(555) 789-0123', tag: null, tagType: null },
  'karen-white': { id: 'karen-white', initial: 'K', name: 'Karen White', age: 36, lifecycle: 'Lead', leadStatus: 'Needs Action', channel: 'Facebook', phone: '(555) 890-1234', tag: 'Needs Follow-up', tagType: 'needs-action' },
  'tom-garcia': { id: 'tom-garcia', initial: 'T', name: 'Tom Garcia', age: 44, lifecycle: 'Qualified Lead', leadStatus: 'In Progress', channel: 'Referral', phone: '(555) 901-2345', tag: 'Callback Requested', tagType: 'blue' },
  'nancy-davis': { id: 'nancy-davis', initial: 'N', name: 'Nancy Davis', age: 33, lifecycle: 'Lead', leadStatus: 'Needs Action', channel: 'Website', phone: '(555) 012-3456', tag: 'New Form', tagType: 'blue' },
  'james-miller': { id: 'james-miller', initial: 'J', name: 'James Miller', age: 47, lifecycle: 'New Patient Scheduled', leadStatus: 'Scheduled', channel: 'Google Ads', phone: '(555) 111-2222', tag: 'Feb 5 @ 2:00 PM', tagType: 'scheduled' },
  'emily-rodriguez': { id: 'emily-rodriguez', initial: 'E', name: 'Emily Rodriguez', age: 26, lifecycle: 'New Patient Scheduled', leadStatus: 'Scheduled', channel: 'Facebook', phone: '(555) 222-3333', tag: 'Feb 6 @ 9:00 AM', tagType: 'scheduled' },
  'chris-anderson': { id: 'chris-anderson', initial: 'C', name: 'Chris Anderson', age: 39, lifecycle: 'New Patient Scheduled', leadStatus: 'Scheduled', channel: 'Website', phone: '(555) 333-4444', tag: 'Feb 6 @ 11:30 AM', tagType: 'scheduled' },
  'patricia-lee': { id: 'patricia-lee', initial: 'P', name: 'Patricia Lee', age: 55, lifecycle: 'New Patient Scheduled', leadStatus: 'Scheduled', channel: 'Referral', phone: '(555) 444-5555', tag: 'Feb 7 @ 3:00 PM', tagType: 'scheduled' },
  'robert-taylor': { id: 'robert-taylor', initial: 'R', name: 'Robert Taylor', age: 62, lifecycle: 'New Patient Scheduled', leadStatus: 'Scheduled', channel: 'Digital Marketing', phone: '(555) 555-6666', tag: 'Feb 10 @ 10:00 AM', tagType: 'scheduled' },
  'maria-hernandez': { id: 'maria-hernandez', initial: 'M', name: 'Maria Hernandez', age: 30, lifecycle: 'New Patient Scheduled', leadStatus: 'Scheduled', channel: 'Google Ads', phone: '(555) 666-7777', tag: 'Feb 11 @ 1:30 PM', tagType: 'scheduled' }
};

export interface ContactViewData {
  count: number;
  groups: {
    label: string;
    contacts: { id: string; time: string; date: string }[];
  }[];
}

export const contactsData: Record<string, ContactViewData> = {
  'All': {
    count: 145,
    groups: [
      { label: 'Today', contacts: [
        { id: 'simpson-linda', time: '9:04 AM', date: 'Today' },
        { id: 'apple-valley', time: '8:30 AM', date: 'Today' },
        { id: 'laura-guffey', time: '4:07 PM', date: 'Today' }
      ]},
      { label: 'Yesterday', contacts: [
        { id: 'ross-thomas', time: '3:22 PM', date: 'Jan 31' },
        { id: 'andrea-martinez', time: '11:15 AM', date: 'Jan 31' },
        { id: 'mike-johnson', time: '9:45 AM', date: 'Jan 31' }
      ]},
      { label: 'Older', contacts: [
        { id: 'jennifer-wilson', time: '2:30 PM', date: 'Jan 29' },
        { id: 'david-chen', time: '10:00 AM', date: 'Jan 28' },
        { id: 'sarah-brown', time: '4:45 PM', date: 'Jan 27' }
      ]}
    ]
  },
  'Active Leads': {
    count: 45,
    groups: [
      { label: 'Today', contacts: [
        { id: 'simpson-linda', time: '9:04 AM', date: 'Today' },
        { id: 'apple-valley', time: '8:30 AM', date: 'Today' }
      ]},
      { label: 'Yesterday', contacts: [
        { id: 'ross-thomas', time: '3:22 PM', date: 'Jan 31' },
        { id: 'andrea-martinez', time: '11:15 AM', date: 'Jan 31' }
      ]},
      { label: 'Older', contacts: [
        { id: 'karen-white', time: '1:30 PM', date: 'Jan 30' },
        { id: 'tom-garcia', time: '11:00 AM', date: 'Jan 29' },
        { id: 'nancy-davis', time: '9:15 AM', date: 'Jan 28' }
      ]}
    ]
  },
  'Scheduled': {
    count: 36,
    groups: [
      { label: 'Today', contacts: [
        { id: 'laura-guffey', time: '12:30 PM', date: 'Feb 5' },
        { id: 'james-miller', time: '2:00 PM', date: 'Feb 5' }
      ]},
      { label: 'This Week', contacts: [
        { id: 'emily-rodriguez', time: '9:00 AM', date: 'Feb 6' },
        { id: 'chris-anderson', time: '11:30 AM', date: 'Feb 6' },
        { id: 'patricia-lee', time: '3:00 PM', date: 'Feb 7' }
      ]},
      { label: 'Next Week', contacts: [
        { id: 'robert-taylor', time: '10:00 AM', date: 'Feb 10' },
        { id: 'maria-hernandez', time: '1:30 PM', date: 'Feb 11' }
      ]}
    ]
  }
};

export const workspaces = [
  'Affordable Family Dental',
  'Bright Smiles Orthodontics',
  'City Center Dental Group',
  'Family First Dentistry',
  'Gentle Care Pediatric'
];
