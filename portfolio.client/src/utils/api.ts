
const PROJECTS_URL = '/api/projects';
const ABOUT_URL = '/api/about';
const CONTACT_URL = '/api/contact';

export const getProjects = async () => {
  const response = await fetch(PROJECTS_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return await response.json();
};

export const getAbout = async () => {
  const response = await fetch(ABOUT_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch about data');
  }
  return await response.json();
};

export const sendContactForm = async (data: { name: string; email: string; message: string }) => {
  const response = await fetch(CONTACT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send contact form');
  }

  return await response.json();
};