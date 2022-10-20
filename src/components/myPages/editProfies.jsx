import { useAuthContext } from "../../contexts/AuthContext";

export const EditDisplayName = () => {
  const { user } = useAuthContext();
  return (
    <>
      <p>{user.uid}</p>
    </>
  );
};
export const EditProfileImage = () => {
  const { user } = useAuthContext();
  return (
    <>
      <p>{user.uid}</p>
    </>
  );
};
export const EditBackgroundImage = () => {
  const { user } = useAuthContext();
  return (
    <>
      <p>{user.uid}</p>
    </>
  );
};
