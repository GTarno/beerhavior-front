export interface UserPendencyModel {
    collaborator: string;
    userCollaborator: string;
    nameCollaborator: string;
}
export interface CommitPendencyModel {
    totalScore: number;
    commitCod: string;
    nameCollaborator: string;
}