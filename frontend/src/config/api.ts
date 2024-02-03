const API_URL =
  "https://workoutsapp-env.eba-uyvm8pbc.eu-central-1.elasticbeanstalk.com";

export default {
  signup: `${API_URL}/api/users/signup`,
  signin: `${API_URL}/api/users/signin`,
  workouts: `${API_URL}/api/workouts`,
};
