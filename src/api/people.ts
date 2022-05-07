const API_URL = 'https://mate-academy.github.io/react_people-table/api/people.json';

export const getPeople = async (): Promise<Person[]> => {
  try {
    const response = await fetch(`${API_URL}`);

    return await response.json();
  } catch (error) {
    return [];
  }
};