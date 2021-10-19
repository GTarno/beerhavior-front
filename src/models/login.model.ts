export interface LoginAdminModel {
  idAdmin: string;
  userAdmin: string;
  nameAdmin: string;
  emailAdmin: string;
  passwordAdmin: string;
  imageAdmin: any;
}

export interface LoginCollaboratorModel {
  idCollaborator: string,
  userCollaborator: string,
  nameCollaborator: string,
  emailCollaborator: string,
  passwordCollaborator: string,
  techLeaderCollaborator: number,
  totalScoreCollaborator: number,
  imageCollaborator: any
}
