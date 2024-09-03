
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_API_URL = `${API_URL}/api`;
const PROJECTS_URL = `${BASE_API_URL}/projects`;

export const getProjects = async () => {
  const response = await fetch(PROJECTS_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return await response.json();
};

export const getProjectById = async (id: string) => {
  const response = await fetch(`${PROJECTS_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch project with id: ${id}`);
  }
  return await response.json();
};

// export const addProject = async (project: any) => {
//   const response = await fetch(PROJECTS_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(project),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to add project');
//   }
//   return await response.json();
// };

// export const updateProject = async (id: string, project: any) => {
//   const response = await fetch(`${PROJECTS_URL}/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(project),
//   });
//   if (!response.ok) {
//     throw new Error(`Failed to update project with id: ${id}`);
//   }
//   return await response.json();
// };

// export const deleteProject = async (id: string) => {
//   const response = await fetch(`${PROJECTS_URL}/${id}`, {
//     method: 'DELETE',
//   });
//   if (!response.ok) {
//     throw new Error(`Failed to delete project with id: ${id}`);
//   }
//   return await response.json();
// };