import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  // const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      {/* {JSON.stringify(user)} */}

      <button
        type="submit"
        className="flexCenter gap-3 rounded shadow hover:text-lBlue-300 transition btn_odsYellow"
        onClick={onClick}
      >
        LOGOUT
      </button>
    </div>
  );
};
export default SettingsPage;
