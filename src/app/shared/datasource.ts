interface MyNotification {
    DateCreated: number;
    UserID: number;
    Username: string;
    NotificationTitle: string;
    NotificationMessage: string;
    LastModifiedDate: number;
}


export let data: MyNotification[] = [
    {
        DateCreated: 123, UserID: 1111, Username: 'lilkugm',
        NotificationTitle: 'testadsa', NotificationMessage: 'testasd', LastModifiedDate: 123234
    },
    {
        DateCreated: 98665, UserID: 6, Username: 'mzq',
        NotificationTitle: 'qqq', NotificationMessage: 'pp', LastModifiedDate: 688
    },
    {
        DateCreated: 565, UserID: 42, Username: 'wrhq',
        NotificationTitle: 'zzz', NotificationMessage: 'zsq', LastModifiedDate: 3424
    }
];
