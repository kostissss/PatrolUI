export interface Guard {
    GuardId: number;
    name: string;
    arcGuardId: number;
    pin: number;
    isQrPatrol: boolean;
    isPTT: boolean;
    lastLatitude?: number | null;
    lastLongitude?: number | null;
    lastAccuracy?: number | null;
    lastContact?: Date | null;
    language?: string | null;
    userId: number;
}