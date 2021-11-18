export interface ProjectModel {
  idProject: number;
  nameProject: string;
  codProject: string;
  linkGitProject: string;
}

export interface ProjectsAdminModel {
    admin: string;
    nameAdmin: string;
}

export interface ProjectsCollaboratorsModel {
    nameCollaborator: string;
    collaborator: string;
    project: number;
}

export interface CollaboratorsProjectsModel {
  nameProject: string;
  collaborator: string;
  project: number;
}