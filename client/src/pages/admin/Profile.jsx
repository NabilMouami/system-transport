import { useState, useEffect, Fragment } from "react";

// Icons
import { RiShieldCheckLine, RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { getLoginInfo } from "../../utils/LoginInfo";
import custom_axios from "../../axios/AxiosSetup";
import { useParams } from "react-router-dom";
const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  const [listUsers, setListUsers] = useState({});

  const { firstName, lastName, email } = getLoginInfo();
  const { id } = useParams();

  useEffect(() => {
    custom_axios
      .get(`/user/${id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setListUsers(res.data);
      });
  }, []);

  return (
    <Fragment>
      {/* Profile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder={firstName}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder={lastName}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Email <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder={listUsers?.email}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Role <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder={listUsers?.role}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Password <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder={listUsers?.password}
              />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Profile;
