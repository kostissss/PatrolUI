export interface CheckPoint {
    checkPointId: number;
    checkPointCode: string;
    clientSiteCode: number;
    ckeckPoint: string;
    isLocked: boolean;
    isDeleted: boolean;
    
    deletedDate?: Date | null;
    userId: number;
    
}